
(function() {
    // Create audio (context) container
    var audioCtx = new (AudioContext || webkitAudioContext)();
    var notesByKeyCode = {
        65: { noteName: 'c4', frequency: 261.6, keyName: 'a' },
        83: { noteName: 'd4', frequency: 293.7, keyName: 's' },
        68: { noteName: 'e4', frequency: 329.6, keyName: 'd' },
        70: { noteName: 'f4', frequency: 349.2, keyName: 'f' },
        71: { noteName: 'g4', frequency: 392,   keyName: 'g' },
        72: { noteName: 'a4', frequency: 440,   keyName: 'h' },
        74: { noteName: 'b4', frequency: 493.9, keyName: 'j' },
        75: { noteName: 'c5', frequency: 523.3, keyName: 'k' },
        76: { noteName: 'd5', frequency: 587.3, keyName: 'l' },
        186: { noteName: 'e5', frequency: 659.3,keyName: ';' }
    };

    function Key(noteName, keyName, frequency) {
        var keySound = new Sound(frequency, 'triangle');
        return {sound:keySound};
    }

    function Sound(frequency, type) {
        this.osc = audioCtx.createOscillator(); // Create oscillator node
        this.pressed = false; // flag to indicate if sound is playing

        if(typeof frequency !== 'undefined') {
            this.osc.frequency.value = frequency;
        }

        /* Set waveform type. */
        this.osc.type ='triangle';
        this.osc.start(0);
    };

    Sound.prototype.play = function() {
        if(!this.pressed) {
            this.pressed = true;
            this.osc.connect(audioCtx.destination);
        }
    };

    Sound.prototype.stop = function() {
        this.pressed = false;
        this.osc.disconnect();
    };

    function loadNoteFrequency(notes) {
        for(var keyCode in notes) {
            var note = notes[keyCode];

            /* Generate playable key */
            note.key = new Key(note.noteName, note.keyName, note.frequency);
         }
        var playNote = function(event) {
            var keyCode = event.keyCode;
            notesByKeyCode[keyCode].key.sound.play();
        };

        var endNote = function(event) {
            var keyCode = event.keyCode;
            notesByKeyCode[keyCode].key.sound.stop();
        }
        window.addEventListener('keydown', playNote);
        window.addEventListener('keyup', endNote);
    }

    window.addEventListener('load', function() {
        loadNoteFrequency(notesByKeyCode);
    });
})();