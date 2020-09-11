// comments section

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    axios.post(apiURL, {
      name: form.name.value,
      comment: form.comment.value
    })
    .then((response) => {
      displayComments()
      console.log(response.data);
    },(error) => {
      console.log(error);
    });
    defaultComments.unshift
    document.querySelector('form').reset()
    // displayComments(defaultComments); // users
})

// parentfunction

// axios sprint 3

let apiURL = ('https://project-1-api.herokuapp.com/comments/?api_key=60423142-f57d-4f8d-9873-e1ff551f819f');

let defaultComments = [];

window.onload = generateComment()

function displayComments() {
  document.querySelector('.comments__container-posted').innerHTML = '';
    generateComment();
  }

  function generateComment() {

    axios.get(apiURL)
      .then(response => {
    response.data.forEach((response) => {

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
  .catch(error => {
    console.log(error)
  })
  } 

displayComments(defaultComments);
// displayComments(users);

