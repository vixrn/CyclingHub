import { Coord } from "./coord";
import { Weather } from "./weather";
import { Main } from "./main";
import { Wind } from "./wind";
import { Clouds } from "./clouds";
import { Sys } from "./sys";

export class RootObject {
    coord: Coord
    weather: Weather
    base: string
    main: Main
    wind: Wind
    clouds: Clouds
    dt:number
    sys: Sys
    id: number
    name:string
    cod: number
}
