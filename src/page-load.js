import './style.css';
// import './style.module.css'; 
import HeaderImg from './header.jpg';

console.log("This is specifically the page-load.js");

export function load_content() {
    const Content = document.createElement('div');

    const CopyText = document.createElement('p');
    const Title = document.createElement('h2');

    console.log("This is the page-load page.");

    Content.classList.add('container');

    // add copy about how cool the restaurant is 
    CopyText.classList.add('text');
    CopyText.textContent = "Some copy about how wonderful the restaurant is. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac tortor odio. Duis ultricies dapibus massa, at auctor erat ultricies in. Proin et lacus varius!";
    
    // customize the title
    Title.classList.add('heading');
    Title.textContent = "Welcome to the Restaurant!";

    // add the image to a div...
    const myHeader = new Image();
    myHeader.src = HeaderImg;
  
    document.body.append(Content);

    Content.appendChild(myHeader);
    Content.appendChild(CopyText);
    Content.appendChild(Title);
}


// load_content();