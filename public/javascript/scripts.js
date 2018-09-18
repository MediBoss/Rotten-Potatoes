// alert('Hello World');

// axios.get('http://www.thecolorapi.com/id?hex=24B1E0')
//     .then( function(response) {
//         aler(response.hex.body);
//     }).catch(function(err) {
//         console.log(err)
//     });

// this thing isn't working...will come back to fix it

// Shout out to Lucia Reynoso for this snipet of code right below...
let currentUrl = new URL(window.location);
let currentPath = currentUrl.pathname.split('/');


//This code waits for a submition of a new comment
document.getElementById('newComment').addEventListener('submit', e => {

    e.preventDefault();
    let comment = $(document.getElementById('newComment')).serializeArray()
    console.log(comment);

    axios.post(`/movies/${currentPath[2]}/reviews/${currentPath[4]}/comments`, comment).then(function(response) {
        console.log(response);
        document.getElementById('newComment').reset(); 
        $(document.getElementById('comments')).prepend(
        `
                <div class="card">
                <div class="card-block">
                  <p class="card-text">${response.data.comment.content}</p>
                    <p>
                        <form method="POST" action="/reviews/comments/${response.data.comment._id}?_method=DELETE">
                        <button class="btn btn-link" type="submit">Delete</button>
                        </form>
                    </p>
                </div>
                </div>
        `
                    );
    }).catch(function (error) {
        console.log(error);
        alert('ERROR FOUND : UNABLE TO SAVE YOUR COMMENT');
    });
});


//Dectecting the click event on commentId button
// document.querySelector('.delete-comment').addEventListener('click', (e => {
//     console.log('click!')
//     let commentId = this.getAttribute('data-comment-id')
//     axios.delete(`/reviews/comments/${commentId}`)
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }))

// Removing a comment from the view
// document.getElementById('delete-comment').addEventListener('click', (e) => {
//     console.log('click!');
//     let commentId = this.getAttribute('data-comment-id');
//     axios.delete(`/reviews/comments/${commentId}`)
//         .then( response => {
//             console.log(response)
//             comment = document.getElementById(commentId)
//             comment.parentNode.removeChild(comment); // removed comment 
//         })
//         .catch( error => {
//             console.log(error);
//             alert('ERROR FOUND : UNABLE TO DELETE COMMENT');
//         });
// })

// Code to add the comment to the top of the stack of comments
// axios.post('/user', comment)
//     .then(function (response) {
//         console.log(response);
//         this.reset(); //removes the data from the data in oreder to be displayed
//         document.getElementById('comments').prepend(
//             `
//             <div class="card">
//             <div class="card-block">
//               <p class="card-text">${response.content}</p>
//               <p>
//                  <form method="POST" action="/reviews/comments/${response._id}?_method=DELETE">
//                    <button class="btn btn-link" type="submit">Delete</button>
//                  </form>
//               </p>
//             </div>
//           </div>
//           `
//         );
//     })