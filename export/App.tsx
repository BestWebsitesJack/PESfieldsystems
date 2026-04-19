import { useState } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion';
import {
  Trophy,
  Shield,
  Thermometer,
  Users,
  ChevronRight,
  Star,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Download,
  FileDown,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';

type Page = 'home' | 'gallery' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample data
  const services = [
    { icon: Trophy, title: 'Baseball / Softball', desc: 'Professional-grade infields and outfields' },
    { icon: Trophy, title: 'Soccer / Lacrosse', desc: 'Multi-sport synthetic turf systems' },
    { icon: Trophy, title: 'Football Fields', desc: 'High-performance playing surfaces' },
    { icon: Trophy, title: 'Golf Putting Greens', desc: 'Custom residential and commercial greens' },
    { icon: Users, title: 'Adaptive Fields', desc: 'Miracle League and special needs facilities' },
    { icon: Users, title: 'Daycare Play Areas', desc: 'Safe, colorful, and engaging spaces' },
    { icon: Users, title: 'Parks & Recreation', desc: 'Community spaces for all ages' },
    { icon: Trophy, title: 'Custom Projects', desc: 'Tailored solutions for unique needs' },
  ];

  const benefits = [
    { icon: Shield, title: 'ENHANCED SAFETY', desc: 'Patented infill regulation reduces injury risk' },
    { icon: Thermometer, title: 'COOLER TEMPS', desc: 'Up to 30°F cooler than traditional turf' },
    { icon: Trophy, title: 'SUPERIOR PLAYABILITY', desc: 'Consistent, professional performance' },
    { icon: Users, title: 'ALL-ATHLETE ACCESS', desc: 'Inclusive design for adaptive sports' },
  ];

  const faqs = [
    { q: 'What makes PES Field Systems different?', a: 'Our patented technology regulates granular rubber infill placement for optimal safety, temperature control, and playability - something no other synthetic turf provider can offer.' },
    { q: 'How much cooler is your turf compared to traditional synthetic turf?', a: 'Our system can reduce surface temperatures by up to 30°F compared to conventional synthetic turf, making it safer and more comfortable for athletes.' },
    { q: 'Can your system work for Miracle League fields?', a: 'Absolutely! We specialize in adaptive field design and have completed over 25 Miracle League fields that provide a safe, accessible surface for athletes with special needs.' },
    { q: 'What is the typical project timeline?', a: 'Most projects take 8-12 weeks from approval to completion, depending on field size and complexity. We work with your schedule to minimize disruption.' },
    { q: 'Do you provide warranties?', a: 'Yes, we offer comprehensive warranties on both materials and installation. Our team stands behind every project we complete.' },
  ];

  const projects = {
    baseball: [
      { img: 'https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800', title: 'Metro Baseball Complex', location: 'Atlanta, GA', year: '2025' },
      { img: 'https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800', title: 'Regional Softball Field', location: 'Charlotte, NC', year: '2024' },
      { img: 'https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800', title: 'Youth Baseball Park', location: 'Jacksonville, FL', year: '2024' },
    ],
    soccer: [
      { img: 'https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800', title: 'City Soccer Stadium', location: 'Miami, FL', year: '2025' },
      { img: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800', title: 'High School Soccer Field', location: 'Raleigh, NC', year: '2024' },
      { img: 'https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800', title: 'Community Sports Complex', location: 'Tampa, FL', year: '2024' },
    ],
    football: [
      { img: 'https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=800', title: 'High School Football Field', location: 'Charlotte, NC', year: '2025' },
      { img: 'https://images.unsplash.com/photo-1508355779366-787bf25e5b25?w=800', title: 'College Practice Facility', location: 'Athens, GA', year: '2024' },
      { img: 'https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=800', title: 'Youth Football Complex', location: 'Greenville, SC', year: '2024' },
    ],
    adaptive: [
      { img: 'https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800', title: 'Miracle League Field - Tampa', location: 'Tampa, FL', year: '2025' },
      { img: 'https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800', title: 'Miracle League Field - Atlanta', location: 'Atlanta, GA', year: '2024' },
      { img: 'https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800', title: 'Adaptive Sports Complex', location: 'Orlando, FL', year: '2024' },
    ],
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg">
              <span className="text-2xl font-black tracking-tight">PES</span>
            </div>
            <div className="ml-3">
              <div className="text-sm font-black text-slate-800 leading-none">FIELD SYSTEMS</div>
              <div className="text-xs text-slate-500">PATENTED TECHNOLOGY</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`font-bold transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              HOME
            </button>
            <button
              onClick={() => setCurrentPage('gallery')}
              className={`font-bold transition-colors ${currentPage === 'gallery' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              GALLERY
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`font-bold transition-colors ${currentPage === 'contact' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              CONTACT
            </button>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-bold">
              GET QUOTE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 font-bold text-slate-600 hover:bg-slate-50"
            >
              HOME
            </button>
            <button
              onClick={() => { setCurrentPage('gallery'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 font-bold text-slate-600 hover:bg-slate-50"
            >
              GALLERY
            </button>
            <button
              onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 font-bold text-slate-600 hover:bg-slate-50"
            >
              CONTACT
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
              <span className="text-xl font-black">PES</span>
            </div>
            <p className="text-slate-400 text-sm">
              Patented synthetic turf technology for safer, cooler, and better athletic surfaces.
            </p>
          </div>
          
          <div>
            <h3 className="font-black mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-slate-400">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('gallery')} className="hover:text-white transition-colors">Gallery</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Patent</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-black mb-4">SERVICES</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-white transition-colors">Baseball / Softball</li>
              <li className="hover:text-white transition-colors">Soccer / Lacrosse</li>
              <li className="hover:text-white transition-colors">Football Fields</li>
              <li className="hover:text-white transition-colors">Adaptive Fields</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-black mb-4">CONNECT</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">info@pesfieldsystems.com</p>
            <p className="text-slate-400 text-sm">(555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} PES Field Systems. All rights reserved. | Founded 2021 | U.S. Patent Pending</p>
        </div>
      </div>
    </footer>
  );

  // HOME PAGE
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <Badge className="bg-green-500 text-white mb-6 text-base px-6 py-2">
                U.S. PATENTED TECHNOLOGY
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                THE FUTURE OF<br />SYNTHETIC TURF
              </h1>
              <p className="text-2xl md:text-3xl text-cyan-200 mb-12 max-w-3xl mx-auto">
                Safer. Cooler. Better. Athletic surfaces engineered for peak performance and all athletes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg px-8 py-6"
                  onClick={() => setCurrentPage('contact')}
                >
                  GET YOUR QUOTE
                  <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-6 bg-black"
                >
                  SEE OUR PATENT
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-blue-100 text-blue-700 mb-4 text-base px-4 py-1">
                  WHY CHOOSE PES
                </Badge>
                <h2 className="text-5xl font-black mb-6">PATENTED ADVANTAGES</h2>
                <p className="text-2xl text-slate-600">Technology that sets us apart from the competition</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {benefits.map((benefit, idx) => (
                  <Card key={idx} className="border-2 hover:border-blue-500 hover:shadow-2xl transition-all">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <benefit.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Option 5 Full-Width Showcase */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-green-100 text-green-700 mb-4 text-base px-4 py-1">
                  OUR SERVICES
                </Badge>
                <h2 className="text-5xl font-black mb-6">COMPLETE FIELD SOLUTIONS</h2>
                <p className="text-2xl text-slate-600">Specialized field systems engineered for excellence</p>
              </div>

              {/* Full-Width Service Cards */}
              <div className="space-y-8">
                {/* Adaptive Fields Card */}
                <div className="group block relative overflow-hidden rounded-2xl cursor-pointer">
                  <div className="relative h-[500px] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=1600')`,
                        backgroundPosition: 'center 40%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/80 to-transparent" />
                    <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
                      <div className="max-w-xl">
                        <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                          <span className="text-white text-sm font-semibold">Inclusive Design</span>
                        </div>
                        <h3 className="text-5xl font-black text-white mb-4">Adaptive Fields</h3>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                          Inclusive, barrier-free Miracle League fields designed for athletes of all abilities. Our patented rubberized surfaces ensure safe, accessible play that brings communities together.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>ADA Compliant</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Wheelchair Accessible</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>30°F Cooler Surface</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>25+ Fields Completed</span>
                          </div>
                        </div>
                        <Button 
                          size="lg" 
                          className="bg-white text-blue-900 hover:bg-cyan-50 font-bold text-lg px-8 group-hover:gap-3 transition-all"
                          onClick={() => setCurrentPage('contact')}
                        >
                          Learn More About Adaptive Fields
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Athletic Fields Card */}
                <div className="group block relative overflow-hidden rounded-2xl cursor-pointer">
                  <div className="relative h-[500px] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=1600')`,
                        backgroundPosition: 'center 50%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/80 to-transparent" />
                    <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
                      <div className="max-w-xl">
                        <div className="inline-block bg-green-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                          <span className="text-white text-sm font-semibold">Professional Grade</span>
                        </div>
                        <h3 className="text-5xl font-black text-white mb-4">Professional Athletic Fields</h3>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                          Championship-level football, soccer, lacrosse, and baseball facilities. Engineered with our patented technology for peak performance, superior safety, and industry-leading durability.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>Football Fields</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>Soccer Fields</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>Lacrosse Fields</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <span>Baseball & Softball</span>
                          </div>
                        </div>
                        <Button 
                          size="lg" 
                          className="bg-white text-green-900 hover:bg-green-50 font-bold text-lg px-8 group-hover:gap-3 transition-all"
                          onClick={() => setCurrentPage('gallery')}
                        >
                          View Athletic Field Projects
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Projects Card */}
                <div className="group block relative overflow-hidden rounded-2xl cursor-pointer">
                  <div className="relative h-[500px] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600')`,
                        backgroundPosition: 'center 40%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/95 via-cyan-800/80 to-transparent" />
                    <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
                      <div className="max-w-xl">
                        <div className="inline-block bg-cyan-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                          <span className="text-white text-sm font-semibold">Premium Solutions</span>
                        </div>
                        <h3 className="text-5xl font-black text-white mb-4">Custom Projects</h3>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                          Residential golf putting greens, specialty training facilities, and unique athletic installations. Tailored solutions that bring your vision to life with patented precision.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Golf Putting Greens</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Training Facilities</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Residential Projects</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Custom Designs</span>
                          </div>
                        </div>
                        <Button 
                          size="lg" 
                          className="bg-white text-cyan-900 hover:bg-cyan-50 font-bold text-lg px-8 group-hover:gap-3 transition-all"
                          onClick={() => setCurrentPage('contact')}
                        >
                          Discuss Your Custom Project
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parks & Recreation Card */}
                <div className="group block relative overflow-hidden rounded-2xl cursor-pointer">
                  <div className="relative h-[500px] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{ 
                        backgroundImage: `url('https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600')`,
                        backgroundPosition: 'center 40%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/80 to-transparent" />
                    <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
                      <div className="max-w-xl">
                        <div className="inline-block bg-emerald-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                          <span className="text-white text-sm font-semibold">Community Spaces</span>
                        </div>
                        <h3 className="text-5xl font-black text-white mb-4">Parks & Recreation</h3>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                          Safe, durable surfaces for daycare facilities, playgrounds, parks, and community recreation spaces. Creating environments where families and communities thrive together.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Playground Surfaces</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Daycare Facilities</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Community Parks</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Multi-Use Areas</span>
                          </div>
                        </div>
                        <Button 
                          size="lg" 
                          className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-lg px-8 group-hover:gap-3 transition-all"
                          onClick={() => setCurrentPage('contact')}
                        >
                          Explore Parks & Recreation
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 text-center">
                <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl p-10 border-2">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">Ready to Start Your Project?</h3>
                  <p className="text-slate-600 mb-6">
                    Our team is ready to help you design and build the perfect space for your community with our patented technology.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 font-bold"
                    onClick={() => setCurrentPage('contact')}
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-purple-100 text-purple-700 mb-4 text-base px-4 py-1">
                  OUR TEAM
                </Badge>
                <h2 className="text-5xl font-black mb-6">BOARD MEMBERS</h2>
                <p className="text-2xl text-slate-600">Industry leaders committed to innovation</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: 'John Smith', title: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
                  { name: 'Sarah Johnson', title: 'Chief Technology Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
                  { name: 'Michael Chen', title: 'VP of Operations', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
                ].map((member, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-black mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-bold">{member.title}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h2 className="text-5xl font-black mb-4">5.0 RATING</h2>
                <p className="text-2xl text-cyan-100">Trusted by 100+ satisfied clients</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'David Miller', org: 'Atlanta Sports Complex', text: 'The PES system has transformed our facility. The cooler surface makes a huge difference for our athletes, especially during summer months.' },
                  { name: 'Jennifer Lee', org: 'Miami Miracle League', text: 'Outstanding quality and service. The team understood our needs for an accessible field and delivered beyond expectations.' },
                  { name: 'Robert Garcia', org: 'Charlotte High School', text: 'Best investment we made for our athletic program. The durability and performance are unmatched in the industry.' },
                ].map((review, idx) => (
                  <Card key={idx} className="bg-white/10 backdrop-blur border-white/20 text-white">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-cyan-50 mb-4 italic">"{review.text}"</p>
                      <div>
                        <p className="font-black">{review.name}</p>
                        <p className="text-sm text-cyan-200">{review.org}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Instagram className="w-16 h-16 mx-auto mb-4 text-pink-600" />
                <h2 className="text-5xl font-black mb-4">FOLLOW US ON INSTAGRAM</h2>
                <p className="text-2xl text-slate-600">@pesfieldsystems</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=400',
                  'https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=400',
                  'https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=400',
                  'https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=400',
                ].map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-xl group cursor-pointer">
                    <img 
                      src={img} 
                      alt={`Instagram post ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-cyan-100 text-cyan-700 mb-4 text-base px-4 py-1">
                  HAVE QUESTIONS?
                </Badge>
                <h2 className="text-5xl font-black mb-6">FREQUENTLY ASKED QUESTIONS</h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-slate-50 border-2 rounded-xl px-6">
                    <AccordionTrigger className="text-left font-black text-lg hover:no-underline hover:text-blue-600">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Specs Download */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Download className="w-20 h-20 mx-auto mb-6" />
              <h2 className="text-5xl font-black mb-6">ARCHITECT SPECS</h2>
              <p className="text-2xl text-cyan-100 mb-8">
                Get complete technical documentation for your project
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-cyan-50 font-bold text-lg px-8">
                  <Download className="mr-2 w-6 h-6" />
                  Download All Specs
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8">
                  <FileDown className="mr-2 w-6 h-6" />
                  CAD Files
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Around the Field CTA */}
        <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-black mb-6">COMPLETE THE EXPERIENCE</h2>
              <p className="text-2xl text-green-100 mb-8">
                Add world-class playground equipment AROUND THE FIELD
              </p>
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold text-lg px-8">
                Explore Playground Solutions
                <ExternalLink className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // GALLERY PAGE
  if (currentPage === 'gallery') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-green-500 text-white mb-4 text-base px-4 py-1">
                OUR WORK
              </Badge>
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                PROJECT PORTFOLIO
              </h1>
              <p className="text-2xl text-cyan-200">
                Explore our completed projects featuring patented turf technology across the Southeast
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">100+</div>
                <div className="text-sm text-cyan-200">COMPLETED PROJECTS</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">15</div>
                <div className="text-sm text-cyan-200">STATES SERVED</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">25</div>
                <div className="text-sm text-cyan-200">MIRACLE LEAGUE FIELDS</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">5.0</div>
                <div className="text-sm text-cyan-200">CLIENT RATING</div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-12 h-14">
                  <TabsTrigger value="all" className="font-bold">ALL</TabsTrigger>
                  <TabsTrigger value="baseball" className="font-bold">BASEBALL</TabsTrigger>
                  <TabsTrigger value="soccer" className="font-bold">SOCCER</TabsTrigger>
                  <TabsTrigger value="football" className="font-bold">FOOTBALL</TabsTrigger>
                  <TabsTrigger value="adaptive" className="font-bold">ADAPTIVE</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="grid md:grid-cols-3 gap-6">
                    {[...projects.baseball, ...projects.soccer, ...projects.football, ...projects.adaptive].map((project, idx) => (
                      <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-black text-xl mb-2">{project.title}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </span>
                            <span className="text-blue-600 font-bold">{project.year}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="baseball">
                  <div className="grid md:grid-cols-3 gap-6">
                    {projects.baseball.map((project, idx) => (
                      <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-black text-xl mb-2">{project.title}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </span>
                            <span className="text-blue-600 font-bold">{project.year}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="soccer">
                  <div className="grid md:grid-cols-3 gap-6">
                    {projects.soccer.map((project, idx) => (
                      <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-black text-xl mb-2">{project.title}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </span>
                            <span className="text-blue-600 font-bold">{project.year}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="football">
                  <div className="grid md:grid-cols-3 gap-6">
                    {projects.football.map((project, idx) => (
                      <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-black text-xl mb-2">{project.title}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </span>
                            <span className="text-blue-600 font-bold">{project.year}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="adaptive">
                  <div className="grid md:grid-cols-3 gap-6">
                    {projects.adaptive.map((project, idx) => (
                      <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-black text-xl mb-2">{project.title}</h3>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </span>
                            <span className="text-blue-600 font-bold">{project.year}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="bg-green-500 text-white mb-4 text-base px-4 py-1">
                  TRANSFORMATIONS
                </Badge>
                <h2 className="text-5xl font-black mb-6">BEFORE & AFTER</h2>
                <p className="text-2xl text-slate-600">See the difference our patented technology makes</p>
              </div>

              <div className="space-y-12">
                {[
                  { before: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800', after: 'https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800', title: 'Atlanta Regional Baseball Complex' },
                  { before: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800', after: 'https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800', title: 'Miami Soccer Stadium' },
                ].map((item, idx) => (
                  <div key={idx} className="grid md:grid-cols-2 gap-6">
                    <Card className="overflow-hidden">
                      <CardContent className="p-0 relative">
                        <img src={item.before} alt="Before" className="w-full aspect-video object-cover" />
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-black">
                          BEFORE
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0 relative">
                        <img src={item.after} alt="After" className="w-full aspect-video object-cover" />
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-black">
                          AFTER
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // CONTACT PAGE
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500 text-white mb-4 text-base px-4 py-1">
              GET IN TOUCH
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              LET'S BUILD TOGETHER
            </h1>
            <p className="text-2xl text-cyan-200">
              Start your journey to a better athletic surface today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-black mb-8">CONTACT INFORMATION</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-black mb-1">PHONE</h3>
                    <p className="text-slate-600">(555) 123-4567</p>
                    <p className="text-sm text-slate-500">Monday - Friday, 8AM - 6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-black mb-1">EMAIL</h3>
                    <p className="text-slate-600">info@pesfieldsystems.com</p>
                    <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-black mb-1">HEADQUARTERS</h3>
                    <p className="text-slate-600">123 Innovation Drive</p>
                    <p className="text-slate-600">Atlanta, GA 30301</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-black mb-1">BUSINESS HOURS</h3>
                    <p className="text-slate-600">Monday - Friday: 8AM - 6PM EST</p>
                    <p className="text-slate-600">Saturday: 9AM - 3PM EST</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-black mb-4 text-xl">FOLLOW US</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-3xl font-black mb-6">REQUEST A QUOTE</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold mb-2 text-sm">FIRST NAME *</label>
                      <Input placeholder="John" className="border-2" />
                    </div>
                    <div>
                      <label className="block font-bold mb-2 text-sm">LAST NAME *</label>
                      <Input placeholder="Smith" className="border-2" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-2 text-sm">EMAIL *</label>
                    <Input type="email" placeholder="john.smith@example.com" className="border-2" />
                  </div>

                  <div>
                    <label className="block font-bold mb-2 text-sm">PHONE NUMBER *</label>
                    <Input type="tel" placeholder="(555) 123-4567" className="border-2" />
                  </div>

                  <div>
                    <label className="block font-bold mb-2 text-sm">ORGANIZATION</label>
                    <Input placeholder="Your organization name" className="border-2" />
                  </div>

                  <div>
                    <label className="block font-bold mb-2 text-sm">PROJECT TYPE *</label>
                    <select className="w-full border-2 rounded-md px-3 py-2 text-sm">
                      <option>Select a project type</option>
                      <option>Baseball / Softball</option>
                      <option>Soccer / Lacrosse</option>
                      <option>Football</option>
                      <option>Golf Putting Green</option>
                      <option>Adaptive / Miracle League Field</option>
                      <option>Daycare Play Area</option>
                      <option>Parks & Recreation</option>
                      <option>Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold mb-2 text-sm">PROJECT DETAILS *</label>
                    <Textarea 
                      placeholder="Tell us about your project - size, timeline, special requirements..."
                      rows={5}
                      className="border-2"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-lg py-6">
                    <Send className="mr-2 w-5 h-5" />
                    SUBMIT REQUEST
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-0">
        <div className="w-full h-96 bg-slate-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-slate-700">SERVING THE SOUTHEAST</h3>
              <p className="text-slate-600">From Florida to Virginia and everywhere in between</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}