import { Link } from "react-router";
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/">
              <div className="bg-white p-2 rounded-lg">
                <img 
                  src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
                  alt="PES Field Systems" 
                  className="h-12"
                />
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-slate-700 hover:text-blue-600 font-bold">Home</Link>
              <Link to="/gallery" className="text-slate-700 hover:text-blue-600 font-bold">Gallery</Link>
              <Link to="/contact" className="text-blue-600 font-black">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-500 text-white mb-4 text-base px-4 py-1">
              LET'S BUILD SOMETHING AMAZING
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              GET YOUR FIELD QUOTE
            </h1>
            <p className="text-2xl text-cyan-100">
              Partner with us to create a world-class athletic surface engineered for safety, performance, and all athletes
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-black mb-6">SEND US A MESSAGE</h2>
              <p className="text-xl text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold mb-2">First Name *</label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div>
                    <label className="block font-bold mb-2">Last Name *</label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">Email *</label>
                  <Input type="email" placeholder="john.doe@example.com" className="h-12" />
                </div>

                <div>
                  <label className="block font-bold mb-2">Phone Number *</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="h-12" />
                </div>

                <div>
                  <label className="block font-bold mb-2">Organization</label>
                  <Input placeholder="Your School / Organization" className="h-12" />
                </div>

                <div>
                  <label className="block font-bold mb-2">Project Type *</label>
                  <select className="w-full h-12 border border-slate-300 rounded-md px-3">
                    <option>Select a field type...</option>
                    <option>Baseball / Softball Field</option>
                    <option>Soccer / Lacrosse Field</option>
                    <option>Football Field</option>
                    <option>Golf Putting Green</option>
                    <option>Adaptive / Miracle League Field</option>
                    <option>Daycare Play Area</option>
                    <option>Parks & Recreation</option>
                    <option>Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">Project Details *</label>
                  <Textarea 
                    placeholder="Tell us about your project, timeline, and budget..." 
                    className="min-h-32"
                  />
                </div>

                <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-6">
                  <Send className="mr-2 w-5 h-5" />
                  SEND MESSAGE
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-6">GET IN TOUCH</h2>
                <p className="text-xl text-slate-600">
                  Have questions? We're here to help you create the perfect athletic surface.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2 hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-lg mb-1">CALL US</h3>
                        <p className="text-slate-600 mb-2">Speak with us</p>
                        <a href="tel:+15132363398" className="text-blue-600 font-bold text-lg hover:underline">
                          (513) 236-3398
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-lg mb-1">EMAIL US</h3>
                        <p className="text-slate-600 mb-2">Get a response within 24 hours</p>
                        <a href="mailto:triffon@pesfieldsystems.com" className="text-blue-600 font-bold hover:underline">
                          triffon@pesfieldsystems.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-lg mb-1">VISIT US</h3>
                        <p className="text-slate-600 mb-2">Main office location</p>
                        <p className="text-slate-700">
                          3460 Oakmeadow Lane<br/>
                          Cincinnati, OH 45239
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-500 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-lg mb-1">BUSINESS HOURS</h3>
                        <p className="text-slate-700">
                          Monday - Friday: 8:00 AM - 6:00 PM EST<br/>
                          Saturday: 9:00 AM - 3:00 PM EST<br/>
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Links */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="font-black text-2xl mb-4">QUICK RESOURCES</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline font-bold flex items-center gap-2">
                      <span>→</span> Download Technical Specs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline font-bold flex items-center gap-2">
                      <span>→</span> View Our Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline font-bold flex items-center gap-2">
                      <span>→</span> Learn About Our Patent
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline font-bold flex items-center gap-2">
                      <span>→</span> FAQ Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">FIND US</h2>
              <p className="text-xl text-slate-600">We serve customers nationwide</p>
            </div>
            <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-slate-400" />
                <p className="text-slate-600 font-bold">Map Integration Placeholder</p>
                <p className="text-sm text-slate-500">Google Maps or similar service would display here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <img 
              src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
              alt="PES Field Systems" 
              className="h-14 mx-auto mb-6"
            />
            <p className="text-slate-400 mb-6">
              Patent-pending synthetic turf systems built for safety, performance, and all athletes.
            </p>
            <p className="text-slate-500 text-sm">
              &copy; 2026 PES FIELD SYSTEMS | U.S. PATENT PENDING
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
