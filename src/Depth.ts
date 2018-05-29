import * as service from "./service"
import { Level } from "./Level"

export class Depth {
	constructor(
		readonly tick: number,
		readonly bids: ReadonlyArray<Level>,
		readonly asks: ReadonlyArray<Level>) {
	}
	static load(url: string): Promise<Depth> {
		return fetch(url).then(async response => await response.json() as service.Depth).then(data => new Depth(data.tick, data.bids.map(l => new Level(l.price, l.volume, l.count)), data.asks.map(l => new Level(l.price, l.volume, l.count))))
	}
}
