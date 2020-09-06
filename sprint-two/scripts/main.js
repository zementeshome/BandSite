// comments section

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('form').reset()
    // console.log('form submitted')
})

// comments section dom manipulation

//function commentsStyle() {

let main = document.createElement('main');
  main.classList.add('main');

let section = document.createElement('section');
   section.classList.add('comments');

let commentsDisplay = document.createElement('div');
commentsDisplay.classList.add('comments__displayed');

let commentsUnderline = document.createElement('span');
commentsUnderline.classList.add('comments__underline');
commentsDisplay.appendChild(commentsUnderline);
document.body.querySelector('main').appendChild(commentsDisplay);

let circle = document.createElement('div');
circle.classList.add('comments__circle');
commentsDisplay.appendChild(circle);
document.body.querySelector('main').appendChild(commentsDisplay);

let username = document.createElement('h5');
username.classList.add('comments__username');
username.innerText = 'Michael Lyons';
commentsDisplay.appendChild(username);
document.body.querySelector('main').appendChild(commentsDisplay);

let date = document.createElement('p');
date.classList.add('comments__date');
date.innerText = '12/18/2018';
commentsDisplay.appendChild(date);
document.body.querySelector('main').appendChild(commentsDisplay);

let post = document.createElement('p');
post.classList.add('comments__post');
post.innerText = 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
commentsDisplay.appendChild(post);
document.body.querySelector('main').appendChild(commentsDisplay);

let commentsUnderline2 = document.createElement('span');
commentsUnderline2.classList.add('comments__underline');
commentsDisplay.appendChild(commentsUnderline2);
document.body.querySelector('main').appendChild(commentsDisplay);

let circle2 = document.createElement('div');
circle2.classList.add('comments__circle');
commentsDisplay.appendChild(circle2);
document.body.querySelector('main').appendChild(commentsDisplay);

let username2 = document.createElement('h5');
username2.classList.add('comments__username');
username2.innerText = 'Gary Wong';
commentsDisplay.appendChild(username2);
document.body.querySelector('main').appendChild(commentsDisplay);

let date2 = document.createElement('p');
date2.classList.add('comments__date');
date2.innerText = '12/12/2018';
commentsDisplay.appendChild(date2);
document.body.querySelector('main').appendChild(commentsDisplay);

let post2 = document.createElement('p');
post2.classList.add('comments__post');
post2.innerText = 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
commentsDisplay.appendChild(post2);
document.body.querySelector('main').appendChild(commentsDisplay);

let commentsUnderline3 = document.createElement('span');
commentsUnderline3.classList.add('comments__underline');
commentsDisplay.appendChild(commentsUnderline3);
document.body.querySelector('main').appendChild(commentsDisplay);

let circle3 = document.createElement('div');
circle3.classList.add('comments__circle');
commentsDisplay.appendChild(circle3);
document.body.querySelector('main').appendChild(commentsDisplay);

let username3 = document.createElement('h5');
username3.classList.add('comments__username');
username3.innerText = 'Theodore Duncan';
commentsDisplay.appendChild(username3);
document.body.querySelector('main').appendChild(commentsDisplay);

let date3 = document.createElement('p');
date3.classList.add('comments__date');
date3.innerText = '11/15/2018';
commentsDisplay.appendChild(date3);
document.body.querySelector('main').appendChild(commentsDisplay);

let post3 = document.createElement('p');
post3.classList.add('comments__post');
post3.innerText = 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
commentsDisplay.appendChild(post3);
document.body.querySelector('main').appendChild(commentsDisplay);

let commentsUnderline4 = document.createElement('span');
commentsUnderline4.classList.add('comments__underline');
commentsDisplay.appendChild(commentsUnderline4);
document.body.querySelector('main').appendChild(commentsDisplay);


//}

//displayComment()

//}
// default comments

// let users = [
//     {
//         name: 'Michael Lyons',
//         timestamp: '12/18/2018',
//         comment: ['They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
//     ]
// },
//     {
//         name: 'Gary Wong',
//         timestamp: '12/12/2018',
//         comment: ['Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
//     ]
// },
//     {
//         name: 'Theodore Duncan',
//         timestamp: '11/15/2018',
//         comment: ['How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
//     ]
//   }
// ];
// // // added comments 

function commentsStyle() {

  let display = document.createElement('div');
  display.classList.add('comments__displayed');
  let underline = document.createElement('span');
  underline.classList.add('comments__underline');
  display.appendChild(underline);
  document.body.querySelector('main').appendChild(display)
  let profileCircle = document.createElement('div');
  profileCircle.classList.add('comments__circle');
  display.appendChild(profileCircle);
  document.querySelector('main').appendChild(display);
  let user = document.createElement('h5');
  user.classList.add('comments__username');
  display.appendChild(user);
  document.querySelector('main').appendChild(display);
  let commentPost = document.createElement('p');
  commentPost.classList.add('comments__post');
  display.appendChild(commentPost);
  document.body.querySelector('main').appendChild(display);

}

function displayComment() {


  document.getElementById('display').innerHTML =
  document.getElementById('name').value
  document.getElementById('display2').innerHTML =
  document.getElementById('comment').value 

};



// // if (whatever is in here is true, let it run)

// // $(function(){
// //     // run code when form is submitted
// //      $('form').on('submit', function(event) {
// //      // stop page from refreshing
// //      // event.preventDefault();
     
// //      //print value user put in the field
// //      const comment = $('submit').val();
// //      // if there is something in the input let it run
// //      if (comment !== '') {
// //      // add latest items of the list inside ul
// //      $('comments__displayed').append(comment);
// //      $('submit').val(''); 
// //  }
// // });
// // });



// // $(function(){
// //     $("#form").submit(function(e){
// //         // Create data object
// //         let data = {};
// //         data.name = $("#name").val();
// //         data.comment = $("#comment").val();
// //         // The url of your server-side script that handles the post submission
// //         let url = "index.html";
// //         $.POST(url, data)
// //         .done(function(response){
// //             // This code executes when the server returns a response
// //             // Do something with the response like adding the comment to the current list of comments
// //             // Example (if your response is HTML, better would be a JSON string):
// //             $("#comments").append(response);
// //         });
// //         e.preventDefault();
// //     });
// // });