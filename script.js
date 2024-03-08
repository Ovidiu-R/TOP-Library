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
        drawLibrary();
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

function drawLibrary() {
    myLibrary.forEach((book) => {
        let container = document.createElement('div');
        let title = document.createElement('h2');
        let by = document.createElement('h3');
        let author = document.createElement('h3');
        let pages = document.createElement('h2');
        let label = document.createElement('label');
        let checkbox = document.createElement('input[type="checkbox"]');
        container.classList.add ('book');
        title.textContent = book.title;
        by.textContent = "by";
        author.textContent = book.author;
        pages.textContent = book.pages;
        label.textContent = "Finished";
        checkbox.checked = book.readStatus;

        container.appendChild(title).appendChild(by).appendChild(author).appendChild(pages).appendChild(label).appendChild(checkbox);
        library.appendChild(container);



    });
}

/*Function to change object content based on result of read checkbox on each book*/