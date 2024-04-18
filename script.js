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

const close = document.querySelector("#close");
const del = document.querySelector(".delete");

const dialog = document.querySelector("#bookInfo");
const newBook = document.querySelector("#newBook");
const addBook = document.querySelector("#addBook");

const library = document.querySelector("#library");

function addBookToLibrary() {
  // do stuff
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);

  library.innerHTML = `<div class="book">
    <p class="title">${newBook.title}</p>
    <p class="author">By: ${newBook.author}</p>
    <p class="pages">${newBook.pages}pgs</p>
    <p class="read">Read: <input type="checkbox" ${newBook.read} ></p>
    <button class="delete">Delete</button>
  </div>`;

  console.log(newBook);
}

newBook.addEventListener("click", () => {
  dialog.showModal();
});

addBook.addEventListener("click", () => {
  if (valueCheck() == 1) {
    return alert("Fill it out if you want to add it loser");
  }
  title.value = "";
  author.value = "";
  page.value = "";
  read.checked = false;
  dialog.close();
});

// close dialog box
close.addEventListener("click", () => {
  title.value = "";
  author.value = "";
  page.value = "";
  read.checked = false;
  dialog.close();
});

// delete book from library
del.addEventListener("click", () => {
  console.log("delete");
});

// checks if dialog input is empty
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
