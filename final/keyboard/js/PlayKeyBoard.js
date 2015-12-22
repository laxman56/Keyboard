function PlayKeyBoard() {
  // Create audio (context) container
  var counter = 0;
  var newKey = new CreateKeyBoard();
  var visu = new AudioVisualizer();
  var playing;
  var state;
  var recorder = new Recorder();
  for(var i = 0; i<Object.keys(noteList).length; i++){
  // console.log(noteList[i].name);

      newKey.createKey(noteList[i].name,noteList[i].notePitch);

  }
  var audioContext = new (AudioContext || webkitAudioContext)();
  that = this;

  this.generateSound = function(frequency) {
  var keySound = new Media(frequency,audioContext);
  return {sound:keySound};

  }

  this.loadNoteFrequency = function(notes) {
    console.log('loadNote');
    for(var keyCode in notes) {
      var note = notes[keyCode];
      note.key = that.generateSound(note.frequency);
    }
  };

  this.loadRecordedFrequency = function(notesRecorded){
    for(var frequency in notesRecorded) {
      var noteRecorded = notesRecorded[frequency];
      noteRecorded.key = that.generateSound(noteRecorded.frequency);
    }

  }

  this.playNote = function(event) {
    var keyCode = event.keyCode;
    if(keyCode == 37){
      that.loadRecordedFrequency(recordedSong);
      console.log(recordedSong[0].time);

      if(recordedSong[0].time >= 10000)
      recordedSong.splice(0, 1);

      // console.log(recordedSong[0].time);
      playing = 0;
      that.playRecorded();
    }

    


    notesByKeyCode[keyCode].key.sound.play();
    if(notesByKeyCode[keyCode].counter == 0){
      newKey.activeKey(notesByKeyCode[keyCode].noteName);
      notesByKeyCode[keyCode].counter = 1;
    }
    
    state = false;
    visu.updateVisuals(state, keyCode);

    recorder.record(keyCode,event.timeStamp,'down');

  };

  this.endNote = function(event) {
    var keyCode = event.keyCode;
    notesByKeyCode[keyCode].key.sound.stop();
    newKey.inActiveKey(notesByKeyCode[keyCode].noteName);
    notesByKeyCode[keyCode].counter = 0;

    state = true;
    visu.updateVisuals(state, keyCode);

    recorder.record(keyCode,event.timeStamp,'up');

  };

  this.playRecorded = function(){
    // playing = 0;
    recordedSong[playing].key.sound.play();

    setTimeout(function(){
      recordedSong[playing].key.sound.stop();
      playing++;
      that.playRecorded();
    }, recordedSong[playing].time);
      
  }

  window.addEventListener('keydown', this.playNote);
  window.addEventListener('keyup', this.endNote);
  window.addEventListener('load', this.loadNoteFrequency(notesByKeyCode));

  // document.getElementById("record").onclick = ;
}

