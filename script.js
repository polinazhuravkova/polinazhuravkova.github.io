const popupButton1 = document.getElementById('menu1-btn');
const popupMenu1 = document.getElementById('menu1');
const popupButton2 = document.getElementById('menu2-btn');
const popupMenu2 = document.getElementById('menu2');

popupButton1.addEventListener('click', function() {
  popupMenu1.style.display = (popupMenu1.style.display === 'flex') ? 'none' : 'flex';
});

// Close the popup if user clicks outside of it
document.addEventListener('click', function(event) {
  if (!popupButton1.contains(event.target) && !popupMenu1.contains(event.target)) {
    popupMenu1.style.display = 'none';
  }
});
popupButton2.addEventListener('click', function() {
  popupMenu2.style.display = (popupMenu2.style.display === 'flex') ? 'none' : 'flex';
});

// Close the popup if user clicks outside of it
document.addEventListener('click', function(event) {
  if (!popupButton2.contains(event.target) && !popupMenu2.contains(event.target)) {
    popupMenu2.style.display = 'none';
  }
});
