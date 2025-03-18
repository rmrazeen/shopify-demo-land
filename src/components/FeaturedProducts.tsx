
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

export function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <div className="inline-block rounded-full px-3 py-1 bg-secondary text-xs font-medium tracking-wide mb-2">
              Featured Collection
            </div>
            <h2 className="heading-lg">Our Best Sellers</h2>
          </div>
          
          <Button asChild variant="outline" className="group">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
