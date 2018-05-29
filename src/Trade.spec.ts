import "isomorphic-fetch"
import { Instrument } from "./Instrument"

describe("Trade", () => {
	it("load", async () => {
		const instrument = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		expect(instrument).toBeTruthy()
		const value = await instrument.trades
		expect(value).toEqual([
			{
				"market": 52,
				"seller": "AVA",
				"buyer": "AVA",
				"volume": 1500,
				"price": 17.66,
				"type": "AUTO",
				"time": 1522320291252,
				"tick": 1522320291252,
			},
			{
				"market": 52,
				"seller": "SHB",
				"buyer": "ENS",
				"volume": 926,
				"price": 17.5,
				"type": "AUTO",
				"time": 1522319941278,
				"tick": 1522319941278,
			},
			{
				"market": 52,
				"seller": "SHB",
				"buyer": "AVA",
				"volume": 50,
				"price": 17.5,
				"type": "AUTO",
				"time": 1522318176052,
				"tick": 1522318176052,
			},
		],
		)
	})
})
