import { Link } from "react-router";
import { ArrowLeft, Download, ChevronRight, Star, Award, Zap, Shield, TrendingUp, Heart, FileDown, ExternalLink, Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Badge } from "./ui/badge";

export function DesignThree() {
  const services = [
    {
      category: "Multi-Sport",
      items: [
        { title: "Baseball & Softball", icon: "⚾", features: ["Professional-grade diamonds", "Movable/permanent mounds", "Superior sliding performance"] },
        { title: "Soccer & Lacrosse", icon: "⚽", features: ["Reduced heat index", "Consistent bounce", "Zero infill migration"] },
        { title: "Football", icon: "🏈", features: ["Regulation compliant", "Enhanced durability", "Cooler surface temps"] },
        { title: "Golf Putting Greens", icon: "⛳", features: ["Precision surfaces", "True roll consistency", "Custom designs"] }
      ]
    },
    {
      category: "Miracle League & Adaptive",
      items: [
        { title: "Adaptive Fields", icon: "❤️", features: ["All-abilities design", "Maximum accessibility", "Safety-first construction"] },
        { title: "Day Care Play", icon: "👶", features: ["Age-appropriate design", "Fall protection", "Learning-focused spaces"] },
        { title: "Parks & Recreation", icon: "🌲", features: ["Community spaces", "Multi-use design", "Inclusive facilities"] },
        { title: "Custom Projects", icon: "✨", features: ["Tailored solutions", "Vision-driven design", "Site-specific"] }
      ]
    }
  ];

  const patentFeatures = [
    { icon: Shield, title: "Maximum Safety", desc: "Uncompromised fall impact protection" },
    { icon: Zap, title: "Superior Performance", desc: "Enhanced playability for athletes" },
    { icon: TrendingUp, title: "Cooler by 20°", desc: "Reduced surface temperatures" },
    { icon: Heart, title: "All Abilities", desc: "Inclusive design for everyone" }
  ];

  const faqs = [
    {
      q: "What's unique about PES Field Systems?",
      a: "Our U.S. patented technology regulates granular rubber infill placement beneath the turf, delivering superior fall impact safety, 20° cooler surface temperatures, and enhanced playability that traditional systems can't match."
    },
    {
      q: "How quickly can you complete a project?",
      a: "Project timelines vary based on scope, but we work closely with each customer to align with budget, permitting, and schedule requirements. We'll provide a detailed timeline during consultation."
    },
    {
      q: "Do you specialize in Miracle League fields?",
      a: "Yes! Adaptive fields and Miracle League facilities are core to our mission. We create inclusive playing surfaces designed specifically for athletes of all abilities with safety as our top priority."
    },
    {
      q: "What areas do you serve?",
      a: "We serve customers nationwide using in-house construction resources or licensed subcontractors under our supervision to ensure quality and consistency."
    },
    {
      q: "Are warranties included?",
      a: "Yes, all projects come with industry-standard performance warranties. Specific warranty terms are tailored to your project scope and materials."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-white shadow-lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/flagged/photo-1568407371446-a239664fb4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYXRobGV0ZXMlMjBwbGF5aW5nJTIwc3BvcnRzfGVufDF8fHx8MTc3MTg2NDk3MXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Athletes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-cyan-700/85"></div>
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <div className="bg-white p-4 rounded-2xl inline-block mb-8 shadow-xl">
              <img 
                src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
                alt="PES Field Systems" 
                className="h-16 md:h-20"
              />
            </div>
            
            <Badge className="bg-green-500 text-white mb-6 text-base px-4 py-1">
              U.S. PATENTED TECHNOLOGY
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
              PLAY SAFE.<br/>
              PLAY COOL.<br/>
              PLAY BETTER.
            </h1>
            
            <p className="text-2xl text-cyan-100 mb-8 max-w-2xl">
              Revolutionary synthetic turf engineered for ALL athletes – from youth leagues to Miracle League champions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                  Get Your Field Quote
                  <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <a href="#patent">
                <Button size="lg" className="bg-slate-900 hover:bg-black text-white border-2 border-white text-lg px-8 py-6">
                  <Award className="mr-2 w-6 h-6" />
                  See Our Patent
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-3xl font-black text-green-400">100+</div>
                <div className="text-sm text-cyan-200">FIELDS BUILT</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400">20°</div>
                <div className="text-sm text-cyan-200">COOLER PLAY</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400">1</div>
                <div className="text-sm text-cyan-200">US PATENT</div>
              </div>
              <div>
                <div className="text-3xl font-black text-green-400">ALL</div>
                <div className="text-sm text-cyan-200">ABILITIES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Innovation Section */}
      <section id="patent" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-green-500 text-white mb-4 text-sm px-4 py-1">
                PATENT-PENDING INNOVATION
              </Badge>
              <h2 className="text-5xl font-black mb-6">THE PES DIFFERENCE</h2>
              <p className="text-2xl text-cyan-200 max-w-3xl mx-auto">
                The ONLY patented system that regulates granular rubber infill for unprecedented safety and performance
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {patentFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-slate-900" />
                      </div>
                      <h3 className="font-black text-xl mb-2">{feature.title}</h3>
                      <p className="text-cyan-200 text-sm">{feature.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-cyan-50">
                <FileDown className="mr-2 w-5 h-5" />
                Download Patent Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 mb-4">BUILT FOR EVERY ATHLETE</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                From professional sports to adaptive recreation – we create surfaces where safety and performance unite
              </p>
            </div>

            <Tabs defaultValue="multi-sport" className="w-full">
              <TabsList className="grid w-full max-w-lg mx-auto grid-cols-2 mb-12 h-14">
                <TabsTrigger value="multi-sport" className="text-lg font-bold">MULTI-SPORT</TabsTrigger>
                <TabsTrigger value="miracle" className="text-lg font-bold">MIRACLE LEAGUE</TabsTrigger>
              </TabsList>

              {services.map((category) => (
                <TabsContent 
                  key={category.category} 
                  value={category.category === "Multi-Sport" ? "multi-sport" : "miracle"}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.items.map((service, idx) => (
                      <Card key={idx} className="border-2 hover:border-blue-500 hover:shadow-2xl transition-all group">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-6">
                            <div className="text-6xl">{service.icon}</div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">
                                {service.title}
                              </h3>
                              <ul className="space-y-2">
                                {service.features.map((feature, fidx) => (
                                  <li key={fidx} className="flex items-center gap-2 text-slate-700">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                              <Button className="mt-6 group-hover:bg-blue-600" variant="outline">
                                Learn More <ChevronRight className="ml-2 w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 mb-4">TRANSFORMATIONS</h2>
              <p className="text-xl text-slate-600">See the PES difference in action</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { 
                  before: "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?w=800", 
                  after: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800",
                  title: "Youth Baseball Complex"
                },
                { 
                  before: "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?w=800", 
                  after: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800",
                  title: "Community Soccer Field"
                }
              ].map((project, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img src={project.before} alt="Before" className="w-full h-64 object-cover" />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-black text-sm">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <img src={project.after} alt="After" className="w-full h-64 object-cover" />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-black text-sm">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-center">{project.title}</h3>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/gallery">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Complete Portfolio <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 mb-4">THE TEAM</h2>
              <p className="text-xl text-slate-600">Leaders in turf innovation</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {boardMembers.map((member, idx) => (
                <div key={idx} className="text-center group">
                  <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-3xl font-black group-hover:scale-110 transition-transform`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-black text-lg">{member.name}</h3>
                  <p className="text-slate-600 text-sm mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-2">5.0 STARS</h2>
              <p className="text-xl text-slate-600">47 Google Reviews</p>
            </div>
                    <p className="font-bold text-lg mb-4">"{review.text}"</p>
                    <div>
                      <div className="font-black">{review.name}</div>
                      <div className="text-sm text-slate-600">{review.org}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Instagram className="w-16 h-16 mx-auto mb-4 text-pink-500" />
              <h2 className="text-4xl font-black mb-2">@PESFIELDSYSTEMS</h2>
              <p className="text-cyan-300">Follow our latest projects</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[...Array(12)].map((_, idx) => (
                <div key={idx} className="aspect-square bg-slate-800 rounded-lg overflow-hidden group cursor-pointer">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 group-hover:scale-110 transition-transform"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 mb-4">GOT QUESTIONS?</h2>
              <p className="text-xl text-slate-600">We've got answers</p>
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

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <img 
                  src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
                  alt="PES Field Systems" 
                  className="h-14 mb-6"
                />
                <p className="text-slate-400 mb-6">
                  Patent-pending synthetic turf systems built for safety, performance, and all athletes.
                </p>
              </div>

              <div>
                <h3 className="font-black text-lg mb-4">QUICK LINKS</h3>
                <ul className="space-y-3 text-slate-400">
                  <li><a href="#" className="hover:text-white">Services</a></li>
                  <li><a href="#" className="hover:text-white">Our Patent</a></li>
                  <li><a href="#" className="hover:text-white">Portfolio</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-black text-lg mb-4">CONNECT</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
              <p className="font-bold">&copy; 2026 PES FIELD SYSTEMS | U.S. PATENT PENDING</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
