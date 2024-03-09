document.addEventListener('DOMContentLoaded', () => {


const myLibrary = [
    {
        title: "Caves of Steel",
        author: "R. Daneel Olivaw",
        pages: 224,
        readStatus: true,
        index: 0
    }
];
const dialog = document.querySelector('dialog');
const openModal = document.getElementById('openModal');
const library = document.getElementById('library');


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


function resetModal() {
    title.value = "";
    author.value = "";
    pages.value = "";
    readStatus.checked = false;
}

function drawLibrary() {
    while (library.firstChild){
        library.removeChild(library.lastChild);
    }
    myLibrary.forEach((book) => {
        let container = document.createElement('div');
        let title = document.createElement('h2');
        let by = document.createElement('h3');
        let author = document.createElement('h3');
        let pages = document.createElement('h2');
        let label = document.createElement('p');
        let checkbox = document.createElement('input');
        let remove = document.createElement('button');
        checkbox.type = 'checkbox';
        container.classList.add ('book');
        title.textContent = book.title;
        by.textContent = "by";
        author.textContent = book.author;
        pages.textContent = book.pages;
        label.textContent = "Finished";
        label.style.display = "inline";
        checkbox.checked = book.readStatus;
        remove.textContent = "Remove";
        remove.style.display = "block";
        remove.style.textAlign = "center";   /*WTF*/


        container.append (title, by, author, pages, label, checkbox, remove);
        console.log (container);
        library.appendChild(container);
    });
}

});
/*Function to change object content based on result of read checkbox on each book*/