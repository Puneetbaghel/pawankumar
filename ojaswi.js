function toggleNav() {
  const navbar = document.querySelector ('.navbar');
  const cross = document.querySelector('.cross');
  
  if (navbar.style.left === '0px') {
      navbar.style.left = '-400px'; // Hide
      cross.style.display = 'none';  // Hide cross
  } else {
      navbar.style.left = '0px';     // Show
      cross.style.display = 'block';  // Show cross
  }
  }
