export class AltoHeader {
    constructor (){
        this.altoHeader = document.getElementById('headerId').clientHeight
        this.main = document.getElementById('mainId')
        window.onload = this.medirAlto()
    }
        
    medirAlto(){
        let altura = this.altoHeader
        this.main.style.marginTop = altura+"px"
    }
}