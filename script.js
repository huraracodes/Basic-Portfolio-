 // Toggle the display of the navigation menu on mobile
 const navbarToggle = document.getElementById('navbar-toggle');
 const navList = document.querySelector('.nav-list');

 navbarToggle.addEventListener('click', () => {
   navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
   navbarToggle.classList.toggle('active'); // Add/remove the active class for the toggle animation
 });


 // year 
 document.getElementById("year").textContent = new Date().getFullYear();