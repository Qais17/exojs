 var xmlHttp = creatXmlHttpRequestObject();

 function createXmlHttpRequestObject() {
    var xmlHttp;
    try{
        xmlHttp = new XMLHttpRequest();
    } catch(e) {
            try{
                xmlHttp = new ActiveXObject(Micrsoft.xmlHttp);
            } catch(e) {
        alert("Error create xmlhttprequest");
    }
        if(!xmlHttp){
            alert("Error create xmlhttprequest");
        } else  
            return xmlHttp;
        }
    }

    function process() {

    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
        name = encodeURIComponent(document.getElementById('name').value);
        xmlHttp.open("GET", "ex1.php?name="+name, true);
        xmlHttp.onreadystatechange = handleResponse;
        xmlHttp.send(null);
    } else {
        setTimeout('process()', 1000);
    }
}
function handleResponce() {
    if(xmlHttp.readyState == 4) {
        if( xmlHttp.status == 200){
            response = xmlHttp.responseXML;
            xmlRoot = reponse.documentElement;
            message = xmlRoot.firstChild.data;

            document.getElementById("answer").innerHTML ='<span style="color: red">' + message + '</span>'

            setTimeout('process()', 1000);
        } else {
            alert('Erreur au niveau de la lecteur de la donnee')
        }
    }
}

