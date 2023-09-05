const mongoose =  require('mongoose');
var app = require('./app');
var port = 3700;

const user = '';

const config = require('./config')


const uri = `mongodb+srv://jesus:${config.pass}@cluster0.okyhyzr.mongodb.net/${config.dbname}?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true`;






mongoose.connect(uri,{

  useNewUrlParser:true,useUnifiedTopology:true

}).then(()=> {

        console.log('base de datos conectada')
        //creacion de servidor express
        app.listen(port,()=>{

          console.log('servidor corriendo corectamente en la url : localhost:3700');

        });


})
  .catch(e =>console.log(e));




