const servicePh = document.getElementsByClassName('servicePhoto');
const serviceDesc = document.getElementsByClassName('serviceDescription');

for(let i = 0; i < servicePh.length; i++){
    
    servicePh[i].addEventListener('click', () => {

        for(let i = 0; i < servicePh.length; i++) {
            servicePh[i].style.display = "block"
            serviceDesc[i].style.display = "none"
        }

        servicePh[i].style.display = "none"
        serviceDesc[i].style.display = "block"

    })
}


// function showDescription(e) {   }

// servicePh[cual].style.display = "block";
// servicePh[cual].style.display = "none";