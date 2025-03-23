import AbstractView from "./AbstractView.js"; 

export default class contact extends AbstractView {
    constructor() {
        super();
        this.setTitle("contact Us");
    }

    async getHtml() {
        return `
            <h1> You are Viewing Contact us Page</h1>
        
        
        `;
        
    }
}