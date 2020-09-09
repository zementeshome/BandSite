// comments section

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('form').reset()
    // console.log('form submitted')
})

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
  commentsArray.forEach(comments => {

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
    name.innerText = comments.name;
    commentsDisplay.appendChild(name);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let timestamp = document.createElement('p');
    timestamp.classList.add('comments__date');
    timestamp.innerText = comments.timestamp;
    commentsDisplay.appendChild(timestamp);
    document.body.querySelector('main').appendChild(commentsDisplay);

    let comment = document.createElement('p');
    comment.classList.add('comments__post')
    comment.innerText = comments.comment;
    commentsDisplay.appendChild(comment);
    document.body.querySelector('main').appendChild(commentsDisplay);

  })
}

displayComment(users);

let items = [];

function newComment() {

  
  nameValue = document.getElementById('name').value;
  commentValue = document.getElementById('comment').value;
  users.push(nameValue, commentValue);
  document.body.querySelector('main').appendChild(commentsDisplay)
  //console.log(users);
}

newComment(items)

// newComment(nameValue, commentValue);


//   // let x = document.querySelector('comments__displayed')
//   users.push(document.getElementById('name').value);
//   users.push(document.getElementById('comment').value);

//   newComment.onclick
//   // access user input and push into user array then display comment
// }

// newComment(users)

//   document.getElementById('display').innerHTML =
//   document.getElementById('name').value
//   document.getElementById('display2').innerHTML =
//   document.getElementById('comment').value 

// comments section dom manipulation

// let main = document.createElement('main');
//   main.classList.add('main');

// let section = document.createElement('section');
//    section.classList.add('comments');

// let commentsDisplay = document.createElement('div');
// commentsDisplay.classList.add('comments__displayed');

// let commentsUnderline = document.createElement('span');
// commentsUnderline.classList.add('comments__underline');
// commentsDisplay.appendChild(commentsUnderline);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let circle = document.createElement('div');
// circle.classList.add('comments__circle');
// commentsDisplay.appendChild(circle);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let username = document.createElement('h5');
// username.classList.add('comments__username');
// username.innerText = 'Michael Lyons';
// commentsDisplay.appendChild(username);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let date = document.createElement('p');
// date.classList.add('comments__date');
// date.innerText = '12/18/2018';
// commentsDisplay.appendChild(date);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let post = document.createElement('p');
// post.classList.add('comments__post');
// post.innerText = 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
// commentsDisplay.appendChild(post);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let commentsUnderline2 = document.createElement('span');
// commentsUnderline2.classList.add('comments__underline');
// commentsDisplay.appendChild(commentsUnderline2);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let circle2 = document.createElement('div');
// circle2.classList.add('comments__circle');
// commentsDisplay.appendChild(circle2);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let username2 = document.createElement('h5');
// username2.classList.add('comments__username');
// username2.innerText = 'Gary Wong';
// commentsDisplay.appendChild(username2);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let date2 = document.createElement('p');
// date2.classList.add('comments__date');
// date2.innerText = '12/12/2018';
// commentsDisplay.appendChild(date2);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let post2 = document.createElement('p');
// post2.classList.add('comments__post');
// post2.innerText = 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
// commentsDisplay.appendChild(post2);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let commentsUnderline3 = document.createElement('span');
// commentsUnderline3.classList.add('comments__underline');
// commentsDisplay.appendChild(commentsUnderline3);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let circle3 = document.createElement('div');
// circle3.classList.add('comments__circle');
// commentsDisplay.appendChild(circle3);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let username3 = document.createElement('h5');
// username3.classList.add('comments__username');
// username3.innerText = 'Theodore Duncan';
// commentsDisplay.appendChild(username3);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let date3 = document.createElement('p');
// date3.classList.add('comments__date');
// date3.innerText = '11/15/2018';
// commentsDisplay.appendChild(date3);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let post3 = document.createElement('p');
// post3.classList.add('comments__post');
// post3.innerText = 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
// commentsDisplay.appendChild(post3);
// document.body.querySelector('main').appendChild(commentsDisplay);

// let commentsUnderline4 = document.createElement('span');
// commentsUnderline4.classList.add('comments__underline');
// commentsDisplay.appendChild(commentsUnderline4);
// document.body.querySelector('main').appendChild(commentsDisplay);




// function newComment() {
//   // access user input and push into user array then display comment
// }

// function displayComment() {


//   document.getElementById('display').innerHTML =
//   document.getElementById('name').value
//   document.getElementById('display2').innerHTML =
//   document.getElementById('comment').value 

// };
