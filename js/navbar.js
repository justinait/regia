const navItem = document.getElementsByClassName('navbarItem');
const navItemActive = document.getElementsByClassName('navbarItemActive');

for(let i=0; i<navItem.length; i++){

    navItem[i].addEventListener('click', () => {

        for(let i=0; i<navItem.length; i++){
            navItem[i].style.display = "block";
            navItemActive[i].style.display = "none";
        }

        navItem[i].style.display = "none";
        navItemActive[i].style.display = "block";
    
    })
}