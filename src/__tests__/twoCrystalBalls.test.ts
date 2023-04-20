import { test, expect } from 'vitest'
import { twoCrystalBalls } from '../algorithms/twoCrystalBalls'

test('two crystal balls', () => {
	const idx = Math.floor(Math.random() * 10000)
	const data = new Array(10000).fill(false)
	for (let i = idx; i < 10000; i += 1) {
		data[i] = true
	}

	expect(twoCrystalBalls(data)).toEqual(idx)
	expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1)

	const sqrti = Math.floor(Math.random() * 99 + 1) // num > 0
	const dataSize = sqrti * sqrti
	const sqrtsData = new Array(dataSize).fill(false)

	for (let i = sqrti; i < dataSize; i += 1) {
		sqrtsData[i] = true
	}

	expect(twoCrystalBalls(sqrtsData)).toEqual(sqrti)
	expect(twoCrystalBalls([])).toEqual(-1)
})
