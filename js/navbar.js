const navItem = document.getElementsByClassName('navbarItem');
const navItemActive = document.getElementsByClassName('navbarItemActive');

for(let i=0; i<navItem.length; i++){

    navItem[i].addEventListener('click', () => {

        for(let i=0; i<navItem.length; i++){//limpia
            navItem[i].style.display = "block";
            navItemActive[i].style.display = "none";
        }

        navItem[i].style.display = "none";
        navItemActive[i].style.display = "block";
    
    })
}


// function selectMenuItem (e) {
//     for(let i=0; i<navItem.length; i++){
//         let cual;

//         if(navItem[i] == e){
            
//             cual = i;
//             return cual;

//         }
//     }
//     return cual;
// }
// //e ya agarra el q corresponde pero yo tmb busco el compa del q corresponde x eso el mambo

// function mostrarOcultar(e) {
//     let cual = 0;
//     cual = selectMenuItem(e);

//     console.log(navItem[cual]);

//     for(let i=0; i<navItem.length; i++){

//         navItem[i].style.display ? "block" :
//         navItemActive[i].style.display = "none";

//     }//esto no anda

//     navItemActive[cual].style.display = "block";
//     navItem[cual].style.display = "none";
    
    
    //     if (navItemActive[cual].style.display == "none") {
    //         // && navItem[cual].style.display == "block"
    //     //te falta decir q en el onclick, tmb se desactive la q sea q este on
    //     console.log(navItem[cual]);
    //     navItemActive[cual].style.display = "block";
    //     navItem[cual].style.display = "none";
    // }

