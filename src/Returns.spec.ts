import "isomorphic-fetch"
import { Instrument } from "./Instrument"

describe("Returns", () => {
	it("load", async () => {
		const instrument = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		expect(instrument).toBeTruthy()
		const value = await instrument.returns
		expect(value).toEqual(
			{
				"w1": {
					"gain": -2.23,
					"close": 17.88,
					"change": -0.4,
					"low": 16.8,
					"high": 17.9,
				},
				"m1": {
					"gain": -4.89,
					"close": 18.38,
					"change": -0.9,
					"low": 16.6,
					"high": 19.0,
				},
				"ty": {
					"gain": -18.69,
					"close": 21.5,
					"change": -4.02,
					"low": 16.6,
					"high": 23.9,
				},
				"m3": {
					"gain": -15.14,
					"close": 20.6,
					"change": -3.12,
					"low": 16.6,
					"high": 23.9,
				},
				"m6": {
					"gain": -59.15,
					"close": 42.8,
					"change": -25.32,
					"low": 16.6,
					"high": 43.9,
				},
				"y1": {
					"gain": -75.02,
					"close": 70.0,
					"change": -52.52,
					"low": 16.6,
					"high": 72.0,
				},
				"y2": {
					"gain": -40.94,
					"close": 29.6,
					"change": -12.12,
					"low": 16.6,
					"high": 99.75,
				},
			},
		)
	})
})
