import React from 'react'

    function ServicesPage() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold mb-4 neon-text">Наши услуги</h1>
          <p className="text-gray-300">
            Мы предлагаем широкий спектр услуг, включая дистрибуцию музыки, маркетинг и продвижение,
            а также лицензирование.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              <span className="neon-text">Дистрибуция музыки</span> - Размещение вашей музыки на всех
              популярных платформах.
            </li>
            <li>
              <span className="neon-text">Маркетинг и продвижение</span> - Помощь в привлечении новых
              слушателей.
            </li>
            <li>
              <span className="neon-text">Лицензирование</span> - Оформление лицензий на вашу музыку.
            </li>
          </ul>
        </div>
      )
    }

    export default ServicesPage
