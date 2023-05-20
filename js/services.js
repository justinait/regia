const servicePh = document.getElementsByClassName('servicePhoto');
const serviceDesc = document.getElementsByClassName('serviceDescription');
const service = document.getElementsByClassName('service');

for(let i = 0; i < servicePh.length; i++){

    servicePh[i].addEventListener('click', () => {

        for(let i = 0; i < servicePh.length; i++) {
            servicePh[i].style.display = "block";
            serviceDesc[i].style.display = "none";

            service[i].style.borderTop = "yellow 1.7px solid";
        }

        servicePh[i].style.display = "none";
        serviceDesc[i].style.display = "block";

        service[i].style.borderTop = "none";

    })
}

// border-top: yellow 1.7px solid;
// border-top: none;

//yo quiero q lo q sucede aca, suceda mas lento y agregando esas 2 props