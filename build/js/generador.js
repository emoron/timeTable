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
