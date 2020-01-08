export class ArrayUtil {
	public static replace<T>(array: ReadonlyArray<T>, index: number, value: T): ReadonlyArray<T> {
		const result: ReadonlyArray<T> = Object.assign([], array, { [index]: value });

		return result;
	}
}
