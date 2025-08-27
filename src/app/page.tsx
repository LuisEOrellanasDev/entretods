
import IconDescripcion from "./_components/iconDescription";
import Link from "next/link";


export default function InitialPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center justify-center w-3/4 h-3/4 bg-white rounded-xl shadow-lg p-6">
        <div className="header w-full flex flex-row items-center justify-between px-6">
          <h1 className="text-4xl text-blue-500">entretods</h1>
          <div className="flex flex-row gap-4">
            <Link href="/login" className="bg-white text-black border border-gray-500 px-4 py-2 whitespace-nowrap hover:bg-gray-500 hover:text-white rounded">
              Iniciar Sesión
            </Link>
            <Link href="/register" className="bg-white text-blue-500 border border-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white rounded">
              Registrarse
            </Link>
          </div>
        </div>

        <div className="main w-2/3 mt-10 flex flex-1 flex-col items-center justify-center">
          <p className="text-4xl font-bold text-center max-w-2xl mx-auto">Organiza gastos con tus amigos de manera simple</p>
          <p className="text-gray-600 text-center mt-4 max-w-xl mx-auto">Registra viajes, apunta gastos compartidos y al final ve quién debe a quién</p>

          <button className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white px-4 mt-10 py-2 rounded">Comenzar un viaje</button>
          <div className="flex flex-row gap-4 mt-10">
            <IconDescripcion icon="✈️" text="Crea viajes" />
            <IconDescripcion icon="💰" text="Registra gastos" />
            <IconDescripcion icon="⚖️" text="liquida balances" />
          </div>
        </div>

      </div>
    </div>
  )
}