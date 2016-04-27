function generaSalones(lista){

//var salones = ""<div id=\"O-1\" class=\"span12\"> <\/div>\r\n";

var salon = [];

for(var i = 1; i < lista.length; i++){
  salon[i] = farma[i]['salon'];
  
}

var room = unique(salon);

return room;
}


function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}
