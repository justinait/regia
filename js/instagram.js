document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const feedItem = document.getElementsByClassName('sk-instagram-feed-item');
    
        if (feedItem) {
            
            feedItem[8].classList.add("responsiveIg");            
            // feedItem[8].style.display = "none";
        }
      }, 3000);
    
})