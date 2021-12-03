var firebaseConfig = {
      apiKey: "AIzaSyCIOyRYN0-5AxkSjqyX382IBDOAqXKsp2w",
      authDomain: "letschatsocialweb.firebaseapp.com",
      databaseURL: "https://letschatsocialweb-default-rtdb.firebaseio.com",
      projectId: "letschatsocialweb",
      storageBucket: "letschatsocialweb.appspot.com",
      messagingSenderId: "917542985143",
      appId: "1:917542985143:web:f0eba5605f499604c71c32",
      measurementId: "G-4CLDTMBMFW"
    };

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";

function add_room()
{
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("room_name", room_name);
        
      window.location = "letschat_page.html";

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function addUser()
    {
        user_name = document.getElementById("user_name", user_name).value;
        localStorage.setItem("user_name", user_name);
        firebase.database().ref("/").child(user_name).update({
            purpose : "Adding User"
        });
      }
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "letschat_page.html";
      }
      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "letschat.html";
      }