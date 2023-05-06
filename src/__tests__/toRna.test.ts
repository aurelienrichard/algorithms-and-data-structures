import { test, expect } from 'vitest'
import { toRna } from '../algorithms/toRna'

test('rna transcriptor', () => {
	expect(toRna('C')).toBe('G')
	expect(toRna('G')).toBe('C')
	expect(toRna('A')).toBe('U')
	expect(toRna('T')).toBe('A')
	expect(toRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU')
	expect(() => toRna('U')).toThrowError('Invalid input DNA.')
	expect(() => toRna('XXX')).toThrowError('Invalid input DNA.')
	expect(() => toRna('ACGTXXXCTTAA')).toThrowError('Invalid input DNA.')
})
