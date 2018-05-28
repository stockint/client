import { Instrument } from "./Instrument"
import "isomorphic-fetch"

describe("Instrument", () => {
	it("load", async () => {
		const value = await Instrument.load("https://stockint.github.io/data/instruments/SE0007692124/")
		expect(value).toBeTruthy()
		expect(value.name).toEqual("IMINT Image Intelligence AB")
		expect(value.symbol).toEqual("IMINT")
		expect(value.isin).toEqual("SE0007692124")
		expect(value.list).toEqual("AktieTorget")
		expect(value.currency).toEqual("SEK")
	})
})
