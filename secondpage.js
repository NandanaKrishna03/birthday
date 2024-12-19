function hidePage(element) {
    element.classList.add('hidden');
    const audio = document.getElementById("background-audio");
   
        if (audio) {
            audio.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        }
   
}
