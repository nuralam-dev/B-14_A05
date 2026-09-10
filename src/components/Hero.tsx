const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50/50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-95 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition">
                Explore Technologies
              </button>
              <button className="w-full sm:w-auto bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-xl transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/src/assets/banner-stack.png" 
              alt="3D Development Stack" 
              className="w-full max-w-md sm:max-w-lg object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;