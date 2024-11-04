function openVideo() {
    document.getElementById("videoModal").style.display = "flex";
}

function closeVideo() {
    document.getElementById("videoModal").style.display = "none";
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.src = videoFrame.src; // Reset the video source to stop playback
}

