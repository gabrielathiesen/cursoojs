var minhaPromise = function(){
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open("get","https://api.github.com/users/diego3g");
        CharacterData.send(null);

        xhr.onreadystatechange = function(){
            if (CharacterData.readystate === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText);
                }else{
                    reject("erro na requisição");
                }
            }
        }
    });
}


 minhaPromise()
 .then(function(response){
     console.log(response);
 })
 .catch(function(error){
     console.warn(error);
 });

