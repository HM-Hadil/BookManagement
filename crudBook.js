document.addEventListener("DOMContentLoaded", function() {
    // Retrieve stored books from local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];

    // Display stored books on the page
    var bookList = document.getElementById("bookList");
    books.forEach(function(book, index) {
        var card = document.createElement("div");
        card.innerHTML = `
            <div class="card mb-3">
                <img src="${book.image}" class="card-img-top" alt="Book Image" style="max-width: 100px;">
                <div class="card-body">
                    <h5 class="card-title">${book.writer}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${book.title}</h6>
                    <button class="btn btn-danger" onclick="deleteBook(${index})">Delete</button>
                    <button class="btn btn-primary" onclick="updateBook(${index})">Update</button>
                </div>
            </div>
        `;
        bookList.appendChild(card);
    });
});

function deleteBook(index) {
    // Retrieve stored books from local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];

    // Remove the book at the specified index
    books.splice(index, 1);

    // Save the updated books array back to local storage
    localStorage.setItem("books", JSON.stringify(books));

    // Refresh the page to reflect the changes
    location.reload();
}

// Function to update book details and open the modal for updating
function updateBook(index) {
    // Retrieve stored books from local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];

    // Get the book object at the specified index
    var book = books[index];

    // Populate the modal form fields with the book details
    document.getElementById("updateWriter").value = book.writer;
    document.getElementById("updateTitle").value = book.title;
    document.getElementById("updateIndex").value = index;

    // Open the update modal
    $('#updateModal').modal('show');

    // Add event listener for file input change
    document.getElementById("updateImage").addEventListener("change", function(event) {
        var file = event.target.files[0];
        if (file) {
            // Read the file as a data URL
            var reader = new FileReader();
            reader.onload = function(e) {
                // Set the data URL as the src attribute of the image preview
                document.getElementById("imagePreview").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

function saveUpdatedBook() {
    // Retrieve stored books from local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];

    // Get the updated book details from the form
    var index = document.getElementById("updateIndex").value;
    var writer = document.getElementById("updateWriter").value;
    var title = document.getElementById("updateTitle").value;

    // Update the book object in the array
    books[index].writer = writer;
    books[index].title = title;

    // Save the updated books array back to local storage
    localStorage.setItem("books", JSON.stringify(books));

    // Refresh the page to reflect the changes
    location.reload();
}