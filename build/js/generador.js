function llenarEvento(data){

  var semana = {LUNES : 0, MARTES:1,MIERCOLES:2,JUEVES:3,VIERNES:4};
  var horas = {"7" : 0, "8":1,"9":2,"10":3,"11":4,"12":5,"13":6,"14":7,"15":8,"16":9,"17":10,"18":11,"19":12};

  for(var i = 0; i < data.length; i++){
    var  row = data[i];
    var materia = row.materia;
    var profesor = row.profesor;
    var dia = row.dia;
    var salon = row.salon;
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

var data =[
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "FERNANDO IGUAZÚ RAMÍREZ ZAVALETA",
        "dia": "JUEVES",
        "salon": 1,
        "hora": 12,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "ÁLGEBRA SUPERIOR I",
        "profesor": "GLORIA GUADALUPE ANDABLO REYES",
        "dia": "JUEVES",
        "salon": 1,
        "hora": 10,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "ARMANDO SEPÚLVEDA LÓPEZ",
        "dia": "LUNES",
        "salon": 1,
        "hora": 8,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "GEOMETRÍA ANALÍTICA VECTORIAL",
        "profesor": "PATRICIA MANRÍQUEZ ZAVALA",
        "dia": "LUNES",
        "salon": 1,
        "hora": 10,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "FÍSICA I",
        "profesor": "JORGE ISIDRO ARANDA SÁNCHEZ",
        "dia": "LUNES",
        "salon": 1,
        "hora": 12,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "ÁLGEBRA SUPERIOR I",
        "profesor": "GLORIA GUADALUPE ANDABLO REYES",
        "dia": "MARTES",
        "salon": 1,
        "hora": 10,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "ARMANDO SEPÚLVEDA LÓPEZ",
        "dia": "MIERCOLES",
        "salon": 1,
        "hora": 8,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "GEOMETRÍA ANALÍTICA VECTORIAL",
        "profesor": "PATRICIA MANRÍQUEZ ZAVALA",
        "dia": "MIERCOLES",
        "salon": 1,
        "hora": 10,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "FÍSICA I",
        "profesor": "JORGE ISIDRO ARANDA SÁNCHEZ",
        "dia": "MIERCOLES",
        "salon": 1,
        "hora": 12,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "ARMANDO SEPÚLVEDA LÓPEZ",
        "dia": "VIERNES",
        "salon": 1,
        "hora": 8,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "FERNANDO IGUAZÚ RAMÍREZ ZAVALETA",
        "dia": "VIERNES",
        "salon": 1,
        "hora": 10,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "FÍSICA I",
        "profesor": "JORGE ISIDRO ARANDA SÁNCHEZ",
        "dia": "VIERNES",
        "salon": 1,
        "hora": 12,
        "seccion": 2,
        "duracion": 1
    },
    {
        "materia": "ÁLGEBRA SUPERIOR I",
        "profesor": "DAVID MEZA ALCÁNTARA",
        "dia": "JUEVES",
        "salon": 2,
        "hora": 10,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "LUIS MARIANO HERNÁNDEZ RAMÍREZ",
        "dia": "LUNES",
        "salon": 2,
        "hora": 10,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "GLORIA GUADALUPE ANDABLO REYES",
        "dia": "LUNES",
        "salon": 2,
        "hora": 8,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "ÁLGEBRA SUPERIOR I",
        "profesor": "DAVID MEZA ALCÁNTARA",
        "dia": "MARTES",
        "salon": 2,
        "hora": 10,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "LUIS MARIANO HERNÁNDEZ RAMÍREZ",
        "dia": "MIERCOLES",
        "salon": 2,
        "hora": 10,
        "seccion": 3,
        "duracion": 1
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "GLORIA GUADALUPE ANDABLO REYES",
        "dia": "MIERCOLES",
        "salon": 2,
        "hora": 8,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "LUIS MARIANO HERNÁNDEZ RAMÍREZ",
        "dia": "VIERNES",
        "salon": 2,
        "hora": 11,
        "seccion": 3,
        "duracion": 1
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "GLORIA GUADALUPE ANDABLO REYES",
        "dia": "VIERNES",
        "salon": 2,
        "hora": 8,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "ECUACIONES DIFERENCIALES ORDINARIAS II",
        "profesor": "FERNANDO GARIBAY BONALES",
        "dia": "JUEVES",
        "salon": 3,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "FÍSICA II, SECCIÓN 01",
        "profesor": "ALBERTO MENDOZA SUÁREZ",
        "dia": "JUEVES",
        "salon": 3,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO III",
        "profesor": "JORGE LUIS LÓPEZ LÓPEZ",
        "dia": "LUNES",
        "salon": 3,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "ECUACIONES DIFERENCIALES ORDINARIAS II",
        "profesor": "FERNANDO GARIBAY BONALES",
        "dia": "LUNES",
        "salon": 3,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "FÍSICA II, SECCIÓN 01",
        "profesor": "ALBERTO MENDOZA SUÁREZ",
        "dia": "LUNES",
        "salon": 3,
        "hora": 12,
        "duracion": 1
    },
    {
        "materia": "CÁLCULO IV",
        "profesor": "JOSÉ ANTONIO GONZÁLEZ CERVERA",
        "dia": "MARTES",
        "salon": 3,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "FÍSICA II, SECCIÓN 01",
        "profesor": "ALBERTO MENDOZA SUÁREZ",
        "dia": "MARTES",
        "salon": 3,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO III",
        "profesor": "JORGE LUIS LÓPEZ LÓPEZ",
        "dia": "MIERCOLES",
        "salon": 3,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO IV",
        "profesor": "JOSÉ ANTONIO GONZÁLEZ CERVERA",
        "dia": "MIERCOLES",
        "salon": 3,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO III",
        "profesor": "JORGE LUIS LÓPEZ LÓPEZ",
        "dia": "VIERNES",
        "salon": 3,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO IV",
        "profesor": "JOSÉ ANTONIO GONZÁLEZ CERVERA",
        "dia": "VIERNES",
        "salon": 3,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "ECUACIONES DIFERENCIALES ORDINARIAS I",
        "profesor": "ABDON CHOQUE",
        "dia": "JUEVES",
        "salon": 4,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "CURSO ESPECIAL DE MATEMÁTICAS",
        "profesor": "DAVID MEZA ALCÁNTARA",
        "dia": "JUEVES",
        "salon": 4,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO II",
        "profesor": "OSVALDO OSUNA",
        "dia": "LUNES",
        "salon": 4,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "ÁLGEBRA LINEAL I, SECCIÓN 01",
        "profesor": "LUIS VALERO ELIZONDO",
        "dia": "LUNES",
        "salon": 4,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "FÍSICA II, SECCIÓN 02",
        "profesor": "GABRIEL ARROYO CORREA",
        "dia": "LUNES",
        "salon": 4,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "FÍSICA II, SECCIÓN 02",
        "profesor": "GABRIEL ARROYO CORREA",
        "dia": "MARTES",
        "salon": 4,
        "hora": 10,
        "duracion": 1
    },
    {
        "materia": "CURSO ESPECIAL DE MATEMÁTICAS",
        "profesor": "DAVID MEZA ALCÁNTARA",
        "dia": "MARTES",
        "salon": 4,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO II",
        "profesor": "OSVALDO OSUNA",
        "dia": "MIERCOLES",
        "salon": 4,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "ÁLGEBRA LINEAL I, SECCIÓN 01",
        "profesor": "LUIS VALERO ELIZONDO",
        "dia": "MIERCOLES",
        "salon": 4,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "FÍSICA II, SECCIÓN 02",
        "profesor": "GABRIEL ARROYO CORREA",
        "dia": "MIERCOLES",
        "salon": 4,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO II",
        "profesor": "OSVALDO OSUNA",
        "dia": "VIERNES",
        "salon": 4,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "ECUACIONES DIFERENCIALES ORDINARIAS I",
        "profesor": "ABDON CHOQUE",
        "dia": "VIERNES",
        "salon": 4,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "FÍSICA III",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "JUEVES",
        "salon": 5,
        "hora": 8,
        "duracion": 1
    },
    {
        "materia": "TOPOLOGÍA DE CONJUNTOS",
        "profesor": "FERNANDO HERNÁNDEZ HERNÁNDEZ",
        "dia": "JUEVES",
        "salon": 5,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "DIDÁCTICA II",
        "profesor": "JOSÉ CARLOS CORTÉS ZAVALA",
        "dia": "JUEVES",
        "salon": 5,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO COMPLEJO",
        "profesor": "ALFREDO RAYA",
        "dia": "LUNES",
        "salon": 5,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "FÍSICA III",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "LUNES",
        "salon": 5,
        "hora": 8,
        "duracion": 1
    },
    {
        "materia": "USO DE NUEVAS TECNOLOGÍAS",
        "profesor": "JOSÉ CARLOS CORTÉS ZAVALA",
        "dia": "LUNES",
        "salon": 5,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "FÍSICA III",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "MARTES",
        "salon": 5,
        "hora": 8,
        "duracion": 1
    },
    {
        "materia": "TOPOLOGÍA DE CONJUNTOS",
        "profesor": "FERNANDO HERNÁNDEZ HERNÁNDEZ",
        "dia": "MARTES",
        "salon": 5,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "DIDÁCTICA II",
        "profesor": "JOSÉ CARLOS CORTÉS ZAVALA",
        "dia": "MARTES",
        "salon": 5,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO COMPLEJO",
        "profesor": "ALFREDO RAYA",
        "dia": "MIERCOLES",
        "salon": 5,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "FÍSICA III",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "MIERCOLES",
        "salon": 5,
        "hora": 8,
        "duracion": 1
    },
    {
        "materia": "USO DE NUEVAS TECNOLOGÍAS",
        "profesor": "JOSÉ CARLOS CORTÉS ZAVALA",
        "dia": "MIERCOLES",
        "salon": 5,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "FÍSICA III",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "VIERNES",
        "salon": 5,
        "hora": 8,
        "duracion": 1
    },
    {
        "materia": "USO DE NUEVAS TECNOLOGÍAS",
        "profesor": "JOSÉ CARLOS CORTÉS ZAVALA",
        "dia": "VIERNES",
        "salon": 5,
        "hora": 9,
        "duracion": 1
    },
    {
        "materia": "DIDÁCTICA II",
        "profesor": "JOSÉ CARLOS CORTÉS ZAVALA",
        "dia": "VIERNES",
        "salon": 5,
        "hora": 10,
        "duracion": 1
    },
    {
        "materia": "FÍSICA MODERNA",
        "profesor": "JOAQUÍN ESTEVEZ DELGADO",
        "dia": "JUEVES",
        "salon": 6,
        "hora": 7,
        "duracion": 2
    },
    {
        "materia": "ÓPTICA GEOMÉTRICA",
        "profesor": "GABRIEL ARROYO CORREA",
        "dia": "JUEVES",
        "salon": 6,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "GEOMETRÍA MODERNA",
        "profesor": "JORGE LUIS LÓPEZ LÓPEZ",
        "dia": "JUEVES",
        "salon": 6,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "ANÁLISIS MATEMÁTICO II",
        "profesor": "ANATOLI MERZON",
        "dia": "JUEVES",
        "salon": 6,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "ÓPTICA",
        "profesor": "MARY CARMEN Y MONSERRAT PEÑA GOMAR",
        "dia": "VIERNES",
        "salon": 6,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "TEORÍA DE LA MEDIDA",
        "profesor": "FERNANDO HERNÁNDEZ HERNÁNDEZ",
        "dia": "LUNES",
        "salon": 6,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "ÓPTICA FÍSICA I",
        "profesor": "MAURICIO ORTIZ GUTIÉRREZ",
        "dia": "LUNES",
        "salon": 6,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "FÍSICA MODERNA",
        "profesor": "JOAQUÍN ESTEVEZ DELGADO",
        "dia": "MARTES",
        "salon": 6,
        "hora": 7,
        "duracion": 2
    },
    {
        "materia": "ÓPTICA GEOMÉTRICA",
        "profesor": "GABRIEL ARROYO CORREA",
        "dia": "MARTES",
        "salon": 6,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "GEOMETRÍA MODERNA",
        "profesor": "JORGE LUIS LÓPEZ LÓPEZ",
        "dia": "MARTES",
        "salon": 6,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "ANÁLISIS MATEMÁTICO II",
        "profesor": "ANATOLI MERZON",
        "dia": "MARTES",
        "salon": 6,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "ÓPTICA",
        "profesor": "MARY CARMEN Y MONSERRAT PEÑA GOMAR",
        "dia": "MIERCOLES",
        "salon": 6,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "TEORÍA DE LA MEDIDA",
        "profesor": "FERNANDO HERNÁNDEZ HERNÁNDEZ",
        "dia": "MIERCOLES",
        "salon": 6,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "ÓPTICA FÍSICA I",
        "profesor": "MAURICIO ORTIZ GUTIÉRREZ",
        "dia": "VIERNES",
        "salon": 6,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "INTRODUCCIÓN A LAS CIENCIAS DE LOS MATERIALES",
        "profesor": "LUIS MARIANO HERNÁNDEZ RAMÍREZ",
        "dia": "JUEVES",
        "salon": 7,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO DE VARIACIONES",
        "profesor": "PETR ZHEVANDROV",
        "dia": "JUEVES",
        "salon": 7,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "TEORÍA ELECTROMAGNÉTICA",
        "profesor": "HÉCTOR IGOR PÉREZ AGUILAR",
        "dia": "LUNES",
        "salon": 7,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO DE VARIACIONES",
        "profesor": "PETR ZHEVANDROV",
        "dia": "LUNES",
        "salon": 7,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "TEMAS SELECTOS DE FÍSICA",
        "profesor": "JUAN ARTEAGA",
        "dia": "LUNES",
        "salon": 7,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "INTRODUCCIÓN A LAS CIENCIAS DE LOS MATERIALES",
        "profesor": "LUIS MARIANO HERNÁNDEZ RAMÍREZ",
        "dia": "MARTES",
        "salon": 7,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "TEMAS SELECTOS DE FÍSICA",
        "profesor": "JUAN ARTEAGA",
        "dia": "MARTES",
        "salon": 7,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "TEORÍA ELECTROMAGNÉTICA",
        "profesor": "HÉCTOR IGOR PÉREZ AGUILAR",
        "dia": "MIERCOLES",
        "salon": 7,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "TERMODINÁMICA",
        "profesor": "ORACIO NAVARRO",
        "dia": "MIERCOLES",
        "salon": 7,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "TERMODINÁMICA",
        "profesor": "ORACIO NAVARRO",
        "dia": "VIERNES",
        "salon": 7,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "FISICOQUÍMICA",
        "profesor": "NABANITA SCHUBERT",
        "dia": "JUEVES",
        "salon": 8,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "TEMAS SELECTOS DE FÍSICA",
        "profesor": "FRANCISCO ASTORGA SÁENZ",
        "dia": "JUEVES",
        "salon": 8,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS MATEMÁTICOS DE LA FÍSICA II",
        "profesor": "OLIVIER SARBACH",
        "dia": "JUEVES",
        "salon": 8,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "MECÁNICA TEÓRICA",
        "profesor": "EDUARDO SALVADOR TUTUTI HERNÁNDEZ",
        "dia": "LUNES",
        "salon": 8,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "RELATIVIDAD GENERAL I",
        "profesor": "JOAQUÍN ESTEVEZ DELGADO",
        "dia": "LUNES",
        "salon": 8,
        "hora": 7,
        "duracion": 2
    },
    {
        "materia": "ANÁLISIS FUNCIONAL",
        "profesor": "ELMAR WAGNER",
        "dia": "LUNES",
        "salon": 8,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "FISICOQUÍMICA",
        "profesor": "NABANITA SCHUBERT",
        "dia": "MARTES",
        "salon": 8,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "TEMAS SELECTOS DE FÍSICA",
        "profesor": "FRANCISCO ASTORGA SÁENZ",
        "dia": "MARTES",
        "salon": 8,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS MATEMÁTICOS DE LA FÍSICA II",
        "profesor": "OLIVIER SARBACH",
        "dia": "MARTES",
        "salon": 8,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "MECÁNICA TEÓRICA",
        "profesor": "EDUARDO SALVADOR TUTUTI HERNÁNDEZ",
        "dia": "MIERCOLES",
        "salon": 8,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "RELATIVIDAD GENERAL I",
        "profesor": "JOAQUÍN ESTEVEZ DELGADO",
        "dia": "MIERCOLES",
        "salon": 8,
        "hora": 7,
        "duracion": 2
    },
    {
        "materia": "ANÁLISIS FUNCIONAL",
        "profesor": "ELMAR WAGNER",
        "dia": "MIERCOLES",
        "salon": 8,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "DINÁMICA NO LINEAL Y CAOS",
        "profesor": "FRANCISCO GUZMÁN",
        "dia": "JUEVES",
        "salon": 9,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "CURSO ESPECIAL DE FÍSICA",
        "profesor": "UMBERTO COTTI",
        "dia": "JUEVES",
        "salon": 9,
        "hora": 14,
        "duracion": 2
    },
    {
        "materia": "ANÁLISIS MATEMÁTICO I",
        "profesor": "DAVID MEZA ALCÁNTARA",
        "dia": "LUNES",
        "salon": 9,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS MATEMÁTICOS DE LA FÍSICA I",
        "profesor": "THOMAS ZANNIAS",
        "dia": "LUNES",
        "salon": 9,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "TEORÍA DE CATEGORÍAS",
        "profesor": "LUIS VALERO ELIZONDO",
        "dia": "LUNES",
        "salon": 9,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "DINÁMICA NO LINEAL Y CAOS",
        "profesor": "FRANCISCO GUZMÁN",
        "dia": "MARTES",
        "salon": 9,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS MATEMÁTICOS DE LA FÍSICA III",
        "profesor": "AXEL WEBER",
        "dia": "MARTES",
        "salon": 9,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "CURSO ESPECIAL DE FÍSICA",
        "profesor": "UMBERTO COTTI",
        "dia": "MARTES",
        "salon": 9,
        "hora": 14,
        "duracion": 2
    },
    {
        "materia": "MECÁNICA CUÁNTICA II",
        "profesor": "FERNANDO IGUAZÚ RAMÍREZ ZAVALETA",
        "dia": "JUEVES",
        "salon": 9,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "ANÁLISIS MATEMÁTICO I",
        "profesor": "DAVID MEZA ALCÁNTARA",
        "dia": "MIERCOLES",
        "salon": 9,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "TEORÍA DE CATEGORÍAS",
        "profesor": "LUIS VALERO ELIZONDO",
        "dia": "MIERCOLES",
        "salon": 9,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS MATEMÁTICOS DE LA FÍSICA I",
        "profesor": "THOMAS ZANNIAS",
        "dia": "MIERCOLES",
        "salon": 9,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "MECÁNICA CUÁNTICA II",
        "profesor": "FERNANDO IGUAZÚ RAMÍREZ ZAVALETA",
        "dia": "VIERNES",
        "salon": 9,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "ANÁLISIS MATEMÁTICO I",
        "profesor": "DAVID MEZA ALCÁNTARA",
        "dia": "VIERNES",
        "salon": 9,
        "hora": 10,
        "duracion": 1
    },
    {
        "materia": "MÉTODOS MATEMÁTICOS DE LA FÍSICA III",
        "profesor": "AXEL WEBER",
        "dia": "VIERNES",
        "salon": 9,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "SOLUCION NUM EDO",
        "profesor": "FRANCISCO DOMINGUEZ MOTA",
        "dia": "LUNES",
        "salon": 10,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "SOLUCION NUM EDO",
        "profesor": "FRANCISCO DOMINGUEZ MOTA",
        "dia": "MIERCOLES",
        "salon": 10,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "MECÁNICA CUÁNTICA I",
        "profesor": "EDUARDO SALVADOR TUTUTI HERNÁNDEZ",
        "dia": "JUEVES",
        "salon": 13,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "DISEÑO Y DESARROLLO DE SOFTWARE I",
        "profesor": "CHRISTIAN MORALES ONTIVEROS",
        "dia": "JUEVES",
        "salon": 13,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "TEORÍAS DEL APRENDIZAJE",
        "profesor": "CHRISTIAN MORALES ONTIVEROS",
        "dia": "LUNES",
        "salon": 13,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS NUMÉRICOS",
        "profesor": "JOSÉ GERARDO TINOCO RUIZ",
        "dia": "LUNES",
        "salon": 13,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "MECÁNICA CUÁNTICA I",
        "profesor": "EDUARDO SALVADOR TUTUTI HERNÁNDEZ",
        "dia": "MARTES",
        "salon": 13,
        "hora": 9,
        "duracion": 2
    },
    {
        "materia": "DISEÑO Y DESARROLLO DE SOFTWARE I",
        "profesor": "CHRISTIAN MORALES ONTIVEROS",
        "dia": "MARTES",
        "salon": 13,
        "hora": 11,
        "duracion": 2
    },
    {
        "materia": "TEORÍAS DEL APRENDIZAJE",
        "profesor": "CHRISTIAN MORALES ONTIVEROS",
        "dia": "MIERCOLES",
        "salon": 13,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS NUMÉRICOS",
        "profesor": "JOSÉ GERARDO TINOCO RUIZ",
        "dia": "MIERCOLES",
        "salon": 13,
        "hora": 8,
        "duracion": 2
    },
    {
        "materia": "MÉTODOS NUMÉRICOS",
        "profesor": "JOSÉ GERARDO TINOCO RUIZ",
        "dia": "VIERNES",
        "salon": 13,
        "hora": 8,
        "duracion": 1
    },
    {
        "materia": "GEOMETRÍA ANALÍTICA VECTORIAL",
        "profesor": "PATRICIA MANRÍQUEZ ZAVALA",
        "dia": "JUEVES",
        "salon": 14,
        "hora": 10,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "AZUCENA CHÁVEZ GONZÁLEZ",
        "dia": "LUNES",
        "salon": 14,
        "hora": 10,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "GEOMETRÍA ANALÍTICA VECTORIAL",
        "profesor": "PATRICIA MANRÍQUEZ ZAVALA",
        "dia": "MARTES",
        "salon": 14,
        "hora": 10,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "MARTES",
        "salon": 14,
        "hora": 7,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "MIERCOLES",
        "salon": 14,
        "hora": 7,
        "seccion": 1,
        "duracion": 1
    },
    {
        "materia": "CÁLCULO I",
        "profesor": "AZUCENA CHÁVEZ GONZÁLEZ",
        "dia": "MIERCOLES",
        "salon": 14,
        "hora": 10,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "ÁLGEBRA SUPERIOR I",
        "profesor": "GLORIA GUADALUPE ANDABLO REYES",
        "dia": "VIERNES",
        "salon": 14,
        "hora": 10,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "FÍSICA GENERAL",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "VIERNES",
        "salon": 14,
        "hora": 7,
        "seccion": 1,
        "duracion": 1
    },
    {
        "materia": "COMPUTACIÓN I",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "JUEVES",
        "salon": 15,
        "hora": 12,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN I",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "LUNES",
        "salon": 15,
        "hora": 7,
        "seccion": 1,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN II",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "LUNES",
        "salon": 15,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN II",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "VIERNES",
        "salon": 15,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN I",
        "profesor": "EDGARDO MORALES ONTIVEROS",
        "dia": "JUEVES",
        "salon": 16,
        "hora": 7,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "BASE DE DATOS",
        "profesor": "KARINA MARIELA FIGUEROA MORA",
        "dia": "JUEVES",
        "salon": 16,
        "hora": 13,
        "duracion": 2
    },
    {
        "materia": "ALGORITMOS",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "JUEVES",
        "salon": 16,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN I",
        "profesor": "KARINA MARIELA FIGUEROA MORA",
        "dia": "LUNES",
        "salon": 16,
        "hora": 14,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "COMPUTABILIDAD",
        "profesor": "KARINA MARIELA FIGUEROA MORA",
        "dia": "LUNES",
        "salon": 16,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "GEOMETRÍA COMPUTACIONAL I",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "LUNES",
        "salon": 16,
        "hora": 10,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN I",
        "profesor": "EDGARDO MORALES ONTIVEROS",
        "dia": "MARTES",
        "salon": 16,
        "hora": 7,
        "seccion": 3,
        "duracion": 2
    },
    {
        "materia": "BASE DE DATOS",
        "profesor": "KARINA MARIELA FIGUEROA MORA",
        "dia": "MARTES",
        "salon": 16,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "ALGORITMOS",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "MARTES",
        "salon": 16,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN I",
        "profesor": "KARINA MARIELA FIGUEROA MORA",
        "dia": "MIERCOLES",
        "salon": 16,
        "hora": 14,
        "seccion": 2,
        "duracion": 2
    },
    {
        "materia": "COMPUTABILIDAD",
        "profesor": "KARINA MARIELA FIGUEROA MORA",
        "dia": "MIERCOLES",
        "salon": 16,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "GEOMETRÍA COMPUTACIONAL I",
        "profesor": "HÉCTOR TEJEDA VILLELA",
        "dia": "VIERNES",
        "salon": 16,
        "hora": 12,
        "duracion": 2
    },
    {
        "materia": "COMPUTACIÓN I",
        "profesor": "KARINA MARIELA FIGUEROA MORA",
        "dia": "VIERNES",
        "salon": 16,
        "hora": 14,
        "seccion": 2,
        "duracion": 1
    },
    {
        "materia": "LABORATORIO DE FÍSICA GENERAL, SECCIÓN 01",
        "profesor": "GABRIEL ARROYO CORREA",
        "dia": "LUNES",
        "salon": 17,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "LAB FÍSICA GENERAL, SECCIÓN 02",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "MIERCOLES",
        "salon": 17,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "LAB FÍSICA GENERAL, SECCIÓN 03",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "VIERNES",
        "salon": 17,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "LABORATORIO DE ÓPTICA I",
        "profesor": "MAURICIO ORTIZ GUTIÉRREZ",
        "dia": "JUEVES",
        "salon": 18,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "LABORATORIO DE ÓPTICA I",
        "profesor": "MAURICIO ORTIZ GUTIÉRREZ",
        "dia": "MARTES",
        "salon": 18,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "ELECTRÓNICA I",
        "profesor": "MARY CARMEN Y MONSERRAT PEÑA GOMAR",
        "dia": "JUEVES",
        "salon": 19,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "LAB DE ELECTROMAGNETISMO",
        "profesor": "JOSÉ VEGA CABRERA",
        "dia": "JUEVES",
        "salon": 19,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "CIRCUITOS DIGITALES",
        "profesor": "JOSÉ MISAEL VIEYRA RÍOS",
        "dia": "JUEVES",
        "salon": 19,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "ELECTRÓNICA I",
        "profesor": "MARY CARMEN Y MONSERRAT PEÑA GOMAR",
        "dia": "MARTES",
        "salon": 19,
        "hora": 16,
        "duracion": 2
    },
    {
        "materia": "CIRCUITOS DIGITALES",
        "profesor": "JOSÉ MISAEL VIEYRA RÍOS",
        "dia": "MARTES",
        "salon": 19,
        "hora": 16,
        "duracion": 2
    }
];

var farma = [
  {
    "materia": "MATEMÀTICAS II",
    "profesor": "QFB. JOSÉ ANTONIO HERRERA VARGAS",
    "dia": "LUNES",
    "salon": "N-1",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 1
  },
  {
    "materia": "FISICOQUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "LUNES",
    "salon": "N-1",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 1
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "LUNES",
    "salon": "N-1",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 1
  },
  {
    "materia": "QUÍMICA INORGÀNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "LUNES",
    "salon": "N-1",
    "horario": "8-9",
    "hora": 8,
    "FINAL": 9,
    "duracion": 1,
    "SECCION": 1
  },
  {
    "materia": "MATEMÀTICAS II",
    "profesor": "QFB. JOSÉ ANTONIO HERRERA VARGAS",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 1
  },
  {
    "materia": "FISICOQUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "MARTES",
    "salon": "K-2",
    "horario": "11-13",
    "hora": 11,
    "FINAL": 13,
    "duracion": 2,
    "SECCION": 1
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "MARTES",
    "salon": "I-4",
    "horario": "13-14",
    "hora": 13,
    "FINAL": 14,
    "duracion": 1,
    "SECCION": 1
  },
  {
    "materia": "QUÍMICA INORGÀNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 1
  },
  {
    "materia": "MATEMÀTICAS II",
    "profesor": "QFB. JOSÉ ANTONIO HERRERA VARGAS",
    "dia": "MIERCOLES",
    "salon": "N-1",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 1
  },
  {
    "materia": "FISICOQUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "MIERCOLES",
    "salon": "N-1",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 1
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "MIERCOLES",
    "salon": "N-1",
    "horario": "7-8",
    "hora": 7,
    "FINAL": 8,
    "duracion": 1,
    "SECCION": 1
  },
  {
    "materia": "QUÍMICA INORGÀNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "MIERCOLES",
    "salon": "N-1",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 1
  },
  {
    "materia": "MATEMÀTICAS II",
    "profesor": "QFB. JOSÉ ANTONIO HERRERA VARGAS",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 1
  },
  {
    "materia": "FISICOQUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 1
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 1
  },
  {
    "materia": "QUÍMICA INORGÀNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 1
  },
  {
    "materia": "MATEMÀTICAS II",
    "profesor": "QFB. JOSÉ ANTONIO HERRERA VARGAS",
    "dia": "VIERNES",
    "salon": "N-1",
    "horario": "10-11",
    "hora": 10,
    "FINAL": 11,
    "duracion": 1,
    "SECCION": 1
  },
  {
    "materia": "FISICOQUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 1
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "VIERNES",
    "salon": "N-1",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 1
  },
  {
    "materia": "QUÍMICA INORGÀNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "VIERNES",
    "salon": "N-1",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 1
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. RUBEN CHAVEZ RIVERA",
    "dia": "LUNES",
    "salon": "O-7",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 2
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "LUNES",
    "salon": "N-1",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 2
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. ULISES HUERTA SILVA",
    "dia": "LUNES",
    "salon": "K-3",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 2
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MARTES",
    "salon": "N-1",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 2
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. RUBEN CHAVEZ RIVERA",
    "dia": "MARTES",
    "salon": "O-9",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 2
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "MARTES",
    "salon": "N-1",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 2
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. ULISES HUERTA SILVA",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MIERCOLES",
    "salon": "O-8",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 2
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. RUBEN CHAVEZ RIVERA",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "MIERCOLES",
    "salon": "O-8",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 2
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. ULISES HUERTA SILVA",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. RUBEN CHAVEZ RIVERA",
    "dia": "JUEVES",
    "salon": "O-7",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 2
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. ULISES HUERTA SILVA",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "VIERNES",
    "salon": "K-1",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 2
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. RUBEN CHAVEZ RIVERA",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 2
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. ULISES HUERTA SILVA",
    "dia": "VIERNES",
    "salon": "I-6",
    "horario": "10-13",
    "hora": 10,
    "FINAL": 13,
    "duracion": 3,
    "SECCION": 2
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "M.C. GABINO ESTEVEZ DELGADO",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "LUNES",
    "salon": "I-2",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 3
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "LUNES",
    "salon": "N-2",
    "horario": "18-20",
    "hora": 18,
    "FINAL": 20,
    "duracion": 2,
    "SECCION": 3
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "POR CONFIRMAR",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "M.C. GABINO ESTEVEZ DELGADO",
    "dia": "MARTES",
    "salon": "I-5",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 3
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "MARTES",
    "salon": "N-2",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 3
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MARTES",
    "salon": "N-2",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 3
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "POR CONFIRMAR",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "M.C. GABINO ESTEVEZ DELGADO",
    "dia": "MIERCOLES",
    "salon": "K-4",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 3
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MIERCOLES",
    "salon": "N-2",
    "horario": "14-15",
    "hora": 14,
    "FINAL": 15,
    "duracion": 1,
    "SECCION": 3
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "POR CONFIRMAR",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "M.C. GABINO ESTEVEZ DELGADO",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "JUEVES",
    "salon": "K-1",
    "horario": "15-17",
    "hora": 15,
    "FINAL": 17,
    "duracion": 2,
    "SECCION": 3
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "POR CONFIRMAR",
    "dia": "JUEVES",
    "salon": "N-3",
    "horario": "11-14",
    "hora": 11,
    "FINAL": 14,
    "duracion": 3,
    "SECCION": 3
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "M.C. GABINO ESTEVEZ DELGADO",
    "dia": "VIERNES",
    "salon": "O-9",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 3
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 3
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "POR CONFIRMAR",
    "dia": "VIERNES",
    "salon": "O-9",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 3
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "LUNES",
    "salon": "N-3",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "LUNES",
    "salon": "O-3",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLAS ZAMUDIO HERNANDEZ",
    "dia": "LUNES",
    "salon": "N-5",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 4
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "MARTES",
    "salon": "N-4",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "MARTES",
    "salon": "K-2",
    "horario": "13-15",
    "hora": 13,
    "FINAL": 15,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MARTES",
    "salon": "K-2",
    "horario": "15-16",
    "hora": 15,
    "FINAL": 16,
    "duracion": 1,
    "SECCION": 4
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLAS ZAMUDIO HERNANDEZ",
    "dia": "MARTES",
    "salon": "O-5",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "MIERCOLES",
    "salon": "N-3",
    "horario": "13-14",
    "hora": 13,
    "FINAL": 14,
    "duracion": 1,
    "SECCION": 4
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MIERCOLES",
    "salon": "N-3",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLAS ZAMUDIO HERNANDEZ",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "JUEVES",
    "salon": "N-3",
    "horario": "10-11",
    "hora": 10,
    "FINAL": 11,
    "duracion": 1,
    "SECCION": 4
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLAS ZAMUDIO HERNANDEZ",
    "dia": "JUEVES",
    "salon": "N-3",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "POR CONFIRMAR",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "VIERNES",
    "salon": "K-3",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 4
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLAS ZAMUDIO HERNANDEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 4
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "LUNES",
    "salon": "N-4",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 5
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "LUNES",
    "salon": "N-4",
    "horario": "14-16",
    "hora": 14,
    "FINAL": 16,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "LUNES",
    "salon": "N-4",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "LUNES",
    "salon": "O-5",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "MARTES",
    "salon": "N-5",
    "horario": "14-16",
    "hora": 14,
    "FINAL": 16,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MARTES",
    "salon": "N-5",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "MARTES",
    "salon": "O-11",
    "horario": "8-9",
    "hora": 8,
    "FINAL": 9,
    "duracion": 1,
    "SECCION": 5
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "JUEVES",
    "salon": "O-10",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "JUEVES",
    "salon": "O-10",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "VIERNES",
    "salon": "N-4",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 5
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "VIERNES",
    "salon": "N-2",
    "horario": "14-15",
    "hora": 14,
    "FINAL": 15,
    "duracion": 1,
    "SECCION": 5
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "VIERNES",
    "salon": "N-4",
    "horario": "12-13",
    "hora": 12,
    "FINAL": 13,
    "duracion": 1,
    "SECCION": 5
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 5
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "LUNES",
    "salon": "I-2",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHAVEZ CARBAJAL",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "LUNES",
    "salon": "O-10",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MARTES",
    "salon": "N-3",
    "horario": "18-20",
    "hora": 18,
    "FINAL": 20,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHAVEZ CARBAJAL",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "MARTES",
    "salon": "O-11",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MIERCOLES",
    "salon": "N-1",
    "horario": "15-16",
    "hora": 15,
    "FINAL": 16,
    "duracion": 1,
    "SECCION": 6
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "MIERCOLES",
    "salon": "O-1",
    "horario": "16-17",
    "hora": 16,
    "FINAL": 17,
    "duracion": 1,
    "SECCION": 6
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHAVEZ CARBAJAL",
    "dia": "MIERCOLES",
    "salon": "I-6",
    "horario": "12-13",
    "hora": 12,
    "FINAL": 13,
    "duracion": 1,
    "SECCION": 6
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "MIERCOLES",
    "salon": "K-4",
    "horario": "13-14",
    "hora": 13,
    "FINAL": 14,
    "duracion": 1,
    "SECCION": 6
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "JUEVES",
    "salon": "N-5",
    "horario": "17-19",
    "hora": 17,
    "FINAL": 19,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "JUEVES",
    "salon": "N-5",
    "horario": "15-17",
    "hora": 15,
    "FINAL": 17,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHAVEZ CARBAJAL",
    "dia": "JUEVES",
    "salon": "N-2",
    "horario": "13-15",
    "hora": 13,
    "FINAL": 15,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "D.C. VICTOR MANUEL ARREDONDO TORRES",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHAVEZ CARBAJAL",
    "dia": "VIERNES",
    "salon": "I-6",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 6
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ROSALYNDA SANCHEZ VAZQUEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 6
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "LUNES",
    "salon": "O-6",
    "horario": "8-9",
    "hora": 8,
    "FINAL": 9,
    "duracion": 1,
    "SECCION": 7
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "LUNES",
    "salon": "O-6",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "LUNES",
    "salon": "O-6",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "MARTES",
    "salon": "O-10",
    "horario": "13-15",
    "hora": 13,
    "FINAL": 15,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MARTES",
    "salon": "O-10",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "MARTES",
    "salon": "O-6",
    "horario": "11-13",
    "hora": 11,
    "FINAL": 13,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MIERCOLES",
    "salon": "O-11",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "MIERCOLES",
    "salon": "O-11",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 7
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "MIERCOLES",
    "salon": "O-11",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 7
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "MIERCOLES",
    "salon": "O-11",
    "horario": "10-11",
    "hora": 10,
    "FINAL": 11,
    "duracion": 1,
    "SECCION": 7
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "JUEVES",
    "salon": "O-2",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "JUEVES",
    "salon": "O-9",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 7
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "I.Q.  ARTURO CHAVEZ ESQUIVEL",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. JORGE CHÁVEZ CARBAJAL",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "D.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 7
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "LUNES",
    "salon": "O-8",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "QFB. JANET GLAFIRA GÓMEZ TRUJILLO",
    "dia": "LUNES",
    "salon": "O-1",
    "horario": "13-15",
    "hora": 13,
    "FINAL": 15,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "LUNES",
    "salon": "O-8",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C  ALMA ROSA GARCÍA RÍOS",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "MARTES",
    "salon": "O-8",
    "horario": "10-11",
    "hora": 10,
    "FINAL": 11,
    "duracion": 1,
    "SECCION": 8
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "QFB. JANET GLAFIRA GÓMEZ TRUJILLO",
    "dia": "MARTES",
    "salon": "O-8",
    "horario": "13-15",
    "hora": 13,
    "FINAL": 15,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "MARTES",
    "salon": "O-8",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C  ALMA ROSA GARCÍA RÍOS",
    "dia": "MARTES",
    "salon": "K-4",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 8
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "QFB. JANET GLAFIRA GÓMEZ TRUJILLO",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C  ALMA ROSA GARCÍA RÍOS",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "JUEVES",
    "salon": "O-2",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "QFB. JANET GLAFIRA GÓMEZ TRUJILLO",
    "dia": "JUEVES",
    "salon": "O-7",
    "horario": "8-9",
    "hora": 8,
    "FINAL": 9,
    "duracion": 1,
    "SECCION": 8
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C  ALMA ROSA GARCÍA RÍOS",
    "dia": "JUEVES",
    "salon": "N-5",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "QFB. JANET GLAFIRA GÓMEZ TRUJILLO",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 8
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. JOEL ARTURO RODRÍGUEZ CEBALLOS",
    "dia": "VIERNES",
    "salon": "O-2",
    "horario": "16-17",
    "hora": 16,
    "FINAL": 17,
    "duracion": 1,
    "SECCION": 8
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C  ALMA ROSA GARCÍA RÍOS",
    "dia": "VIERNES",
    "salon": "N-1",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 8
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "M.C.  JULIO CÉSAR HERRERA ARRIAGA",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARIA DEL ROCIO LARA MADRIGAL",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "M.C.  JULIO CÉSAR HERRERA ARRIAGA",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARIA DEL ROCIO LARA MADRIGAL",
    "dia": "MARTES",
    "salon": "O-3",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "MIERCOLES",
    "salon": "O-4",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "M.C.  JULIO CÉSAR HERRERA ARRIAGA",
    "dia": "MIERCOLES",
    "salon": "O-4",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "MIERCOLES",
    "salon": "O-2",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARIA DEL ROCIO LARA MADRIGAL",
    "dia": "MIERCOLES",
    "salon": "O-4",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "JUEVES",
    "salon": "O-4",
    "horario": "11-13",
    "hora": 11,
    "FINAL": 13,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "M.C.  JULIO CÉSAR HERRERA ARRIAGA",
    "dia": "JUEVES",
    "salon": "O-4",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 9
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "JUEVES",
    "salon": "O-2",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARIA DEL ROCIO LARA MADRIGAL",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 9
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSÈ CASTAÑEDA GUERRERO",
    "dia": "VIERNES",
    "salon": "O-11",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 9
  },
  {
    "materia": "FISICO QUÍMICA III",
    "profesor": "M.C.  JULIO CÉSAR HERRERA ARRIAGA",
    "dia": "VIERNES",
    "salon": "O-11",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 9
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "VIERNES",
    "salon": "O-11",
    "horario": "1",
    "hora": 17,
    "FINAL": 18,
    "duracion": 1,
    "SECCION": 9
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARIA DEL ROCIO LARA MADRIGAL",
    "dia": "VIERNES",
    "salon": "O-11",
    "horario": "10-11",
    "hora": 10,
    "FINAL": 11,
    "duracion": 1,
    "SECCION": 9
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHÀVEZ GONZÁLEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 10
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. MARTHA ELVA GÓMEZ TRUJILLO",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 10
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 10
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. RICARDO ADOLFO MANIVEL CHAVEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 10
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHÀVEZ GONZÁLEZ",
    "dia": "MARTES",
    "salon": "O-3",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 10
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. MARTHA ELVA GÓMEZ TRUJILLO",
    "dia": "MARTES",
    "salon": "O-1",
    "horario": "17-19",
    "hora": 17,
    "FINAL": 19,
    "duracion": 2,
    "SECCION": 10
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "MARTES",
    "salon": "O-7",
    "horario": "12-13",
    "hora": 12,
    "FINAL": 13,
    "duracion": 1,
    "SECCION": 10
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. RICARDO ADOLFO MANIVEL CHAVEZ",
    "dia": "MARTES",
    "salon": "O-7",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 10
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHÀVEZ GONZÁLEZ",
    "dia": "MIERCOLES",
    "salon": "O-2",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 10
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. MARTHA ELVA GÓMEZ TRUJILLO",
    "dia": "MIERCOLES",
    "salon": "O-7",
    "horario": "15-17",
    "hora": 15,
    "FINAL": 17,
    "duracion": 2,
    "SECCION": 10
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "MIERCOLES",
    "salon": "O-3",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 10
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. RICARDO ADOLFO MANIVEL CHAVEZ",
    "dia": "MIERCOLES",
    "salon": "O-3",
    "horario": "14-15",
    "hora": 14,
    "FINAL": 15,
    "duracion": 1,
    "SECCION": 10
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHÀVEZ GONZÁLEZ",
    "dia": "JUEVES",
    "salon": "O-11",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 10
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. MARTHA ELVA GÓMEZ TRUJILLO",
    "dia": "JUEVES",
    "salon": "N-1",
    "horario": "18-19",
    "hora": 18,
    "FINAL": 19,
    "duracion": 1,
    "SECCION": 10
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 10
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. RICARDO ADOLFO MANIVEL CHAVEZ",
    "dia": "JUEVES",
    "salon": "O-2",
    "horario": "11-13",
    "hora": 11,
    "FINAL": 13,
    "duracion": 2,
    "SECCION": 10
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHÀVEZ GONZÁLEZ",
    "dia": "VIERNES",
    "salon": "O-3",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 10
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. MARTHA ELVA GÓMEZ TRUJILLO",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 10
  },
  {
    "materia": "FÍSICA II",
    "profesor": "DC. JOEL ARTURO RODRÌGUEZ CEBALLOS",
    "dia": "VIERNES",
    "salon": "O-3",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 10
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. RICARDO ADOLFO MANIVEL CHAVEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 10
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSE CASTAÑEDA GUERRERO",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSE CASTAÑEDA GUERRERO",
    "dia": "MARTES",
    "salon": "O-4",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 11
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "MARTES",
    "salon": "O-4",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 11
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "MARTES",
    "salon": "O-4",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 11
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "MARTES",
    "salon": "N-4",
    "horario": "17-20",
    "hora": 17,
    "FINAL": 20,
    "duracion": 3,
    "SECCION": 11
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSE CASTAÑEDA GUERRERO",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "MIERCOLES",
    "salon": "O-7",
    "horario": "11-14",
    "hora": 11,
    "FINAL": 14,
    "duracion": 3,
    "SECCION": 11
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "MIERCOLES",
    "salon": "O-7",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 11
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "MIERCOLES",
    "salon": "O-9",
    "horario": "18-20",
    "hora": 18,
    "FINAL": 20,
    "duracion": 2,
    "SECCION": 11
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSE CASTAÑEDA GUERRERO",
    "dia": "JUEVES",
    "salon": "O-5",
    "horario": "13-14",
    "hora": 13,
    "FINAL": 14,
    "duracion": 1,
    "SECCION": 11
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "JUEVES",
    "salon": "O-5",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 11
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. PEDRO JOSE CASTAÑEDA GUERRERO",
    "dia": "VIERNES",
    "salon": "O-4",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 11
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MATEO ALFREDO CASTILLO CEJA",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 11
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "PAVEL",
    "dia": "LUNES",
    "salon": "N-3(NO)",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 12
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "LUNES",
    "salon": "O-5",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 12
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "PAVEL",
    "dia": "MARTES",
    "salon": "O-6",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "MARTES",
    "salon": "O-5",
    "horario": "13-16",
    "hora": 13,
    "FINAL": 16,
    "duracion": 3,
    "SECCION": 12
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "MARTES",
    "salon": "O-5",
    "horario": "11-13",
    "hora": 11,
    "FINAL": 13,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "MARTES",
    "salon": "O-5",
    "horario": "10-11",
    "hora": 10,
    "FINAL": 11,
    "duracion": 1,
    "SECCION": 12
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "PAVEL",
    "dia": "MIERCOLES",
    "salon": "O-1",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "MIERCOLES",
    "salon": "O-2",
    "horario": "14-16",
    "hora": 14,
    "FINAL": 16,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 12
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "MIERCOLES",
    "salon": "O-1",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "PAVEL",
    "dia": "JUEVES",
    "salon": "N-1",
    "horario": "7-8",
    "hora": 7,
    "FINAL": 8,
    "duracion": 1,
    "SECCION": 12
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 12
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 12
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "JUEVES",
    "salon": "N-1",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 12
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "PAVEL",
    "dia": "VIERNES",
    "salon": "O-7(NO)",
    "horario": "10-11",
    "hora": 10,
    "FINAL": 11,
    "duracion": 1,
    "SECCION": 12
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 12
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "VIERNES",
    "salon": "O-7",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 12
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. NICOLÁS ZAMUDIO HERNÁNDEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 12
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "MIERCOLES",
    "salon": "O-9",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 13
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "MIERCOLES",
    "salon": "O-5",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 13
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "MIERCOLES",
    "salon": "O-9",
    "horario": "11-14",
    "hora": 11,
    "FINAL": 14,
    "duracion": 3,
    "SECCION": 13
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "MIERCOLES",
    "salon": "O-9",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 13
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "JUEVES",
    "salon": "O-5",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 13
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "JUEVES",
    "salon": "O-8",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 13
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "JUEVES",
    "salon": "O-5",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 13
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "VIERNES",
    "salon": "O-5",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 13
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "D.C. JOSE OCTAVIO RODILES LOPEZ",
    "dia": "VIERNES",
    "salon": "O-5",
    "horario": "11-14",
    "hora": 11,
    "FINAL": 14,
    "duracion": 3,
    "SECCION": 13
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARIA DE LOS ANGELES FABIAN ALVAREZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 13
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "VIERNES",
    "salon": "O-5",
    "horario": "8-9",
    "hora": 8,
    "FINAL": 9,
    "duracion": 1,
    "SECCION": 13
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "LUNES",
    "salon": "O-4",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 14
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARÍA DE LOS ÁNGELES FABIAN ÁLVAREZ",
    "dia": "LUNES",
    "salon": "O-4",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 14
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB. FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "MARTES",
    "salon": "O-6",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 14
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "MARTES",
    "salon": "O-3",
    "horario": "16-19",
    "hora": 16,
    "FINAL": 19,
    "duracion": 3,
    "SECCION": 14
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARÍA DE LOS ÁNGELES FABIAN ÁLVAREZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB. FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "MARTES",
    "salon": "O-8",
    "horario": "11-13",
    "hora": 11,
    "FINAL": 13,
    "duracion": 2,
    "SECCION": 14
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "MIERCOLES",
    "salon": "O-4",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 14
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARÍA DE LOS ÁNGELES FABIAN ÁLVAREZ",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB. FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARÍA DE LOS ÁNGELES FABIAN ÁLVAREZ",
    "dia": "JUEVES",
    "salon": "O-8",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 14
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB. FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "JUEVES",
    "salon": "O-9",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 14
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "QFB.  LUIS FERNANDO NUÑEZ GARCIA",
    "dia": "VIERNES",
    "salon": "O-6",
    "horario": "8-9",
    "hora": 8,
    "FINAL": 9,
    "duracion": 1,
    "SECCION": 14
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JOSÉ MARTÍN ÁLVAREZ DÍAZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 14
  },
  {
    "materia": "FÍSICA II",
    "profesor": "D.C. MARÍA DE LOS ÁNGELES FABIAN ÁLVAREZ",
    "dia": "VIERNES",
    "salon": "O-6",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 14
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB. FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "VIERNES",
    "salon": "O-11",
    "horario": "11-13",
    "hora": 11,
    "FINAL": 13,
    "duracion": 2,
    "SECCION": 14
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "LUNES",
    "salon": "O-2",
    "horario": "14-16",
    "hora": 14,
    "FINAL": 16,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "LUNES",
    "salon": "O-2",
    "horario": "18-20",
    "hora": 18,
    "FINAL": 20,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "LUNES",
    "salon": "K-2",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB.  FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "LUNES",
    "salon": "O-2",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "MARTES",
    "salon": "O-1",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "MARTES",
    "salon": "O-11",
    "horario": "15-16",
    "hora": 15,
    "FINAL": 16,
    "duracion": 1,
    "SECCION": 15
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB.  FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "MARTES",
    "salon": "O-11",
    "horario": "13-15",
    "hora": 13,
    "FINAL": 15,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "MIERCOLES",
    "salon": "I-6",
    "horario": "18-20",
    "hora": 18,
    "FINAL": 20,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB.  FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "JUEVES",
    "salon": "O-7",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 15
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "JUEVES",
    "salon": "O-7",
    "horario": "14-16",
    "hora": 14,
    "FINAL": 16,
    "duracion": 2,
    "SECCION": 15
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "JUEVES",
    "salon": "K-4",
    "horario": "19-20",
    "hora": 19,
    "FINAL": 20,
    "duracion": 1,
    "SECCION": 15
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB.  FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "JUEVES",
    "salon": "O-7",
    "horario": "12-13",
    "hora": 12,
    "FINAL": 13,
    "duracion": 1,
    "SECCION": 15
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "FÍSICA II",
    "profesor": "ING. EDUARDO OCHOA HERNÁNDEZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "QFB.  FELIPE DE JESÚS TENORIO GUZMÁN",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 15
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "LUNES",
    "salon": "O-11",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 16
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "LUNES",
    "salon": "O-4",
    "horario": "16-18",
    "hora": 16,
    "FINAL": 18,
    "duracion": 2,
    "SECCION": 16
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "LUNES",
    "salon": "O-11",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 16
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "LUNES",
    "salon": "O-9",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 16
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "MARTES",
    "salon": "O-4",
    "horario": "16-19",
    "hora": 16,
    "FINAL": 19,
    "duracion": 3,
    "SECCION": 16
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "MARTES",
    "salon": "O-1",
    "horario": "9-10",
    "hora": 9,
    "FINAL": 10,
    "duracion": 1,
    "SECCION": 16
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "MARTES",
    "salon": "O-1",
    "horario": "7-9",
    "hora": 7,
    "FINAL": 9,
    "duracion": 2,
    "SECCION": 16
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "MIERCOLES",
    "salon": "O-10",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 16
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "MIERCOLES",
    "salon": "I-1",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 16
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "FM. AZUCENA CHAVEZ GONZALEZ",
    "dia": "VIERNES",
    "salon": "O-7",
    "horario": "12-13",
    "hora": 12,
    "FINAL": 13,
    "duracion": 1,
    "SECCION": 16
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "M.C. JOEL AYALA SISTOS",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 16
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.I. ROBERTO HERNÁNDEZ GARCÍA",
    "dia": "VIERNES",
    "salon": "O-10",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 16
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. ERÉNDIRA SOLACHE HUACUZ",
    "dia": "VIERNES",
    "salon": "O-5",
    "horario": "7-8",
    "hora": 7,
    "FINAL": 8,
    "duracion": 1,
    "SECCION": 16
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "FÍSICA II",
    "profesor": "FM. AZUCENA CHÁVEZ GONZÁLEZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "LUNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "MARTES",
    "salon": "O-1",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 17
  },
  {
    "materia": "FÍSICA II",
    "profesor": "FM. AZUCENA CHÁVEZ GONZÁLEZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "MARTES",
    "salon": "O-3",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 17
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "MIERCOLES",
    "salon": "O-2",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 17
  },
  {
    "materia": "FÍSICA II",
    "profesor": "FM. AZUCENA CHÁVEZ GONZÁLEZ",
    "dia": "MIERCOLES",
    "salon": "O-10",
    "horario": "14-16",
    "hora": 14,
    "FINAL": 16,
    "duracion": 2,
    "SECCION": 17
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "MIERCOLES",
    "salon": "O-6",
    "horario": "9-11",
    "hora": 9,
    "FINAL": 11,
    "duracion": 2,
    "SECCION": 17
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "JUEVES",
    "salon": "O-5",
    "horario": "16-19",
    "hora": 16,
    "FINAL": 19,
    "duracion": 3,
    "SECCION": 17
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "FÍSICA II",
    "profesor": "FM. AZUCENA CHÁVEZ GONZÁLEZ",
    "dia": "JUEVES",
    "salon": "O-10",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 17
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 17
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "VIERNES",
    "salon": "O-10",
    "horario": "14-16",
    "hora": 14,
    "FINAL": 16,
    "duracion": 2,
    "SECCION": 17
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "VIERNES",
    "salon": "O-10",
    "horario": "12-13",
    "hora": 12,
    "FINAL": 13,
    "duracion": 1,
    "SECCION": 17
  },
  {
    "materia": "FÍSICA II",
    "profesor": "FM. AZUCENA CHÁVEZ GONZÁLEZ",
    "dia": "VIERNES",
    "salon": "O-10",
    "horario": "13-14",
    "hora": 13,
    "FINAL": 14,
    "duracion": 1,
    "SECCION": 17
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "VIERNES",
    "salon": "O-10",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 17
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "LUNES",
    "salon": "O-3",
    "horario": "16-19",
    "hora": 16,
    "FINAL": 19,
    "duracion": 3,
    "SECCION": 18
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "LUNES",
    "salon": "O-3",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 18
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.C. RUBÉN VEGA CANO",
    "dia": "LUNES",
    "salon": "O-2",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 18
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "LUNES",
    "salon": "O-2",
    "horario": "10-12",
    "hora": 10,
    "FINAL": 12,
    "duracion": 2,
    "SECCION": 18
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.C. RUBÉN VEGA CANO",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "MARTES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "MIERCOLES",
    "salon": "O-3",
    "horario": "17-19",
    "hora": 17,
    "FINAL": 19,
    "duracion": 2,
    "SECCION": 18
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "MIERCOLES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.C. RUBÉN VEGA CANO",
    "dia": "MIERCOLES",
    "salon": "N-3",
    "horario": "12-13",
    "hora": 12,
    "FINAL": 13,
    "duracion": 1,
    "SECCION": 18
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "MIERCOLES",
    "salon": "N-3",
    "horario": "11-12",
    "hora": 11,
    "FINAL": 12,
    "duracion": 1,
    "SECCION": 18
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "JUEVES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.C. RUBÉN VEGA CANO",
    "dia": "JUEVES",
    "salon": "O-1",
    "horario": "8-10",
    "hora": 8,
    "FINAL": 10,
    "duracion": 2,
    "SECCION": 18
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "JUEVES",
    "salon": "O-11",
    "horario": "12-14",
    "hora": 12,
    "FINAL": 14,
    "duracion": 2,
    "SECCION": 18
  },
  {
    "materia": "MATEMÁTICAS II",
    "profesor": "ING. JOHANN CASTILLO GALLO",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "FISICO QUÌMICA III",
    "profesor": "QFB. JORGE DANIEL LOPEZ AGUIRRE",
    "dia": "VIERNES",
    "salon": "O-4",
    "horario": "9-12",
    "hora": 9,
    "FINAL": 12,
    "duracion": 3,
    "SECCION": 18
  },
  {
    "materia": "FÍSICA II",
    "profesor": "M.C. RUBÉN VEGA CANO",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  },
  {
    "materia": "QUÍMICA INORGÁNICA",
    "profesor": "M.C. MARÍA ELISA FABIÁN ÁLVAREZ",
    "dia": "VIERNES",
    "salon": "",
    "horario": "",
    "hora": 0,
    "FINAL": 0,
    "duracion": 0,
    "SECCION": 18
  }
];

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

function insertaTabla(valor){
tablaNum = valor;
var tabla = [
'<div id="tabla0'+tablaNum+ '"  class="timetable" data-days="5" data-hours="13">',
'               <ul class="tt-events">',
'                </ul>',
'                <div class="tt-times">',
'                    <div class="tt-time" data-time="0">',
'                        07<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="1">',
'                        08<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="2">',
'                        09<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="3">',
'                        10<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="4">',
'                        11<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="5">',
'                        12<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="6">',
'                        13<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="7">',
'                        14<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="8">',
'                        15<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="9">',
'                        16<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="10">',
'                        17<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="11">',
'                        18<span class="hidden-phone">.00</span></div>',
'                    <div class="tt-time" data-time="12">',
'                        19<span class="hidden-phone">.00</span></div>',
'                </div>',
'                <div class="tt-days">',
'                    <div class="tt-day" data-day="0">',
'                        L<span class="hidden-phone"></span></div>',
'                    <div class="tt-day" data-day="1">',
'                        M<span class="hidden-phone"></span></div>',
'                    <div class="tt-day" data-day="2">',
'                        X<span class="hidden-phone"></span></div>',
'                    <div class="tt-day" data-day="3">',
'                        J<span class="hidden-phone"></span></div>',
'                    <div class="tt-day" data-day="4">',
'                        V<span class="hidden-phone"></span></div>',
'                </div>',
'            </div>',
''
].join('');

return tabla;
}