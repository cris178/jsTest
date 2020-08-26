window.onload =  function fetchNotes(){
    let notesJson = JSON.parse(localStorage.getItem('NotesSaved'));
    

    console.log("===Starting Note Import===")
    console.log(notesJson);
    
    for(let noteJ in notesJson){

        //Main Node is the Note
        var node = document.createElement('div');
        node.classList.add("subNote")


        
        console.log("Here come the imported notes.");
        console.log(notesJson);
        console.log("noteJ: " + notesJson[noteJ]);
        var titleImport = notesJson[noteJ].title;
        var textImport = notesJson[noteJ].note;
        console.log(titleImport);
        console.log(textImport);


        //The tile of the Note Node
        var title = document.createElement('div');
        title.classList.add("noteTitle");
        var titleContent = document.createTextNode(titleImport);
        title.appendChild(titleContent);
        console.log("Title div created and appending to Note Node");
        console.log(title);
        node.appendChild(title);

        //Text of Note Node
        var text = document.createElement('div');
        text.classList.add("noteText");
        var textContent = document.createTextNode(notesJson[noteJ].note);
        text.appendChild(textContent);
        console.log("Text div created and appending to Note Node");
        console.log(text);
        node.appendChild(text);

         //add node to the dom tree
        console.log("Div created");
        console.log(node);
        document.getElementById("notes").appendChild(node);

        
    }

}