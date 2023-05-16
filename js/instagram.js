document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const feedItem = document.getElementsByClassName('sk-instagram-feed-item');
    
        if (feedItem) {
            
            feedItem[8].classList.add("responsiveIg");            
            // feedItem[8].style.display = "none";
        }
      }, 5000);
    

    
})
// console.log(feedItem);

// for(let i=0; i<feedItem.length; i++){
//     console.log('feedItem[i]');
    // feedItem[8].style.display = "none";

    // navItem[i].addEventListener('click', () => {
    //     for(let i=0; i<navItem.length; i++){
    //         navItem[i].style.display = "block";
    //         navItemActive[i].style.display = "none";
    //     }
    //     navItem[i].style.display = "none";
    //     navItemActive[i].style.display = "block";
    // })
// 