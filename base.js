



//Event listener
console.log("Hello World")
var form = document.getElementById("note-submission")
form.onsubmit = function (event){
    //console.log(form.note.value);
    event.preventDefault();

    //Main Node is the Note
    var node = document.createElement('div');
    node.classList.add("subNote")
    
    //The tile of the Note Node
    var title = document.createElement('div');
    title.classList.add("noteTitle");
    var titleContent = document.createTextNode(form.title.value);
    title.appendChild(titleContent);
    console.log("Title div created and appending to Note Node");
    console.log(title);
    node.appendChild(title);

    //Test of Note Node
    var text = document.createElement('div');
    text.classList.add("noteText");
    var textContent = document.createTextNode(form.note.value);
    text.appendChild(textContent);
    console.log("Text div created and appending to Note Node");
    console.log(text);
    node.appendChild(text);


    console.log("Div created");
    console.log(node);
    document.getElementById("notes").appendChild(node);
    
}

//Our base JS Object will link to a stylesheet
