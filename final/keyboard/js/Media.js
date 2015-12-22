 function Media(frequency,audioContext) {
  // console.log(audoContext);
  this.context = audioContext;
  // console.log(context);
  this.osc = this.context.createOscillator(); // Create oscillator node
  this.pressed = false; // flag to indicate if sound is playing

  if(typeof frequency !== 'undefined') {
      this.osc.frequency.value = frequency;
  }

  /* Set waveform type. */
  this.osc.type ='triangle';
  this.osc.start(0);


  }


Media.prototype.play = function() {
  console.log('play');

  if(!this.pressed) {
    this.pressed = true;
    this.osc.connect(this.context.destination); 

  }

}

Media.prototype.stop = function() {
  this.pressed = false;
  this.osc.disconnect();

}
