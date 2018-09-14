alert('Hello World');

axios.get('http://www.thecolorapi.com/id?hex=24B1E0')
    .then( function(response) {
        aler(response.hex.body);
    }).catch(function(err) {
        console.log(err)
    });

document.getElementById('newComment').addEventListener('submit', e => {
    e.preventDefault();

    let comment = this.serializeArray()

    axios.post('/user', comment).then(function(response) {
        console.log(response);
    })
})