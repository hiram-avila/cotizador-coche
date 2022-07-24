export const MARCAS = [
    { id: 1,
      nombre: 'europeo'
    },

    { id: 2, 
        nombre: 'americano'
    },

    { id: 3,
         nombre: 'asiatico'
    },

]

const YEARMAX =new Date().getFullYear()

export const YEARS = Array.from(
    new Array(20),
    (valor,index) => YEARMAX - index
  );

  export const PLANES = [
    { id: 1,
      nombre: 'basico'
    },

    { id: 2, 
        nombre: 'completo'
    }

]
