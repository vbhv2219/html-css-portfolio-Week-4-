
class QAItem {

    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.isVisible = false;
    }

    
    toggle(element) {
        this.isVisible = !this.isVisible;

        element.classList.toggle("active");

        const icon = element.querySelector(".icon");
        icon.textContent = this.isVisible ? "-" : "+";
    }

    
    render() {

        const container = document.createElement("div");
        container.classList.add("qa-item");

        container.innerHTML = `
            <div class="question">
                ${this.question}
                <span class="icon">+</span>
            </div>
            <div class="answer">
                ${this.answer}
            </div>
        `;

        
        container.querySelector(".question")
        .addEventListener("click", () => {
            this.toggle(container);
        });

        return container;
    }
}


const faqData = [
    new QAItem(
        "What is JavaScript?",
        "JavaScript is a programming language used to make web pages interactive."
    ),

    new QAItem(
        "What is Object-Oriented Programming?",
        "OOP is a programming paradigm based on objects and classes."
    ),

    new QAItem(
        "What is Webpack?",
        "Webpack is a module bundler used to bundle JavaScript, CSS and assets."
    )
];


const faqContainer = document.getElementById("faq-container");

faqData.forEach(item => {
    faqContainer.appendChild(item.render());
});