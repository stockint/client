import * as service from "./service"
import { Return } from "./Return"

export class Returns {
	constructor(
		readonly w1?: Return,
		readonly m1?: Return,
		readonly ty?: Return,
		readonly m3?: Return,
		readonly m6?: Return,
		readonly y1?: Return,
		readonly y2?: Return) {
	}
	static load(url: string): Promise<Returns> {
		return fetch(url).then(async response => await response.json() as service.Returns).then(data => new Returns(Returns.openReturn(data.w1), Returns.openReturn(data.m1), Returns.openReturn(data.ty), Returns.openReturn(data.m3), Returns.openReturn(data.m6), Returns.openReturn(data.y1), Returns.openReturn(data.y2)))
	}
	private static openReturn(value: service.Return | undefined) {
		return value && new Return(value.return, value.change, value.high, value.low, value.close)
	}
}
