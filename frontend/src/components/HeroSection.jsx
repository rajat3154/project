import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, CheckCircle2, TrendingUp, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20 lg:pt-0"
    >
      {/* --- Background Gradient Blobs (CSS Only Visuals) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Blob 1: Indigo */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        {/* Blob 2: Blue */}
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Blob 3: Violet */}
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* --- Left Column: Text Content --- */}
          <div 
            className={`flex flex-col space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Eyebrow Text */}
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 text-xs font-bold tracking-wide uppercase bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200">
                <Zap className="w-3 h-3 mr-1 fill-indigo-700" />
                v2.0 Now Available
              </span>
            </div>

            {/* Headline with Gradient */}
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Build faster with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600">
                Intelligent Design
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Empower your team with a platform that scales. Clean code, pixel-perfect design, and seamless integration for the modern web.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1"
                aria-label="Start free trial"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 shadow-sm hover:shadow-md"
                aria-label="Watch demo video"
              >
                <PlayCircle className="mr-2 w-5 h-5 text-gray-500" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 flex items-center gap-4 text-sm text-gray-500 border-t border-gray-200/60 mt-4 w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" className="w-full h-full" />
                  </div>
                ))}
              </div>
              <p className="font-medium">Trusted by <span className="text-gray-900 font-bold">2,000+</span> developers</p>
            </div>
          </div>

          {/* --- Right Column: Abstract Visual (CSS UI Card) --- */}
          <div 
            className={`relative hidden lg:block transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* The Floating Card Container */}
            <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-500/20 border border-white/50 p-6 max-w-md mx-auto transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 cursor-default">
              
              {/* Fake Browser Header */}
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="h-2 w-24 bg-gray-100 rounded-full"></div>
              </div>
              
              {/* Dashboard Content */}
              <div className="space-y-4">
                {/* Stat Item 1 */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-indigo-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="h-2.5 w-20 bg-gray-800 rounded-full mb-2"></div>
                    <div className="h-2 w-32 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="ml-auto text-emerald-600 text-sm font-bold bg-emerald-50 px-2 py-1 rounded">+24%</div>
                </div>

                {/* Stat Item 2 */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-violet-50 rounded-lg">
                    <Shield className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="h-2.5 w-24 bg-gray-800 rounded-full mb-2"></div>
                    <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="ml-auto text-indigo-600 text-sm font-bold">Secure</div>
                </div>
                
                {/* Big Graph Placeholder */}
                <div className="h-32 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl mt-4 flex items-center justify-center text-white/90 shadow-inner">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1 tracking-tight">99.9%</div>
                    <div className="text-[10px] uppercase tracking-widest opacity-80">System Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge Element */}
            <div className="absolute -top-6 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Deployment</div>
                  <div className="text-xs text-gray-500">Successful</div>
                </div>
              </div>
            </div>

            {/* Decorative Background for Image Area */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-200/40 to-pink-200/40 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;