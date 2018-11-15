export class AltoHeader {
    constructor (){
        this.altoHeader = document.getElementById('headerId').offsetHeight
        this.main = document.getElementById('mainId')
        window.addEventListener('resize', this.medirAlto.bind(this))
        document.onload = this.medirAlto()
    }
        
    medirAlto(){
        if(!this.main.style.marginTop){
            this.main.style.marginTop = this.altoHeader+'px'
            //location.reload(false)
            console.log('Hola')
        }else{
            location.reload(false)
            console.log('Adios')
        }
    }
}