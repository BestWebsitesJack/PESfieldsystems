mport { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Option5HorizontalScroll() {
  return (
    <div className="space-y-4">
      {/* Description */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="font-semibold text-lg mb-2">Design Approach: Full-Width Showcase Cards</h3>
        <p className="text-gray-600 text-sm">
          Bold, full-width cards stacked vertically. Each service gets maximum attention with immersive visuals and strong CTAs.
        </p>
      </div>

      {/* Content */}
      <section className="bg-white rounded-lg overflow-hidden border border-gray-200">
        <div className="py-16">
          {/* Header */}
          <div className="text-center mb-12 px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized field systems engineered for excellence
            </p>
          </div>

          {/* Service Cards - Full Width */}
          <div className="space-y-8">
            {/* Miracle League Card */}
            <Link to="/miracle-league" className="group block relative overflow-hidden">
              <div className="relative h-[500px] overflow-hidden">
                {/* Background Image with Parallax Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1687254426928-f172a8328240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXJhY2xlJTIwbGVhZ3VlJTIwYmFzZWJhbGwlMjBpbmNsdXNpdmUlMjBzcG9ydHN8ZW58MXx8fHwxNzcxMDE1MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
                    backgroundPosition: 'center 40%'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/80 to-transparent" />
                
                {/* Content Container */}
                <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
                  <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-block bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <span className="text-white text-sm font-semibold">Inclusive Design</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-5xl font-bold text-white mb-4">
                      Miracle League
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Inclusive, barrier-free fields designed for athletes of all abilities. Our custom rubberized surfaces ensure safe, accessible play that brings communities together.
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>ADA Compliant</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>Custom Rubberized Surface</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>Wheelchair Accessible</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>Weather Resistant</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-900 hover:bg-blue-50 font-semibold text-lg px-8 group-hover:gap-3 transition-all"
                    >
                      Explore Miracle League
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Multi Sport Card */}
            <Link to="/multi-sport" className="group block relative overflow-hidden">
              <div className="relative h-[500px] overflow-hidden">
                {/* Background Image with Parallax Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1705593697621-84ac9c0c05c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyMGZpZWxkJTIwZGlhbW9uZCUyMGFlcmlhbHxlbnwxfHx8fDE3NzEwMTU0ODN8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
                    backgroundPosition: 'center 50%'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/80 to-transparent" />
                
                {/* Content Container */}
                <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
                  <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-block bg-green-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <span className="text-white text-sm font-semibold">Professional Grade</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-5xl font-bold text-white mb-4">
                      Multi Sport Fields
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Professional football, soccer, lacrosse, baseball, softball, and golf facilities. Engineered for peak performance with industry-leading warranties and durability.
                    </p>
                    
                    {/* Features */}
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
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span>Golf Facilities</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      size="lg" 
                      className="bg-white text-green-900 hover:bg-green-50 font-semibold text-lg px-8 group-hover:gap-3 transition-all"
                    >
                      Explore Multi Sport
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Parks & Recreation Card */}
            <Link to="/parks-recreation" className="group block relative overflow-hidden">
              <div className="relative h-[500px] overflow-hidden">
                {/* Background Image with Parallax Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1761221020262-70cd9c743e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yJTIwcGFyayUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MTAxNTY2OXww&ixlib=rb-4.1.0&q=80&w=1080')`,
                    backgroundPosition: 'center 40%'
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/80 to-transparent" />
                
                {/* Content Container */}
                <div className="relative h-full max-w-6xl mx-auto px-8 flex items-center">
                  <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-block bg-purple-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <span className="text-white text-sm font-semibold">Community Spaces</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-5xl font-bold text-white mb-4">
                      Parks & Recreation
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Safe, durable surfaces for daycare facilities, playgrounds, parks, and community recreation spaces. Creating environments where families and communities thrive together.
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Playground Surfaces</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Daycare Facilities</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Community Parks</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Multi-Use Recreation Areas</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-900 hover:bg-purple-50 font-semibold text-lg px-8 group-hover:gap-3 transition-all"
                    >
                      Explore Parks & Recreation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center px-8">
            <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6">
                Our team is ready to help you design and build the perfect space for your community.
              </p>
              <a href="mailto:triffon@pesfieldsystems.com">
                <Button size="lg" variant="outline" className="font-semibold">
                  Schedule a Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}