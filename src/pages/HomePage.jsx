import React from 'react'
    import { Link } from 'react-router-dom'
    import { PlayCircle, Headphones, Upload, Stars } from 'lucide-react'

    function HomePage() {
      return (
        <div className="min-h-screen py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-8 neon-text">Vibrancy</h1>
            <p className="text-xl mb-12 text-gray-300">
              Раскройте свой музыкальный потенциал с нами. Дистрибуция, продвижение и многое другое.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-8 md:space-y-0 mb-16">
              <Link
                to="/services"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out flex items-center neon-button"
              >
                <PlayCircle className="mr-2" size={20} />
                Наши услуги
              </Link>
              <Link
                to="/pricing"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out flex items-center neon-button"
              >
                <Headphones className="mr-2" size={20} />
                Цены
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <Upload className="text-blue-500 mb-4 mx-auto" size={48} />
                <h2 className="text-2xl font-semibold mb-2 neon-text">Дистрибуция</h2>
                <p className="text-gray-300">
                  Распространяйте свою музыку на все популярные платформы.
                </p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <Stars className="text-purple-500 mb-4 mx-auto" size={48} />
                <h2 className="text-2xl font-semibold mb-2 neon-text">Продвижение</h2>
                <p className="text-gray-300">
                  Привлекайте новых слушателей и расширяйте свою аудиторию.
                </p>
              </div>
              <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <Headphones className="text-green-500 mb-4 mx-auto" size={48} />
                <h2 className="text-2xl font-semibold mb-2 neon-text">Поддержка</h2>
                <p className="text-gray-300">
                  Получите профессиональную поддержку на каждом этапе.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }

    export default HomePage
