alert('Hello World');

// axios.get('http://www.thecolorapi.com/id?hex=24B1E0')
//     .then( function(response) {
//         aler(response.hex.body);
//     }).catch(function(err) {
//         console.log(err)
//     });

// this thing isn't working...will come back to fix it


// I need to understand what this snippet of code is
document.getElementById('newComment').addEventListener('submit', e => {
    e.preventDefault();
    let comment = this.serializeArray()
    
    axios.post('/user', comment).then(function(response) {
        console.log(response);
    }).catch(function (error) {
        console.log(response);
        alert('ERROR FOUND : UNABLE TO SAVE YOUR COMMENT');
    });
});


//Dectecting the click event on commentId button
document.querySelector('.delete-comment').addEventListener('click', (e => {
    console.log('click!')
    let commentId = this.getAttribute('data-comment-id')
    axios.delete(`/reviews/comments/${commentId}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
}))

// Removing a comment from the view
document.getElementById('delete-comment').addEventListener('click', (e) => {
    console.log('click!');
    let commentId = this.getAttribute('data-comment-id');
    axios.delete(`/reviews/comments/${commentId}`)
        .then( response => {
            console.log(response)
            comment = document.getElementById(commentId)
            comment.parentNode.removeChild(comment); // removed comment 
        })
        .catch( error => {
            console.log(error);
            alert('ERROR FOUND : UNABLE TO DELETE COMMENT');
        });
})

// Code to add the comment to the top of the stack of comments
axios.post('/user', comment)
    .then(function (response) {
        console.log(response);
        this.reset();
        document.getElementById('comments').prepend(
            `
            <div class="card" id="${this._id}">
                <div class="card-block">
                    <h4 class="card-title">${response.title}</h4>
                    <p class="card-text">${response.content}</p>
                    <p><button class="btn btn-link" id="deleteComment" data-comment-id=${response._id}>Delete</button></p>
            </div>
          </div>
          `
        );
    })