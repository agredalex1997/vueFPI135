const app = new Vue({
    //Aca se pone el id de del div que queres que contenga la app
    el: "#app",

    data: {
        cantidad: 10,
        clientes: [],
        aceptados: 0,
        rechazados: 0,
        genero: true,
        ciudad: true,
        email: true,
        busqueda: ''

    },

    methods: {
        obtenerClientes: function () {
            axios.get('https://randomuser.me/api/?results=' + this.cantidad).then(response => {
                this.clientes = response.data.results;
            })
        },

        aceptarCliente: function (posicion) {
            this.aceptados++;
            this.clientes.splice(posicion, 1);
        },

        rechazarCliente: function (posicion) {
            this.rechazados++;
            this.clientes.splice(posicion, 1);
        },

        filtrarInfo: function () {
            (document.querySelector('#genero').checked) ? this.genero = true: this.genero = false;
            (document.querySelector('#ciudad').checked) ? this.ciudad = true: this.ciudad = false;
            (document.querySelector('#email').checked) ? this.email = true: this.email = false;
        },

        aplicarfiltro: function (texto) {
            if (texto.includes(this.busqueda) > 0) {
                return true;
            }
            return false;
        }


    }
});