import React from 'react'

    function PricingPage() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold mb-4 neon-text">Цены</h1>
          <p className="text-gray-300">
            Ознакомьтесь с нашими тарифными планами и выберите наиболее подходящий для вас.
          </p>
          <table className="table-auto mt-4 w-full">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2 neon-text">План</th>
                <th className="px-4 py-2 neon-text">Цена</th>
                <th className="px-4 py-2 neon-text">Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 neon-text">Базовый</td>
                <td className="border px-4 py-2 neon-text">Бесплатно</td>
                <td className="border px-4 py-2 text-gray-300">
                  Ограниченные возможности.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 neon-text">Премиум</td>
                <td className="border px-4 py-2 neon-text">1990₽ / месяц</td>
                <td className="border px-4 py-2 text-gray-300">Все возможности.</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }

    export default PricingPage
