function AudioVisualizer() {
  var rafID = null;
  var analyserContext = null; 
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioContext = new AudioContext();
  that = this;

  this.updateVisuals = function(state,keyCode){
    if (!analyserContext) {
        var canvas = document.getElementById("analyser");
        canvasWidth = canvas.width;
        canvasHeight = canvas.height;
        analyserContext = canvas.getContext('2d');
    }
    // analyzer draw code here
    var spacing = 5;
    var barWidth = 3;
    var numBars = Math.round(canvasWidth / barWidth);
    analyserContext.clearRect(0, 0, canvasWidth, canvasHeight);
    analyserContext.fillStyle = '#F6D565';
    analyserContext.lineCap = 'round';

    for (var i = 0; i < 32; i++) {
      var magnitude = 0;
      magnitude = freqData[i+1].freqValue*notesByKeyCode[keyCode].frequency*.003;

      analyserContext.fillStyle = "hsl( " + Math.round((i*360)/numBars) + ", 100%, 50%)";
      analyserContext.fillRect(i * spacing, canvasHeight, barWidth, -magnitude);

    }

    if(state)
      analyserContext.clearRect(0, 0, canvasWidth, canvasHeight);
  }
}

