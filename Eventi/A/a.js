const button = document.getElementById("myButton");

button.addEventListener('mouseover', function(){
    button.style.backgroundColor = "green";
});

button.addEventListener('mouseout', function(){
    button.style.backgroundColor = "blue";
});