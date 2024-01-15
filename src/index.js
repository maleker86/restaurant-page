import './style.css';
import { load_home } from './home-page';
import { load_menu } from './menu-page';
import { load_contact } from './contact-page';

//create buttons 
export function create_button(button_text, clickHandler) {
    const button = document.createElement('button');
    button.innerText = button_text;
    button.addEventListener('click', clickHandler);

    return button;
};

export function loadButtons() {
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
        load_contact();
        console.log("contact button clicked!");

    });


    contentDiv.append(homeButton);
    contentDiv.append(menuButton);
    contentDiv.append(contactButton);

};

load_home();
// loadButtons();

console.log("this is index.js. tab swtching logic & event listeners should go here...");