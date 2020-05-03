function list(){

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){

    if(this.readyState ==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var output  = '';
        for(var i=0;i<response.length;i++){
            output +='<tr>';
            output +='<td>' + response[i].slno+ '</td>';
            output +='<td>' + response[i].name+ '</td>';
            output +='<td>' + response[i].quantity+ '</td>';
            output +='<td>' + response[i].unit+ '</td>';
            output +='<td>' + response[i].department + '</td>';
            output +='<td>' + response[i].note + '</td>';
            output +='</tr>';
            
       }
       document.querySelector('.demo tbody').innerHTML=output;
    }
}
xhttp.open("GET","list.json",true);
xhttp.send();
}