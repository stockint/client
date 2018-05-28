import { Intervall } from "./Intervall"

export interface Price extends Intervall {
	readonly volume: number
	readonly time: number
}
