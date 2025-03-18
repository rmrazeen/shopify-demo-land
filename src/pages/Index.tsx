
import React, { useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { getNewProducts } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const newProducts = getNewProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <Hero />
      
      {/* Featured products */}
      <FeaturedProducts />
      
      {/* New Arrivals Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block rounded-full px-3 py-1 bg-secondary text-xs font-medium tracking-wide mb-2">
              Just Launched
            </div>
            <h2 className="heading-lg mb-4">New Arrivals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our latest additions, carefully selected to enhance your everyday experience with beautiful design and purposeful functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Lifestyle Image Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Lifestyle image" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30"></div>
        </div>
        
        <div className="container-custom h-full flex items-center relative z-10">
          <div className="max-w-xl">
            <div className="inline-block rounded-full px-3 py-1 backdrop-blur-sm bg-white/10 border border-white/20 text-white text-xs font-medium tracking-wide mb-3">
              Our Philosophy
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Design that enhances life
            </h2>
            <p className="text-white/90 text-lg mb-6">
              We believe in creating products that not only look beautiful but also improve your daily experiences through thoughtful design and quality craftsmanship.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
