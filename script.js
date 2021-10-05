const form = document.getElementById('form');




form.addEventListener('submit', function (e) {


    e.preventDefault();


    const email = document.getElementById('email');
    var message = document.querySelector('.error');
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email.value);
    if (email.value === '') {
        message.innerText = 'OOps, please add your email!';
        message.style.visibility = 'visible';

    }
    else if (!regex.test(email.value)) {
        message.innerText = 'Oops, please check your email!';
        message.style.visibility = 'visible';

    }
    else {
        message.innerText = '';
        message.style.visibility = 'hidden';
        form.submit();
    }

});


/* email validation regex

/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

*/


