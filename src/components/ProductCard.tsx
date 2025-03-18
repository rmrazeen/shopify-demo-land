
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const animationDelay = index * 0.1;
  
  return (
    <motion.div 
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-md">
        {/* Image Container */}
        <Link to={`/product/${product.id}`} className="block relative overflow-hidden aspect-square">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover object-center product-image-zoom transition-all duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.new && (
              <Badge className="bg-accent text-accent-foreground">New</Badge>
            )}
            {product.featured && (
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            )}
          </div>
          
          {/* Quick Add Button */}
          <div className={`absolute right-3 bottom-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            <Button 
              size="icon" 
              className="rounded-full h-10 w-10 bg-white text-primary hover:bg-white/90 shadow-md"
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </Link>
        
        {/* Content */}
        <div className="p-4">
          {/* Title and Price */}
          <div className="flex justify-between mb-1">
            <Link to={`/product/${product.id}`} className="text-lg font-medium hover:text-accent transition-colors">
              {product.name}
            </Link>
            <div className="font-semibold">${product.price.toFixed(2)}</div>
          </div>
          
          {/* Category and Rating */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
