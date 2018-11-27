export class CambiarHeader {

    constructor(){
        this.cabecera = document.querySelector('#cabecera')
        this.cabecera2 = document.querySelector('#cabeceraPequena')
        this.altoHeader = document.getElementById('headerId').offsetHeight
        document.addEventListener('scroll', this.scrollDetect.bind(this))
        console.dir(this.cabecera)
    }

    scrollDetect(oE){
        if(oE.target.scrollingElement.scrollTop > this.altoHeader - 50){
            console.log('Aquí estamos')
            this.cabecera.style.display = 'none'
            this.cabecera2.style.display = 'flex'
        }else{
            console.log('Aquí estamos2')
            this.cabecera.style.display = 'flex'
            this.cabecera2.style.display = 'none'
        }
    }
}