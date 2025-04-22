document.addEventListener("DOMContentLoaded", function() {
// As I understand it, modals are comprised of three major parts:

// The modal container, what will be opened.
let modalContainer = {
    albumContainer: document.getElementById("albumContainer"),
    sfContainer: document.getElementById("sfContainer"),
    personalContainer: document.getElementById("personalContainer"),
}

// The modal button, what trigger the opening.
let modalButton = {
    albumButton: document.getElementById("albumButton"),
    sfButton: document.getElementById("sfButton"),
    personalButton: document.getElementById("personalButton")
}

// The modal span, that will close the modal.
let modalClose = {
    albumClose: document.getElementById("albumSpan"),
    sfClose: document.getElementById("sfSpan"),
    personalClose: document.getElementById("personalSpan")
}

// For the sake of intuative design, Im going to make an object
// to recognize and hold the body objects of the modals so that
// JS can determine if the user ever clicks outside of them later
// for a quick exit.

let modalContent = {
    albumBody: document.getElementById("albumBody"),
    sfBody: document.getElementById("sfBody"),
    personalBody: document.getElementById("personalBody"),
}

// Open function for the personalButton
modalButton.personalButton.onclick = function(){
    modalContainer.personalContainer.style.display = 'block';
    modalContainer.personalContainer.style.overflow = 'none';
}

// Open function for the albumButton
modalButton.albumButton.onclick = function(){
    modalContainer.albumContainer.style.display = 'block';
    modalContainer.albumContainer.style.overflow = 'none';
}

// Open function for the sfButton
modalButton.sfButton.onclick = function(){
    modalContainer.sfContainer.style.display = 'block';
    modalContainer.sfContainer.style.overflow = 'none';
}

// Close function for the personalSpan
modalClose.personalClose.onclick = function(){
    modalContainer.personalContainer.style.display = 'none';
    modalContainer.personalContainer.style.overflow = 'auto';
}


// Close function for the albumSpan
modalClose.albumClose.onclick = function(){
    modalContainer.albumContainer.style.display = 'none';
    modalContainer.albumContainer.style.overflow = 'auto';
}

// Close function for the sfSpan
modalClose.sfClose.onclick = function(){
    modalContainer.sfContainer.style.display = 'none';
    modalContainer.sfContainer.style.overflow = 'auto';
}

// Auto-close for the modals if user clicks out of bounds.
window.onclick = function(event) {
    // Loop through each modal container
    for (let key in modalContainer) {
        let modal = modalContainer[key];
        if (event.target === modal) {
            modal.style.display = "none";
            modal.style.overflow = "auto";
        }
    }
}

});