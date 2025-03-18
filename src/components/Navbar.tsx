
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          MinimoStore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium hover:opacity-80 transition-opacity">
            All Products
          </Link>
          <Link to="/categories" className="text-sm font-medium hover:opacity-80 transition-opacity">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium hover:opacity-80 transition-opacity">
            About
          </Link>
        </nav>

        {/* Search */}
        <div className={`absolute left-0 top-full w-full transition-all duration-300 bg-white/80 backdrop-blur-md ${
          searchOpen ? 'h-16 opacity-100 shadow-sm' : 'h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="container-custom h-full flex items-center">
            <Input 
              type="search" 
              placeholder="Search products..." 
              className="flex-1 border-none rounded-none h-10 pl-4 focus-visible:ring-0"
              autoFocus={searchOpen}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchOpen(false)}
              className="h-10 w-10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSearchOpen(true)}
            className="hover:opacity-80 transition-opacity"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Link to="/cart" className="relative inline-flex">
            <Button variant="ghost" size="icon" className="hover:opacity-80 transition-opacity">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            {totalItems > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 p-0 text-xs bg-accent text-accent-foreground rounded-full transition-all animate-scale-in"
              >
                {totalItems}
              </Badge>
            )}
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:opacity-80 transition-opacity">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link to="/" className="text-lg font-medium hover:text-accent transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-lg font-medium hover:text-accent transition-colors">
                  All Products
                </Link>
                <Link to="/categories" className="text-lg font-medium hover:text-accent transition-colors">
                  Categories
                </Link>
                <Link to="/about" className="text-lg font-medium hover:text-accent transition-colors">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
