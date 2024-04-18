const myLibrary = [];

// same as --function Book(){this.title: etc.}
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {
  // stuff
}

const dialog = document.querySelector("#bookInfo");
const newBook = document.querySelector("#newBook");
const addBook = document.querySelector("#addBook");

newBook.addEventListener("click", () => {
  dialog.showModal();
});

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const page = document.querySelector("#page");
const read = document.querySelector("#read");
const close = document.querySelector("#close");

addBook.addEventListener("click", () => {
  if (valueCheck() == 1) {
    return alert("Fill it out if you want to add it loser");
  }
  myLibrary.push(new Book(title.value, author.value, page.value, read.checked));
  title.value = "";
  author.value = "";
  page.value = "";
  read.checked = false;
  dialog.close();
});

close.addEventListener("click", () => {
  title.value = "";
  author.value = "";
  page.value = "";
  read.checked = false;
  dialog.close();
});

function valueCheck() {
  if (title.value == "") {
    return 1;
  }
  if (author.value == "") {
    return 1;
  }
  if (page.value == "") {
    return 1;
  }
  return 0;
}
