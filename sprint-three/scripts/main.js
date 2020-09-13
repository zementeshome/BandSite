// comments section

const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let config = { }
    if(form.comment.value !=""){
    config.name = form.name.value;
    config.comment = form.comment.value;
  }
    axios.post(
      apiURL, config)
    .then((response) => {
      clearComments()
      generateComment()
      console.log(response.data);
    },(error) => {
      console.log(error);
      if (error.response.status == 400) {
        console.log("Post body must have a 'comment' property and a 'name' property")
      }
    });
    document.querySelector('form').reset()
})

let apiURL = ('https://project-1-api.herokuapp.com/comments/?api_key=bb318ef9-e40b-4118-b16d-03eabed8d71b');

let defaultComments = [];

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

