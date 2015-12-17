
function PlayKeyBoard() {
  // Create audio (context) container
  var counter = 0;
  var newKey = new CreateKeyBoard();
  // console.log(noteList[1],'check');
  for(var i = 0; i<Object.keys(noteList).length; i++){
  // console.log(noteList[i].name);

      newKey.createKey(noteList[i].name,noteList[i].notePitch);

  }
  var audioContext = new (AudioContext || webkitAudioContext)();
  that = this;

    this.GenerateSound = function(frequency) {
    var keySound = new Media(frequency,audioContext);
    return {sound:keySound};

  }

  var loadNoteFrequency = function(notes) {
    console.log('loadNote');
    for(var keyCode in notes) {
      var note = notes[keyCode];
      /* Generate playable key */
      note.key = that.GenerateSound(note.frequency);
    }
  };

  var playNote = function(event) {
    var keyCode = event.keyCode;
    notesByKeyCode[keyCode].key.sound.play();
    if(notesByKeyCode[keyCode].counter == 0){
      newKey.activeKey(notesByKeyCode[keyCode].noteName);
      notesByKeyCode[keyCode].counter = 1;
    }
    

  };

  var endNote = function(event) {
    var keyCode = event.keyCode;
    notesByKeyCode[keyCode].key.sound.stop();
    newKey.inActiveKey(notesByKeyCode[keyCode].noteName);
    notesByKeyCode[keyCode].counter = 0;
  };

  window.addEventListener('keydown', playNote);
  window.addEventListener('keyup', endNote);

  window.addEventListener('load', function() {
    loadNoteFrequency(notesByKeyCode);

  });


}

// playKeyboard();