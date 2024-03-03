
//retrieve the data from form 
/**function getBook(){
    var formData=[];
    formData['writer']=document.getElementById('writer').value;
    formData['title']=document.getElementById('title').value;
    formData['image']=document.getElementById('image').value;
    return formData;


}**/
//insert data
function addBooks(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    var writer = document.getElementById("writer").value;
    var title = document.getElementById("title").value;
    var imageInput = document.getElementById("image");
    var image = null;
    console.log("Form submitted!"); 
    if (imageInput.files.length > 0) {
        // Read the image file as a data URL
        var reader = new FileReader();
        reader.readAsDataURL(imageInput.files[0]);
        reader.onload = function () {
            // Store the data URL in local storage
            var book = {
                writer: writer,
                title: title,
                image: reader.result // Data URL of the image
            };

            // Get the existing books array from local storage
            var books = JSON.parse(localStorage.getItem("books")) || [];

            // Add the new book to the array
            books.push(book);

            // Save the updated books array back to local storage
            localStorage.setItem("books", JSON.stringify(books));
            window.location.href = "index.html";
            // Optionally, redirect to another page after adding the book
            // window.location.href = "anotherPage.html";
        };
    }
}
