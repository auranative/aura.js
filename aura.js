document.addEventListener('DOMContentLoaded', () => {
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i=0; i<200; i++){
    particles.push(
        {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 4 + 1,
            speedX: Math.random() * 0.6 - 0.3,
            speedY: Math.random() * 0.6 - 0.1,
            hue: Math.random() * 120 + 150
        }
    );
}

function animate(){
    particles.forEach(
        p => {
            ctx.fillStyle = `hsla(${p.hue},90%,70%,0.8)`;
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI * 2);
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            if(p.y > 0) p.y = canvas.width;
            if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        }
    );
requestAnimationFrame(animate);
}
animate();

window.addEventListener(
    'resize',() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
);

const bar = document.getElementById('announcementBar');
if(!bar) return;
const taglines = bar.querySelectorAll('.tagline');
let currentIndex = 0;
let interValId = null;
const displayTime = 5000;
const fadeTime = 1000;
function showNext() {
    taglines[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % taglines.length;
    setTimeout(
        () => {
            taglines[currentIndex].classList.add('active');
        }
        ,fadeTime
    );
}
function startRotation() {
    if(interValId) clearInterval(interValId);
    interValId = setInterval (showNext, displayTime + fadeTime);
}
function stopRotation() {
    clearInterval(interValId);
}
if (taglines.length > 0) {
    taglines[0].classList.add('active');
startRotation();
}
bar.addEventListener('mouseenter','stopRotation');
bar.addEventListener('mouseleave','startRotation');
});