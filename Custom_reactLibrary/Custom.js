function rendor(reactElement, container){
    const element=document.createElement(reactElement.type);
        for (let prop in reactElement.props) {
        element.setAttribute(prop,reactElement.props[prop]);       
    }
    element.append(reactElement.children)
    container.appendChild(element);
}

const reactElement={
    type:'a',
    props:{
        href:"https://www.google.com",
        target:"_blank"
    },
    children:"click here to redirect"
}

const mainContainer=document.getElementById("root");


rendor(reactElement, mainContainer)