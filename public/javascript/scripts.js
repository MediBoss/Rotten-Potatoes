
window.onload = function() {

    // we get the form from the handlebard/html form
    let newCommentForm = document.getElementById("newComment"); 
    document.getElementById("newComment").addEventListener("submit", e => {

        e.preventDefault();

        // DONT USE serializeArray(), it returns an arrya but we want JSON
        let comment = $(newCommentForm).serialize();

        // use axios to initialize a post request and send in the form data
        axios.post(`/movies/${comment.movieId}/reviews/comments`, comment)
        .then(function (response) {

            // we get the comment on a JSON format from the response
            let newComment = response.data.comment;
            newCommentForm.reset();

            
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
            alert('There was a problem saving your comment. Please try again.')
        });
    });

};