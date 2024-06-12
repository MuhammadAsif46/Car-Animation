let audio = document.createElement('audio');
        audio.src = 'sound.mp3';
        audio.loop = true;

        // Function to play the audio
        function playAudio() {
            audio.play().then(() => {
                console.log('Audio is playing');
            }).catch(function(error) {
                console.log('Playback prevented:', error);
            });

            // Remove the event listener after the audio starts playing
            document.removeEventListener('click', playAudio);
        }

        // Add event listener for any click on the document
        document.addEventListener('click', playAudio);

        audio.addEventListener('error', function(e) {
            console.log('Error loading audio file:', e);
        });