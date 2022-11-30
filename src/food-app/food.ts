import { Foodable } from "./interfaces.js";
import { Score } from "./score.js";

export class Food implements Foodable {
    constructor(public e: HTMLDivElement) {
        e.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.e.classList.toggle('food--active');
        const score = Score.getInstance();
        score.render();
    }
}
