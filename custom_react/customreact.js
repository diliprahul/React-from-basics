function customrendor(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute("href",reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
    container.appendChild(domElement);
}

const reactElement={
    type: 'a',
    props:{
        href :"https://www.google.com",
        target : "_blank",
    },
    children :"click here to continue"
};

const mainContainer= document.querySelector("#root");


customrendor(reactElement,mainContainer);