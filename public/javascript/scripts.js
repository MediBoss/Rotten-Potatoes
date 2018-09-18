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

document.getElementById("newComment").addEventListener("submit", (e) => {
    // prevent the default form behavior
    // e.preventDefault();
    // // serialize the form data into an object
    // let comment = this.serializeArray()
    // // use axios to initialize a post request and send in the form data

    console.log('poop');


    // axios.post('/user', comment)
    //   .then(function (response) {
    //     // wait for the success response from the server
    //     console.log(response);
    //     // remove the information from the form
    //     // display the data as a new comment on the page
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     // handle any errors
    //     alert('There was a problem saving your comment. Please try again.')
    //   });
});

// function addComment() {
//     let formElements = document.getElementById("newComment").elements;
//     let comment = {};

//     for (var i = 0; i < formElements.length; i++) {
//         if (formElements[i].type != "submit") //we dont want to include the submit-buttom
//             comment[formElements[i].name] = formElements[i].value;
        
//     }

//     if (comment["content"] == ""){
//         alert("ERROR FOUND : EMPTY COMMENT CONTENT");
//         return;
//     }
//     console.log(comment['movieId']);
//     axios.post(`/movies/${comment['movieId']}/reviews/comments'`, comment).then(function(response) {
//         let id = String(response.data.comment._id).slice(-8);
//         document.getElementById("newComment").reset();
//         document.getElementById("comments").innerHTML = `<div class="panel panel-default" id= "${response.data.comment._id}">
//             <div class="panel-body">
//                 <p>${response.data.comment.content}</p>
//             </div>
//     </div>
//     ` + document.getElementById("comments").innerHTML;
//     });

// }

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