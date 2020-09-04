// comment section

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.querySelector('form').reset()
    console.log('form submitted')
})