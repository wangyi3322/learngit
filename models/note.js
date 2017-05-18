var path = require('path');
var Sequelize = require("sequelize");
var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  
  storage: path.join(__dirname, '../database/database.sqlite') 
});

 /*测试使用
sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });*/

var Note = sequelize.define('note', {
  text: {
    type: Sequelize.STRING
  },
  uid: {
      type: Sequelize.STRING
  } 
});

Note.sync({force: true})

/*Note.sync().then(function(){
  Note.create({
   text:'go g ogo...'
  });
}).then(function(){
  Note.findAll({raw:true}).then(function(notes){
   console.log(notes);
  });
});

*/
/*Note.findAll({raw:true,where:{id:2}}).then(function(notes){
  console.log(notes);
});*/

module.exports = Note;
