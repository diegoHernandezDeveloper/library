const myLibrary = [];

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 323, "not readed");
addBookToLibrary("Project Hail Mary", "Andy Weir", 496, "readed");

//functions

function Book(title, author, numOfPages, state) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.state = state;
}

function addBookToLibrary(title, author, numOfPages, state) {
  if (title == "" || author == "" || numOfPages == "") {
    alert("Please fill the full form before adding a new book");
    return;
  }
  const book = new Book(title, author, numOfPages, state);
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    const newRow = document.createElement("tr");

    const tableDataTitle = document.createElement("td");
    tableDataTitle.innerText = book.title;
    newRow.appendChild(tableDataTitle);

    const tableDataAuthor = document.createElement("td");
    tableDataAuthor.innerText = book.author;
    newRow.appendChild(tableDataAuthor);

    const tableDataPages = document.createElement("td");
    tableDataPages.innerText = book.numOfPages;
    newRow.appendChild(tableDataPages);

    const tableDataState = document.createElement("td");
    const tableDataStateButton = document.createElement("button");
    tableDataStateButton.innerText = book.state;
    tableDataStateButton.setAttribute("data-index", i);
    tableDataStateButton.addEventListener("click", updateState);
    tableDataState.appendChild(tableDataStateButton);

    newRow.appendChild(tableDataState);

    const tableDataButton = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "X";
    button.setAttribute("data-index", i);
    button.addEventListener("click", deleteBook);
    tableDataButton.appendChild(button);
    newRow.appendChild(tableDataButton);

    tableBody.appendChild(newRow);
  }
}

function deleteBook(e) {
  const index = e.target.getAttribute("data-index");
  myLibrary.splice(index, 1);
  console.log(index);
  displayBooks();
}

function updateState(e) {
  const index = e.target.getAttribute("data-index");
  if (myLibrary[index].state == "not readed") {
    myLibrary[index].state = "readed";
  } else {
    myLibrary[index].state = "not readed";
  }
  displayBooks();
}

const inputBtn = document.querySelector(".inputBtn");
inputBtn.addEventListener("click", () => {
  const inputTitle = document.querySelector('[name="title"]').value;
  const inputAuthor = document.querySelector('[name="author"]').value;
  const inputnumOfPages = document.querySelector('[name="numOfPages"]').value;
  const inputState = document.querySelector('[name="state"]').value;

  addBookToLibrary(inputTitle, inputAuthor, inputnumOfPages, inputState);
});

displayBooks();
// 'Project Hail Mary', 'Andy Weir', 496, 'readed'

/*

things to do
add a new book button form, matbe use dialog 
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog

use the event.preventDefault()
https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

add a button on each book which display the read status

*/

//
