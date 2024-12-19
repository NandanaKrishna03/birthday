function nextPage1() {
    setTimeout(() => {
        window.location.href = "secondpage.html"; // Replace with the actual path to your next page
    }, 3000); // 3000 milliseconds = 3 seconds
}

window.onload = function() {
    startConfetti();
};

function startConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        container.appendChild(confetti);
    }

    const confettiElements = document.querySelectorAll('.confetti');
    confettiElements.forEach((confetti) => {
        const randomX = Math.random() * window.innerWidth;
        const randomRotation = Math.random() * 360;
        const randomScale = Math.random();
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        const randomDuration = Math.random() * 3 + 2;

        confetti.style.left = `${randomX}px`;
        confetti.style.backgroundColor = randomColor;
        confetti.style.transform = `scale(${randomScale}) rotate(${randomRotation}deg)`;
        confetti.style.animation = `fall ${randomDuration}s linear infinite`;
    });
}

function createStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti {
            position: absolute;
            width: 10px;
            height: 20px;
            opacity: 0.8;
        }

        @keyframes fall {
            0% {
                top: -10%;
                opacity: 1;
            }
            100% {
                top: 100%;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

createStyles();
