
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CreditCard, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/components/ui/use-toast";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Calculate tax and total
  const shipping = subtotal > 75 ? 0 : 10;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;
  
  // If cart is empty, redirect to cart page
  if (items.length === 0 && !orderPlaced) {
    navigate('/cart');
    return null;
  }
  
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate order processing
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
      setLoading(false);
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      });
    }, 1500);
  };
  
  // Show order confirmation
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center py-20 animate-fade-in">
          <div className="text-center max-w-md px-4">
            <div className="mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="heading-md mb-4">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. We've received your order and will begin processing it right away.
              You'll receive a confirmation email shortly.
            </p>
            <div className="p-4 bg-secondary rounded-lg mb-8">
              <p className="text-sm mb-2">Order Reference: <span className="font-medium">ORD-{Math.floor(Math.random() * 10000)}</span></p>
              <p className="text-sm">Estimated Delivery: <span className="font-medium">
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span></p>
            </div>
            <Button asChild className="rounded-full px-8">
              <button onClick={() => navigate('/')}>
                Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 animate-fade-in">
        <div className="container-custom">
          <h1 className="heading-lg mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="col-span-2">
              <form onSubmit={handleSubmitOrder}>
                {/* Shipping Information */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        required 
                        className="mt-1" 
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        required 
                        className="mt-1" 
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="mt-1" 
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      className="mt-1" 
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="address">Street Address</Label>
                    <Input 
                      id="address" 
                      required 
                      className="mt-1" 
                      placeholder="Enter your street address"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input 
                        id="city" 
                        required 
                        className="mt-1" 
                        placeholder="Enter your city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input 
                        id="state" 
                        required 
                        className="mt-1" 
                        placeholder="Enter your state"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip">Zip Code</Label>
                      <Input 
                        id="zip" 
                        required 
                        className="mt-1" 
                        placeholder="Enter your zip code"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Payment Information */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
                  
                  <Tabs defaultValue="card">
                    <TabsList className="w-full mb-4">
                      <TabsTrigger value="card" className="flex-1">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Credit Card
                      </TabsTrigger>
                      <TabsTrigger value="paypal" className="flex-1">
                        PayPal
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="card">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input 
                            id="cardName" 
                            required 
                            className="mt-1" 
                            placeholder="Enter name on card"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input 
                            id="cardNumber" 
                            required 
                            className="mt-1" 
                            placeholder="XXXX XXXX XXXX XXXX"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input 
                              id="expiry" 
                              required 
                              className="mt-1" 
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input 
                              id="cvv" 
                              required 
                              className="mt-1" 
                              placeholder="XXX"
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="paypal">
                      <div className="text-center py-6">
                        <p className="mb-4 text-muted-foreground">
                          You will be redirected to PayPal to complete your payment.
                        </p>
                        <img 
                          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" 
                          alt="PayPal Checkout" 
                          className="h-10 mx-auto"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full rounded-full py-6"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Place Order"}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                {/* Totals */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (7%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
