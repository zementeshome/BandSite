// comments section

const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    axios.post(apiURL, {
      name: form.name.value,
      comment: form.comment.value
    })
    .then((response) => {
      clearComments()
      generateComment()
      console.log(response.data);
    },(error) => {
      console.log(error);
    });
    // emptyInput()
    document.querySelector('form').reset()
})

// axios sprint 3

let apiURL = ('https://project-1-api.herokuapp.com/comments/?api_key=bb318ef9-e40b-4118-b16d-03eabed8d71b');

let defaultComments = [];

// function emptyInput() {
//   let x;
//   let y;
//   x = document.getElementById('name').value;
//   y = document.getElementById('comment').value; {
//     if (x + y == "") {
//       alert('enter a valid name and comment');
//       return false;
//     };
//   }

window.onload = generateComment()

function clearComments() {
  let removeComment = document.querySelector('.comments__container-posted');
  while (removeComment.firstChild) {
  removeComment.removeChild(removeComment.firstChild);
    }
  }

  function generateComment() {

    axios.get(apiURL)
      .then(response => {
      response.data.sort(function (a, b) {
      return a.timestamp - b.timestamp
    }).reverse().forEach((response) => {
      // console.log('comment')
    let commentsDisplay = document.createElement('div');
    commentsDisplay.classList.add('comments__displayed');

    let underline = document.createElement('span');
    underline.classList.add('comments__underline');
    commentsDisplay.appendChild(underline);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let circle = document.createElement('div');
    circle.classList.add('comments__circle');
    commentsDisplay.appendChild(circle);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let name = document.createElement('h5');
    name.classList.add('comments__username');
    name.innerText = response.name;
    commentsDisplay.appendChild(name);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let timestamp = document.createElement('p');
    timestamp.classList.add('comments__date');
    timestamp.innerText = response.timestamp;
    commentsDisplay.appendChild(timestamp);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let comment = document.createElement('p');
    comment.classList.add('comments__post')
    comment.innerText = response.comment;
    commentsDisplay.appendChild(comment);
    document.body.querySelector('.comments__container-posted').appendChild(commentsDisplay)
    
    let time = new Date(response.timestamp); 
    timestamp.innerText = time.toLocaleDateString();

})
})
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })
    // .catch(function (error) {
    //   console.log(error.toJSON());
    // })
  // .catch(error => {
  //   console.log(error)
  // })
  } 

