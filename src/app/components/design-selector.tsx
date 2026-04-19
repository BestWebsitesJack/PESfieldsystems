import { Link } from "react-router";
import { Sparkles, Building2, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function DesignSelector() {
  const designs = [
    {
      id: 1,
      title: "Modern & Bold",
      description: "Emphasizes innovation and patented technology with bold visuals and dynamic sections",
      icon: Sparkles,
      color: "from-blue-600 to-cyan-500",
      path: "/design-1"
    },
    {
      id: 2,
      title: "Professional & Clean",
      description: "Traditional corporate aesthetic with refined layouts and sophisticated presentation",
      icon: Building2,
      color: "from-slate-700 to-blue-700",
      path: "/design-2"
    },
    {
      id: 3,
      title: "Athletic & Dynamic",
      description: "Sports-focused design with energetic layouts highlighting performance and safety",
      icon: Zap,
      color: "from-green-600 to-emerald-500",
      path: "/design-3"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="figma:asset/3581328a59b92620f37db434324f5e04e7b4a427.png" 
              alt="PES Field Systems" 
              className="h-24"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            PES Field Systems Website Mockups
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from three distinct design directions for your website. Each showcases your patented turf technology, services, and commitment to safety for all athletes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {designs.map((design) => {
            const Icon = design.icon;
            return (
              <Card key={design.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${design.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{design.title}</CardTitle>
                  <CardDescription className="text-base">
                    {design.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={design.path}>
                    <Button className="w-full" size="lg">
                      View Design {design.id}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center text-slate-500">
          <p className="text-sm">
            All designs include: Services sections, Patent technology, Before/After galleries, Board members, 
            Instagram feed, Reviews, FAQs, Architect specs, and "Around the Field" CTA
          </p>
        </div>
      </div>
    </div>
  );
}
