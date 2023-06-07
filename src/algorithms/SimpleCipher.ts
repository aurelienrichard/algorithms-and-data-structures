// SIMPLECIPHER

// implement a simple shift cipher like Caesar and a more secure substitution cipher

const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz']

export class SimpleCipher {
	key: string

	constructor(key?: string) {
		this.key = key?.toLowerCase() || SimpleCipher.generateKey()
	}

	encode = (message: string) => {
		const indices = this.getIndices(message)

		return [...message].reduce((encoded, letter, idx) => {
			const alphabetIdx = ALPHABET.indexOf(letter)
			const encodedIdx = (alphabetIdx + indices[idx]) % 26
			return encoded + ALPHABET[encodedIdx]
		}, '')
	}

	decode = (message: string) => {
		const indices = this.getIndices(message)

		return [...message].reduce((decoded, letter, idx) => {
			const alphabetIdx = ALPHABET.indexOf(letter)
			const decodedIdx = (26 + alphabetIdx - indices[idx]) % 26
			return decoded + ALPHABET[decodedIdx]
		}, '')
	}

	private getIndices = (message: string) => {
		const numberOfRepeats = Math.ceil(message.length / this.key.length)
		const repeatedKey = this.key.repeat(numberOfRepeats).slice(0, message.length)
		return [...repeatedKey].map((letter) => ALPHABET.indexOf(letter))
	}

	private static generateKey() {
		const getRandomLetter = () => {
			const idx = Math.floor(Math.random() * 26)

			return ALPHABET[idx]
		}
		return Array.from({ length: 100 }, () => getRandomLetter()).join('')
	}
}
