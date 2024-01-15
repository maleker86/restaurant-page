import './style.css';
import './index.js';
import { create_button, loadButtons } from './index.js';
import HeaderImg from './header.jpg';

console.log("This is contact page");

export function load_contact() {
    const Content = document.getElementById("content");

    Content.innerHTML = "";

    const CopyText = document.createElement('p');
    const Title = document.createElement('h2');

    console.log("This is loading the contact page.");

    Content.classList.add('container');

    // add copy about how cool the restaurant is 
    CopyText.classList.add('text');
    CopyText.textContent = "Some copy about how wonderful the restaurant is. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tortor odio. Duis ultricies dapibus massa, at auctor erat ultricies in. Proin et lacus varius!";
    
    // customize the title
    Title.classList.add('heading');
    Title.textContent = "Welcome to the Contact!";

    // add the image to a div...
    const myHeader = new Image();
    myHeader.src = HeaderImg;
  
    document.body.append(Content);

    Content.appendChild(myHeader);
    Content.appendChild(CopyText);
    Content.appendChild(Title);

    create_button();
    loadButtons();
}

