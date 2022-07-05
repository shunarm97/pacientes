import {useState, useEffect} from 'react'
import Error from './error'
const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')
  
  const [error, setError] = useState(false)

  useEffect(()=> {
    
  },[paciente])
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }
  const handleSubmit= (e) => {
    e.preventDefault()

    // validar formulario
    if([nombre, propietario,email, alta, sintomas].includes('')) {
      console.log('hay campos vacios')
      setError(true)
      return
    } 
    setError(false)

    const objetoPaciente = {
      nombre, 
      propietario,
      email, 
      alta, 
      sintomas,
      id: generarId()
    }
    // console.log(objetoPaciente)

    setPacientes([...pacientes, objetoPaciente])

    // reiniciar form

    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimineto de Pacientes
          </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {''}
          <span className="text-indigo-600 font-bold">Administracion</span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              onSubmit={handleSubmit} >
              {error && <Error> <p>TODOOS LOS CAMPOS SON OBLIGATORIOS</p> </Error>}
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota" 
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
            <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario" 
              value={propietario}
              onChange={(e)=> setPropietario(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email de contacto</label>
            <input className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
              id="email"
              type="email"
              placeholder="Email de contacto" 
              value={email}
              onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
            <input className="border-2 w-full p-2 mt-2 placeholderbg-gray-400 rounded-md"
              id="date"
              type="date"
              value={alta}
              onChange={(e)=> setAlta(e.target.value)} />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">sintomas</label>
            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="describe los sintomas"
              value={sintomas}
              onChange={(e)=> setSintomas(e.target.value)} />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value="Agregar pacientes"
          />
        </form>
    </div>
  )
}

export default Formulario