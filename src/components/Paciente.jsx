const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, alta, sintomas, email,id} =paciente

  const handlerEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?")
    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl mt-5">
    <p className="font-bold mb-3 uppercase text-gray-700 ">Nombre: {''}
      <span className="font-normal normal-case ">{nombre}</span>
    </p>
    
    <p className="font-bold mb-3 uppercase text-gray-700 ">Propietario: {''}
      <span className="font-normal normal-case ">{propietario}</span>
    </p>

    <p className="font-bold mb-3 uppercase text-gray-700 ">email: {''}
      <span className="font-normal normal-case ">{email}</span>
    </p>

    <p className="font-bold mb-3 uppercase text-gray-700 ">fecha de alta: {''}
      <span className="font-normal normal-case ">{alta}</span>
    </p>

    <p className="font-bold mb-3 uppercase text-gray-700 ">sintomas: {''}
      <span className="font-normal normal-case ">{sintomas}</span>
    </p>
    <div className="flex justify-between mt-10">
      <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={ () => setPaciente(paciente)}
      >Editar</button>

      <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handlerEliminar}
      >Eliminar</button>
    </div>
  </div>
  )
}

export default Paciente