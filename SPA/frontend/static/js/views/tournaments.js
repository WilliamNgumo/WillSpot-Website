import AbstractView from "./AbstractView.js"; 

export default class Tournaments extends AbstractView {
    constructor() {
        super();
        this.setTitle("tournaments");
    }

    async getHtml() {
        return `
            <h1> You are Viewing Tournaments Page</h1>
        
        
        `;
        
    }
}