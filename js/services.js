const servicePh = document.getElementsByClassName('servicePhoto');
const serviceDesc = document.getElementsByClassName('serviceDescription');
const service = document.getElementsByClassName('service');

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

// border-top: yellow 1.7px solid;
// border-top: none;