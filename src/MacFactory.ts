import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { GUIFactory } from "./GUIFactory";
import { MacButton } from "./MacButton";
import { MacCheckbox } from "./MacCheckbox";

export class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}