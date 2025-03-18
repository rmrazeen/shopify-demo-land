
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Heart, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  Minus, 
  Plus, 
  Star,
  ArrowLeft
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductById, getRelatedProducts } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { useToast } from "@/components/ui/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Get product and related products
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // Redirect to 404 if product not found
  useEffect(() => {
    if (!product && id) {
      navigate('/not-found');
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return null;
  }
  
  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      toast({
        title: "Maximum stock reached",
        description: `Only ${product.stock} items available.`,
        variant: "destructive",
      });
    }
  };
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  const handleFavorite = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied",
      description: "Product link copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-6 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 animate-fade-in">
            {/* Product Images */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-secondary/20">
                <img 
                  src={product.images[currentImageIndex]} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Image Navigation */}
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={handlePreviousImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button 
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-primary w-6' : 'bg-muted'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={handleNextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              {/* Product Category */}
              <div className="mb-2">
                <span className="text-sm text-muted-foreground">
                  {product.category}
                </span>
              </div>
              
              {/* Product Name and Rating */}
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex items-center gap-1 bg-secondary rounded-full px-2 py-1">
                  <Star className="h-4 w-4 fill-current text-yellow-500" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              
              {/* Product Price */}
              <div className="mb-6">
                <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
              </div>
              
              {/* Product Description */}
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
              
              {/* Stock Status */}
              <div className="mb-6">
                <span className="text-sm inline-flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${
                    product.stock > 0 ? 'bg-green-500' : 'bg-red-500'
                  }`}></span>
                  {product.stock > 0 
                    ? `In Stock (${product.stock} available)` 
                    : 'Out of Stock'}
                </span>
              </div>
              
              {/* Quantity Control */}
              <div className="flex items-center mb-8">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleFavorite}
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleShare}
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Product Specs/Information */}
              <Tabs defaultValue="specs">
                <TabsList className="w-full">
                  <TabsTrigger value="specs" className="flex-1">Specifications</TabsTrigger>
                  <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
                  <TabsTrigger value="returns" className="flex-1">Returns</TabsTrigger>
                </TabsList>
                
                <TabsContent value="specs" className="pt-4">
                  {product.specs ? (
                    <ul className="space-y-2">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <li key={key} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{key}</span>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      Specifications not available for this product.
                    </p>
                  )}
                </TabsContent>
                
                <TabsContent value="shipping" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Free shipping on all domestic orders over $75. International shipping available to select countries. 
                    Standard domestic shipping takes 3-5 business days.
                  </p>
                </TabsContent>
                
                <TabsContent value="returns" className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    We accept returns within 30 days of delivery. Items must be in their original condition with tags attached.
                    Return shipping is free for defective items.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="heading-md mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
