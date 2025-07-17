'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Check, 
  Menu, 
  X,
  Utensils,
  Bed,
  Waves,
  Camera,
  Zap,
  Wifi,
  Heart,
  Wine,
  Flame,
  ArrowRight,
  Quote
} from 'lucide-react';

const ThandyLifestyleLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Image gallery for hero section
  const heroImages = [
    { 
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop",
      title: "Luxurious Accommodations"
    },
    { 
      url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1920&h=1080&fit=crop",
      title: "African Cuisine Excellence"
    },
    { 
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop",
      title: "Premium Pool Experience"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Bed className="w-8 h-8" />,
      title: "Luxurious Accommodations",
      description: "Stylish apartments perfect for a night's stay or longer retreat",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop"
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: "Party Space",
      description: "Host unforgettable celebrations in our specially designed event space",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Swimming Pool",
      description: "Refreshing pool area perfect for relaxation and rejuvenation",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "African Kitchen",
      description: "Authentic African cuisine prepared with love and rich flavors",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Grill Kitchen",
      description: "Smoky grilled dishes cooked to perfection",
      image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&h=400&fit=crop"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Studio",
      description: "Professional photography arena for capturing special moments",
      image: "https://images.unsplash.com/photo-1554048612-b6ebae92138d?w=600&h=400&fit=crop"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Massage Spa",
      description: "Relaxing spa treatments for ultimate wellness",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "24/7 Electricity",
      description: "Uninterrupted power supply for your comfort",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Internet",
      description: "Stay connected with reliable internet access",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    }
  ];

  const features = [
    "Unmatched Quality",
    "Personalized Experience", 
    "Convenient Location",
    "Airport Pickup Service",
    "Private Dinner Section",
    "Vintage Lounge",
    "Airbnb Services"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "Absolutely incredible experience! The attention to detail and hospitality exceeded all expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Travel Blogger",
      content: "A perfect blend of luxury and authentic African culture. The food was outstanding!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Amina Kone",
      role: "Event Planner",
      content: "Their party space and services made our celebration unforgettable. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
            >
              Thandy Lifestyle
            </motion.div>
            
            <div className="hidden lg:flex space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:scale-105 transform transition-all duration-300 shadow-lg"
              >
                Book Now
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-slate-200/50"
          >
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-700 hover:text-emerald-600 transition-colors duration-300 py-3 text-lg font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-4 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all duration-300"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === activeImageIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-emerald-900/60" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Lifestyle with Thandy
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your gateway to an unparalleled lifestyle experience at Havanabay! From exquisite African cuisine to luxurious accommodations, we create unforgettable moments.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="group px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 hover:scale-105 transform transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/30 hover:scale-105 transform transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Image Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-2 mb-8"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeImageIndex ? 'bg-emerald-400 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center"
          >
            <ChevronDown 
              className="w-8 h-8 text-white/80 animate-bounce cursor-pointer hover:text-emerald-400 transition-colors"
              onClick={() => scrollToSection('services')}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Premium Services & Amenities
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of world-class services designed to exceed your every expectation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50"
              >
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Why Choose Thandy Lifestyle?
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
                We're passionate about delivering exceptional experiences that create lasting memories. When you choose us, you're not just booking a service – you're investing in unforgettable moments crafted with care and dedication.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 border border-emerald-100 relative overflow-hidden">
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900">Prime Location</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Nestled in the prestigious Golden Palm Estate, off Orchid Road, Lekki, Lagos. We provide seamless airport and location pickup services for the ultimate convenience.
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 mt-2">5-Star Rated Experience</p>
                </div>
                
                {/* Background decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-200/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200/30 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              What Our Guests Say
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Real experiences from our valued guests who've made unforgettable memories with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50"
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 lg:w-16 lg:h-16 bg-cover bg-center rounded-full mr-4 border-2 border-emerald-200"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-emerald-200 mb-2" />
                <p className="text-slate-700 leading-relaxed italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Ready for Your Perfect Stay?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Contact us today and let us create an unforgettable experience tailored just for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-emerald-100">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Location</p>
                      <p className="text-slate-600 leading-relaxed">12 Ben Flow Street, Golden Palm Estate,<br />off Orchid Road, Lekki, Lagos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Phone</p>
                      <p className="text-slate-600">Available for inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Email</p>
                      <p className="text-slate-600">Contact us for bookings</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white">
                <h4 className="text-xl lg:text-2xl font-bold mb-4">Special Services</h4>
                <div className="grid grid-cols-2 gap-4 text-sm lg:text-base">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🚗</span>
                    <span>Airport Pickup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🏨</span>
                    <span>Airbnb Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🎉</span>
                    <span>Event Hosting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📸</span>
                    <span>Photography</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl border border-slate-200/50"
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900">Send us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300">
                    <option>Select a service</option>
                    <option>Accommodation Booking</option>
                    <option>Event Planning</option>
                    <option>Photography Session</option>
                    <option>Spa & Wellness</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 lg:py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your needs and preferences..."
                  />
                </div>
                
                <button
                  type="button"
                  className="w-full px-8 py-4 lg:py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:scale-[1.02] transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg" width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg%3E%3Cg" fill="none" fill-rule="evenodd" fill="%23ffffff" fill-opacity="0.1" cx="30" cy="30" r="2" opacity="20" /> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Your Dream Experience Awaits
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Don't just visit Lagos – experience it like never before with Thandy Lifestyle. 
              Book your stay today and create memories that will last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 lg:px-12 py-4 lg:py-6 bg-white text-emerald-600 font-bold text-lg rounded-full hover:bg-slate-50 hover:scale-105 transform transition-all duration-300 shadow-xl flex items-center gap-3"
              >
                Book Your Stay Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 lg:px-12 py-4 lg:py-6 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-emerald-600 hover:scale-105 transform transition-all duration-300"
              >
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500" />
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  Thandy Lifestyle
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Creating extraordinary experiences and unforgettable memories in the heart of Lagos. 
                  Your premium lifestyle destination at Havanabay.
                </p>
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-400">5-Star Rated by 500+ Happy Guests</p>
              </motion.div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'Services', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
              <div className="space-y-3 text-slate-300">
                <p>Luxury Accommodations</p>
                <p>Event Planning</p>
                <p>Photography Studio</p>
                <p>Spa & Wellness</p>
                <p>Airport Pickup</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 mb-4 md:mb-0">
                © 2025 Thandy Lifestyle. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThandyLifestyleLanding;