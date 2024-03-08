document.addEventListener('DOMContentLoaded', () => {


const myLibrary = [];
const dialog = document.querySelector('dialog');
const openModal = document.getElementById('openModal');
const library = document.querySelector('.library');


openModal.addEventListener('click', () => {
    dialog.showModal();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const readStatus = document.getElementById('readStatus');
    document.getElementById('addBook').addEventListener('click', () => { 
        if (title.validity.valid && author.validity.valid) {
        let newBook = new generateBook(title.value, author.value, pages.value, readStatus.checked);
        addToLibrary(newBook);
        resetModal();
        dialog.close();
        }
    });
});

function generateBook(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.index = myLibrary.length;
}

function addToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary);
}

});

function resetModal() {
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
}

/*Function to change object content based on result of read checkbox on each book*/