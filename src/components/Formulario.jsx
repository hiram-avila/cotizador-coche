import { Fragment } from "react"
import { MARCAS as marca, YEARS as years, PLANES as planes } from "../constants"
import Error from "./Error"
import useCotizador from "../hooks/useCotizador"
import Spinner from "../components/Spinner"

const Formulario = () => {

    const { handleChange, datos, error, setError, cotizarSeguro, resultado, cargando} = useCotizador()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Campos obligatorios')
        } else{
            setError(false)
            cotizarSeguro()
            console.log(cargando)
        }
        
    }

   
  return (
    <>

        {error && <Error/> }
        <form
            onSubmit={ handleSubmit }
        >
                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>
                        Marca
                    </label>

                    <select name="marca" className='w-full p-3 bg-white border border-gray-200' onChange={(e)=>handleChange(e)} value={datos.marca}>
                        <option value="">-- selecciona modelo--</option>
                        {
                            marca.map((auto) => {
                                return  <option key={auto.id} value={auto.id}>{auto.nombre}</option>
                            })
                        }
                    </select>
                </div>
                


                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>
                        Año
                    </label>

                    <select name="year" className='w-full p-3 bg-white border border-gray-200' onChange={(e)=>handleChange(e)} value={marca.year}>
                        <option value="">-- selecciona año --</option>
                        {
                            years.map((year) => {
                                return  <option key={year} value={year}>{year}</option>
                            })
                        }
                    </select>
                </div>


                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>
                        Planes
                    </label>
                    <div className="flex gap-3">
                        {
                            planes.map((plan) => {
                                return <Fragment key={plan.id}>
                                            <label>
                                                {plan.nombre}
                                            </label>
                                            <input 
                                                type="radio" 
                                                name="plan" 
                                                value={plan.id} 
                                                onChange={(e)=>handleChange(e)}
                                            />

                                       </Fragment>
                            })
                        }

                    </div>
                </div>

                <input 
                    type="submit" 
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    value="cotizar"
                />

                        {cargando ? <Spinner/> :resultado}
        </form>
    </>
  )
}

export default Formulario