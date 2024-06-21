// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

// Create new <h1> element
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Brian Ratemo is the champion';
document.body.appendChild(newHeader);

// Ensure newHeader is accessible globally or in scope needed for testing
window.newHeader = newHeader; // Assuming you need to expose it globally