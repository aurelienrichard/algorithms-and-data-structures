// CLOCK

// Implement a clock that handles times without dates.
// You should be able to add and subtract minutes to it.
// Two clocks that represent the same time should be equal to each other.

const MINUTES_IN_A_DAY = 24 * 60

export class Clock {
	private readonly time: number

	constructor(hours: number, minutes = 0) {
		const time = (hours * 60 + minutes) % MINUTES_IN_A_DAY

		this.time = time < 0 ? time + MINUTES_IN_A_DAY : time
	}

	toString() {
		const hours = Clock.format(Math.trunc(this.time / 60))
		const minutes = Clock.format(this.time % 60)

		return `${hours}:${minutes}`
	}

	plus(minutes: number): Clock {
		return new Clock(0, this.time + minutes)
	}

	minus(minutes: number): Clock {
		return new Clock(0, this.time - minutes)
	}

	equals(clock: Clock) {
		return this.time === clock.time
	}

	private static format(time: number) {
		return String(time).padStart(2, '0')
	}
}
