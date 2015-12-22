function Recorder(){
  var key=0;
  var duration=0;
  var downTime=[];
  var upTime = 0;
  this.record = function(keyCode, time, state){

    
    if( state == 'down' ){
      downTime.push(time);
      // console.log(downTime[0] - upTime );
      var gap = downTime[0] - upTime;
      recordedSong.push({keyCode: null, frequency: 0, time: gap });

    }

    else if( state == 'up'){
      upTime = time;
      downTime.push(time);
      duration = downTime[downTime.length - 1] - downTime[0];
      recordedSong.push({keyCode: keyCode, frequency: notesByKeyCode[keyCode].frequency, time: duration });

      downTime = [];
      duration = 0;


    }


  }


}