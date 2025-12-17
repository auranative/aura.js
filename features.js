document.addEventListener('DOMContentLoaded', () => {
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