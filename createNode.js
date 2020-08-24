import { element } from "prop-types";

function node(parent,data){
    console.log(parent);
    console.log(data);
    var node = document.createElement('div');
    node.classList.add("notes")
    var text = document.createTextNode(data);
    node.appendChild(text);
    document.getElementById(parent).appendChild(node);
}