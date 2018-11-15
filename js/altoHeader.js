export class AltoHeader {
    constructor (){
        this.altoHeader = document.getElementById('headerId').offsetHeight
        this.main = document.getElementById('mainId')
        window.addEventListener('resize', this.medirAlto.bind(this))
        document.onchange = this.medirAlto()
    }
        
    medirAlto(){
        if(!this.main.style.marginTop){
            //location.reload()
            this.main.style.marginTop = this.altoHeader+'px'
            console.log('Hola')
        }else{
            location.reload(true)
            console.log('Adios')
        }
        /* let altura = 0
        console.log(altura)
        fetch(altura, {method: 'GET'})
        .then(response => {
            if(!response){
                console.log('Aquí estamos 1')
                return response
                
            }break
        }).then(data => this.medirAlto())
        return new Promise((resolve) => {
            let altura = this.altoHeader+"px"
            console.log('Aquí estamos 1')
        }).then((resolve) => {
            this.main.style.marginTop = altura
            console.log('Aquí estamos')
        })
        this.main.style.marginTop += this.altoHeader+"px"
        console.log('Aquí estamos')
        console.dir(this.main) */
    }
}


