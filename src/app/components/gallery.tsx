import { Link } from "react-router";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronRight } from "lucide-react";

export function Gallery() {
  const projects = {
    baseball: [
      { img: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800", title: "Metro Youth Baseball Complex", location: "Atlanta, GA", year: "2025" },
      { img: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800", title: "Riverside High School Softball", location: "Charlotte, NC", year: "2024" },
      { img: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800", title: "Eastside Recreation Baseball", location: "Nashville, TN", year: "2024" },
      { img: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800", title: "Valley Community Softball", location: "Birmingham, AL", year: "2023" },
    ],
    soccer: [
      { img: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800", title: "City Stadium Soccer Field", location: "Miami, FL", year: "2025" },
      { img: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800", title: "Lakeside Youth Soccer Complex", location: "Orlando, FL", year: "2024" },
      { img: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800", title: "Northgate Lacrosse Field", location: "Raleigh, NC", year: "2024" },
      { img: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800", title: "Regional Sports Park", location: "Jacksonville, FL", year: "2023" },
    ],
    football: [
      { img: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=800", title: "Central High School Stadium", location: "Columbia, SC", year: "2025" },
      { img: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=800", title: "Riverside Football Field", location: "Memphis, TN", year: "2024" },
      { img: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=800", title: "County Athletic Complex", location: "Louisville, KY", year: "2024" },
      { img: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=800", title: "Victory Field Stadium", location: "Greenville, SC", year: "2023" },
    ],
    adaptive: [
      { img: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800", title: "Miracle League Field", location: "Tampa, FL", year: "2025" },
      { img: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800", title: "All-Abilities Recreation Center", location: "Savannah, GA", year: "2024" },
      { img: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800", title: "Inclusive Community Park", location: "Mobile, AL", year: "2024" },
      { img: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800", title: "Sunrise Daycare Play Area", location: "Knoxville, TN", year: "2023" },
    ],
  };

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
              <Link to="/gallery" className="text-blue-600 font-black">Gallery</Link>
              <Link to="/contact" className="text-slate-700 hover:text-blue-600 font-bold">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

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
                  {[...projects.baseball.slice(0, 2), ...projects.soccer.slice(0, 2), ...projects.football.slice(0, 2), ...projects.adaptive.slice(0, 2)].map((project, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="bg-blue-100 text-blue-700 mb-2">{project.year}</Badge>
                        <h3 className="font-black text-xl mb-2">{project.title}</h3>
                        <p className="text-slate-600">{project.location}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="baseball">
                <div className="grid md:grid-cols-3 gap-6">
                  {projects.baseball.map((project, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="bg-blue-100 text-blue-700 mb-2">{project.year}</Badge>
                        <h3 className="font-black text-xl mb-2">{project.title}</h3>
                        <p className="text-slate-600">{project.location}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="soccer">
                <div className="grid md:grid-cols-3 gap-6">
                  {projects.soccer.map((project, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="bg-blue-100 text-blue-700 mb-2">{project.year}</Badge>
                        <h3 className="font-black text-xl mb-2">{project.title}</h3>
                        <p className="text-slate-600">{project.location}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="football">
                <div className="grid md:grid-cols-3 gap-6">
                  {projects.football.map((project, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="bg-blue-100 text-blue-700 mb-2">{project.year}</Badge>
                        <h3 className="font-black text-xl mb-2">{project.title}</h3>
                        <p className="text-slate-600">{project.location}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="adaptive">
                <div className="grid md:grid-cols-3 gap-6">
                  {projects.adaptive.map((project, idx) => (
                    <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all cursor-pointer">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.img} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="bg-green-100 text-green-700 mb-2">{project.year}</Badge>
                        <h3 className="font-black text-xl mb-2">{project.title}</h3>
                        <p className="text-slate-600">{project.location}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4">BEFORE & AFTER</h2>
              <p className="text-xl text-slate-600">See the transformative power of PES Field Systems</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                { 
                  before: "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?w=800", 
                  after: "https://images.unsplash.com/photo-1750480764614-47c99b828ceb?w=800",
                  title: "Metro Baseball Complex",
                  location: "Atlanta, GA"
                },
                { 
                  before: "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?w=800", 
                  after: "https://images.unsplash.com/photo-1596740327709-1645e2562a37?w=800",
                  title: "City Soccer Stadium",
                  location: "Miami, FL"
                },
                { 
                  before: "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?w=800", 
                  after: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?w=800",
                  title: "High School Football",
                  location: "Charlotte, NC"
                },
                { 
                  before: "https://images.unsplash.com/photo-1759772238410-fa185c7947d3?w=800", 
                  after: "https://images.unsplash.com/photo-1738862438096-ee2f8dc20b45?w=800",
                  title: "Miracle League Field",
                  location: "Tampa, FL"
                }
              ].map((project, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative overflow-hidden rounded-xl">
                      <img src={project.before} alt="Before" className="w-full h-48 object-cover" />
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg font-black text-xs">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl">
                      <img src={project.after} alt="After" className="w-full h-48 object-cover" />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg font-black text-xs">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{project.title}</h3>
                    <p className="text-slate-600">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-6">READY TO START YOUR PROJECT?</h2>
            <p className="text-2xl text-cyan-100 mb-8">
              Join 100+ satisfied clients who trust PES Field Systems for their athletic surfaces
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-cyan-50 font-bold text-lg px-8 py-6">
                  Get Your Quote
                  <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
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
