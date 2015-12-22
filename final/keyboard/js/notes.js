var notesByKeyCode = {
  65: { noteName: 'c4', frequency: 261.6, keyName: 'a', counter: 0},
  83: { noteName: 'd4', frequency: 293.7, keyName: 's', counter: 0},
  68: { noteName: 'e4', frequency: 329.6, keyName: 'd', counter: 0},
  70: { noteName: 'f4', frequency: 349.2, keyName: 'f', counter: 0},
  71: { noteName: 'g4', frequency: 392,   keyName: 'g', counter: 0},
  72: { noteName: 'a4', frequency: 440,   keyName: 'h', counter: 0},
  74: { noteName: 'b4', frequency: 493.9, keyName: 'j', counter: 0},
  75: { noteName: 'c5', frequency: 523.3, keyName: 'k', counter: 0},
  76: { noteName: 'd5', frequency: 587.3, keyName: 'l', counter: 0},
  59:{ noteName:'e5',  frequency: 659.3, keyName: ';', counter: 0},
  87: { noteName: 'c4#', frequency: 277.18, keyName: 'w', counter: 0},
  69: { noteName: 'd4#', frequency: 311.13, keyName: 'e', counter: 0},
  84: { noteName: 'f4#', frequency: 369.99, keyName: 't', counter: 0},
  89: { noteName: 'g4#', frequency: 415.30, keyName: 'y', counter: 0},
  85: { noteName: 'a4#', frequency: 466.16, keyName: 'u', counter: 0},
  79: { noteName: 'c5#', frequency: 554.37, keyName: 'o', counter: 0},
  80: { noteName: 'd5#', frequency: 622.25, keyName: 'p', counter: 0}

};

var noteList={
  0:{name:'c4', notePitch: 'low'},
  1:{name:'d4', notePitch: 'low'},
  2:{name:'e4', notePitch: 'low'},
  3:{name:'f4', notePitch: 'low'},
  4:{name:'g4', notePitch: 'low'},
  5:{name:'a4', notePitch: 'low'},
  6:{name:'b4', notePitch: 'low'},
  7:{name:'c5', notePitch: 'low'},
  8:{name:'d5', notePitch: 'low'},
  9:{name:'e5', notePitch: 'low'},
  10:{name:'c4#', notePitch: 'high'},
  11:{name:'d4#', notePitch: 'high'},
  12:{name:'f4#', notePitch: 'high'},
  13:{name:'g4#', notePitch: 'high'},
  14:{name:'a4#', notePitch: 'high'},
  15:{name:'c5#', notePitch: 'high'},
  16:{name:'d5#', notePitch: 'high'}

};


var freqData = {
  1:{ freqValue : 10},
  2:{ freqValue : 30},
  3:{ freqValue : 40},
  4:{ freqValue : 50},
  5:{ freqValue : 60},
  6:{ freqValue : 70},
  7:{ freqValue : 80},
  8:{ freqValue : 70},
  9:{ freqValue : 60},
  10:{ freqValue : 50},
  11:{ freqValue : 40},
  12:{ freqValue : 50},
  13:{ freqValue : 6},
  14:{ freqValue : 65},
  15:{ freqValue : 56},
  16:{ freqValue : 56},
  17:{ freqValue : 3},
  18:{ freqValue : 33},
  19:{ freqValue : 23},
  20:{ freqValue : 99},
  21:{ freqValue : 88},
  22:{ freqValue :65 },
  23:{ freqValue :65 },
  24:{ freqValue : 34},
  25:{ freqValue :32 },
  26:{ freqValue :32 },
  27:{ freqValue :32 },
  28:{ freqValue :32 },
  29:{ freqValue :32 },
  30:{ freqValue :32 },
  31:{ freqValue :32 },
  32:{ freqValue :32 },
  33:{ freqValue :32 },
  34:{ freqValue :32 },
 };


var recordedSong = [];
