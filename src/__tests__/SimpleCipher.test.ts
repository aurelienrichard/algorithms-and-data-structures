import { expect, test } from 'vitest'
import { SimpleCipher } from 'algorithms/SimpleCipher'

test('random key cipher', () => {
	const cipher = new SimpleCipher()

	expect(cipher.key).toMatch(/^[a-z]+$/)
	expect(cipher.key.length).toBeGreaterThanOrEqual(100)
	expect(cipher.encode('aaaaaaaaaa')).toBe(cipher.key.substring(0, 10))
	expect(cipher.decode(cipher.key.substring(0, 10))).toBe('aaaaaaaaaa')
	expect(cipher.decode(cipher.encode('abcdefghij'))).toBe('abcdefghij')
})

test('substitution cipher', () => {
	const key = 'abcdefghij'
	const cipher = new SimpleCipher(key)

	expect(cipher.key).toBe(key)
	expect(cipher.encode('aaaaaaaaaa')).toBe('abcdefghij')
	expect(cipher.decode('abcdefghij')).toBe('aaaaaaaaaa')
	expect(cipher.decode(cipher.encode('abcdefghij'))).toBe('abcdefghij')
	expect(new SimpleCipher('iamapandabear').encode('iamapandabear')).toBe('qayaeaagaciai')
	expect(cipher.encode('zzzzzzzzzz')).toBe('zabcdefghi')
	expect(cipher.decode('zabcdefghi')).toBe('zzzzzzzzzz')
	expect(new SimpleCipher('abc').encode('iamapandabear')).toBe('iboaqcnecbfcr')
	expect(new SimpleCipher('abc').decode('iboaqcnecbfcr')).toBe('iamapandabear')
})
