// Love Calculator Function
function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const resultElement = document.getElementById('result');

    if (!name1 || !name2) {
        resultElement.innerText = 'Please enter both names.';
        return;
    }

    // Simple random compatibility calculation
    const percentage = Math.floor(Math.random() * 100) + 1;
    resultElement.innerText = `${name1} and ${name2} are ${percentage}% compatible! 💕`;
}

// Personalized Love Message Generator
function generateMessage() {
    const partnerName = document.getElementById('partner-name').value.trim();
    const messageElement = document.getElementById('message');

    if (!partnerName) {
        messageElement.innerText = 'Please enter your partner\'s name.';
        return;
    }

    const messages = [
        `My dearest ${partnerName},you're the stronger one,and specially onee.`,
        `${partnerName},whatever we dream of, achieve it togetherr yaa.`,
        `you're the spirit for me because with you,i feel more intelegent in study , ${partnerName}.i hope we go itb togetherr yaa.`,
        `${partnerName},don't give upp i always support youu `,
        ` ${partnerName}, semangattt brontooo
        .`,
        `${partnerName}, being with you is the greatest adventure of my life.`
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.innerText = randomMessage;
}

// Floating Hearts Animation (additional special effect)
document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
    }
});
