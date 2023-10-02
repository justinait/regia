const servicePh = document.getElementsByClassName('servicePhoto');
const serviceDesc = document.getElementsByClassName('serviceDescription');
const service = document.getElementsByClassName('service');
if (window.innerWidth <= 1000) {

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
} 

if (window.innerWidth > 1000) {
    
    for (let i = 0; i < servicePh.length; i++) {
        
        servicePh[i].addEventListener('mouseover', () => {
            
            for (let j = 0; j < servicePh.length; j++) {
                servicePh[j].style.display = "block";
                serviceDesc[j].style.display = "none";
                service[j].style.borderTop = "yellow 1.7px solid";
            }
            
            servicePh[i].style.display = "none";
            serviceDesc[i].style.display = "block";
            service[i].style.borderTop = "none";
        });
    }
}