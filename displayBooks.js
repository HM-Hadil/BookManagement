document.addEventListener("DOMContentLoaded", function() {
    // Retrieve stored books from local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];

    // Display stored books on the page
    var bookList = document.getElementById("bookList");
    books.forEach(function(book) {
        var cardContainer = document.createElement("div");
        cardContainer.classList.add("col-md-4", "mb-3");

        var card = document.createElement("div");
        card.classList.add("card");

        var image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = book.image;
        image.alt = "Book Image";

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        var writerDiv = document.createElement("div");
        var titleDiv = document.createElement("div");

        var writer = document.createElement("h5");
        writer.classList.add("card-title");
        writer.textContent = book.writer;

        var title = document.createElement("h6");
        title.classList.add("card-subtitle", "mb-2", "text-muted");
        title.textContent = book.title;

        writerDiv.appendChild(writer);
        titleDiv.appendChild(title);

        cardBody.appendChild(writerDiv);
        cardBody.appendChild(titleDiv);
        card.appendChild(image);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);
        bookList.appendChild(cardContainer);
    });
});
