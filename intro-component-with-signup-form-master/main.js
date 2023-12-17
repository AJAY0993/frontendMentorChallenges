const form = document.forms['subscription-form']
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})
function validateForm() {
    const fName = form['fName'].value;
    const lName = form['lName'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (fName === '') {
        form['fName'].classList.add('invalid')
        console.log('fname cant be empty')
    }
    if (lName === '') {
        form['lName'].classList.add('invalid')
        console.log('lname cant be empty')
    }
    if (!email.includes('@gmail')) {
        form['email'].classList.add('invalid')
        console.log('invalid emial')
    }
    if (password === '') {
        form['password'].classList.add('invalid')
        console.log('password cant be empty')
    }
}