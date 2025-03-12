import React from 'react'

    function RegisterPage() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold mb-4 neon-text">Регистрация</h1>
          <p className="text-gray-300">
            Создайте новую учетную запись, чтобы начать дистрибуцию своей музыки.
          </p>
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-300 text-sm font-bold mb-2">
                Имя пользователя:
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">
                Пароль:
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline neon-button"
              type="button"
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      )
    }

    export default RegisterPage
