(function() {
    function streamVideo() {
        const video = document.querySelector("video");
        const options = { video: true };
        navigator.mediaDevices.getUserMedia(options)
            .then( stream => video.srcObject = stream)
            .catch( err => console.error(err));
    }

    document.querySelector('.mirror button')
        .addEventListener('click', streamVideo);
})();