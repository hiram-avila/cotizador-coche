import { createContext, useState } from "react";
import { obtenerDiferencia, calcularMarca, calcularPlan, formatearDinero } from "../helper";

    const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [error, setError] = useState(false)
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)
    
    const [datos, setDatos] = useState({
        marca: "",
        year:"",
        plan:""
    })

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value

        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000;

        const diferencia = obtenerDiferencia(datos.year)

        resultado -= ((diferencia * 3) * resultado) / 100
        resultado *= calcularMarca(datos.marca)
        resultado *= calcularPlan(datos.plan)
        resultado = formatearDinero(resultado)

        setCargando(true)
        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 2000);
    }




    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChange,   
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}




export {
    CotizadorProvider
}

export default CotizadorContext