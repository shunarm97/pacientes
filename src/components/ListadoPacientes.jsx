import { useEffect } from "react"
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente}) => {

  useEffect(() => {
    if(pacientes.length > 0) {
      console.log('nuevo paciente')
    }
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
     
      {pacientes && pacientes.length ? (
      <>
      <h2 className="font-black text-3xl text-center">
      Listado Pacientes
    </h2>  
    <p className="text-xl text-center mg-10 mt-5">
      Administra tus {''}
      <span className="text-indigo-600 font-bold">Pacientes y Clientes</span>
    </p>

    {pacientes.map( paciente => (
      <Paciente
      key={paciente.id}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      ))}
      </>
      ) : (
      <>
            <h2 className="font-black text-3xl text-center">
      No hay pacientes
    </h2>  
    <p className="text-xl text-center mg-10 mt-5">
      Comienza agregando pacientes{''}
      <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
    </p>
      
      </>
      )} 


      


    </div>
  )
}

export default ListadoPacientes