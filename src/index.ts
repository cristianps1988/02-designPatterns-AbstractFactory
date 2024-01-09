import { GUIFactory } from "./GUIFactory";
import { MacFactory } from "./MacFactory";
// import { WinFactory } from "./WinFactory";

function appInit(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    console.log(button.paint())
    console.log(checkbox.paint())
}

appInit(new MacFactory())