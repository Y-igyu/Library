const myLibrary = [];

function Book(name) {
  this.name = name;
}

function addBookToLibrary(newBook) {
  myLibrary.push(new Book(newBook))
}

