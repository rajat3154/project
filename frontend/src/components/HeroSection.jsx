import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, CheckCircle2, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20 lg:pt-0"
    >
      {/* --- Background Gradient Blobs (Decorative) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
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
              <span className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200">
                v2.0 Now Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Build faster with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
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
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-lg hover:shadow-indigo-200"
                aria-label="Start free trial"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-700 transition-all duration-200 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 shadow-sm"
                aria-label="Watch demo video"
              >
                <PlayCircle className="mr-2 w-5 h-5 text-gray-500" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof / Trust Indicator */}
            <div className="pt-6 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400`}>
                    U{i}
                  </div>
                ))}
              </div>
              <p>Trusted by 2,000+ developers</p>
            </div>
          </div>

          {/* --- Right Column: Abstract Visual --- */}
          <div 
            className={`relative hidden lg:block transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            {/* Main Card */}
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-indigo-500/20 border border-gray-100 p-6 max-w-md mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-2 w-20 bg-gray-100 rounded-full"></div>
              </div>
              
              {/* Fake UI Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="h-2.5 w-24 bg-gray-800 rounded-full mb-2"></div>
                    <div className="h-2 w-32 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="ml-auto text-green-600 text-sm font-bold">+128%</div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="p-3 bg-violet-100 rounded-lg">
                    <Shield className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="h-2.5 w-24 bg-gray-800 rounded-full mb-2"></div>
                    <div className="h-2 w-20 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="ml-auto text-green-600 text-sm font-bold">Secure</div>
                </div>
                
                <div className="h-32 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl mt-4 flex items-center justify-center text-white/90">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">99.9%</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element 1 */}
            <div className="absolute -top-12 -right-12 z-0 bg-white p-4 rounded-xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
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

             {/* Floating Element 2 (Decorative Circle) */}
             <div className="absolute -bottom-8 -left-8 -z-10 w-64 h-64 bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;