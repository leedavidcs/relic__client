import {
	LoginLocalUser,
	LoginLocalUserVariables,
	LoginLocalUser_loginLocalUser,
	Mutations,
	RegisterLocalUser,
	RegisterLocalUserVariables,
	RegisterLocalUser_registerLocalUser
} from "@/graphql";
import { ApolloError, ExecutionResult } from "apollo-boost";
import { useCallback } from "react";
import { MutationFunctionOptions, useMutation } from "react-apollo";

interface IUseAuthOptions {
	onLoginCompleted?: (tokens: LoginLocalUser["loginLocalUser"] | null) => any;
	onLoginError?: (errors: string[]) => any;
	onRegisterCompleted?: (tokens: RegisterLocalUser["registerLocalUser"] | null) => any;
}

type LoginOptions = MutationFunctionOptions<LoginLocalUser, LoginLocalUserVariables>;
type LoginResult = LoginLocalUser["loginLocalUser"] | null;

type RegisterOptions = MutationFunctionOptions<RegisterLocalUser, RegisterLocalUserVariables>;
type RegisterResult = RegisterLocalUser["registerLocalUser"] | null;

interface IUseAuthResult {
	login: (options: LoginOptions) => Promise<LoginResult>;
	logout: () => void;
	register: (options: RegisterOptions) => Promise<RegisterResult>;
}

const useLogout = () => {
	const removeAppTokens = useCallback(() => {
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("token");
	}, []);

	return removeAppTokens;
};

const useLogin = ({ onLoginCompleted, onLoginError }: IUseAuthOptions = {}) => {
	const [loginUser] = useMutation<LoginLocalUser, LoginLocalUserVariables>(
		Mutations.LoginLocalUser
	);

	const setAppTokens = useCallback(({ refreshToken, token }: LoginLocalUser_loginLocalUser) => {
		localStorage.setItem("refreshToken", refreshToken);
		localStorage.setItem("token", token);
	}, []);

	return useCallback(
		async (
			options: Parameters<typeof loginUser>[0]
		): Promise<LoginLocalUser_loginLocalUser | null> => {
			let result: ExecutionResult<LoginLocalUser>;

			try {
				result = await loginUser(options);
			} catch (err) {
				if (err instanceof ApolloError) {
					onLoginError?.(err.graphQLErrors.map(({ message }) => message));

					return null;
				}

				onLoginError?.(["Unexpected error. Please try again."]);

				return null;
			}

			const tokens: LoginLocalUser_loginLocalUser | null =
				result.data?.loginLocalUser || null;

			if (tokens) {
				setAppTokens(tokens);
			}

			onLoginCompleted?.(tokens);

			return tokens;
		},
		[loginUser, onLoginCompleted, onLoginError, setAppTokens]
	);
};

const useRegister = ({ onRegisterCompleted = () => undefined }: IUseAuthOptions = {}) => {
	const [registerUser] = useMutation<RegisterLocalUser, RegisterLocalUserVariables>(
		Mutations.RegisterLocalUser
	);

	return useCallback(
		async (
			options: Parameters<typeof registerUser>[0]
		): Promise<RegisterLocalUser_registerLocalUser | null> => {
			const result = await registerUser(options);
			const registerLocalUser: RegisterLocalUser_registerLocalUser | null =
				result.data?.registerLocalUser || null;

			onRegisterCompleted(registerLocalUser);

			return registerLocalUser;
		},
		[registerUser, onRegisterCompleted]
	);
};

export const useAuth = (options: IUseAuthOptions = {}): IUseAuthResult => {
	const login = useLogin(options);
	const logout = useLogout();
	const register = useRegister(options);

	return { login, logout, register };
};
