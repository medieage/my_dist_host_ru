import React from 'react'

    function DashboardPage() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-semibold mb-4 neon-text">Панель управления</h1>
          <p className="text-gray-300">
            Управляйте своей музыкой, просматривайте статистику и многое другое.
          </p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-2 neon-text">Статистика</h2>
            <p className="text-gray-300">Здесь будет отображаться статистика вашей музыки.</p>
          </div>
        </div>
      )
    }

    export default DashboardPage
