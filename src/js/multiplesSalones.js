function llenarEventoSalon(data){

  var semana = {LUNES : 0, MARTES:1,MIERCOLES:2,JUEVES:3,VIERNES:4};
  var horas = {"7" : 0, "8":1,"9":2,"10":3,"11":4,"12":5,"13":6,"14":7,"15":8,"16":9,"17":10,"18":11,"19":12};

  for(var i = 0; i < data.length; i++){
    var  row = data[i];
    var materia = row.materia;
    var profesor = row.profesor;
    var dia = row.dia;
    var salonEdificio = row.salon.split("-");
    var edificio =  salonEdificio[0];
    var salon = salonEdificio[1];
    var hora = row.hora;
    var duracion = row.duracion;

    var num = 1 + i;
    var curso = materia + "</br>" + profesor;
    var evento = '<li class="tt-event btn-info" data-id="'+num+'" data-day="' + semana[dia] +'" data-start="' + horas[hora] +
                '" data-duration="'+duracion+'">'+ curso +'</li>';

    //html += evento;
    var cadena = '#salon'+salon + ' .tt-events';
    $(cadena).append(evento);
  }
}
