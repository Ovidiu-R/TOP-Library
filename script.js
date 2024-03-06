document.addEventListener('DOMContentLoaded', () => {


const myLibrary = [];
const dialog = document.querySelector('dialog');
const openModal = document.getElementById('openModal');
const library = document.querySelector('.library');


openModal.addEventListener('click', () => {
    dialog.showModal();
    const addBook = document.getElementById('addBook').addEventListener('click', () => {
        //if fields are all filled in
        generateBook(/*various attributes necessary*/);
        dialog.close();
    });
});

function generateBook(/*parameters*/) {
    //constructor
}

function addToLibrary() {
    //Add new object to array
    //Call draw function on updated array
}

});