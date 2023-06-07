// MAXCHARACTERS

// Return an array of one or more alphabetic characters that occur the most in a string
// ex. maxCharacter('TypeScript') == ['t', 'p']

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz']

const getCounts = (arr: string[]) =>
	arr.reduce((counts: Record<string, number>, char) => {
		counts[char] = counts[char] + 1 || 1
		return counts
	}, {})

export const maxCharacters = (str: string) => {
	const chars = [...str.toLowerCase()].filter((c) => ALPHABET.includes(c))

	if (!chars.length) throw Error('Input does not contain alphabetic characters.')

	const counts = getCounts(chars)
	const maxCount = Math.max(...Object.values(counts))

	return Object.keys(counts).filter((key) => counts[key] === maxCount)
}
