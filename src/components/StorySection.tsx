const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY0NDQ0IiBzdHJva2Utd2lkdGg9IjAuNSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+Cjwvc3ZnPg==')] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text mb-6 font-orbitron">
            СЮЖЕТ МОДА
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character Info */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-red-500/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-gray-700 rounded-lg bg-gray-800 relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1 right-1 w-1 h-1 bg-gray-600 rounded"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-2 font-orbitron">
                "ГНИЕНИЕ" (CORRUPTION)
              </h3>
              <p className="text-sm text-gray-400 font-mono tracking-wider">
                ВЕРСИЯ G-11-07-I
              </p>
            </div>

            <div className="space-y-4 text-gray-300 font-mono leading-relaxed">
              <p>
                <span className="text-red-400 font-bold">СОСТОЯНИЕ:</span>{" "}
                Критические повреждения
              </p>
              <p>
                <span className="text-orange-400 font-bold">
                  МЕСТОПОЛОЖЕНИЕ:
                </span>{" "}
                Под грудой мусора
              </p>
              <p>
                <span className="text-yellow-400 font-bold">СОДЕРЖИМОЕ:</span>{" "}
                Лазерная катана "Нагасаки"
              </p>
              <p className="text-sm text-gray-400 mt-4 italic">
                Сломанный робот, ставший ключом к получению легендарного
                оружия...
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/30 to-black/50 border border-orange-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-orange-400 mb-4 font-orbitron">
                ПОСЛЕ КОЛЛАПСА
              </h4>
              <p className="text-gray-300 font-mono leading-relaxed">
                Экономический крах США передал власть в руки могущественных
                международных корпораций. Мир погрузился в хаос...
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/30 to-black/50 border border-red-500/20 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-red-400 mb-4 font-orbitron">
                ВЕРБОВКА
              </h4>
              <p className="text-gray-300 font-mono leading-relaxed">
                Одна из корпораций завербовала Ви. Отказ означает смерть от руки
                легендарного наёмного убийцы...
              </p>
            </div>

            <div className="bg-gradient-to-br from-black/50 to-red-900/20 border border-red-600/30 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-red-300 mb-4 font-orbitron flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                ЭРНЕСТО
              </h4>
              <p className="text-gray-300 font-mono leading-relaxed">
                Легенда среди убийц. Его имя внушает страх даже в самых тёмных
                уголках города. Выполнить задание или умереть — других вариантов
                нет.
              </p>
            </div>
          </div>
        </div>

        {/* Mission briefing */}
        <div className="mt-16 bg-gradient-to-r from-red-900/20 via-black/40 to-orange-900/20 border border-red-500/40 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-400 mb-4 font-orbitron">
              МИССИЯ: ВЫЖИВАНИЕ
            </h3>
            <p className="text-lg text-gray-300 mb-6 font-mono max-w-3xl mx-auto">
              Найдите робота "Гниение", извлеките лазерную катану и выполните
              задание корпорации. Время идёт, а Эрнесто уже выследил ваш след...
            </p>
            <div className="text-sm text-red-400 font-mono animate-pulse">
              [УГРОЗА ВЫСОКОГО УРОВНЯ] • [ВРЕМЯ ОГРАНИЧЕНО] • [ВЫХОД ОДИН]
            </div>
          </div>
        </div>
      </div>

      {/* Danger particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping delay-500"></div>
    </section>
  );
};

export default StorySection;
