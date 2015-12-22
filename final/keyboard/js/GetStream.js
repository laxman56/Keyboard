function GetStream(){
  window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
  var audioContext = new AudioContext();
  var realAudioInput = null, inputPoint = null, rafID = null;
  var analyserContext = null;
  var analyserNode;
  that = this; 

  this.getAudio = function(stream) {
    inputPoint = audioContext.createGain();
    // console.log(stream);
    console.log('getAudio');
    realAudioInput = audioContext.createMediaStreamSource(stream);
    realAudioInput.connect(inputPoint); 

    analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 2048;
    inputPoint.connect( analyserNode );

    // audioRecorder = new Recorder( inputPoint );

   /* zeroGain = audioContext.createGain();
    zeroGain.gain.value = 0.0;
    inputPoint.connect( zeroGain );
    zeroGain.connect( audioContext.destination );*/
    console.log(analyserNode);
    var updateCanvas = new AudioVisualizer(analyserNode);
    updateCanvas.updateVisuals();
  }

  this.initAudio = function() {
        if (!navigator.getUserMedia)
            navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!navigator.cancelAnimationFrame)
            navigator.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
        if (!navigator.requestAnimationFrame)
            navigator.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;

    navigator.getUserMedia(
      {
        "audio": {
            "mandatory": {
                "googEchoCancellation": "false",
                "googAutoGainControl": "false",
                "googNoiseSuppression": "false",
                "googHighpassFilter": "false"
            },
            "optional": []
        },
      }, that.getAudio, function(e) {
          alert('Error getting audio');
          console.log(e);
      });
  } 

   window.addEventListener('load', that.initAudio);
}

