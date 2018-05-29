import "isomorphic-fetch"
import { Instrument } from "./Instrument"

describe("Depth", () => {
	it("load", async () => {
		const instrument = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		expect(instrument).toBeTruthy()
		const value = await instrument.depth
		expect(value).toEqual({
			"tick": 1522320867440,
			"bids": [
				{ "price": 17.66, "volume": 500, "count": 1 },
				{ "price": 17.5, "volume": 3074, "count": 1 },
				{ "price": 17.2, "volume": 40, "count": 1 },
				{ "price": 17.1, "volume": 1880, "count": 1 },
				{ "price": 17.0, "volume": 500, "count": 1},
			],
			"asks": [
				{ "price": 17.68, "volume": 10000, "count": 1},
				{ "price": 17.7, "volume": 2300, "count": 1 },
				{ "price": 17.8, "volume": 300, "count": 1},
				{ "price": 17.86, "volume": 1000, "count": 1 },
				{ "price": 17.9, "volume": 1000, "count": 1 },
			],
		},
		)
	})
})
