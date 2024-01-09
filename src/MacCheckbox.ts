import { Checkbox } from "./Checkbox";

export class MacCheckbox implements Checkbox {
    paint(): void {
        console.log('Soy un checkbox de mac')
    }
}