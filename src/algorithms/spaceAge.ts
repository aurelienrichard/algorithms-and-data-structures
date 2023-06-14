// SPACEAGE

// Given an age in seconds, calculate how old someone would be on:
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say that they're 31.69 Earth-years old.

const EARTH_YEAR_IN_SECONDS = 31_557_600

const ratios = new Map<string, number>([
	['mercury', 0.2408467],
	['venus', 0.61519726],
	['earth', 1.0],
	['mars', 1.8808158],
	['jupiter', 11.862615],
	['saturn', 29.447498],
	['uranus', 84.016846],
	['neptune', 164.79132]
])

export const spaceAge = (planet: string, seconds: number) => {
	if (!ratios.has(planet)) throw Error('Unknown planet.')

	const ratio = ratios.get(planet) as number

	return Number((seconds / EARTH_YEAR_IN_SECONDS / ratio).toFixed(2))
}
