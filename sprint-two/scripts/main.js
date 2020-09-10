// comments section

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let recentComment = {}
    recentComment.name = e.target.name.value;
    recentComment.comment = e.target.comment.value;
    users.push(recentComment)
    // console.log(users);
    // console.log(recentComment);
    // users.unshift(recentComment);
    generateComment(recentComment);
    // insertBefore(userComment);
    // clearComment()
    document.querySelector('form').reset()

    commentsPostedArray();
    // console.log('form submitted')
})
// function clearComment() {
//   document.querySelector('.comments__displayed').innerHTML = '';
// }
// function commentTop() {
//   users.slice().reverse().forEach((item) => generateComment(item));
// }

function parentFunction() {

  let commentDiv = document.createElement('main');
  commentDiv.classList.add('main');
  let commentDivSib = document.querySelector('comments__displayed')
  let commentDivParent = document.querySelector('comments');
  commentDivParent.parentNode.insertBefore(commentDiv, commentDivSib);

  commentsPostedArray();
}

function commentsPostedArray() {
  document.querySelector('comments') = '';
  users
  .slice()
  .reverse()
  .forEach((element) => generateComment(element));
}

let users = [
    {
        name: 'Michael Lyons',
        timestamp: '12/18/2018',
        comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
   
},
    {
        name: 'Gary Wong',
        timestamp: '12/12/2018',
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!',
    
},
    {
        name: 'Theodore Duncan',
        timestamp: '11/15/2018',
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
      
  }
];

function displayComment(commentsArray) {
  commentsArray.forEach(userComment => {

    generateComment(userComment);
  })
}

  function generateComment(userInput) {
    let main = document.createElement('main');
    main.classList.add('main');

    let section = document.createElement('section');
    section.classList.add('comments');

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
    document.body.querySelector('main').appendChild(commentsDisplay);
}

displayComment(users);

