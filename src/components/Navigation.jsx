import React from 'react'
    import { NavLink } from 'react-router-dom'
    import { Music2 } from 'lucide-react'

    function Navigation() {
      return (
        <nav className="bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <NavLink
              to="/"
              className="flex items-center text-white hover:text-gray-300 neon-text"
            >
              <Music2 className="mr-2" size={24} />
              <span className="text-lg font-semibold">Vibrancy</span>
            </NavLink>
            <div className="space-x-4">
              <NavLink
                to="/"
                className="text-white hover:text-gray-300"
                activeClassName="font-semibold neon-text"
              >
                Главная
              </NavLink>
              <NavLink
                to="/services"
                className="text-white hover:text-gray-300"
                activeClassName="font-semibold neon-text"
              >
                Услуги
              </NavLink>
              <NavLink
                to="/pricing"
                className="text-white hover:text-gray-300"
                activeClassName="font-semibold neon-text"
              >
                Цены
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white hover:text-gray-300"
                activeClassName="font-semibold neon-text"
              >
                Контакты
              </NavLink>
              <NavLink
                to="/login"
                className="text-white hover:text-gray-300"
                activeClassName="font-semibold neon-text"
              >
                Войти
              </NavLink>
              <NavLink
                to="/register"
                className="text-white hover:text-gray-300"
                activeClassName="font-semibold neon-text"
              >
                Регистрация
              </NavLink>
            </div>
          </div>
        </nav>
      )
    }

    export default Navigation
