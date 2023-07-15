export const reverseInParentheses = (str: string): string => {
	let start = 0

	for (let i = 0; i < str.length; i += 1) {
		if (str[i] === '(') start = i
		if (str[i] === ')') {
			const left = str.slice(0, start)
			const mid = [...str.slice(start + 1, i)].reverse().join('')
			const right = str.slice(i + 1)

			return reverseInParentheses(`${left}${mid}${right}`)
		}
	}

	return str
}
