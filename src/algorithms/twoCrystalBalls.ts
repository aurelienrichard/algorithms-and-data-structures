// TWOCRYSTALBALLS

// Two crystal balls problem solution in sqrt of n

export const twoCrystalBalls = (breaks: boolean[]) => {
	const leapDistance = Math.floor(Math.sqrt(breaks.length))
	let i = leapDistance

	for (; i < breaks.length; i += leapDistance) {
		if (breaks[i]) {
			i -= leapDistance
			break
		}
	}
	for (let j = 0; j < leapDistance && i < breaks.length; j += 1, i += 1) {
		if (breaks[i]) return i
	}
	return i < breaks.length ? i : -1
}
