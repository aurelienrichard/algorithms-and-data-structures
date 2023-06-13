import { describe, test, expect } from 'vitest'
import { encode, decode } from 'algorithms/atbashCipher'

describe('atbash cipher', () => {
	test('encoding', () => {
		expect(encode('yes')).toBe('bvh')
		expect(encode('no')).toBe('ml')
		expect(encode('OMG')).toBe('lnt')
		expect(encode('O M G')).toBe('lnt')
		expect(encode('mindblowingly')).toBe('nrmwy oldrm tob')
		expect(encode('Testing,1 2 3, testing.')).toBe('gvhgr mt123 gvhgr mt')
		expect(encode('Truth is fiction.')).toBe('gifgs rhurx grlm')
		expect(encode('thequickbrownfoxjumpsoverthelazydog')).toBe(
			'gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt'
		)
	})

	test('decoding', () => {
		expect(decode('vcvix rhn')).toBe('exercism')
		expect(decode('zmlyh gzxov rhlug vmzhg vkkrm thglm v')).toBe(
			'anobstacleisoftenasteppingstone'
		)
		expect(decode('gvhgr mt123 gvhgr mt')).toBe('testing123testing')
		expect(decode('gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt')).toBe(
			'thequickbrownfoxjumpsoverthelazydog'
		)
	})
})
