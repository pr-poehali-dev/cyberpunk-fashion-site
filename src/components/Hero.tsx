import { useState, useEffect } from "react";

const Hero = () => {
  const [eyeActive, setEyeActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEyeActive(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden">
      {/* Glitch overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDBmZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Character Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative">
            {/* Character silhouette */}
            <div className="w-80 h-96 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-600 rounded-lg transform rotate-3 shadow-2xl shadow-cyan-500/20"></div>

              {/* Character body */}
              <div className="absolute inset-2 bg-gray-700 rounded-lg">
                {/* Head area */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-600 rounded-full"></div>

                {/* Eye/Sensor */}
                <div
                  className={`absolute top-8 left-1/2 transform -translate-x-1/2 translate-x-2 w-3 h-3 rounded-full transition-all duration-1000 ${
                    eyeActive
                      ? "bg-cyan-400 shadow-[0_0_20px_#00ffff,0_0_40px_#00ffff,0_0_60px_#00ffff] animate-pulse"
                      : "bg-gray-800"
                  }`}
                >
                  {eyeActive && (
                    <div className="absolute inset-0 bg-cyan-300 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Body parts */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-12 h-20 bg-gray-600 rounded-lg"></div>
                <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gray-600 rounded-lg"></div>
              </div>

              {/* Debris around character */}
              <div className="absolute -bottom-2 -left-4 w-8 h-8 bg-gray-500 rounded transform rotate-45"></div>
              <div className="absolute -bottom-4 right-2 w-6 h-6 bg-gray-600 rounded"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-orbitron">
            CYBERPUNK
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-cyan-300 mb-4 font-orbitron">
            МОД "НАГАСАКИ"
          </h2>
          <h3 className="text-lg lg:text-xl text-red-400 mb-6 font-mono uppercase tracking-wider">
            Робот "Гниение" (Corruption) v.G-11-07-I
          </h3>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed font-mono">
            Сломанный робот, погребённый под грудой мусора киберпанк-города.
            Единственный источник легендарной лазерной катаны "Нагасаки"...
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_#00ffff] transform hover:scale-105">
              СКАЧАТЬ МОД
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_#00ffff]">
              ПОДРОБНЕЕ
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
    </section>
  );
};

export default Hero;
