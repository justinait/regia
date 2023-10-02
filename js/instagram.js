document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const feedItem = document.getElementsByClassName('sk-instagram-feed-item');
        const lastFeedItem = feedItem[8];
        if (feedItem) {
            
            feedItem[8].classList.add("responsiveIg");       
            
        }
      }, 3000);
    
})