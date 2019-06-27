var xhr = new XMLHttpRequest();

xhr.open("get", "https://api.github.com/users/diego3g");
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readystate === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}