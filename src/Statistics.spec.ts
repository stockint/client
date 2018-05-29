import "isomorphic-fetch"
import { Instrument } from "./Instrument"

describe("Statistics", () => {
	it("load", async () => {
		const instrument = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		const value = await instrument.statistics
		expect(value).toEqual(
			{
				"directProfit": 0.0,
				"ps": 10.34,
				"dividendShare": 0.0,
				"dividendProfit": -0.12,
				"assetValuePerShare": 7.82,
				"profitPerShare": -0.97,
				"dividendAsset": 2.24,
				"pe": -18.8,
			},
		)
	})
})
