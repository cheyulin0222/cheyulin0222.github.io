var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat-icon.jpeg') {
      myImage.setAttribute ('src','images/cat2.jpg');
    } else {
      myImage.setAttribute ('src','images/cat-icon.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Cat is cool, ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Cat is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }



 
  
  