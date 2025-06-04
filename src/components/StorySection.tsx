const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDEwIDAgTCAwIDAgMCAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmY0NDQ0IiBzdHJva2Utd2lkdGg9IjAuNSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+Cjwvc3ZnPg==')] animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text mb-6 font-orbitron">
            ПЕРСОНАЖИ И СЮЖЕТ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
        </div>

        {/* Characters Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-cyan-400 text-center mb-12 font-orbitron">
            КЛЮЧЕВЫЕ ПЕРСОНАЖИ
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Corruption Character */}
            <div className="bg-gradient-to-br from-blue-900/30 to-gray-900/50 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
                  <div className="w-16 h-16 border-2 border-gray-700 rounded-lg bg-gray-800 relative">
                    {/* Holographic sensor */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00ffff]"></div>
                    {/* Monitor on chest */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-blue-600 rounded-sm opacity-70 animate-pulse"></div>
                    {/* Sparking effect */}
                    <div className="absolute top-0 right-0 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-blue-400 mb-2 font-orbitron">
                  "ГНИЕНИЕ" (CORRUPTION)
                </h4>
                <p className="text-sm text-gray-400 font-mono tracking-wider">
                  МОДЕЛЬ G-11-07-I • СТАТУС: ПОДЛЕЖИТ РЕМОНТУ
                </p>
              </div>

              <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-sm">
                <p>
                  <span className="text-blue-400 font-bold">ТИП:</span>{" "}
                  Худощавый робот-компаньон
                </p>
                <p>
                  <span className="text-cyan-400 font-bold">ВНЕШНОСТЬ:</span>{" "}
                  Синяя куртка, искрящаяся голова
                </p>
                <p>
                  <span className="text-blue-300 font-bold">ОРУЖИЕ:</span>{" "}
                  Металлическая бита
                </p>
                <p>
                  <span className="text-purple-400 font-bold">
                    ОСОБЕННОСТИ:
                  </span>{" "}
                  Голографический сенсор на голове
                </p>
                <p>
                  <span className="text-green-400 font-bold">СТАТУС:</span>{" "}
                  Необязательный персонаж
                </p>
                <div className="bg-blue-900/20 border border-blue-500/20 rounded p-3 mt-4">
                  <p className="text-blue-300 italic text-xs">
                    "На груди робота мерцает монитор с постоянными помехами.
                    После ремонта становится верным спутником, способным
                    сопровождать вас как внутри мода, так и в других
                    приключениях."
                  </p>
                </div>
              </div>
            </div>

            {/* Ernesto Character */}
            <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border border-red-500/30 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-gray-700 rounded-lg bg-gray-800 relative">
                    {/* No cyber implants - natural eyes */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-gray-400 rounded-full"></div>
                    {/* Rifle symbol */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-orange-400 rounded"></div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-red-400 mb-2 font-orbitron">
                  ЭРНЕСТО
                </h4>
                <p className="text-sm text-gray-400 font-mono tracking-wider">
                  ЛЕГЕНДАРНЫЙ ОХОТНИК ЗА ГОЛОВАМИ • 50+ ЛЕТ
                </p>
              </div>

              <div className="space-y-4 text-gray-300 font-mono leading-relaxed text-sm">
                <p>
                  <span className="text-red-400 font-bold">ВОЗРАСТ:</span>{" "}
                  Старше 50 лет
                </p>
                <p>
                  <span className="text-orange-400 font-bold">ОДЕЖДА:</span>{" "}
                  Рваные джинсы, черный жилет
                </p>
                <p>
                  <span className="text-yellow-400 font-bold">ОРУЖИЕ:</span>{" "}
                  Снайперское ружье
                </p>
                <p>
                  <span className="text-red-300 font-bold">ОСОБЕННОСТЬ:</span>{" "}
                  Без киберимплантов
                </p>
                <p>
                  <span className="text-red-500 font-bold">НАНЯТ:</span>{" "}
                  Корпорацией "Нагасаки"
                </p>

                <div className="bg-red-900/20 border border-red-500/20 rounded p-3 mt-4 space-y-2">
                  <p className="text-red-300 font-bold text-xs mb-2">
                    ФИРМЕННЫЕ ФРАЗЫ:
                  </p>
                  <p className="text-red-200 italic text-xs border-l-2 border-red-500 pl-2">
                    "Я слышу твоё кибернетическое зловоние"
                  </p>
                  <p className="text-red-200 italic text-xs border-l-2 border-red-500 pl-2">
                    "Выходи, мразь корпорации «Хирасима»!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Story Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-orange-400 text-center mb-12 font-orbitron">
            ПОДРОБНЫЙ СЮЖЕТ
          </h3>

          <div className="space-y-8">
            {/* Economic Collapse */}
            <div className="bg-gradient-to-br from-gray-800/30 to-black/50 border border-orange-500/20 rounded-lg p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-orange-400 mb-6 font-orbitron flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
                КРАХ СТАРОГО МИРА
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 font-mono leading-relaxed mb-4">
                    Экономический коллапс Соединённых Штатов стал катастрофой
                    планетарного масштаба. Правительство пало, армия распалась,
                    а инфраструктура рухнула за считанные месяцы.
                  </p>
                  <p className="text-gray-300 font-mono leading-relaxed">
                    Из пепла старого мира поднялись международные
                    мегакорпорации. Они разделили территории между собой,
                    установив новые правила игры.
                  </p>
                </div>
                <div className="bg-orange-900/20 border border-orange-500/30 rounded p-4">
                  <p className="text-orange-300 font-bold text-sm mb-2">
                    КЛЮЧЕВЫЕ СОБЫТИЯ:
                  </p>
                  <ul className="text-gray-400 font-mono text-xs space-y-1">
                    <li>• Обвал фондового рынка на 94%</li>
                    <li>• Массовые беспорядки в 47 штатах</li>
                    <li>• Роспуск федерального правительства</li>
                    <li>• Захват территорий корпорациями</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Corporate Wars */}
            <div className="bg-gradient-to-br from-purple-900/20 to-black/50 border border-purple-500/20 rounded-lg p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-purple-400 mb-6 font-orbitron flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                КОРПОРАТИВНЫЕ ВОЙНЫ
              </h4>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-900/20 border border-blue-500/20 rounded p-4">
                  <h5 className="text-blue-400 font-bold mb-2">
                    КОРПОРАЦИЯ "ХИРАСИМА"
                  </h5>
                  <p className="text-gray-300 font-mono text-sm">
                    Японский технологический гигант, специализирующийся на
                    кибернетике и искусственном интеллекте. Контролирует
                    восточное побережье.
                  </p>
                </div>
                <div className="bg-red-900/20 border border-red-500/20 rounded p-4">
                  <h5 className="text-red-400 font-bold mb-2">
                    КОРПОРАЦИЯ "НАГАСАКИ"
                  </h5>
                  <p className="text-gray-300 font-mono text-sm">
                    Военно-промышленный комплекс с базой в Европе. Славится
                    производством оружия и наёмными армиями.
                  </p>
                </div>
                <div className="bg-green-900/20 border border-green-500/20 rounded p-4">
                  <h5 className="text-green-400 font-bold mb-2">
                    ДРУГИЕ ИГРОКИ
                  </h5>
                  <p className="text-gray-300 font-mono text-sm">
                    Десятки мелких корпораций ведут войну за контроль над
                    ресурсами и территориями.
                  </p>
                </div>
              </div>
            </div>

            {/* V's Recruitment */}
            <div className="bg-gradient-to-br from-cyan-900/20 to-black/50 border border-cyan-500/20 rounded-lg p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-cyan-400 mb-6 font-orbitron flex items-center gap-3">
                <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                ВЕРБОВКА ВИ
              </h4>
              <p className="text-gray-300 font-mono leading-relaxed mb-6">
                Корпорация "Хирасима" обратилась к наёмнику Ви с предложением,
                от которого нельзя отказаться. Задача кажется простой: найти
                сломанного робота "Гниение" и извлечь из него легендарную
                лазерную катану "Нагасаки".
              </p>
              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded p-4">
                <p className="text-cyan-300 font-bold text-sm mb-2">
                  УСЛОВИЯ КОНТРАКТА:
                </p>
                <p className="text-gray-300 font-mono text-sm">
                  Отказ от выполнения задания означает автоматическую выдачу
                  контракта на убийство самому опасному охотнику за головами в
                  городе — Эрнесто.
                </p>
              </div>
            </div>

            {/* The Hunt */}
            <div className="bg-gradient-to-br from-red-900/20 to-black/50 border border-red-600/30 rounded-lg p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-red-300 mb-6 font-orbitron flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                ОХОТА НАЧИНАЕТСЯ
              </h4>
              <p className="text-gray-300 font-mono leading-relaxed mb-6">
                Эрнесто — легенда среди убийц. В отличие от большинства жителей
                киберпанк-города, он принципиально отказывается от
                кибернетических имплантов, полагаясь только на свои естественные
                способности и многолетний опыт.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-900/20 border border-red-500/20 rounded p-4">
                  <p className="text-red-300 font-bold text-sm mb-2">
                    МЕТОДЫ ОХОТЫ:
                  </p>
                  <ul className="text-gray-400 font-mono text-xs space-y-1">
                    <li>• Выслеживание по киберимплантам</li>
                    <li>• Снайперская стрельба на дальние дистанции</li>
                    <li>• Психологическое давление</li>
                    <li>• Использование информаторов</li>
                  </ul>
                </div>
                <div className="bg-gray-900/30 border border-gray-500/20 rounded p-4">
                  <p className="text-gray-300 font-bold text-sm mb-2">
                    РЕПУТАЦИЯ:
                  </p>
                  <p className="text-gray-400 font-mono text-xs">
                    За 30 лет карьеры Эрнесто не провалил ни одного контракта.
                    Его имя внушает страх даже самым опасным преступникам
                    города.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission briefing */}
        <div className="bg-gradient-to-r from-red-900/20 via-black/40 to-orange-900/20 border border-red-500/40 rounded-2xl p-8 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-400 mb-4 font-orbitron">
              МИССИЯ: ВЫЖИВАНИЕ
            </h3>
            <p className="text-lg text-gray-300 mb-6 font-mono max-w-4xl mx-auto">
              Время идёт. Робот "Гниение" скрыт где-то в горах мусора
              заброшенного района. Эрнесто уже получил контракт и выходит на
              охоту. У вас есть выбор: найти катану "Нагасаки" и выполнить
              задание корпорации, или попытаться скрыться от самого опасного
              убийцы в городе.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm font-mono max-w-3xl mx-auto">
              <div className="text-red-400 animate-pulse">
                [УГРОЗА ВЫСОКОГО УРОВНЯ]
              </div>
              <div className="text-orange-400 animate-pulse delay-100">
                [ВРЕМЯ ОГРАНИЧЕНО]
              </div>
              <div className="text-yellow-400 animate-pulse delay-200">
                [ВЫХОД ОДИН]
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced danger particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping delay-500"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-1/3 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
    </section>
  );
};

export default StorySection;
