import { Link } from "react-router";
import { ArrowLeft, Download, Facebook, Linkedin, Youtube, Instagram, ChevronRight, Star, Award, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function DesignTwo() {
  const services = {
    multiSport: [
      { title: "Baseball & Softball Fields", icon: "⚾", desc: "Professional-grade diamonds with permanent or movable pitching mounds and bases." },
      { title: "Soccer & Lacrosse Fields", icon: "⚽", desc: "Engineered to reduce heat index and deliver consistent bounce and playability." },
      { title: "Football Fields", icon: "🏈", desc: "Regulation fields built for safety, performance, and long-term durability." },
      { title: "Golf Putting Greens", icon: "⛳", desc: "Custom-built putting greens delivering precision surfaces and true roll consistency." }
    ],
    miracleLeague: [
      { title: "Adaptive Fields", icon: "❤️", desc: "Inclusive field designs supporting athletes of all abilities and accessibility needs." },
      { title: "Day Care Play Areas", icon: "👶", desc: "Safe, age-appropriate outdoor spaces designed for learning, movement, and play." },
      { title: "Parks & Recreation", icon: "🌲", desc: "Community-focused spaces including trails, playgrounds, and gathering areas." },
      { title: "Custom Projects", icon: "✨", desc: "Unique outdoor environments tailored to your vision, site conditions, and goals." }
    ]
  };

  const benefits = [
    "Uncompromised fall impact safety",
    "20° cooler surface temperatures",
    "Enhanced playability for all athletes",
    "Reduced maintenance requirements",
    "Granular rubber stays in place",
    "Industry-standard warranties"
  ];

  const faqs = [
    {
      q: "What makes PES Field Systems' turf different?",
      a: "Our U.S. patented technology regulates the placement of granular rubber infill beneath the turf, delivering uncompromised fall impact safety, cooler surface temperatures, and enhanced playability."
    },
    {
      q: "How do you handle project delivery?",
      a: "We partner closely with each customer to determine the best project delivery approach to align with budget, permitting, and schedule requirements. We use in-house construction resources or licensed subcontractors under our supervision."
    },
    {
      q: "What types of facilities do you work with?",
      a: "We work with schools, municipalities, sports organizations, Miracle League facilities, daycares, parks departments, and private organizations seeking premium synthetic turf solutions."
    },
    {
      q: "Do you provide warranties?",
      a: "Yes, we deliver custom athletic fields and outdoor recreation spaces with industry-standard performance warranties tailored to your specific project."
    },
    {
      q: "Can you build fields for special needs athletes?",
      a: "Absolutely. Adaptive fields and Miracle League facilities are a core part of our mission. We create inclusive playing surfaces for individuals of all abilities."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Options
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img 
              src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
              alt="PES Field Systems" 
              className="h-12"
            />
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-700 hover:text-blue-600">Services</a>
              <a href="#patent" className="text-slate-700 hover:text-blue-600">Technology</a>
              <a href="#gallery" className="text-slate-700 hover:text-blue-600">Gallery</a>
              <a href="#team" className="text-slate-700 hover:text-blue-600">Team</a>
              <a href="#faq" className="text-slate-700 hover:text-blue-600">FAQ</a>
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                U.S. Patented Technology
              </div>
              <h1 className="text-5xl font-bold mb-6 text-slate-900">
                Superior Athletic Surfaces for All Athletes
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                PES Field Systems delivers revolutionary synthetic turf construction with patented technology that ensures uncompromised safety, cooler temperatures, and enhanced playability.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1583120684437-906e94993d4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aGV0aWMlMjB0dXJmJTIwYXRobGV0aWMlMjBmaWVsZCUyMGFlcmlhbHxlbnwxfHx8fDE3NzE4NjQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Athletic Field"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-slate-600">Fields Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2021</div>
              <div className="text-slate-600">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-slate-600">U.S. Patent</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="text-slate-600">Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Technology Section */}
      <section id="patent" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mb-6">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Patent-Pending Innovation</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Regulated Infill Placement Technology</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our U.S. patented system is the only technology that precisely regulates the placement of granular rubber infill beneath synthetic turf, creating unprecedented safety and performance benefits.
                </p>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" size="lg">
                  <Download className="mr-2 w-5 h-5" />
                  Download Technical Specs
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6">
                  <div className="text-5xl font-bold mb-2">20°</div>
                  <div className="text-blue-100">Cooler Surface Temperature</div>
                </Card>
                <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-green-100">Safety Compliant</div>
                </Card>
                <Card className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-6">
                  <div className="text-5xl font-bold mb-2">Zero</div>
                  <div className="text-cyan-100">Infill Migration</div>
                </Card>
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6">
                  <div className="text-5xl font-bold mb-2">∞</div>
                  <div className="text-purple-100">Abilities Supported</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Comprehensive Field Solutions</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We partner closely with each customer, collaboratively determining the best project delivery approach to align with budget, permitting, and schedule requirements.
              </p>
            </div>

            <Tabs defaultValue="multi-sport" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="multi-sport">Multi-Sport</TabsTrigger>
                <TabsTrigger value="miracle-league">Adaptive & Miracle League</TabsTrigger>
              </TabsList>

              <TabsContent value="multi-sport">
                <div className="grid md:grid-cols-2 gap-6">
                  {services.multiSport.map((service, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                            {service.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            <p className="text-slate-600 text-sm">{service.desc}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="miracle-league">
                <div className="grid md:grid-cols-2 gap-6">
                  {services.miracleLeague.map((service, idx) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                            {service.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                            <p className="text-slate-600 text-sm">{service.desc}</p>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-6">
                Using in-house construction resources or licensed subcontractors under our supervision, we deliver custom athletic fields with industry-standard performance warranties.
              </p>
              <Button size="lg">
                Request Project Consultation <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Project Showcase</h2>
              <p className="text-xl text-slate-600">See our transformative work across multiple venues</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { img: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=600", title: "Baseball Complex", type: "Multi-Sport" },
                { img: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=600", title: "Soccer Field", type: "Multi-Sport" },
                { img: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=600", title: "Football Stadium", type: "Multi-Sport" },
                { img: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=600", title: "Miracle League Field", type: "Adaptive" },
                { img: "https://images.unsplash.com/photo-1621005570368-8c1f58c98ca5?w=600", title: "Putting Green", type: "Custom" },
                { img: "https://images.unsplash.com/flagged/photo-1568407371446-a239664fb4f4?w=600", title: "Community Park", type: "Recreation" }
              ].map((project, idx) => (
                <Card key={idx} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="font-bold">{project.title}</div>
                    <div className="text-sm text-slate-600">{project.type}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">View Complete Portfolio</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-slate-600">Experienced professionals dedicated to innovation and quality</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {boardMembers.map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-slate-600 text-sm mt-1">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <h2 className="text-4xl font-bold mb-2">Client Testimonials</h2>
              <p className="text-xl text-slate-600">Rated 5.0 out of 5 based on 47 Google reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Tom Harrison", text: "The Miracle League field PES built has been transformative. Safety features are outstanding.", company: "Community Sports League" },
                { name: "Jennifer Lopez", text: "Professional team, delivered on time and on budget. Our new football field exceeded expectations.", company: "City Parks Department" },
                { name: "Mark Stevens", text: "The cooler surface makes a huge difference for our youth programs. Highly recommend PES.", company: "Youth Athletics Association" }
              ].map((review, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-4">"{review.text}"</p>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-slate-600">{review.company}</div>
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
              <h2 className="text-4xl font-bold mb-4">Follow Our Work</h2>
              <p className="text-xl text-slate-600">@pesfieldsystems on Instagram</p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
              {[...Array(12)].map((_, idx) => (
                <div key={idx} className="aspect-square bg-slate-200 rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1583120684437 + idx}?w=200`}
                    alt={`Instagram ${idx + 1}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-bold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.a}
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
            <Card className="border-2">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Architect Specifications</h2>
                    <p className="text-slate-600 mb-6">
                      Download comprehensive technical specifications, CAD files, and installation guidelines for your project planning.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <Download className="mr-2 w-5 h-5" />
                        Technical Specifications PDF
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Download className="mr-2 w-5 h-5" />
                        CAD Files & Drawings
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Download className="mr-2 w-5 h-5" />
                        Installation Guidelines
                      </Button>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-8 text-center">
                    <Download className="w-20 h-20 mx-auto mb-4 text-blue-600" />
                    <p className="text-slate-600">All documentation includes our patented technology specifications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Around the Field CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Complete Your Outdoor Facility</h2>
            <p className="text-xl mb-8 text-blue-100">
              Looking for playground equipment and amenities around your field? Visit our partner company for comprehensive playground solutions.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              Explore Around the Field <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <img 
                  src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
                  alt="PES Field Systems" 
                  className="h-12 mb-4"
                />
                <p className="text-slate-400 mb-4">
                  Transforming synthetic turf construction with U.S. patented technology since 2021. Creating safer playing surfaces for all athletes.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white">Athletic Fields</a></li>
                  <li><a href="#" className="hover:text-white">Adaptive Fields</a></li>
                  <li><a href="#" className="hover:text-white">Playgrounds</a></li>
                  <li><a href="#" className="hover:text-white">Custom Projects</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><a href="#" className="hover:text-white">About Us</a></li>
                  <li><a href="#" className="hover:text-white">Our Patent</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
              <p>&copy; 2026 PES Field Systems. All rights reserved. U.S. Patent Pending.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
