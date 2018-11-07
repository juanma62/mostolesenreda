export class Buscador {
    constructor(){
        this.btnMenu = document.querySelector('.sea')
        this.btnLupa = document.querySelector('.lupa')
        this.btnLupa.addEventListener('click', this.cajaBuscador.bind(this))
        this.btnMenu.addEventListener('click', this.mostrarMenu.bind(this))
    }

    cajaBuscador(){
        //let div = document.createElement("input")
        document.body.insertAdjacentHTML(header, div)
    }

    mostrarMenu(){
        console.log("Aquí estamos Menú")
    }
}