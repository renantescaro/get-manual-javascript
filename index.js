
window.onload = function(){
    
    var dvRetorno = document.getElementById('dvRetorno');
    
    var get = new XMLHttpRequest();

    get.open("GET", "https://viacep.com.br/ws/01001000/json/", true);

    get.send();

    get.onreadystatechange = function(){
    
        if (get.readyState == 4 && get.status == 200) {
        
            dvRetorno.innerText = get.responseText;
        }
    }
}
