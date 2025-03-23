import AbstractView from "./AbstractView.js"; 

export default class support extends AbstractView {
    constructor() {
        super();
        this.setTitle("support Us");
    }

    async getHtml() {
        return `
            <h1> You are Viewing Support the movement Page</h1>
        
        
        `;
        
    }
}