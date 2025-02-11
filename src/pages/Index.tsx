import React from 'react';
import { NavMenu } from '@/components/ui/nav-menu';
import { AnimatedText } from '@/components/ui/animated-text';

const Index = () => {

  return (
    <div className="min-h-screen bg-[#0D1117] relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/66ced0b8-3434-47ec-a152-1dff39a32d55.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <NavMenu />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <AnimatedText
              text="Real-Time AI That Converts Raw Sensor Data Into API-Ready Insights"
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            />
            <AnimatedText
              text="Eliminating manual sensor data mapping with AI-driven standardization and API integration."
              className="text-xl md:text-2xl text-[#C5F82A] mb-12"
              delay={300}
            />
            <a 
              href="https://calendly.com/d/cqwv-t87-7jg/one-off-meeting" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#C5F82A] text-black px-8 py-3 rounded-full hover:bg-[#C5F82A]/90 transition-all text-lg"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative py-20 px-4 bg-[#0A0E14]/50">
        <div className="container mx-auto">
          <p className="text-2xl md:text-3xl text-white/90 max-w-6xl">
          Our platform automatically detects, interprets, and standardizes raw sensor data, 
          then provides a plug-and-play API that works across different devices and software environments.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 bg-[#0D1117]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Without Platform */}
            <div className="space-y-8 p-8 bg-[#161B22] rounded-xl border border-[#30363D]" data-aos="fade-up">
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Without Our Platform
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <p className="text-white/80 text-lg">Manual integrations take weeks – Engineers have to manually extract, clean, and map sensor data</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <p className="text-white/80 text-lg">Each device has different data formats – No standardized structure, making integration a mess</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <p className="text-white/80 text-lg">Data cleaning and mapping is a major pain – Requires writing custom parsers for each hardware type</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <p className="text-white/80 text-lg">APIs for IoT devices are inconsistent – No universal standard for accessing sensor data</p>
                </li>
              </ul>
            </div>

            {/* With Platform */}
            <div className="space-y-8 p-8 bg-[#161B22] rounded-xl border border-[#30363D]" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#C5F82A]">
                With Our Platform
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#C5F82A] mt-1">✓</span>
                  <p className="text-white/80 text-lg">Instant device detection & data processing – As soon as a device is connected, our AI auto-detects its data type</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#C5F82A] mt-1">✓</span>
                  <p className="text-white/80 text-lg">Automatically standardizes sensor data into a structured format – No need for manual cleaning</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#C5F82A] mt-1">✓</span>
                  <p className="text-white/80 text-lg">Provides a real-time API for developers – Get clean, structured data instantly via a simple API</p>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#C5F82A] mt-1">✓</span>
                  <p className="text-white/80 text-lg">Works across any hardware device – From wearables and medical sensors to industrial IoT and robotics</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E14] py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-white/60 text-sm">© 2024 by Coconut.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
