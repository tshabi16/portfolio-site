function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal if user clicks outside of modal content
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if(event.target == modal) {
      modal.style.display = "none";
    }
  });
}
