import { powers } from "../data/powers";


export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power(): string {
        // Cuando le ponemos el signo de admiracion le decimos a typescript que confie en nosotros que sabemos que siempre lo va a encontrar
        // return powers.find( power => power.id === this.powerId)!.desc || 'Not Found'
        return powers.find( power => power.id === this.powerId)?.desc || 'Not Found'
    }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}