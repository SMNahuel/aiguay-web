export default function DataDeletionPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Eliminación de Datos</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Solicitud de Eliminación de Datos Personales</h2>
          
          <p className="text-gray-700 mb-4">
            Si deseas eliminar tus datos personales de nuestro sistema, puedes hacerlo a través de esta página.
            Una vez procesada tu solicitud, eliminaremos toda la información asociada a tu cuenta de manera permanente.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <h3 className="text-lg font-medium text-yellow-800 mb-2">⚠️ Importante</h3>
            <p className="text-yellow-700">
              Esta acción es irreversible. Una vez eliminados, tus datos no podrán ser recuperados.
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico asociado a tu cuenta
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                Motivo de eliminación (opcional)
              </label>
              <textarea
                id="reason"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe brevemente por qué deseas eliminar tus datos..."
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="confirm"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="confirm" className="text-sm text-gray-700">
                Confirmo que entiendo que esta acción es irreversible y deseo eliminar permanentemente mis datos
              </label>
            </div>
            
            <button
              type="button"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
            >
              Solicitar Eliminación de Datos
            </button>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-3">Información del Proceso</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Tu solicitud será procesada en un plazo máximo de 30 días</li>
            <li>• Recibirás una confirmación por correo electrónico</li>
            <li>• Algunos datos pueden conservarse por requisitos legales</li>
            <li>• Puedes contactar a soporte si tienes preguntas</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 