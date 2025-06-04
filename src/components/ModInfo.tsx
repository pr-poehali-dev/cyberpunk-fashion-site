const ModInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6 font-orbitron">
            О МОДЕ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
            Погрузитесь в мир киберпанка с новым оружием и уникальными
            возможностями
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-cyan-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_#00ffff] transition-all duration-300">
              <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
            </div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-4 font-orbitron">
              НОВОЕ ОРУЖИЕ
            </h3>
            <p className="text-gray-300 font-mono leading-relaxed">
              Лазерная катана "Нагасаки" с уникальными анимациями и звуковыми
              эффектами
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_#ff00ff] transition-all duration-300">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-purple-300 mb-4 font-orbitron">
              ПЕРСОНАЖ
            </h3>
            <p className="text-gray-300 font-mono leading-relaxed">
              Уникальный персонаж с анимированным датчиком и новыми
              способностями
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-pink-500/30 rounded-lg p-8 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_#ff0088] transition-all duration-300">
              <div className="w-8 h-2 bg-white rounded"></div>
            </div>
            <h3 className="text-2xl font-bold text-pink-300 mb-4 font-orbitron">
              ЭФФЕКТЫ
            </h3>
            <p className="text-gray-300 font-mono leading-relaxed">
              Новые визуальные эффекты, частицы и улучшенная графика боевой
              системы
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-cyan-300 mb-4 font-orbitron">
              ГОТОВ К УСТАНОВКЕ?
            </h3>
            <p className="text-gray-300 mb-6 font-mono">
              Скачайте мод и окунитесь в мир киберпанка с новым оружием
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff] transform hover:scale-105 font-orbitron">
                СКАЧАТЬ v2.1.0
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#ff00ff] font-orbitron">
                ИНСТРУКЦИЯ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-1000"></div>
    </section>
  );
};

export default ModInfo;
