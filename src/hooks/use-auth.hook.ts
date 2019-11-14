import {
	LoginLocalUser,
	LoginLocalUserVariables,
	Mutations,
	RegisterLocalUser,
	RegisterLocalUserVariables
} from "@/graphql";
import { ApolloError, ExecutionResult } from "apollo-boost";
import { useCallback } from "react";
import { useMutation } from "react-apollo";

interface IUseAuthOptions {
	onLoginCompleted?: (tokens: LoginLocalUser["loginLocalUser"] | null) => any;
	onLoginError?: (errors: string[]) => any;
	onRegisterCompleted?: (tokens: RegisterLocalUser["registerLocalUser"] | null) => any;
}

export const useAuth = ({
	onLoginCompleted = () => void 0,
	onLoginError = () => void 0,
	onRegisterCompleted = () => void 0
}: IUseAuthOptions = {}) => {
	const [registerUser] = useMutation<RegisterLocalUser, RegisterLocalUserVariables>(
		Mutations.RegisterLocalUser
	);

	const [loginUser] = useMutation<LoginLocalUser, LoginLocalUserVariables>(
		Mutations.LoginLocalUser
	);

	const login = useCallback(
		async (
			options: Parameters<typeof loginUser>[0]
		): Promise<LoginLocalUser["loginLocalUser"] | null> => {
			let result: ExecutionResult<LoginLocalUser>;

			try {
				result = await loginUser(options);
			} catch (err) {
				if (err instanceof ApolloError) {
					onLoginError(err.graphQLErrors.map(({ message }) => message));

					return null;
				}

				onLoginError(["Unexpected error. Please try again."]);

				return null;
			}

			const tokens = result.data ? result.data.loginLocalUser : null;

			if (tokens) {
				const { refreshToken, token } = tokens;

				localStorage.setItem("refreshToken", refreshToken);
				localStorage.setItem("token", token);
			}

			onLoginCompleted(tokens);

			return tokens;
		},
		[loginUser, onLoginCompleted, onLoginError]
	);

	const logout = useCallback(() => {
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("token");
	}, []);

	const register = useCallback(
		async (
			options: Parameters<typeof registerUser>[0]
		): Promise<RegisterLocalUser["registerLocalUser"] | null> => {
			const result = await registerUser(options);

			const registerLocalUser = result.data ? result.data.registerLocalUser : null;

			onRegisterCompleted(registerLocalUser);

			return registerLocalUser;
		},
		[registerUser, onRegisterCompleted]
	);

	return { login, logout, register };
};
