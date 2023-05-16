import { test, expect } from 'vitest'
import { maxCharacters } from 'algorithms/maxCharacters'

test('max character', () => {
	expect(maxCharacters('TypeScript is awesome.')).toEqual(['e', 's'])
	expect(maxCharacters('Three adorable baby ferrets.')).toEqual(['e'])
	expect(() => maxCharacters('$24,540.90')).toThrowError(
		'Input does not contain alphabetic characters.'
	)
})
