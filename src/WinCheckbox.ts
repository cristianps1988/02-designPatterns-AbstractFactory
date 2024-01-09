import { Checkbox } from "./Checkbox";

export class WinCheckbox implements Checkbox {
    paint(): void {
        console.log('Soy un checkbox de windows')
    }
}