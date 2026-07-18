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
    