import { Link } from "react-router";
import { ArrowLeft, Download, Facebook, Linkedin, Youtube, Instagram, ChevronRight, Star, Shield, Thermometer, Users, Award, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function DesignOne() {
  const services = {
    multiSport: [
      {
        title: "Baseball & Softball Fields",
        icon: "⚾",
        description: "Professional-grade diamonds feature permanent or movable pitching mounds and bases, with a poured-in-place rubber composite layer beneath the turf for consistent fielding and sliding performance.",
        image: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGZpZWxkJTIwdHVyZiUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzE4NjQ5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "Soccer & Lacrosse Fields",
        icon: "⚽",
        description: "Engineered to reduce heat index, deliver consistent bounce and playability, and eliminate granular rubber infill from shoes and equipment.",
        image: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMHN5bnRoZXRpYyUyMGdyYXNzfGVufDF8fHx8MTc3MTg2NDk2OXww&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "Football Fields",
        icon: "🏈",
        description: "Regulation fields built for safety, performance, and long-term durability, while maintaining cooler surface temperatures and cleaner play.",
        image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGZpZWxkJTIwc3RhZGl1bSUyMHR1cmZ8ZW58MXx8fHwxNzcxODY0OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "Golf Putting Greens",
        icon: "⛳",
        description: "Custom-built putting greens delivering precision surfaces and true roll consistency.",
        image: "https://images.unsplash.com/photo-1621005570368-8c1f58c98ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xmJTIwcHV0dGluZyUyMGdyZWVuJTIwZ3Jhc3N8ZW58MXx8fHwxNzcxODY0OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ],
    miracleLeague: [
      {
        title: "Adaptive Fields",
        icon: "❤️",
        description: "Inclusive field designs that support athletes of all abilities and accessibility needs. Purpose-built for Miracle League organizations with safety-first construction.",
        image: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBhZGFwdGl2ZSUyMGFjY2Vzc2libGV8ZW58MXx8fHwxNzcxODY0OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "Day Care Play Areas",
        icon: "👶",
        description: "Safe, age-appropriate outdoor spaces designed for learning, movement, and play with maximum fall protection.",
        image: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBhZGFwdGl2ZSUyMGFjY2Vzc2libGV8ZW58MXx8fHwxNzcxODY0OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "Parks & Recreation",
        icon: "🌲",
        description: "Community-focused spaces including trails, playgrounds, and gathering areas that serve all community members.",
        image: "https://images.unsplash.com/photo-1583120684437-906e94993d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aGV0aWMlMjB0dXJmJTIwYXRobGV0aWMlMjBmaWVsZCUyMGFlcmlhbHxlbnwxfHx8fDE3NzE4NjQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
      },
      {
        title: "Custom Projects",
        icon: "✨",
        description: "Unique outdoor environments tailored to your vision, site conditions, and accessibility goals.",
        image: "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwaW5zdGFsbGluZyUyMGZpZWxkfGVufDF8fHx8MTc3MTg2NDk3MXww&ixlib=rb-4.1.0&q=80&w=1080"
      }
    ]
  };

  const faqs = [
    {
      question: "What makes PES Field Systems' turf different?",
      answer: "Our U.S. patented technology regulates the placement of granular rubber infill beneath the turf, delivering uncompromised fall impact safety, cooler surface temperatures, and enhanced playability. This innovation sets us apart from traditional synthetic turf systems."
    },
    {
      question: "How much cooler are PES fields compared to traditional turf?",
      answer: "Our patented system significantly reduces surface temperatures compared to traditional synthetic turf, creating a safer and more comfortable playing environment, especially during hot weather."
    },
    {
      question: "What warranties do you provide?",
      answer: "We deliver custom athletic fields and outdoor recreation spaces with industry-standard performance warranties. Specific warranty terms are determined based on project scope and materials."
    },
    {
      question: "Can you build fields for special needs athletes?",
      answer: "Absolutely. We specialize in adaptive fields and Miracle League facilities designed specifically for athletes of all abilities. Safety and accessibility are core to our mission."
    },
    {
      question: "Do you handle both design and construction?",
      answer: "Yes. We partner closely with each customer to determine the best project delivery approach. We use in-house construction resources or licensed subcontractors under our supervision."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Options
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1583120684437-906e94993d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aGV0aWMlMjB0dXJmJTIwYXRobGV0aWMlMjBmaWVsZCUyMGFlcmlhbHxlbnwxfHx8fDE3NzE4NjQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        
        <div className="container relative mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
              alt="PES Field Systems" 
              className="h-28 mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Patented Technology.<br/>Safer Play for All Athletes.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Revolutionary synthetic turf systems engineered for uncompromised fall impact safety, cooler temperatures, and superior playability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Get Started <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Patent
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-blue-950/50 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400">100+</div>
                <div className="text-sm text-blue-200 mt-1">Fields Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400">20°</div>
                <div className="text-sm text-blue-200 mt-1">Cooler Surface</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400">1</div>
                <div className="text-sm text-blue-200 mt-1">U.S. Patent</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400">∞</div>
                <div className="text-sm text-blue-200 mt-1">Abilities Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Technology Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Our Patented Innovation</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The only U.S. patented system that regulates granular rubber infill placement for superior safety and performance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-blue-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Uncompromised Safety</h3>
                  <p className="text-slate-600">
                    Optimized fall impact protection through precise infill regulation, keeping athletes safer during play.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-cyan-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Thermometer className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Cooler Surfaces</h3>
                  <p className="text-slate-600">
                    Significantly reduced surface temperatures compared to traditional turf for comfortable play.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Enhanced Playability</h3>
                  <p className="text-slate-600">
                    Superior performance characteristics that athletes notice and love, from bounce to traction.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline">
                <FileText className="mr-2 w-5 h-5" />
                Read Patent Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-slate-600">
                Creating playing surfaces for individuals of all abilities where safety, superior playability, and maintenance freedom come together
              </p>
            </div>

            <Tabs defaultValue="multi-sport" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="multi-sport" className="text-base">Multi-Sport Fields</TabsTrigger>
                <TabsTrigger value="miracle-league" className="text-base">Miracle League & Adaptive</TabsTrigger>
              </TabsList>

              <TabsContent value="multi-sport">
                <div className="grid md:grid-cols-2 gap-8">
                  {services.multiSport.map((service, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-slate-600">{service.description}</p>
                        <Button className="mt-4" variant="outline">
                          Learn More <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="miracle-league">
                <div className="grid md:grid-cols-2 gap-8">
                  {services.miracleLeague.map((service, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-slate-600">{service.description}</p>
                        <Button className="mt-4" variant="outline">
                          Learn More <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Transformations</h2>
              <p className="text-xl text-slate-600">See the difference our patented technology makes</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1759772238410-fa185c7947d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwaW5zdGFsbGluZyUyMGZpZWxkfGVufDF8fHx8MTc3MTg2NDk3MXww&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Before Construction"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                      BEFORE
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">Community Baseball Field</h3>
                    <p className="text-slate-600 text-sm mt-1">Old worn natural grass field</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1750480764614-47c99b828ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGZpZWxkJTIwdHVyZiUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzE4NjQ5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="After Construction"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                      AFTER
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">Community Baseball Field</h3>
                    <p className="text-slate-600 text-sm mt-1">PES patented turf system installed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg">
                View Full Gallery <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-slate-600">Meet the innovators behind PES Field Systems</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {boardMembers.map((member, idx) => (
                <Card key={idx} className="text-center">
                  <CardContent className="p-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{member.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-bold">5.0</span>
              </div>
              <p className="text-slate-600">Based on 47 Google reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4">"{review.text}"</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold">{review.name}</span>
                      <span className="text-slate-500">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-pink-600" />
              <h2 className="text-4xl font-bold mb-4">Follow Our Work</h2>
              <p className="text-xl text-slate-600">@pesfieldsystems</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1583120684437-906e94993d4d?w=400",
                "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=400",
                "https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=400",
                "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=400",
                "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=400",
                "https://images.unsplash.com/photo-1621005570368-8c1f58c98ca5?w=400",
                "https://images.unsplash.com/flagged/photo-1568407371446-a239664fb4f4?w=400",
                "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?w=400"
              ].map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-lg group cursor-pointer">
                  <img 
                    src={img} 
                    alt={`Instagram post ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600">Everything you need to know about PES Field Systems</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Architect Specs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
              <CardContent className="p-12 text-center">
                <Download className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                <h2 className="text-3xl font-bold mb-4">Architect Specifications</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Download our complete technical specifications and installation guidelines for your project planning
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg">
                    <Download className="mr-2 w-5 h-5" />
                    Download PDF Specs
                  </Button>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 w-5 h-5" />
                    Download CAD Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Around the Field CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Complete Your Facility</h2>
            <p className="text-xl mb-8 text-green-50">
              Looking for playground equipment to complement your field? Check out our partner company specializing in safe, innovative playground systems.
            </p>
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50">
              Explore Around the Field <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <img 
                  src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
                  alt="PES Field Systems" 
                  className="h-16 mb-4"
                />
                <p className="text-slate-400">
                  Transforming synthetic turf construction with patented technology since 2021.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#services" className="hover:text-white">Services</a></li>
                  <li><a href="#patent" className="hover:text-white">Our Patent</a></li>
                  <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
                  <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
              <p>&copy; 2026 PES Field Systems. All rights reserved. | U.S. Patent Pending</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
