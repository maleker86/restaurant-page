import './style.css';
import { load_home } from './home-page';
import { load_menu } from './menu-page';

//create buttons 
function create_button(button_text, clickHandler) {
    const button = document.createElement('button');
    button.innerText = button_text;
    button.addEventListener('click', clickHandler);

    return button;
};

function loadButtons() {
    const contentDiv = document.getElementById('content');
    
    const homeButton = create_button("home", () => {
        load_home();
        console.log("Home button clicked!");

    });
    
    const menuButton = create_button("menu", () => {
        load_menu();
        console.log("menu button clicked!");

    });

    const contactButton = create_button("contact", () => {
        console.log("contact button clicked!");

    });

    contentDiv.prepend(homeButton);
    contentDiv.prepend(menuButton);
    contentDiv.prepend(contactButton);

};

load_home();
loadButtons();

console.log("this is index.js. tab swtching logic & event listeners should go here...");
