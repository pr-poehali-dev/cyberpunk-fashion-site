const WeaponShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div key={i} className="border border-cyan-500/20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-cyan-300 mb-4 font-orbitron">
            ЛАЗЕРНАЯ КАТАНА
          </h2>
          <h3 className="text-2xl lg:text-3xl text-purple-400 font-orbitron">
            "НАГАСАКИ"
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Weapon Visual */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg shadow-2xl">
              {/* Handle */}
              <div className="absolute left-0 top-0 w-24 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-l-lg border-r-2 border-cyan-400">
                <div className="flex items-center justify-center h-full">
                  <div className="w-2 h-8 bg-cyan-400 rounded animate-pulse"></div>
                </div>
              </div>

              {/* Blade Energy */}
              <div className="absolute left-24 top-2 w-72 h-12 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-400 rounded-r-lg shadow-[0_0_40px_#00ffff] animate-pulse">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-r-lg animate-pulse"></div>
              </div>

              {/* Energy particles */}
              <div className="absolute left-32 -top-2 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
              <div className="absolute left-48 top-8 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-300"></div>
              <div className="absolute left-64 -top-1 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
            </div>
          </div>

          {/* Weapon Stats */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-cyan-300 mb-4 font-orbitron">
                ХАРАКТЕРИСТИКИ
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">Урон:</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="w-5/6 bg-gradient-to-r from-red-500 to-yellow-400 h-2 rounded-full"></div>
                    </div>
                    <span className="text-yellow-400 font-bold">850</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">Скорость:</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="w-4/5 bg-gradient-to-r from-green-500 to-blue-400 h-2 rounded-full"></div>
                    </div>
                    <span className="text-blue-400 font-bold">720</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono">Энергия:</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="w-full bg-gradient-to-r from-cyan-500 to-purple-400 h-2 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-purple-400 font-bold">999</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-purple-300 mb-4 font-orbitron">
                ОСОБЕННОСТИ
              </h4>
              <ul className="space-y-2 text-gray-300 font-mono">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span>Режет любые материалы</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Бесшумные убийства</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span>Энергетическая перезарядка</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeaponShowcase;
