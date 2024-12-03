// Function to change the background color of the page
function changeBackgroundColor() {
    const colors = ['#FF6347', '#20B2AA', '#FF1493', '#FFD700', '#7B68EE'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add event listener to the button
const button = document.getElementById('changeColorButton');
button.addEventListener('click', changeBackgroundColor);
