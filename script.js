const button = document.getElementById('btn');

button.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'Red';
});
document.addEventListener("DOMContentLoaded", () => {
  // Select all clickable skill headers
  const skillHeaders = document.querySelectorAll(".skill-header");

  skillHeaders.forEach(header => {
    header.addEventListener("click", () => {
      // Find the parent .skill-item element
      const skillItem = header.parentElement;
      
      // Toggle the 'active' class on the parent
      skillItem.classList.toggle("active");
    });
  });
});