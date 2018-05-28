import { Instrument } from "./Instrument"
import "isomorphic-fetch"

describe("Instrument", () => {
	it("load", async () => {
		const value = await Instrument.load("https://simonmika.github.io/stockint-data/instruments/SE0007692124/")
		expect(value).toBeTruthy()
		expect(value.name).toEqual("IMINT Image Intelligence AB")
	})
})
