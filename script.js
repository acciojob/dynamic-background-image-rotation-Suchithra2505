//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  
  // Function to set background image based on screen orientation
  const setBackground = () => {
    if (window.matchMedia("(orientation: portrait)").matches) {
      body.style.backgroundImage = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg")';
    } else {
      body.style.backgroundImage = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg")';
    }
  };

  // Initial call to set background image based on initial screen orientation
  setBackground();

  // Event listener to detect changes in screen orientation and update background image
  window.addEventListener('orientationchange', () => {
    setBackground();
  });
});
