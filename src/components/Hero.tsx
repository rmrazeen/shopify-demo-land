
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background"></div>
        <img 
          src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Hero background" 
          className="h-full w-full object-cover object-center"
          style={{ transform: "scale(1.04)" }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center content-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="inline-block mb-4">
            <div className="px-3 py-1 rounded-full border backdrop-blur-sm bg-white/10 border-white/20 text-xs font-medium tracking-wide">
              New Collection
            </div>
          </div>
          
          <h1 className="heading-xl mb-6 text-white drop-shadow-sm">
            Elevate Your Everyday with Thoughtful Design
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto text-balance">
            Curated products that combine form, function, and beauty for the modern lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90">
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/featured">
                Featured Items
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/50 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
