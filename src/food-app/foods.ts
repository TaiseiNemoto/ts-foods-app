import { Food } from "./food.js";
import { Foodsable } from "./interfaces.js";

export class Foods implements Foodsable {
    private static instance: Foods;
    elements = document.querySelectorAll<HTMLDivElement>('.food');
    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(e => {
            if (e.classList.contains('food--active')) {
                this._activeElements.push(e)
            }
        })
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(e => {
            const foodScore = e.querySelector('.food__score');
            if (foodScore) {
                this._activeElementsScore.push(Number(foodScore.textContent));
            }
        })
        return this._activeElementsScore;
    }
    private constructor () {
        this.elements.forEach(e => {
            new Food(e);
        })
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}