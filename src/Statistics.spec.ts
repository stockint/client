import "isomorphic-fetch"
import { Instrument } from "./Instrument"

describe("Statistics", () => {
	it("load", async () => {
		const value = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		expect(value).toBeTruthy()
		const statistics = await value.statistics
		expect(statistics.directProfit).toBe(0.0)
		expect(statistics.ps).toBe(10.34)
		expect(statistics.dividendShare).toBe(0.0)
		expect(statistics.dividendProfit).toBe(-0.12)
		expect(statistics.profitPerShare).toBe(-0.97)
		expect(statistics.dividendAsset).toBe(2.24)
		expect(statistics.pe).toBe(-18.8)
	})
})
