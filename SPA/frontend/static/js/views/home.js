import AbstractView from "./AbstractView.js"; 

export default class home extends AbstractView {
    constructor() {
        super();
        this.setTitle("home");
    }

    async getHtml() {
        return `
            <h1 class="Dog">This is a Test to see if it works</h1>
        
        
        `;
        
    }
}