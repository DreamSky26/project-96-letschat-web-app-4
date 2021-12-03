//firebase.initializeApp(firebaseConfig);

//function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       //firebase_message_id = childKey;
       //message_data = childData;
//Start code

//End code
    //} });  }); }
//getData();

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

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}