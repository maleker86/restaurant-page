import './style.css';
import HeaderImg from './header.jpg';

console.log("This is specifically the page-load.js");

function load_content() {
    const Content = document.createElement('div');

    const copyText = document.createElement('p');

    console.log("This is the content function.");

    // add copy about how cool the restaurant is 
    // p.classList.add('red');
    copyText.textContent = "Some copy about how wonderful the restaurant is. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tortor odio. Duis ultricies dapibus massa, at auctor erat ultricies in. Proin et lacus varius!";
    copyText.classList.add('hello');
    
    // add the image to a div...
    const myHeader = new Image();
    myHeader.src = HeaderImg;

    Content.appendChild(myHeader);
    Content.appendChild(copyText);

    return Content;
}

{/* <div id="content">
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="https://unsplash.com/photos/sliced-bread-on-white-ceramic-plate-STqHLqMne3k" class="header">
        <h2 class="header-text">Welcome to the Restaurant!</h2>
        <p>some copy about how wonderful the restaurant is. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tortor odio. Duis ultricies dapibus massa, at auctor erat ultricies in. Proin et lacus varius. 
       </p> */}

document.body.appendChild(load_content());