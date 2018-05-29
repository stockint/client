import "isomorphic-fetch"
import { Instrument } from "./Instrument"

describe("Status", () => {
	it("load", async () => {
		const instrument = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		expect(instrument).toBeTruthy()
		const value = await instrument.status
		expect(value).toEqual(
			{
				"tick": 1522322403961,
				"time": 1522320291252,
				"bid": { "price": 17.66, "volume": 500 },
				"ask": { "price": 17.68, "volume": 10000 },
				"last": { "price": 17.66, "volume": 1500},
				"high": 17.66,
				"low": 17.1,
				"open": 17.48,
				"close": 17.66,
				"averagePrice": 17.31,
				"turnover": { "amount": 135382.86, "volume": 7818},
				"lotSize": 1,
			},
		)
	})
})
