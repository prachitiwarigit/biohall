

// import header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContainer').innerHTML = data;

        // Add the 'active' class to the link of the current page
        var currentURL = window.location.pathname;
        var activeLink = document.querySelector('.menuitem a[href="' + currentURL + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    })
    .catch(error => console.error('Error fetching header:', error));
    



//   import footer  
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerContainer').innerHTML = data;
        })
        .catch(error => console.error('Error fetching top bar:', error));

        

        // script tag for scroll tab  

    function scrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }






    
 
    
