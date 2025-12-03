import React from 'react';
import { Code, Palette, Smartphone, ShoppingCart, Search, Lightbulb, ArrowRight } from 'lucide-react';

const Features = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We build pixel-perfect, responsive websites that load fast and perform seamlessly on any device.",
      icon: <Code className="w-8 h-8" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Create intuitive user journeys and stunning visual designs that keep your users engaged and happy.",
      icon: <Palette className="w-8 h-8" />,
      color: "text-violet-600",
      bgColor: "bg-violet-50"
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions that bring your business directly to your customers' fingertips.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 4,
      title: "E-commerce",
      description: "Scalable online stores with secure payment gateways and inventory management systems.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      id: 5,
      title: "SEO Services",
      description: "Data-driven strategies to improve your search rankings and drive organic traffic to your platform.",
      icon: <Search className="w-8 h-8" />,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      id: 6,
      title: "Consulting",
      description: "Strategic technology guidance to help you make informed decisions and optimize your digital roadmap.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase mb-3">
            Our Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive solutions for your digital growth
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We combine technical expertise with creative innovation to deliver 
            results that matter. Choose the service that fits your needs.
          </p>
        </div>

        {/* --- Services Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${service.bgColor}`}>
                <div className={`${service.color}`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Learn More Link (Visual only, functional enhancement) */}
              <div className="flex items-center text-sm font-semibold text-gray-400 group-hover:text-indigo-600 transition-colors cursor-pointer pt-4 border-t border-gray-50 mt-auto">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;