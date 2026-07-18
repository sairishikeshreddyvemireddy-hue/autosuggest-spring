var users = [
    {
        "name": "mahesh",
        "gender": "male",
        "image": "mahesh.jpg",
        "email": "maheshbabu@vnrvjiet.in"
    },
       { "name": "jhon",
        "gender": "female",
        "image": "john.png",
        "email": "jhon@example.com"
}
]

var id = 0;

function toggleUser() {
    id = (id+1)%2;

    var userImage = document.getElementById("userImage");
    userImage.src = users[id].image;
    var name = document.getElementById("name");
    name.innerHTML = users[id].name;
    var email = document.getElementById("email");
    email.innerHTML = users[id].email;
    var gender = document.getElementById("gender");
    gender.innerHTML = users[id].gender;
}
    
function randomUser() {
    fetch('https://randomuser.me/api/')
        .then(function(response) {
            return response.json();
            
        })
        .then(function(data) {
            var user = data.results[0];
            var userImage = document.getElementById("userImage");
            userImage.src = user.picture.large;
            var name = document.getElementById("name");
            name.innerHTML = user.name.first + " " + user.name.last;
            var email = document.getElementById("email");
            email.innerHTML = user.email;
            var gender = document.getElementById("gender");
            gender.innerHTML = user.gender;
        }); 
}
