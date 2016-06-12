var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var app = express();
//var mongoose   = require('mongoose');
var db = mongojs('farma', ['cursos']);
//var router = express.Router();
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//app.use('/api', router);

app.use(express.static('public'))

app.get('/cursos', function(req, res) {
  db.cursos.find(function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(docs);
    }
  });
});


app.get('/salones', function(req, res) {
  db.cursos.distinct("SALON", null, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      var salones = [];
      for (var i in docs) {
        salones.push({"salon" : docs[i]});
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(salones);
    }
  })
});
app.get('/semestres', function(req, res) {
  db.cursos.distinct("SEMESTRE", null, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      var salones = [];
      for (var i in docs) {
        salones.push({"semestre" : docs[i]});
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(salones);
    }
  })
});

app.get('/semestre/:semestre', function(req, res) {
  db.cursos.find({"SEMESTRE" : req.params.semestre}, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");

      res.json(docs);
      console.log(docs);

    }
  });
});
app.get('/salones/:salon', function(req, res) {
  db.cursos.find({"SALON" : req.params.salon}, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(docs);
    }
  });
});

app.get('/dias', function(req, res) {
  db.cursos.distinct("DIA", null, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      var dias = [];
      for (var i in docs) {
        dias.push({"dia" : docs[i]});
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(dias);
    }
  })
});

app.get('/dias/:dia', function(req, res) {
  db.cursos.find({"DIA" : req.params.dia}, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(docs);
      console.log(docs);
    }
  });
});

app.get('/horarios', function(req, res) {
  db.cursos.distinct("HORARIO", null, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      console.log(docs.length);
      res.json(docs);
    }
  })
});

app.get('/materias', function(req, res) {
  db.cursos.distinct("MATERIA", null, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      var materias = [];
      for (var i in docs) {
        materias.push({"materia" : docs[i]});
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(materias);
    }
  })
});

app.get('/materias/:materia', function(req, res) {
  db.cursos.find({"MATERIA" : req.params.materia}, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(docs);
    }
  });
});

app.get('/curso/:id', function(req, res) {
  console.log(req.params.id);

  db.cursos.findOne({
    _id: mongojs.ObjectId(req.params.id)}, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      //console.log(docs.length);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.json(docs);
    }
  });
});


app.get('/profesores', function(req, res) {
  db.cursos.distinct("PROFESOR", null, function(err, docs) {
    if (err) {
      res.send(err);
    }
    else {
      console.log(docs.length);
      res.json(docs);
    }
  })
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
