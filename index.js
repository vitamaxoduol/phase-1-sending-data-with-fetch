// Add your code here
// const init = () => {

// }
// document.addEventListener('DOMContentLoaded', init);

// let name = "Steve"
// let email = "steve@steve.com"

function submitData(name, email) {



const USER_URL = 'http://localhost:3000/users';
const userData = {
    name: name,
    email: email
};

// configuration for the fetch
const config = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(userData)
};

// make the post request using fetch
return fetch(USER_URL, config)
.then(response => response.json())
.then(data => {
    // Append the new id value to the DOM
    
    document.body.innerHTML += `<p>New user created with ID: ${data.id}</p>`
})
// Append the error message to the DOM
.catch(error => {
    document.body.innerHTML += error.message;
})


}
submitData('name', 'email')