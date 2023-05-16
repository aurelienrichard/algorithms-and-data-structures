import { test, expect } from 'vitest'
import { spaceAge } from 'algorithms/spaceAge'

test('space age', () => {
	expect(spaceAge('earth', 1000000000)).toBe(31.69)
	expect(spaceAge('mercury', 2134835688)).toBe(280.88)
	expect(spaceAge('venus', 189839836)).toBe(9.78)
	expect(spaceAge('mars', 2129871239)).toBe(35.88)
	expect(spaceAge('jupiter', 901876382)).toBe(2.41)
	expect(spaceAge('saturn', 2000000000)).toBe(2.15)
	expect(spaceAge('uranus', 1210123456)).toBe(0.46)
	expect(spaceAge('neptune', 1821023456)).toBe(0.35)
	expect(() => spaceAge('pluto', 1)).toThrowError('Unknown planet.')
})
