// FIBONACCI

// returns nth position of a Fibonacci sequence using recursion and memoization

const memo: Map<number, number> = new Map([
	[1, 0],
	[2, 1]
])

export const fibonacci = (n: number): number => {
	if (memo.has(n)) return memo.get(n) as number
	memo.set(n, fibonacci(n - 1) + fibonacci(n - 2))

	return memo.get(n) as number
}
