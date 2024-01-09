import { Button } from "./Button";

export class MacButton implements Button {
    paint(): void {
        console.log('Soy un botón de mac')
    }
}