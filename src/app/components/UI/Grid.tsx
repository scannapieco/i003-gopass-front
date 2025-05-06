import { Link } from "react-router-dom";

export default function Grid() {
  const entradas = Array.from({ length: 6 }).map((_, i) => ({
    image: `https://pixabay.com/get/e832b40c2cf4013ecd0b4707e6484e9fe76ae3d71cb8184393f3c8_640.jpg`,
    partido: `Partido internacional ${i + 1}`,
    fecha: `Mayo ${10 + i}, 20:00`,
    precio: `$${500 + i * 100}`
  }));

  return (
    <div className="w-full p-4">
      {/* Título y botón */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Entradas de reventa</h2>
        <Link to="/all-images">
          <span className="text-red-600 cursor-pointer hover:underline">Ver más</span>
        </Link>
      </div>

      {/* Grid de entradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {entradas.map((entrada, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden"
          >
            <img
              src={entrada.image}
              alt={`Imagen ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <p className="font-semibold">{entrada.partido}</p>
              <p className="text-sm text-gray-500">{entrada.fecha}</p>
              <p className="text-sm text-green-600 font-bold">{entrada.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

