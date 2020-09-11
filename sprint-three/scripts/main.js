// comments section

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let recentComment = {}
    recentComment.name = e.target.name.value;
    recentComment.comment = e.target.comment.value;
    defaultComments.push
    // defaultComments.unshift(recentComment) // users.unshift
    document.querySelector('form').reset()
    displayComments(defaultComments); // users
})

// axios sprint 3

let apiURL = ('https://project-1-api.herokuapp.com/comments/?api_key=60423142-f57d-4f8d-9873-e1ff551f819f');

let defaultComments = [];

axios.get(apiURL)
.then((response) => {
defaultComments = response.data;
});
// console.log(defaultComments)

getUsersInfo();

axios.post(apiURL, {
  name: 'Zemen Teshome',
  comment: 'Hey there',
  // timestamp: getDate(),
})
.then((response) => {
  console.log(response.data);
},(error) => {
  console.log(error);
});


// let users = [
//     {
//         name: 'Michael Lyons',
//         timestamp: '12/18/2018',
//         comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
   
// },
//     {
//         name: 'Gary Wong',
//         timestamp: '12/12/2018',
//         comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
    
// },
//     {
//         name: 'Theodore Duncan',
//         timestamp: '11/15/2018',
//         comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
      
//   }
// ];

function getDate() {
  let time = document.querySelector('.comments__date')
  time.firstChild.nodeValue = new Date().toLocaleDateString(undefined, {
    month : '2-digit',  
    day : '2-digit',
    year : 'numeric'
  })
  
  }
  document.body.addEventListener('submit', getDate);


function displayComments(commentsArray) {
  document.querySelector('.comments__container-posted').innerHTML = '';
  commentsArray.forEach(userComment => {

    generateComment(userComment);
  })
}

  function generateComment(userInput) {

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
    name.innerText = userInput.name;
    commentsDisplay.appendChild(name);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let timestamp = document.createElement('p');
    timestamp.classList.add('comments__date');
    timestamp.innerText = userInput.timestamp;
    commentsDisplay.appendChild(timestamp);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let comment = document.createElement('p');
    comment.classList.add('comments__post')
    comment.innerText = userInput.comment;
    commentsDisplay.appendChild(comment);
    document.body.querySelector('.comments__container-posted').appendChild(commentsDisplay);
}

displayComments(defaultComments);
// displayComments(users);

