import * as service from "./service"
import { Intervall } from "./Intervall"

export class Price extends Intervall {
	constructor(
		open: number,
		high: number,
		low: number,
		close: number,
		readonly volume: number,
		readonly time: number) {
		super(open, high, low, close)
	}
	static load(url: string): Promise<ReadonlyArray<Price>> {
		return fetch(url).then(async response => await response.json() as service.Price[]).then(data => data.map(price => new Price(price.open, price.high, price.low, price.close, price.volume, price.time)))
	}
}
