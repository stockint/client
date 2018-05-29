import "isomorphic-fetch"
import { Instrument } from "./Instrument"

describe("Price", () => {
	it("load", async () => {
		const instrument = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		expect(instrument).toBeTruthy()
		const value = await instrument.prices
		expect(value).toEqual([
			{
				"open": 17.48,
				"high": 17.48,
				"low": 17.48,
				"close": 17.48,
				"volume": 40.0,
				"time": 1522306800000,
			},
			{
				"open": 17.48,
				"high": 17.48,
				"low": 17.48,
				"close": 17.48,
				"volume": 87.0,
				"time": 1522307220000,
			},
			{
				"open": 17.48,
				"high": 17.5,
				"low": 17.48,
				"close": 17.5,
				"volume": 100.0,
				"time": 1522308600000,
			},
			{
				"open": 17.5,
				"high": 17.5,
				"low": 17.5,
				"close": 17.5,
				"volume": 280.0,
				"time": 1522310040000,
			},
			{
				"open": 17.5,
				"high": 17.5,
				"low": 17.5,
				"close": 17.5,
				"volume": 200.0,
				"time": 1522313340000,
			},
			{
				"open": 17.5,
				"high": 17.5,
				"low": 17.5,
				"close": 17.5,
				"volume": 345.0,
				"time": 1522313460000,
			},
			{
				"open": 17.2,
				"high": 17.2,
				"low": 17.1,
				"close": 17.1,
				"volume": 2000.0,
				"time": 1522315020000,
			},
			{
				"open": 17.1,
				"high": 17.1,
				"low": 17.1,
				"close": 17.1,
				"volume": 190.0,
				"time": 1522315500000,
			},
			{
				"open": 17.5,
				"high": 17.5,
				"low": 17.5,
				"close": 17.5,
				"volume": 100.0,
				"time": 1522315620000,
			},
			{
				"open": 17.1,
				"high": 17.1,
				"low": 17.1,
				"close": 17.1,
				"volume": 2000.0,
				"time": 1522317540000,
			},
			{
				"open": 17.5,
				"high": 17.5,
				"low": 17.5,
				"close": 17.5,
				"volume": 50.0,
				"time": 1522318140000,
			},
			{
				"open": 17.5,
				"high": 17.5,
				"low": 17.5,
				"close": 17.5,
				"volume": 926.0,
				"time": 1522319940000,
			},
			{
				"open": 17.66,
				"high": 17.66,
				"low": 17.66,
				"close": 17.66,
				"volume": 1500.0,
				"time": 1522320240000,
			},
		],
		)
	})
})
