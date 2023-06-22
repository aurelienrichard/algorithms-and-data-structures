// MAXCHARACTERS

// Return an array of one or more alphabetic characters that occur the most in a string
// ex. maxCharacter('TypeScript') == ['t', 'p']

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz']

const getCounts = (arr: string[]) =>
	arr.reduce((counts: Map<string, number>, char) => {
		if (counts.has(char)) {
			const count = counts.get(char) as number

			counts.set(char, count + 1)
		} else counts.set(char, 1)

		return counts
	}, new Map())

export const maxCharacters = (str: string) => {
	const chars = [...str.toLowerCase()].filter((char) => ALPHABET.includes(char))

	if (chars.length === 0) throw Error('Input does not contain alphabetic characters.')

	const counts = getCounts(chars)
	const maxCount = Math.max(...counts.values())

	return [...counts.keys()].filter((key) => counts.get(key) === maxCount)
}
