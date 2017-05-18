
var Toast = require('mod/toast.js').Toast;
var waterFall = require('mod/waterfall.js');
var Event = require('mod/event.js');
Toast('欢迎光临',1500);
waterFall.init($('#content'));


var NoteManager = require('mod/note-manager.js').NoteManager;



NoteManager.load();

$('.add-note').on('click', function() {
  NoteManager.add();
})

Event.on('waterfall', function(){
	waterFall.init($('#content'));
})