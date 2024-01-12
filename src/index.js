import { load_content } from './page-load';

load_content();

//create buttons 
function create_buttons(button_text) {
    const button = document.createElement('button');
    let text = button_text;

    button.innerText = text;

};

create_buttons("home");

console.log("this is index.js. tab swtching logic & event listeners should go here...");

// document.body.append(load_content());
