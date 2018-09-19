//listen for a form submit event
window.onload = function() {

    let newCommentForm = document.getElementById("newComment");
    document.getElementById("newComment").addEventListener("submit", e => {
        // prevent the default form behavior
        e.preventDefault();
        // serialize the form data into an object
        let comment = $(newCommentForm).serialize();
        // use axios to initialize a post request and send in the form data
        axios.post(`/movies/${comment.movieId}/reviews/comments`, comment)
        .then(function (response) {
            let newComment = response.data.comment;
            newCommentForm.reset();
            // display the data as a new comment on the page
            $('#comments').prepend(
            `
            <div class="card">
                <div class="card-block">
                <p class="card-text">${newComment.content}</p>
                <p>
                    <form method="POST" action="/reviews/comments/${newComment._id}?_method=DELETE">
                        <button class="btn btn-link" type="submit">Delete</button>
                    </form>
                </p>
                </div>
            </div>
            `
            );
        })
        .catch(function (error) {
            console.log(error);
            // handle any errors
            alert('There was a problem saving your comment. Please try again.')
        });
    });

};