// ATBASHCIPHER
//
// The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
// An Atbash cipher for the Latin alphabet would be as follows:
// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// Ciphertext is written out in groups of fixed length, the traditional group size being 5 letters, and punctuation is excluded. This is to make it harder to guess things based on word boundaries.
// Examples
// Encoding 'test' gives 'gvhg'
// Decoding 'gvhg' gives 'test'
// Decoding 'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt' gives 'thequickbrownfoxjumpsoverthelazydog'

const GROUP_SIZE = 5
const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz']

const transcode = (char: string) => {
	const idx = ALPHABET.indexOf(char) + 1

	return idx === 0 ? char : ALPHABET[ALPHABET.length - idx]
}

export const encode = (message: string): string => {
	const encoded = [...message.toLowerCase()]
		.filter((char) => /[a-z\d]/.test(char))
		.map((char, idx) => {
			const transcoded = transcode(char)
			const sameGroup = idx === 0 || idx % GROUP_SIZE

			return sameGroup ? transcoded : transcoded.padStart(2, ' ')
		}, '')

	return encoded.join('')
}

export const decode = (message: string): string => {
	const decoded = [...message.replaceAll(' ', '')].map(transcode)

	return decoded.join('')
}
