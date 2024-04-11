let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function render() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.innerHTML = `<p>${book.title}</p>`;
    libraryEl.appendChild(bookEl);
  }
}

function addBookToLibrary(newBook) {
  myLibrary.push(new Book(newBook))
}

addBookToLibrary('Harry Potter');
addBookToLibrary('Divergent');