const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

function addRecommendation() {
  const nameInput = document.getElementById('recommenderName');
  const messageInput = document.getElementById('recommenderMessage');
  const recommendationList = document.querySelector('.recommendations');

  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (message === '') {
    alert("Please enter a recommendation message.");
    return;
  }

  const card = document.createElement('div');
  card.className = 'recommendation-card';

  card.innerHTML = `
    <div>
      <p style="font-style: italic;">"${message}"</p>
      ${name ? `<p style="margin-top: 10px; font-weight: bold;">- ${name}</p>` : ''}
    </div>
  `;

  recommendationList.appendChild(card);
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Clear input fields
  nameInput.value = '';
  messageInput.value = '';

  // Show thank you popup
  showThankYouPopup();
}

function showThankYouPopup() {
  const overlay = document.createElement('div');
  overlay.id = 'thankYouOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = 9999;

  const popup = document.createElement('div');
  popup.style.backgroundColor = 'rgba(165, 134, 222, 1)'; // purple background
  popup.style.padding = '20px 30px';
  popup.style.borderRadius = '8px';
  popup.style.textAlign = 'center';
  popup.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
  popup.style.maxWidth = '300px';
  popup.style.fontFamily = 'Arial, sans-serif';

const checkmark = document.createElementNS("http://www.w3.org/2000/svg", "svg");
checkmark.setAttribute("width", "40");
checkmark.setAttribute("height", "40");
checkmark.setAttribute("viewBox", "0 0 24 24");
checkmark.style.marginBottom = "10px";
checkmark.style.display = "block";
checkmark.style.marginLeft = "auto";
checkmark.style.marginRight = "auto";

// Create the check path
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("fill", "#ffffff"); // white color for checkmark
path.setAttribute("d", "M20.285 6.707l-11.39 11.39-5.285-5.284 1.414-1.414 3.871 3.871 9.977-9.977z");

// Append path to SVG
checkmark.appendChild(path);

  const message = document.createElement('p');
  message.textContent = "Thanks for leaving the recommendation!";
  message.style.color = 'black';             // black text
  message.style.fontSize = '14px';           // smaller font size
  message.style.margin = '0 0 20px 0';       // margin-bottom: 20px to add space below message
  message.style.whiteSpace = 'nowrap'; 

  const okButton = document.createElement('button');
  okButton.textContent = "ok";
  okButton.style.marginTop = '15px';
  okButton.style.padding = '8px 16px';
  okButton.style.border = 'none';
  okButton.style.backgroundColor = 'white'; // white background
  okButton.style.color = 'rgba(165, 134, 222, 1)'; // purple text
  okButton.style.borderRadius = '4px';
  okButton.style.cursor = 'pointer';
  okButton.style.fontSize = '15px';

  okButton.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });

  popup.appendChild(checkmark);
  popup.appendChild(message);
  popup.appendChild(okButton);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}


// Expose addRecommendation globally so it can be called from onclick in HTML
window.addRecommendation = addRecommendation;
