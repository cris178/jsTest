



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

    //Text of Note Node
    var text = document.createElement('div');
    text.classList.add("noteText");
    var textContent = document.createTextNode(form.note.value);
    text.appendChild(textContent);
    console.log("Text div created and appending to Note Node");
    console.log(text);
    node.appendChild(text);

    //add node to the dom tree
    console.log("Div created");
    console.log(node);
    document.getElementById("notes").appendChild(node);
    
    console.log("Saving to Browser");
    //push a copy of the note and save to browser
        let noteJson ={
            title: form.title.value,
            note: form.note.value
        }
        console.log("Currently stored content....");
        console.log(localStorage.getItem('NotesSaved'));
        //If no notes saved create the object and save it to the list, else just push to saved list of notes
        if(localStorage.getItem('NotesSaved') === null){
            var NotesSaved = [];
            NotesSaved.push(noteJson);
            localStorage.setItem('NotesSaved',JSON.stringify(NotesSaved));
        }else{
            var NotesSaved = JSON.parse(localStorage.getItem('NotesSaved'));
            NotesSaved.push(noteJson);
            localStorage.setItem('NotesSaved', JSON.stringify(NotesSaved));
        }
        console.log('Content Stored after push');
        console.log(noteJson);
}

//Our base JS Object will link to a stylesheet
