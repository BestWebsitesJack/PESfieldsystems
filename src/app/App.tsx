import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import pesLogo from 'figma:asset/8e3599e8cf48cb8d8f26df2a82ca87b3022474e5.png';
import seanCaseyImg from 'figma:asset/6b619395caff23e602bad6dc24b86b809e8050e5.png';
import charleyFrankImg from 'figma:asset/9aebcfcf1482450556ff80e8de37eb016977bfe1.png';
import bobCastelliniImg from 'figma:asset/2f30168ff5e9ea8d584b7b47f15e7e0a2b44e460.png';
import triffonCallosImg from 'figma:asset/3f9ae7744e148bdf64ee26ac0d00d715918ee0cf.png';
import ericSchmidtImg from '../imports/Screen_Shot_2026-04-11_at_1.44.45_PM.png';
import montanaFieldImg from '../imports/Montana_Field.jpg';
import midAmericaBallyardImg from '../imports/IMG_3392-1.JPG';
import lasalleImg from '../imports/Screen_Shot_2026-04-11_at_12.05.08_PM.png';
import midAmericaImg1 from '../imports/IMG_3389.JPG';
import midAmericaImg2 from '../imports/IMG_3392-1.JPG';
import lasalleImg1 from '../imports/Screen_Shot_2026-04-16_at_2.08.42_PM.png';
import lasalleImg2 from '../imports/Screen_Shot_2026-04-16_at_2.08.51_PM.png';
import miracleLeagueMontanaImg from '../imports/MiracleLeagueofNWMontana2.jpg';
import montanaImg1 from '../imports/559259139_1475000403542124_384880869590998768_n.jpg';
import montanaImg2 from '../imports/558221582_1475000390208792_8851038685594466274_n.jpg';
import montanaImg3 from '../imports/558207527_1475000366875461_7744129187080954682_n.jpg';
import montanaImg4 from '../imports/557544972_1475000356875462_1267753251753461216_n.jpg';
import montanaImg5 from '../imports/560631107_1482303399478491_8891698241763623776_n.jpg';
import montanaImg6 from '../imports/MiracleLeagueNWMontana1.jpg';
import montanaImg7 from '../imports/MiracleLeagueofNWMontana2-1.jpg';
import plymouthImg1 from '../imports/PlymouthAfter1.JPG';
import plymouthImg2 from '../imports/PlymouthBefore.JPG';
import plymouthImg3 from '../imports/Plymouthflag.JPG';
import plymouthImg4 from '../imports/Plymouthguys.jpeg';
import centralFloridaImg from '../imports/MLCentralFlorida2.jpg';
import floridaImg1 from '../imports/MLCentralFlorida1.jpg';
import floridaImg2 from '../imports/MLCentralFlorida2-1.jpg';
import floridaImg3 from '../imports/MLCentralFlorida3.jpg';
import floridaImg4 from '../imports/MLCentralFloridaB4.jpg';
import floridaImg5 from '../imports/MLCentralFloridaB5.jpg';
import lasalleClientLogo from '../imports/Screen_Shot_2026-04-11_at_12.05.08_PM-1.png';
import client2Logo from '../imports/Screen_Shot_2026-04-16_at_3.53.13_PM.png';
import client3Logo from '../imports/Screen_Shot_2026-04-16_at_3.53.37_PM.png';
import client4Logo from '../imports/Screen_Shot_2026-04-16_at_3.53.53_PM.png';
import client5Logo from '../imports/Screen_Shot_2026-04-16_at_3.54.11_PM.png';
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
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  Trophy,
  Shield,
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
  Menu,
  X,
  ArrowRight,
  Zap,
  Heart,
  Building,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Gauge,
  Leaf,
  ChevronLeft,
  Award,
  Thermometer,
  Lock,
  BarChart3,
  FileText,
  CheckCircle,
} from 'lucide-react';

type Page = 'home' | 'services' | 'technology' | 'team' | 'gallery' | 'contact' | 'partners' | 'project-detail';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentProjectSlug, setCurrentProjectSlug] = useState<string | null>(null);

  // Scroll detection for nav background and parallax
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Load Elfsight script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Featured Projects (COMPLETED)
  const featuredProjects = [
    {
      slug: 'mid-america-ballyard',
      name: 'Mid-America Ballyard',
      location: 'Cincinnati, OH',
      type: 'Baseball / Softball',
      image: midAmericaBallyardImg,
      completed: true,
    },
    {
      slug: 'lasalle-high-school',
      name: 'LaSalle High School',
      location: 'Cincinnati, OH',
      type: 'Baseball / Softball',
      image: lasalleImg,
      completed: true,
    },
    {
      slug: 'miracle-league-nw-montana',
      name: 'Miracle League of NW Montana',
      location: 'Kalispell, MT',
      type: 'Adaptive Field',
      image: miracleLeagueMontanaImg,
      completed: true,
    },
    {
      slug: 'miracle-league-plymouth',
      name: 'Miracle League of Plymouth',
      location: 'Plymouth, MI',
      type: 'Adaptive Field',
      image: plymouthImg1,
      completed: true,
    },
    {
      slug: 'miracle-league-central-florida',
      name: 'Miracle League of Central Florida',
      location: 'Orlando, FL',
      type: 'Adaptive Field',
      image: centralFloridaImg,
      completed: true,
    },
  ];

  // Who We Serve cards with images
  const whoWeServeCards = [
    {
      title: 'Schools & Athletics',
      description: 'Professional-grade fields for teams and athletic programs.',
      image: 'https://images.unsplash.com/photo-1768327508185-c2ddb12356fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aGV0aWMlMjB0dXJmJTIwYXRobGV0aWMlMjBmaWVsZHxlbnwxfHx8fDE3NzU4MzA5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Municipal & Parks',
      description: 'Community recreation spaces and public athletic facilities.',
      image: 'https://images.unsplash.com/photo-1528552904359-07bab3b488ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGZpZWxkJTIwdHVyZiUyMGNsb3NldXB8ZW58MXx8fHwxNzc1ODMwOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Contractors',
      description: 'Subcontractor partnerships for general contractors and builders.',
      image: 'https://images.unsplash.com/photo-1764863747272-dd01488d460a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmaWVsZCUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzU4MzA5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Architects',
      description: 'Technical specifications and material documentation for design teams.',
      image: 'https://images.unsplash.com/photo-1746003625470-8dde780622f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHRyYWluaW5nJTIwZmllbGR8ZW58MXx8fHwxNzc1ODMwOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Daycares',
      description: 'Safe, durable play surfaces for childcare facilities.',
      image: 'https://images.unsplash.com/photo-1763218812866-a237afef2cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXljYXJlJTIwcGxheWdyb3VuZCUyMHN1cmZhY2V8ZW58MXx8fHwxNzc1ODMwOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Nonprofits',
      description: 'Adaptive and inclusive fields for all athletes and abilities.',
      image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800',
    },
  ];

  // Services We Offer (with NOW BOOKING badges)
  const services = [
    {
      icon: Trophy,
      title: 'Baseball & Softball Fields',
      desc: 'Professional-grade diamonds feature permanent or movable pitching mounds and bases, with a poured-in-place rubber composite layer beneath the turf for consistent fielding and sliding performance.',
      completed: true
    },
    {
      icon: Trophy,
      title: 'Soccer & Lacrosse Fields',
      desc: 'Engineered to reduce heat index, deliver consistent bounce and playability, and eliminate granular rubber infill from shoes and equipment.',
      completed: false
    },
    {
      icon: Trophy,
      title: 'Football Fields',
      desc: 'Regulation fields built for safety, performance, and long-term durability, while maintaining cooler surface temperatures and cleaner play.',
      completed: false
    },
    {
      icon: Trophy,
      title: 'Golf Putting Greens',
      desc: 'Custom-built putting greens delivering precision surfaces and true roll consistency.',
      completed: false
    },
    {
      icon: Heart,
      title: 'Adaptive Fields',
      desc: 'Inclusive field designs that support athletes of all abilities and accessibility needs.',
      completed: true
    },
    {
      icon: Users,
      title: 'Day Care Play Areas',
      desc: 'Safe, age-appropriate outdoor spaces designed for learning, movement, and play.',
      completed: false
    },
    {
      icon: Users,
      title: 'Parks & Recreation',
      desc: 'Community-focused spaces including trails, playgrounds, and gathering areas.',
      completed: false
    },
    {
      icon: Sparkles,
      title: 'Custom Projects',
      desc: 'Unique outdoor environments tailored to your vision, site conditions, and goals.',
      completed: false
    },
  ];

  // Brand Pillars
  const brandPillars = [
    {
      icon: Shield,
      title: 'SAFETY',
      description: 'Patented technology ensures maximum fall impact protection for all athletes',
    },
    {
      icon: Zap,
      title: 'SUPERIOR PLAYABILITY',
      description: 'Regulated infill placement delivers consistent, professional-grade performance',
    },
    {
      icon: TrendingUp,
      title: 'SELF-SUSTAINABLE',
      description: '20° cooler surfaces and reduced maintenance create long-term value',
    },
  ];

  // Persona Gateway
  const personas = [
    {
      icon: Building,
      title: 'MUNICIPAL & PARKS',
      description: 'Community field solutions',
    },
    {
      icon: GraduationCap,
      title: 'SCHOOLS & UNIVERSITIES',
      description: 'Educational athletic facilities',
    },
    {
      icon: Heart,
      title: 'MIRACLE LEAGUE',
      description: 'Adaptive & inclusive fields',
    },
    {
      icon: Users,
      title: 'DAYCARE CENTERS',
      description: 'Safe play environments',
    },
    {
      icon: Briefcase,
      title: 'COMMERCIAL & PRIVATE',
      description: 'Custom installations',
    },
  ];

  // Google Reviews / Testimonials
  const testimonials = [
    {
      name: 'Sean Casey',
      role: 'Former MLB All-Star and Cincinnati Reds HOFer',
      quote: 'After seeing the fields PES Field Systems built for our community, I knew our athletes were getting the same Major-League level experience I was blessed to have in my career. Eric and his team aren\'t just building fields - they\'re helping kids - and because of PES Field Systems, we now have one of the greatest facilities in the country.',
      image: seanCaseyImg,
    },
    {
      name: 'Charley Frank',
      role: 'Executive Director of the Reds Community Fund',
      quote: 'PES Field Systems continues to deliver first-class fields and community spaces, producing tremendous results at an extremely competitive price. Their outstanding work and customer service have made them the trusted synthetic field partner behind some of our most impactful Reds Community Fund projects.',
      image: charleyFrankImg,
    },
    {
      name: 'Bob Castellini',
      role: 'Owner and Managing Partner of the Cincinnati Reds',
      quote: 'PES Field Systems is the kind of exceptional community partner organizations like the Cincinnati Reds rely on to help keep youth on the field and playing baseball. Their generosity, innovation, and commitment to improving facilities have a profound and lasting impact on every team and community they support.',
      image: bobCastelliniImg,
    },
  ];

  // Board Members
  const boardMembers = [
    {
      name: 'Eric Schmidt',
      role: 'CEO & Owner',
      bio: 'Eric founded PES Field Systems in 2021 with a vision to revolutionize synthetic turf construction through innovative engineering and unwavering commitment to athlete safety. As the architect behind the company\'s U.S. patented turf technology, Eric has transformed how athletic fields are built across the country. With decades of industry expertise and a passion for delivering superior playing surfaces, he leads PES with a hands-on approach that ensures every project meets the highest standards of quality, performance, and customer satisfaction.',
      email: 'eric@pesfieldsystems.com',
      image: ericSchmidtImg,
    },
    {
      name: 'Triffon Callos',
      role: 'Vice President',
      bio: 'Triffon is a lifelong resident of Green Township and Vice President of PES Field Systems, a one-stop shop for athletic facility surfacing, from backyard putting greens to major sports fields. He has served as a Trustee in Green Township since 2014 and currently leads the board as Chairman. A former state finalist baseball coach, Triffon is also a proud husband and father of three.',
      email: 'triffon@pesfieldsystems.com',
      image: triffonCallosImg,
    },
  ];

  const faqs = [
    {
      q: 'What makes PES Field Systems different from other turf companies?',
      a: 'Our U.S. patented technology regulates granular rubber infill placement beneath the synthetic turf surface — delivering superior fall impact safety, cooler surface temperatures, and zero infill migration. No other synthetic turf contractor in the country offers this patented system',
    },
    {
      q: 'How quickly can you complete a project?',
      a: 'Project timelines vary based on scope and complexity, but we work closely with each customer to align with your budget, permitting requirements, and schedule. We\'ll provide a detailed timeline during our initial consultation.',
    },
    {
      q: 'Do you specialize in Miracle League and adaptive fields?',
      a: 'Absolutely. Miracle League fields and adaptive synthetic turf surfaces are core to our mission. We have completed multiple Miracle League installations across the country and specialize in inclusive field designs that support athletes of all abilities — with fall impact safety and accessibility as our top priorities.',
    },
    {
      q: 'What geographic areas do you serve?',
      a: 'PES Field Systems serves clients nationwide. From Cincinnati, Ohio to Montana, Michigan, Florida, and beyond — we utilize both in-house construction resources and licensed subcontractors under our direct supervision to deliver consistent, high-quality synthetic turf installations anywhere in the country.',
    },
    {
      q: 'Are warranties included with your installations?',
      a: 'Yes, all PES projects come with comprehensive industry-standard performance warranties. Specific warranty terms are tailored to your project scope and materials used.',
    },
    {
      q: 'Can I download architect specifications?',
      a: 'Yes! Detailed architect specifications are available for download in the specifications section below. These documents provide complete technical details for planning and bidding purposes.',
    },
  ];

  // Navigation Component
  const Navigation = () => (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200`}
        style={{
          background: '#000000',
          borderBottom: '1px solid rgba(30, 63, 216, 0.4)'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-40">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={pesLogo}
                alt="PES Field Systems synthetic turf contractor logo"
                className="h-36 cursor-pointer"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                onClick={() => {
                  setCurrentPage('home');
                  window.scrollTo(0, 0);
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setCurrentPage('services')}
                onMouseEnter={() => setHoveredNavItem('services')}
                onMouseLeave={() => setHoveredNavItem(null)}
                className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 no-underline relative pb-1"
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.08em',
                  textDecoration: 'none'
                }}
              >
                SERVICES
                <span 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#1E3FD8] transition-all duration-300"
                  style={{ width: hoveredNavItem === 'services' ? '100%' : '0%' }}
                ></span>
              </button>
              <button
                onClick={() => setCurrentPage('gallery')}
                onMouseEnter={() => setHoveredNavItem('projects')}
                onMouseLeave={() => setHoveredNavItem(null)}
                className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 no-underline relative pb-1"
                style={{ 
                  fontSize: '14px', 
                  letterSpacing: '0.08em',
                  textDecoration: 'none'
                }}
              >
                PROJECTS
                <span 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#1E3FD8] transition-all duration-300"
                  style={{ width: hoveredNavItem === 'projects' ? '100%' : '0%' }}
                ></span>
              </button>
              <button
                onClick={() => setCurrentPage('technology')}
                onMouseEnter={() => setHoveredNavItem('technology')}
                onMouseLeave={() => setHoveredNavItem(null)}
                className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 no-underline relative pb-1"
                style={{
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  textDecoration: 'none'
                }}
              >
                OUR TECHNOLOGY
                <span
                  className="absolute bottom-0 left-0 h-0.5 bg-[#1E3FD8] transition-all duration-300"
                  style={{ width: hoveredNavItem === 'technology' ? '100%' : '0%' }}
                ></span>
              </button>
              <button
                onClick={() => setCurrentPage('team')}
                onMouseEnter={() => setHoveredNavItem('team')}
                onMouseLeave={() => setHoveredNavItem(null)}
                className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 no-underline relative pb-1"
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.08em',
                  textDecoration: 'none'
                }}
              >
                TEAM
                <span
                  className="absolute bottom-0 left-0 h-0.5 bg-[#1E3FD8] transition-all duration-300"
                  style={{ width: hoveredNavItem === 'team' ? '100%' : '0%' }}
                ></span>
              </button>
              <button
                onClick={() => setCurrentPage('partners')}
                onMouseEnter={() => setHoveredNavItem('partners')}
                onMouseLeave={() => setHoveredNavItem(null)}
                className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 no-underline relative pb-1"
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.08em',
                  textDecoration: 'none'
                }}
              >
                PARTNERS
                <span 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#1E3FD8] transition-all duration-300"
                  style={{ width: hoveredNavItem === 'partners' ? '100%' : '0%' }}
                ></span>
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                onMouseEnter={() => setHoveredNavItem('contact')}
                onMouseLeave={() => setHoveredNavItem(null)}
                className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 no-underline relative pb-1"
                style={{
                  fontSize: '16px',
                  letterSpacing: '0.08em',
                  textDecoration: 'none'
                }}
              >
                CONTACT
                <span 
                  className="absolute bottom-0 left-0 h-0.5 bg-[#1E3FD8] transition-all duration-300"
                  style={{ width: hoveredNavItem === 'contact' ? '100%' : '0%' }}
                ></span>
              </button>
              <motion.button 
                className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200"
                onClick={() => setCurrentPage('contact')}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(30, 63, 216, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderRadius: '4px',
                  padding: '12px 24px',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em',
                  boxShadow: 'none'
                }}
              >
                GET A QUOTE
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#E6E6E6] z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex items-center justify-center transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ background: '#000000' }}
      >
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => {
              setCurrentPage('services');
              setMobileMenuOpen(false);
            }}
            className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 text-2xl"
            style={{ letterSpacing: '0.08em' }}
          >
            SERVICES
          </button>
          <button
            onClick={() => {
              setCurrentPage('gallery');
              setMobileMenuOpen(false);
            }}
            className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 text-2xl"
            style={{ letterSpacing: '0.08em' }}
          >
            PROJECTS
          </button>
          <button
            onClick={() => {
              setCurrentPage('technology');
              setMobileMenuOpen(false);
            }}
            className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 text-2xl"
            style={{ letterSpacing: '0.08em' }}
          >
            OUR TECHNOLOGY
          </button>
          <button
            onClick={() => {
              setCurrentPage('team');
              setMobileMenuOpen(false);
            }}
            className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 text-2xl"
            style={{ letterSpacing: '0.08em' }}
          >
            TEAM
          </button>
          <button
            onClick={() => {
              setCurrentPage('partners');
              setMobileMenuOpen(false);
            }}
            className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 text-2xl"
            style={{ letterSpacing: '0.08em' }}
          >
            PARTNERS
          </button>
          <button
            onClick={() => {
              setCurrentPage('contact');
              setMobileMenuOpen(false);
            }}
            className="text-[#E6E6E6] hover:text-[#1E3FD8] transition-colors duration-200 text-2xl"
            style={{ letterSpacing: '0.08em' }}
          >
            CONTACT
          </button>
          <button 
            className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 mt-4"
            onClick={() => {
              setCurrentPage('contact');
              setMobileMenuOpen(false);
            }}
            style={{
              borderRadius: '4px',
              padding: '12px 24px',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              boxShadow: 'none'
            }}
          >
            GET A QUOTE
          </button>
        </div>
      </div>
    </>
  );

  // Footer Component
  const Footer = () => (
    <footer 
      className="text-[#E6E6E6]"
      style={{
        background: '#0A1428',
        borderTop: '1px solid rgba(30, 63, 216, 0.3)'
      }}
    >
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Brand & Address */}
          <div>
            <img 
              src={pesLogo} 
              alt="PES Field Systems" 
              className="h-24 mb-4"
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
            />
            <p 
              className="text-[#B7C6CF] mb-4"
              style={{ 
                fontSize: '13px', 
                lineHeight: '1.6',
                fontWeight: '600'
              }}
            >
              Safer Fields. Superior Play. Self-Sustainable.
            </p>
            <p 
              className="text-[#B7C6CF]"
              style={{ 
                fontSize: '13px', 
                lineHeight: '1.6'
              }}
            >
              3460 Oakmeadow Lane<br />
              Cincinnati, Ohio 45239
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div>
            <div className="space-y-2">
              <button
                onClick={() => setCurrentPage('services')}
                className="block text-[#B7C6CF] hover:text-[#E6E6E6] transition-colors duration-200"
                style={{ fontSize: '13px' }}
              >
                Services
              </button>
              <a 
                href="#projects"
                className="block text-[#B7C6CF] hover:text-[#E6E6E6] transition-colors duration-200"
                style={{ fontSize: '13px' }}
              >
                Projects
              </a>
              <button
                onClick={() => setCurrentPage('technology')}
                className="block text-[#B7C6CF] hover:text-[#E6E6E6] transition-colors duration-200"
                style={{ fontSize: '13px' }}
              >
                Technology
              </button>
              <button
                onClick={() => setCurrentPage('team')}
                className="block text-[#B7C6CF] hover:text-[#E6E6E6] transition-colors duration-200"
                style={{ fontSize: '13px' }}
              >
                Team
              </button>
              <button
                onClick={() => setCurrentPage('partners')}
                className="block text-[#B7C6CF] hover:text-[#E6E6E6] transition-colors duration-200"
                style={{ fontSize: '13px' }}
              >
                Partners
              </button>
              <a 
                href="#contact"
                className="block text-[#B7C6CF] hover:text-[#E6E6E6] transition-colors duration-200"
                style={{ fontSize: '13px' }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div>
            <p 
              className="text-[#E6E6E6] mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700',
                fontSize: '16px'
              }}
            >
              Ready to build?
            </p>
            <a 
              href="#contact-form"
              className="inline-block text-white px-6 py-3 transition-colors duration-200"
              style={{
                background: '#1E3FD8',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '700'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#4F73D6'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#1E3FD8'}
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: '1px solid rgba(183, 198, 207, 0.15)'
          }}
        >
          <p className="text-[#B7C6CF]" style={{ fontSize: '12px' }}>
            Copyright 2026 PES Field Systems
          </p>
          <p className="text-[#B7C6CF]" style={{ fontSize: '12px' }}>
            Built by Best Websites LLC
          </p>
        </div>
      </div>
    </footer>
  );

  // SERVICES PAGE
  if (currentPage === 'services') {
    return (
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        {/* Hero Section */}
        <section
          className="pt-48 pb-32"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #0A1428 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p
                className="uppercase mb-6 text-[#1E3FD8]"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.14em',
                  fontWeight: '700'
                }}
              >
                What We Build
              </p>
              <h1
                className="text-white mb-8"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '700',
                  fontSize: '64px',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Our Services
              </h1>
              <div className="w-24 h-1 bg-[#1E3FD8] mx-auto mb-10"></div>
              <p
                className="text-[#B7C6CF] max-w-3xl mx-auto"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.7'
                }}
              >
                PES Field Systems partners closely with each customer, collaboratively determining the best project delivery approach to align with budget, permitting, and schedule requirements. Using in-house construction resources or licensed subcontractors under our supervision, we deliver custom athletic fields and outdoor recreation spaces with industry-standard performance warranties.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32" style={{ background: '#0A1428' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Baseball & Softball */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Trophy className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Baseball & Softball Fields
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Professional-grade diamonds feature permanent or movable pitching mounds and bases, with a poured-in-place rubber composite layer beneath the turf for consistent fielding and sliding performance.
                  </p>
                </motion.div>

                {/* Soccer & Lacrosse */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Zap className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Soccer & Lacrosse Fields
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Engineered to reduce heat index, deliver consistent bounce and playability, and eliminate granular rubber infill from shoes and equipment.
                  </p>
                </motion.div>

                {/* Football */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Shield className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Football Fields
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Regulation fields built for safety, performance, and long-term durability, while maintaining cooler surface temperatures and cleaner play.
                  </p>
                </motion.div>

                {/* Golf Putting Greens */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Gauge className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Golf Putting Greens
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Custom-built putting greens delivering precision surfaces and true roll consistency.
                  </p>
                </motion.div>

                {/* Adaptive Fields */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Heart className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Adaptive Fields
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Inclusive field designs that support athletes of all abilities and accessibility needs.
                  </p>
                </motion.div>

                {/* Day Care Play Areas */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Users className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Day Care Play Areas
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Safe, age-appropriate outdoor spaces designed for learning, movement, and play.
                  </p>
                </motion.div>

                {/* Parks & Recreation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Leaf className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Parks & Recreation
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Community-focused spaces including trails, playgrounds, and gathering areas.
                  </p>
                </motion.div>

                {/* Custom Projects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.05)',
                    border: '2px solid rgba(30, 63, 216, 0.2)',
                    borderRadius: '12px',
                    padding: '32px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Sparkles className="w-10 h-10 text-[#1E3FD8] mb-4" />
                  <h3
                    className="text-white mb-3"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Custom Projects
                  </h3>
                  <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    Unique outdoor environments tailored to your vision, site conditions, and goals.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-32"
          style={{
            background: 'linear-gradient(135deg, #1E3FD8 0%, #4F73D6 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '700',
                  fontSize: '56px',
                  lineHeight: '1.2'
                }}
              >
                Ready to start your project?
              </h2>
              <p className="text-white mb-10 opacity-90" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Let's discuss how PES Field Systems can bring your vision to life with our patented technology and expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setCurrentPage('contact')}
                  className="px-10 py-4 bg-white text-[#1E3FD8] hover:bg-[#E6E6E6] transition-all duration-200"
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    letterSpacing: '0.05em'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  onClick={() => setCurrentPage('technology')}
                  className="px-10 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1E3FD8] transition-all duration-200"
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    letterSpacing: '0.05em'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn About Our Technology
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // HOME PAGE
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
          {/* Background Image with Parallax */}
          <div className="absolute inset-0">
            <div
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
                transition: 'transform 0.1s ease-out',
                height: '120%',
                width: '100%',
                position: 'absolute',
                top: '-10%',
              }}
            >
              <img
                src={montanaFieldImg}
                alt="Synthetic turf athletic field construction by PES Field Systems"
                className="w-full h-full"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            {/* Dark gradient overlay - darker on left for text readability */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.25))'
              }}
            />
          </div>

          {/* Content */}
          <div className="container relative mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p 
                className="text-[#4F73D6] mb-6 uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                style={{ 
                  fontSize: '12px', 
                  letterSpacing: '0.12em',
                  fontWeight: '600'
                }}
              >
                U.S. Patented Turf Technology 
              </motion.p>
              
              <motion.h1 
                className="text-[#E6E6E6] mb-8 hero-h1-animate"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '700',
                  fontSize: 'clamp(40px, 8vw, 72px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em'
                }}
              >
                Safer Fields.  Superior Play.  Self-Sustainable.<br />
              </motion.h1>
              
              <motion.p 
                className="text-[#B7C6CF] mb-10 hero-subheadline-animate mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{
                  fontSize: '18px',
                  lineHeight: '1.6',
                  maxWidth: '520px'
                }}
              >
                The only synthetic turf system with a U.S. patent on rubber infill placement — delivering uncompromised fall impact safety, cooler surface temperatures, and maintenance freedom for athletes of all abilities nationwide.
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button 
                  className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200"
                  onClick={() => setCurrentPage('contact')}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(30, 63, 216, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{
                    borderRadius: '4px',
                    padding: '14px 28px',
                    fontWeight: 'bold',
                    letterSpacing: '0.02em'
                  }}
                >
                  Tell Us About Your Project
                </motion.button>
                
                <motion.button 
                  className="bg-transparent text-[#1E3FD8] border-2 border-[#1E3FD8] hover:bg-[#1E3FD8]/10 transition-colors duration-200"
                  onClick={() => setCurrentPage('gallery')}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: '#4F73D6'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  style={{
                    borderRadius: '4px',
                    padding: '14px 28px',
                    fontWeight: 'bold',
                    letterSpacing: '0.02em'
                  }}
                >
                  See Our Work
                </motion.button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, 10, 0]
            }}
            transition={{
              opacity: { delay: 0.8, duration: 0.6 },
              y: { 
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut'
              }
            }}
            style={{ transform: 'translateX(-50%)' }}
          >
            <div
              className="w-6 h-10 border-2 border-[#1E3FD8] rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                className="w-1.5 h-1.5 bg-[#1E3FD8] rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
              />
            </div>
          </motion.div>

          {/* Bottom horizontal rule */}
          <div 
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: '1px',
              background: 'rgba(30, 63, 216, 0.3)'
            }}
          />
        </section>

        {/* Three Pillars Bar */}
        <section 
          className="w-full flex items-center"
          style={{ 
            height: '140px',
            background: 'linear-gradient(135deg, #E6E6E6 0%, #B7C6CF 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between max-w-5xl mx-auto">
              {/* Item 1: Safer Fields */}
              <div className="flex items-center gap-3">
                <Shield className="w-10 h-10 text-[#1E3FD8]" strokeWidth={2} />
                <div>
                  <div 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '18px',
                      color: '#0A1428'
                    }}
                  >
                    Safer Fields
                  </div>
                  <div 
                    style={{ fontSize: '14px', color: '#4A5568' }}
                  >
                    Patented fall impact protection
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div 
                className="h-16 w-px"
                style={{ background: 'rgba(10, 20, 40, 0.2)' }}
              />

              {/* Item 2: Superior Play */}
              <div className="flex items-center gap-3">
                <Gauge className="w-10 h-10 text-[#1E3FD8]" strokeWidth={2} />
                <div>
                  <div 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '18px',
                      color: '#0A1428'
                    }}
                  >
                    Superior Play
                  </div>
                  <div 
                    style={{ fontSize: '14px', color: '#4A5568' }}
                  >
                    Engineered for athletes of all abilities
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div 
                className="h-16 w-px"
                style={{ background: 'rgba(10, 20, 40, 0.2)' }}
              />

              {/* Item 3: Self-Sustainable */}
              <div className="flex items-center gap-3">
                <Leaf className="w-10 h-10 text-[#1E3FD8]" strokeWidth={2} />
                <div>
                  <div 
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '18px',
                      color: '#0A1428'
                    }}
                  >
                    Self-Sustainable
                  </div>
                  <div 
                    style={{ fontSize: '14px', color: '#4A5568' }}
                  >
                    Low maintenance. Long-lasting.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Clients Section */}
        <section
          className="py-8"
          style={{
            background: '#F7F9FC'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto text-center">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '700',
                  fontSize: '24px',
                  color: '#0A1428',
                  letterSpacing: '-0.02em'
                }}
              >
                Clients
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                {/* Client Logo 1 - LaSalle High School */}
                <div
                  className="flex items-center justify-center h-64 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={lasalleClientLogo}
                    alt="LaSalle High School"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Client Logo 2 */}
                <div
                  className="flex items-center justify-center h-64 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={client2Logo}
                    alt="Client 2"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Client Logo 3 */}
                <div
                  className="flex items-center justify-center h-64 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={client3Logo}
                    alt="Client 3"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Client Logo 4 */}
                <div
                  className="flex items-center justify-center h-64 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={client4Logo}
                    alt="Client 4"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Client Logo 5 */}
                <div
                  className="flex items-center justify-center h-64 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={client5Logo}
                    alt="Client 5"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Technology Section */}
        <section
          className="py-40"
          style={{
            background: 'linear-gradient(135deg, #0A1428 0%, #1E3FD8 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column - 55% */}
                <div className="lg:col-span-7">
                  {/* Eyebrow */}
                  <p
                    className="uppercase mb-6"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.14em',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    U.S. Patented Turf Technology
                  </p>

                  {/* Heading */}
                  <h2
                    className="text-white mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '56px',
                      lineHeight: '1.2'
                    }}
                  >
                    The science behind safer fields.
                  </h2>
                  <div className="w-24 h-1 bg-white mb-8"></div>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 mb-10">
                    <p className="text-[#B7C6CF]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      Our patented technology regulates granular rubber infill placement beneath synthetic turf surfaces.
                      Unlike traditional systems where infill sits loose on top, our regulated approach ensures consistent
                      fall protection across the entire field.
                    </p>
                    <p className="text-[#B7C6CF]" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                      This innovation delivers significantly cooler surface temperatures, eliminates infill migration into
                      shoes and equipment, and maintains optimal performance standards year after year.
                    </p>
                  </div>

                  {/* Three Stat Callouts */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div style={{ borderTop: '2px solid #1E3FD8', paddingTop: '12px' }}>
                      <p
                        className="text-[#E6E6E6]"
                        style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          lineHeight: '1.4'
                        }}
                      >
                        Uncompromised Fall Safety
                      </p>
                    </div>
                    <div style={{ borderTop: '2px solid #1E3FD8', paddingTop: '12px' }}>
                      <p
                        className="text-[#E6E6E6]"
                        style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          lineHeight: '1.4'
                        }}
                      >
                        Cooler Surface Temps
                      </p>
                    </div>
                    <div style={{ borderTop: '2px solid #1E3FD8', paddingTop: '12px' }}>
                      <p
                        className="text-[#E6E6E6]"
                        style={{
                          fontSize: '14px',
                          fontWeight: '700',
                          lineHeight: '1.4'
                        }}
                      >
                        Zero Infill Migration
                      </p>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <button
                    onClick={() => setCurrentPage('technology')}
                    className="text-[#1E3FD8] inline-flex items-center gap-2 hover:text-[#4F73D6] transition-colors"
                    style={{
                      fontSize: '16px',
                      fontWeight: '600'
                    }}
                  >
                    Learn About Our Technology
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Right Column - 45% Technical Diagram */}
                <div className="lg:col-span-5">
                  <div
                    style={{
                      background: '#0A0F2C',
                      borderRadius: '8px',
                      padding: '40px 32px',
                      border: '2px solid #1E3FD8'
                    }}
                  >
                    {/* Cross-section diagram */}
                    <div className="space-y-6">
                      <div className="text-center mb-6">
                        <p
                          className="text-[#E6E6E6]"
                          style={{
                            fontSize: '14px',
                            fontWeight: '700',
                            letterSpacing: '0.05em'
                          }}
                        >
                          TURF CROSS-SECTION
                        </p>
                      </div>

                      {/* Layer visualization */}
                      <div className="space-y-3">
                        {/* Layer 1 */}
                        <div
                          style={{
                            background: 'rgba(30, 63, 216, 0.1)',
                            border: '1px solid #1E3FD8',
                            borderRadius: '4px',
                            padding: '16px',
                            borderLeft: '4px solid #1E3FD8'
                          }}
                        >
                          <p className="text-[#E6E6E6]" style={{ fontSize: '13px', fontWeight: '700', marginBottom: '4px' }}>
                            Synthetic Turf Surface
                          </p>
                          <p className="text-[#B7C6CF]" style={{ fontSize: '11px' }}>
                            Professional-grade playing surface
                          </p>
                        </div>

                        {/* Layer 2 - Patent Layer */}
                        <div
                          style={{
                            background: 'rgba(30, 63, 216, 0.15)',
                            border: '2px solid #1E3FD8',
                            borderRadius: '4px',
                            padding: '16px',
                            borderLeft: '4px solid #1E3FD8'
                          }}
                        >
                          <p className="text-[#1E3FD8]" style={{ fontSize: '13px', fontWeight: '700', marginBottom: '4px' }}>
                            Regulated Rubber Infill ★
                          </p>
                          <p className="text-[#B7C6CF]" style={{ fontSize: '11px' }}>
                            Patented placement technology
                          </p>
                        </div>

                        {/* Layer 3 */}
                        <div
                          style={{
                            background: 'rgba(30, 63, 216, 0.1)',
                            border: '1px solid #1E3FD8',
                            borderRadius: '4px',
                            padding: '16px',
                            borderLeft: '4px solid #1E3FD8'
                          }}
                        >
                          <p className="text-[#E6E6E6]" style={{ fontSize: '13px', fontWeight: '700', marginBottom: '4px' }}>
                            Shock Absorption Layer
                          </p>
                          <p className="text-[#B7C6CF]" style={{ fontSize: '11px' }}>
                            Fall impact protection system
                          </p>
                        </div>

                        {/* Layer 4 */}
                        <div
                          style={{
                            background: 'rgba(30, 63, 216, 0.1)',
                            border: '1px solid #1E3FD8',
                            borderRadius: '4px',
                            padding: '16px',
                            borderLeft: '4px solid #1E3FD8'
                          }}
                        >
                          <p className="text-[#E6E6E6]" style={{ fontSize: '13px', fontWeight: '700', marginBottom: '4px' }}>
                            Base & Drainage
                          </p>
                          <p className="text-[#B7C6CF]" style={{ fontSize: '11px' }}>
                            Engineered foundation
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#1E3FD8]/30">
                        <p className="text-[#4F73D6]" style={{ fontSize: '11px', fontWeight: '600' }}>
                          ★ U.S. Patent Protected Technology
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Pillars Section */}
        <section className="py-40" style={{ background: '#0A1428' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  </Badge>
                  <h2 className="text-6xl md:text-7xl font-black text-[#E6E6E6] mb-6 tracking-tight">
                    SAFER. SMARTER. SELF-SUSTAINABLE.
                  </h2>
                  <div className="w-24 h-1 bg-[#1E3FD8] mx-auto mb-6"></div>
                  <p className="text-xl text-[#B7C6CF] max-w-2xl mx-auto">
                    Every synthetic turf field we build is engineered around three principles that set PES Field Systems apart from every other turf contractor in the country.
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {brandPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="bg-[#111111] border-[#4F73D6]/30 hover:border-[#4F73D6] transition-all hover:shadow-2xl hover:shadow-[#1E3FD8]/20 group h-full">
                      <CardContent className="p-10 text-center">
                        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <pillar.icon className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-[#E6E6E6] mb-4 tracking-wide">
                          {pillar.title}
                        </h3>
                        <p className="text-[#B7C6CF] leading-relaxed">
                          {pillar.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CENTERPIECE: Before/After Transformation Slider */}
        <section
          className="py-40 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #0A1428 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2
                  className="text-white mb-8"
                  style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: '700',
                    fontSize: 'clamp(48px, 8vw, 72px)',
                    lineHeight: '1.1',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                  }}
                >
                  See How Synthetic Turf Fields Are Built
                </h2>
              </motion.div>

              {/* Elfsight Before and After Slider */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <div
                  className="elfsight-app-37404716-ca71-432b-96ab-cb969861acb0"
                  data-elfsight-app-lazy
                ></div>
              </motion.div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center items-center gap-8 mb-12"
                style={{
                  borderTop: '1px solid rgba(79, 115, 214, 0.3)',
                  borderBottom: '1px solid rgba(79, 115, 214, 0.3)',
                  paddingTop: '24px',
                  paddingBottom: '24px'
                }}
              >
                <div className="text-center">
                  <div
                    className="text-[#4F73D6]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '32px'
                    }}
                  >
                    50+
                  </div>
                  <div
                    className="text-[#B7C6CF]"
                    style={{
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Fields Transformed
                  </div>
                </div>

                <div
                  className="h-12 w-px"
                  style={{ background: 'rgba(79, 115, 214, 0.3)' }}
                />

                <div className="text-center">
                  <div
                    className="text-[#4F73D6]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '32px'
                    }}
                  >
                    20°
                  </div>
                  <div
                    className="text-[#B7C6CF]"
                    style={{
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Cooler Surfaces
                  </div>
                </div>

                <div
                  className="h-12 w-px"
                  style={{ background: 'rgba(79, 115, 214, 0.3)' }}
                />

                <div className="text-center">
                  <div
                    className="text-[#4F73D6]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '32px'
                    }}
                  >
                    Zero
                  </div>
                  <div
                    className="text-[#B7C6CF]"
                    style={{
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Infill Migration
                  </div>
                </div>

                <div
                  className="h-12 w-px"
                  style={{ background: 'rgba(79, 115, 214, 0.3)' }}
                />

                <div className="text-center">
                  <div
                    className="text-[#4F73D6]"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '32px'
                    }}
                  >
                    10+
                  </div>
                  <div
                    className="text-[#B7C6CF]"
                    style={{
                      fontSize: '14px',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Year Lifespan
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <motion.button
                  onClick={() => setCurrentPage('gallery')}
                  className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(30, 63, 216, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    borderRadius: '4px',
                    padding: '16px 32px',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em',
                    fontSize: '16px'
                  }}
                >
                  See Full Project Gallery
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="py-40" style={{ background: '#4F73D6' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="mb-16">
                <p
                  className="uppercase mb-6"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontWeight: '600'
                  }}
                >
                  What We Build
                </p>
                <h2
                  className="text-white mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '700',
                    fontSize: '56px',
                    lineHeight: '1.2'
                  }}
                >
                  Every surface. Every athlete. Every ability.
                </h2>
                <p className="text-white mt-6 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.6', opacity: '0.85' }}>
                  From baseball and softball fields to Miracle League adaptive surfaces, football fields, putting greens, and daycare play areas — we build synthetic turf systems that perform safely for athletes of all abilities, nationwide.
                </p>
                <div className="w-24 h-1 bg-white mt-8"></div>

              {/* Services Grid - 8 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.6,
                      type: 'spring',
                      bounce: 0.4
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      border: '2px solid rgba(255, 255, 255, 0.25)',
                      borderRadius: '8px',
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon
                        className="text-white"
                        style={{
                          width: '32px',
                          height: '32px',
                          strokeWidth: '2px'
                        }}
                      />
                    </motion.div>

                    {/* Service Name */}
                    <h3
                      className="text-white"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        fontSize: '18px',
                        lineHeight: '1.3'
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.6',
                        color: 'rgba(255, 255, 255, 0.85)'
                      }}
                    >
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="featured-projects" className="py-40" style={{ background: '#0A1428' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="mb-16">
                <p 
                  className="text-[#4F73D6] uppercase mb-6"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    fontWeight: '600'
                  }}
                >
                  Our Work
                </p>
                <h2 
                  className="text-[#E6E6E6] mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '700',
                    fontSize: '56px',
                    lineHeight: '1.2'
                  }}
                >
                  Built. Proven. Trusted.
                </h2>
                <p className="text-[#B7C6CF] mt-6 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                  Completed synthetic turf field installations for schools, Miracle League organizations, and athletic programs across the country — each built with our U.S. patented rubber infill technology.
                </p>
                <div className="w-24 h-1 bg-[#1E3FD8] mt-8"></div>
              </div>

              {/* Projects Grid - Tighter Horizontal Layout */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {featuredProjects.map((project, index) => (
                  <div key={index}>
                    <div
                      className="overflow-hidden h-full"
                      style={{
                        background: 'rgba(30, 63, 216, 0.1)',
                        border: '2px solid rgba(30, 63, 216, 0.3)',
                        borderRadius: '8px'
                      }}
                    >
                      {/* Image Container with fixed height */}
                      <div className="relative overflow-hidden" style={{ height: '200px' }}>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-[1.05]"
                        />
                      </div>
                      {/* Content Area */}
                      <div style={{ padding: '16px' }}>
                        <h3
                          className="text-[#E6E6E6] mb-1"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: '700',
                            fontSize: '14px',
                            lineHeight: '1.3'
                          }}
                        >
                          {project.name}
                        </h3>
                        <p className="text-[#B7C6CF] mb-1" style={{ fontSize: '12px' }}>
                          {project.location}
                        </p>
                        <p
                          className="text-[#4F73D6] mb-3"
                          style={{ fontSize: '12px', fontWeight: '600' }}
                        >
                          {project.type}
                        </p>
                        <button
                          onClick={() => {
                            setCurrentProjectSlug(project.slug);
                            setCurrentPage('project-detail');
                          }}
                          className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 w-full"
                          style={{
                            borderRadius: '4px',
                            padding: '8px 12px',
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '0.05em'
                          }}
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What They Say Section */}
        <section className="py-40" style={{ background: '#B7C6CF' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="mb-16 text-center">
                <p 
                  className="uppercase mb-6"
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    color: '#4F73D6',
                    fontWeight: '600'
                  }}
                >
                  Testimonials
                </p>
                <h2 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '700',
                    fontSize: '56px',
                    lineHeight: '1.2',
                    color: '#0A1428',
                    marginBottom: '16px'
                  }}
                >
                  Trusted by leaders who know what elite looks like.
                </h2>
                <div className="w-24 h-1 mx-auto" style={{ background: '#1E3FD8' }}></div>
              </div>

              {/* Testimonials Grid - Static, No Carousel */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      padding: '40px 32px',
                      position: 'relative',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center'
                    }}
                  >
                    {/* Headshot at top */}
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        style={{
                          width: '200px',
                          height: '200px',
                          borderRadius: '50%',
                          border: '4px solid #1E3FD8',
                          objectFit: 'cover',
                          marginBottom: '24px'
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '200px',
                          height: '200px',
                          borderRadius: '50%',
                          border: '4px solid #1E3FD8',
                          background: '#E6E6E6',
                          marginBottom: '24px'
                        }}
                      />
                    )}

                    {/* Decorative Quote Mark */}
                    <div
                      style={{
                        fontSize: '60px',
                        lineHeight: '1',
                        color: '#1E3FD8',
                        opacity: '0.2',
                        fontFamily: 'Georgia, serif',
                        fontWeight: '700',
                        marginBottom: '16px'
                      }}
                    >
                      "
                    </div>

                    {/* Quote Text */}
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: '1.7',
                        fontStyle: 'italic',
                        color: '#0A1428',
                        marginBottom: '24px'
                      }}
                    >
                      {testimonial.quote}
                    </p>

                    {/* Attribution */}
                    <div style={{ textAlign: 'center' }}>
                      <p
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: '700',
                          fontSize: '18px',
                          marginBottom: '6px',
                          color: '#0A1428'
                        }}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        style={{
                          fontSize: '15px',
                          lineHeight: '1.5',
                          color: '#4F73D6'
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work With PES Field Systems Section */}
        <section className="py-40" style={{ background: '#0A1428' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="mb-20 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p
                    className="uppercase mb-6"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.14em',
                      color: '#4F73D6',
                      fontWeight: '600'
                    }}
                  >
                    Get Started
                  </p>
                  <h2
                    className="text-[#E6E6E6] mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '56px',
                      lineHeight: '1.2'
                    }}
                  >
                    Ready to Build Your Synthetic Turf Field?
                  </h2>
                  <div className="w-24 h-1 bg-[#1E3FD8] mx-auto"></div>
                </motion.div>
              </div>

              {/* 3-Column CTA Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Build Your Field */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.1)',
                    border: '2px solid rgba(30, 63, 216, 0.3)',
                    borderRadius: '12px',
                    padding: '40px 32px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Building className="w-16 h-16 text-[#4F73D6] mx-auto mb-6" />
                  <h3
                    className="text-[#E6E6E6] mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '24px'
                    }}
                  >
                    Build Your Field
                  </h3>
                  <p
                    className="text-[#B7C6CF] mb-8"
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}
                  >
                    Start a conversation about your next project. We'll guide you through specs, timelines, and budgets.
                  </p>
                  <motion.button
                    onClick={() => setCurrentPage('contact')}
                    className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      borderRadius: '8px',
                      padding: '14px 24px',
                      fontWeight: 'bold',
                      letterSpacing: '0.05em',
                      fontSize: '14px'
                    }}
                  >
                    Contact Us
                  </motion.button>
                </motion.div>

                {/* Column 2: Partner With Us */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.1)',
                    border: '2px solid rgba(30, 63, 216, 0.3)',
                    borderRadius: '12px',
                    padding: '40px 32px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Users className="w-16 h-16 text-[#4F73D6] mx-auto mb-6" />
                  <h3
                    className="text-[#E6E6E6] mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '24px'
                    }}
                  >
                    Partner With Us
                  </h3>
                  <p
                    className="text-[#B7C6CF] mb-8"
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}
                  >
                    Contractors, architects, and trade partners—let's collaborate on your next athletic facility.
                  </p>
                  <motion.button
                    onClick={() => setCurrentPage('partners')}
                    className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      borderRadius: '8px',
                      padding: '14px 24px',
                      fontWeight: 'bold',
                      letterSpacing: '0.05em',
                      fontSize: '14px'
                    }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                {/* Column 3: Download Specs */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="group"
                  style={{
                    background: 'rgba(30, 63, 216, 0.1)',
                    border: '2px solid rgba(30, 63, 216, 0.3)',
                    borderRadius: '12px',
                    padding: '40px 32px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FileText className="w-16 h-16 text-[#4F73D6] mx-auto mb-6" />
                  <h3
                    className="text-[#E6E6E6] mb-4"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '24px'
                    }}
                  >
                    Download Specs
                  </h3>
                  <p
                    className="text-[#B7C6CF] mb-8"
                    style={{
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}
                  >
                    Get detailed technical specifications, installation guides, and planning resources.
                  </p>
                  <motion.button
                    onClick={() => setCurrentPage('technology')}
                    className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      borderRadius: '8px',
                      padding: '14px 24px',
                      fontWeight: 'bold',
                      letterSpacing: '0.05em',
                      fontSize: '14px'
                    }}
                  >
                    View Technology
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-32 bg-[#111111]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Badge className="bg-[#4F73D6]/20 text-[#4F73D6] border border-[#4F73D6]/30 mb-6 font-bold tracking-wider">
                    GOT QUESTIONS?
                  </Badge>
                  <h2 className="text-5xl md:text-6xl font-black text-[#E6E6E6] mb-6 tracking-tight">
                    FREQUENTLY ASKED QUESTIONS
                  </h2>
                </motion.div>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-black text-lg text-[#E6E6E6] hover:text-[#4F73D6] hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#B7C6CF] leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Architect Specs Section */}
        <section className="py-32 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <FileDown className="w-20 h-20 mx-auto mb-8" />
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
                  ARCHITECT SPECIFICATIONS
                </h2>
                <p className="text-xl text-white/90 mb-10">
                  Download detailed technical specifications for planning and bidding purposes
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-[#1E3FD8] hover:bg-[#E6E6E6] font-black text-base px-8 py-6 tracking-wider"
                >
                  <Download className="mr-2 w-5 h-5" />
                  DOWNLOAD SPECS (PDF)
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work With Us Section */}
        <section className="py-32 bg-[#000000]" id="contact">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Column - Partners and Bidder List */}
                <div>
                  <h2 
                    className="text-[#E6E6E6] mb-10"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '36px'
                    }}
                  >
                    Work With PES Field Systems
                  </h2>

                  {/* Subsection 1 - Contractor and Trade Partners */}
                  <div 
                    className="mb-8"
                    style={{
                      borderLeft: '2px solid #1E3FD8',
                      paddingLeft: '16px'
                    }}
                  >
                    <h3 
                      className="text-[#E6E6E6] mb-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        fontSize: '18px'
                      }}
                    >
                      Contractor and Trade Partners
                    </h3>
                    <p className="text-[#B7C6CF] mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      We collaborate with general contractors, site work specialists, and trades nationwide to deliver 
                      field installations on time and to spec. If you're building the next great athletic facility, 
                      let's work together.
                    </p>
                    <a 
                      href="#contact-form"
                      className="text-[#1E3FD8] inline-flex items-center gap-2 hover:text-[#4F73D6] transition-colors"
                      style={{
                        fontSize: '15px',
                        fontWeight: '600'
                      }}
                    >
                      Submit a Partnership Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Subsection 2 - Get on Our Bidder List */}
                  <div 
                    className="mb-8"
                    style={{
                      borderLeft: '2px solid #1E3FD8',
                      paddingLeft: '16px'
                    }}
                  >
                    <h3 
                      className="text-[#E6E6E6] mb-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        fontSize: '18px'
                      }}
                    >
                      Get on Our Bidder List
                    </h3>
                    <p className="text-[#B7C6CF] mb-4" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      Join our vetted bidder list for upcoming projects. We're always looking for qualified contractors 
                      who meet our standards for safety, precision, and client service.
                    </p>
                    <a 
                      href="#contact-form"
                      className="text-[#1E3FD8] inline-flex items-center gap-2 hover:text-[#4F73D6] transition-colors"
                      style={{
                        fontSize: '15px',
                        fontWeight: '600'
                      }}
                    >
                      Submit a Partnership Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Subsection 3 - Our Materials and Suppliers */}
                  <div 
                    style={{
                      borderLeft: '2px solid #1E3FD8',
                      paddingLeft: '16px'
                    }}
                  >
                    <h3 
                      className="text-[#E6E6E6] mb-3"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: '700',
                        fontSize: '18px'
                      }}
                    >
                      Our Materials and Suppliers
                    </h3>
                    <p className="text-[#B7C6CF] mb-6" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                      Every component we install comes from tested, reputable suppliers that meet or exceed industry 
                      safety and performance standards. We don't cut corners on materials because your athletes 
                      deserve better.
                    </p>
                    
                    {/* Placeholder Supplier Logos */}
                    <div className="grid grid-cols-3 gap-4">
                      <div 
                        style={{
                          border: '1px solid rgba(30, 63, 216, 0.3)',
                          borderRadius: '4px',
                          padding: '24px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '80px'
                        }}
                      >
                        <span className="text-[#1E3FD8]/50" style={{ fontSize: '12px', fontWeight: '600' }}>
                          LOGO
                        </span>
                      </div>
                      <div 
                        style={{
                          border: '1px solid rgba(30, 63, 216, 0.3)',
                          borderRadius: '4px',
                          padding: '24px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '80px'
                        }}
                      >
                        <span className="text-[#1E3FD8]/50" style={{ fontSize: '12px', fontWeight: '600' }}>
                          LOGO
                        </span>
                      </div>
                      <div 
                        style={{
                          border: '1px solid rgba(30, 63, 216, 0.3)',
                          borderRadius: '4px',
                          padding: '24px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: '80px'
                        }}
                      >
                        <span className="text-[#1E3FD8]/50" style={{ fontSize: '12px', fontWeight: '600' }}>
                          LOGO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Contact Form */}
                <div id="contact-form">
                  <h2 
                    className="text-[#E6E6E6] mb-6"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '700',
                      fontSize: '28px'
                    }}
                  >
                    Tell Us About Your Turf Field Project
                  </h2>
                  
                  <form data-netlify="true" name="contact" className="space-y-5">
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Name Field */}
                    <div>
                      <label className="text-[#E6E6E6] block mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                        Name
                      </label>
                      <input 
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full text-[#E6E6E6] bg-[#0A0F2C] outline-none transition-all duration-200"
                        style={{ 
                          border: '1px solid rgba(183, 198, 207, 0.4)',
                          borderRadius: '4px',
                          padding: '14px 16px',
                          fontSize: '14px'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#1E3FD8'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(183, 198, 207, 0.4)'}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="text-[#E6E6E6] block mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                        Email
                      </label>
                      <input 
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full text-[#E6E6E6] bg-[#0A0F2C] outline-none transition-all duration-200"
                        style={{ 
                          border: '1px solid rgba(183, 198, 207, 0.4)',
                          borderRadius: '4px',
                          padding: '14px 16px',
                          fontSize: '14px'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#1E3FD8'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(183, 198, 207, 0.4)'}
                      />
                    </div>

                    {/* Inquiry Type Dropdown */}
                    <div>
                      <label className="text-[#E6E6E6] block mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                        Inquiry Type
                      </label>
                      <select 
                        name="inquiry-type"
                        required
                        className="w-full text-[#E6E6E6] bg-[#0A0F2C] outline-none transition-all duration-200"
                        style={{ 
                          border: '1px solid rgba(183, 198, 207, 0.4)',
                          borderRadius: '4px',
                          padding: '14px 16px',
                          fontSize: '14px'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#1E3FD8'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(183, 198, 207, 0.4)'}
                      >
                        <option>General Inquiry</option>
                        <option>Request a Quote</option>
                        <option>Baseball / Softball Field</option>
                        <option>Soccer Field</option>
                        <option>Football Field</option>
                        <option>Lacrosse Field</option>
                        <option>Putting Green</option>
                        <option>Adaptive / Miracle League Field</option>
                        <option>Daycare or Playground</option>
                        <option>Contractor Partnership</option>
                        <option>Get on Bidder List</option>
                      </select>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="text-[#E6E6E6] block mb-2" style={{ fontSize: '14px', fontWeight: '600' }}>
                        Message
                      </label>
                      <textarea 
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full text-[#E6E6E6] bg-[#0A0F2C] outline-none transition-all duration-200 resize-none"
                        style={{ 
                          border: '1px solid rgba(183, 198, 207, 0.4)',
                          borderRadius: '4px',
                          padding: '14px 16px',
                          fontSize: '14px',
                          lineHeight: '1.5'
                        }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#1E3FD8'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(183, 198, 207, 0.4)'}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full text-white transition-all duration-200"
                      style={{
                        background: '#1E3FD8',
                        borderRadius: '4px',
                        padding: '14px 24px',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '16px',
                        fontWeight: '700'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#4F73D6'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#1E3FD8'}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // TECHNOLOGY PAGE
  if (currentPage === 'technology') {
    return (
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        {/* Hero Section - Patent Showcase */}
        <section
          className="pt-48 pb-32 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #0A1428 50%, #1E3FD8 100%)'
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(30, 63, 216, 0.3) 50px, rgba(30, 63, 216, 0.3) 51px)',
            }}></div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(30, 63, 216, 0.3) 50px, rgba(30, 63, 216, 0.3) 51px)',
            }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Patent Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 mb-8 px-6 py-3"
                style={{
                  background: 'rgba(30, 63, 216, 0.15)',
                  border: '2px solid #1E3FD8',
                  borderRadius: '50px'
                }}
              >
                <Award className="w-5 h-5 text-[#1E3FD8]" />
                <span
                  className="text-[#E6E6E6]"
                  style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.1em'
                  }}
                >
                  U.S. PATENT #11,268,265
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white mb-6"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '700',
                  fontSize: '72px',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Revolutionary Infill Technology
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#B7C6CF] mb-12 max-w-3xl mx-auto"
                style={{
                  fontSize: '20px',
                  lineHeight: '1.6'
                }}
              >
                The only patented system in North America that regulates granular rubber infill <em>beneath</em> synthetic turf surfaces—not on top.
              </motion.p>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-[#1E3FD8] mb-2" style={{ fontSize: '48px', fontWeight: '700' }}>20°</div>
                  <div className="text-[#E6E6E6]" style={{ fontSize: '14px', fontWeight: '600' }}>Cooler Surface Temps</div>
                </div>
                <div className="text-center">
                  <div className="text-[#1E3FD8] mb-2" style={{ fontSize: '48px', fontWeight: '700' }}>100%</div>
                  <div className="text-[#E6E6E6]" style={{ fontSize: '14px', fontWeight: '600' }}>Infill Migration Eliminated</div>
                </div>
                <div className="text-center">
                  <div className="text-[#1E3FD8] mb-2" style={{ fontSize: '48px', fontWeight: '700' }}>1st</div>
                  <div className="text-[#E6E6E6]" style={{ fontSize: '14px', fontWeight: '600' }}>Patented System in NA</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Innovation Story */}
        <section className="py-32" style={{ background: '#0A1428' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <p
                className="uppercase mb-4 text-[#1E3FD8]"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.14em',
                  fontWeight: '700'
                }}
              >
                The Innovation
              </p>
              <h2
                className="text-white mb-8"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '700',
                  fontSize: '56px',
                  lineHeight: '1.2'
                }}
              >
                The science behind safer fields.
              </h2>
              <div className="w-24 h-1 bg-[#1E3FD8] mb-10"></div>

              <div className="space-y-6 text-[#B7C6CF]" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                <p>
                  Traditional synthetic turf systems rely on loose rubber infill sitting <em>on top</em> of the playing surface.
                  This approach creates significant problems: inconsistent fall protection, extreme heat buildup, constant infill
                  migration into shoes and equipment, and expensive ongoing maintenance.
                </p>
                <p>
                  PES Field Systems engineered a fundamentally different solution. Our patented technology regulates granular
                  rubber infill <em>beneath</em> the turf surface, where it's contained and controlled. This breakthrough delivers
                  consistent fall impact safety across the entire field, dramatically reduces surface temperatures, and completely
                  eliminates infill scatter.
                </p>
                <p>
                  The result is a self-sustainable field system that maintains professional-grade performance year after year,
                  with minimal maintenance and maximum athlete safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages Grid */}
        <section
          className="py-32"
          style={{
            background: 'linear-gradient(180deg, #0A1428 0%, #1E3FD8 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-white mb-4"
                  style={{
                    fontFamily: 'Rajdhani, sans-serif',
                    fontWeight: '700',
                    fontSize: '56px',
                    lineHeight: '1.2'
                  }}
                >
                  Proven Performance Advantages
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: 'Uncompromised Fall Safety',
                    description: 'Regulated placement ensures consistent ASTM-compliant fall impact protection across every zone.'
                  },
                  {
                    icon: Thermometer,
                    title: 'Cooler Surface Temps',
                    description: 'Beneath-surface placement reduces heat buildup by up to 20° compared to traditional loose infill.'
                  },
                  {
                    icon: Lock,
                    title: 'Zero Infill Migration',
                    description: 'Contained system completely eliminates rubber scatter into shoes, equipment, and adjacent areas.'
                  },
                  {
                    icon: Gauge,
                    title: 'Professional Performance',
                    description: 'Delivers consistent playability meeting or exceeding all professional athletic standards.'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Extended Field Life',
                    description: 'Self-sustainable design maintains performance for 10+ years without infill replacement.'
                  },
                  {
                    icon: BarChart3,
                    title: 'Lower Total Cost',
                    description: 'Minimal maintenance requirements and extended lifespan deliver superior long-term ROI.'
                  },
                ].map((advantage, idx) => {
                  const Icon = advantage.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="group"
                      style={{
                        background: 'rgba(10, 20, 40, 0.5)',
                        border: '2px solid rgba(30, 63, 216, 0.3)',
                        borderRadius: '12px',
                        padding: '32px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#1E3FD8';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(30, 63, 216, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div
                        className="mb-4"
                        style={{
                          width: '56px',
                          height: '56px',
                          background: 'rgba(30, 63, 216, 0.2)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Icon className="w-7 h-7 text-[#1E3FD8]" />
                      </div>
                      <h3
                        className="text-white mb-3"
                        style={{
                          fontSize: '20px',
                          fontWeight: '700'
                        }}
                      >
                        {advantage.title}
                      </h3>
                      <p className="text-[#B7C6CF]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        {advantage.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section className="py-32" style={{ background: '#0A1428' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left - Content */}
                <div>
                  <p
                    className="uppercase mb-4 text-[#1E3FD8]"
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.14em',
                      fontWeight: '700'
                    }}
                  >
                    Documentation
                  </p>
                  <h2
                    className="text-white mb-6"
                    style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontWeight: '700',
                      fontSize: '48px',
                      lineHeight: '1.2'
                    }}
                  >
                    Technical Specifications
                  </h2>
                  <div className="w-24 h-1 bg-[#1E3FD8] mb-8"></div>

                  <p className="text-[#B7C6CF] mb-10" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                    Access comprehensive technical documentation, ASTM testing results, architect specifications,
                    and certification details for planning and bidding purposes.
                  </p>

                  {/* Download Links */}
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="flex items-center justify-between p-5 group"
                      style={{
                        background: 'rgba(30, 63, 216, 0.1)',
                        border: '2px solid rgba(30, 63, 216, 0.3)',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#1E3FD8';
                        e.currentTarget.style.background = 'rgba(30, 63, 216, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(30, 63, 216, 0.3)';
                        e.currentTarget.style.background = 'rgba(30, 63, 216, 0.1)';
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-6 h-6 text-[#1E3FD8]" />
                        <div>
                          <div className="text-[#E6E6E6]" style={{ fontSize: '16px', fontWeight: '600' }}>
                            Architect Specifications
                          </div>
                          <div className="text-[#B7C6CF]" style={{ fontSize: '13px' }}>
                            Complete technical specs (PDF, 2.4 MB)
                          </div>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-[#1E3FD8]" />
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-between p-5 group"
                      style={{
                        background: 'rgba(30, 63, 216, 0.1)',
                        border: '2px solid rgba(30, 63, 216, 0.3)',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#1E3FD8';
                        e.currentTarget.style.background = 'rgba(30, 63, 216, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(30, 63, 216, 0.3)';
                        e.currentTarget.style.background = 'rgba(30, 63, 216, 0.1)';
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-6 h-6 text-[#1E3FD8]" />
                        <div>
                          <div className="text-[#E6E6E6]" style={{ fontSize: '16px', fontWeight: '600' }}>
                            ASTM Testing Results
                          </div>
                          <div className="text-[#B7C6CF]" style={{ fontSize: '13px' }}>
                            Safety certification documentation (PDF, 1.8 MB)
                          </div>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-[#1E3FD8]" />
                    </a>

                    <a
                      href="#"
                      className="flex items-center justify-between p-5 group"
                      style={{
                        background: 'rgba(30, 63, 216, 0.1)',
                        border: '2px solid rgba(30, 63, 216, 0.3)',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#1E3FD8';
                        e.currentTarget.style.background = 'rgba(30, 63, 216, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(30, 63, 216, 0.3)';
                        e.currentTarget.style.background = 'rgba(30, 63, 216, 0.1)';
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-6 h-6 text-[#1E3FD8]" />
                        <div>
                          <div className="text-[#E6E6E6]" style={{ fontSize: '16px', fontWeight: '600' }}>
                            Installation Guidelines
                          </div>
                          <div className="text-[#B7C6CF]" style={{ fontSize: '13px' }}>
                            Technical installation manual (PDF, 3.1 MB)
                          </div>
                        </div>
                      </div>
                      <Download className="w-5 h-5 text-[#1E3FD8]" />
                    </a>
                  </div>
                </div>

                {/* Right - Certifications Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Award, label: 'U.S. Patent Certified' },
                    { icon: Shield, label: 'ASTM Safety Approved' },
                    { icon: CheckCircle2, label: 'IPEMA Certified' },
                    { icon: Leaf, label: 'LEED Compliant' },
                  ].map((cert, idx) => {
                    const Icon = cert.icon;
                    return (
                      <div
                        key={idx}
                        className="text-center p-8"
                        style={{
                          background: 'rgba(30, 63, 216, 0.05)',
                          border: '2px solid rgba(30, 63, 216, 0.2)',
                          borderRadius: '12px'
                        }}
                      >
                        <Icon className="w-12 h-12 text-[#1E3FD8] mx-auto mb-4" />
                        <p className="text-[#E6E6E6]" style={{ fontSize: '14px', fontWeight: '600' }}>
                          {cert.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-32"
          style={{
            background: 'linear-gradient(135deg, #1E3FD8 0%, #4F73D6 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '700',
                  fontSize: '56px',
                  lineHeight: '1.2'
                }}
              >
                Ready to build with patented technology?
              </h2>
              <p className="text-white mb-10 opacity-90" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Let's discuss how PES Field Systems can deliver safer, cooler, and more sustainable athletic surfaces for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setCurrentPage('contact')}
                  className="px-10 py-4 bg-white text-[#1E3FD8] hover:bg-[#E6E6E6] transition-all duration-200"
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    letterSpacing: '0.05em'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  onClick={() => setCurrentPage('gallery')}
                  className="px-10 py-4 bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1E3FD8] transition-all duration-200"
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    borderRadius: '8px',
                    letterSpacing: '0.05em'
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // TEAM PAGE
  if (currentPage === 'team') {
    return (
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        {/* Hero Section */}
        <section
          className="pt-48 pb-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #000000 0%, #0A1428 100%)'
          }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-[#4F73D6]/20 text-[#4F73D6] border border-[#4F73D6]/30 mb-4 font-bold tracking-wider">
                LEADERSHIP TEAM
              </Badge>
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '700',
                  fontSize: '72px',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                Meet the Team
              </h1>
              <div className="w-24 h-1 bg-[#1E3FD8] mx-auto mb-6"></div>
              <p
                className="text-[#B7C6CF] max-w-3xl mx-auto"
                style={{
                  fontSize: '18px',
                  lineHeight: '1.7'
                }}
              >
                Experienced leaders driving innovation in synthetic turf technology
              </p>
            </div>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-16" style={{ background: '#0A1428' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {boardMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="bg-[#0A0F2C] border-[#4F73D6]/30 hover:border-[#4F73D6] transition-all hover:shadow-xl hover:shadow-[#1E3FD8]/20">
                      <CardContent className="p-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-96 object-contain rounded-lg mb-4 bg-[#0A1428]"
                        />
                        <h3 className="text-2xl font-black text-[#E6E6E6] mb-1 tracking-tight">
                          {member.name}
                        </h3>
                        <p className="text-[#4F73D6] font-bold mb-3 tracking-wide">
                          {member.role}
                        </p>
                        <p className="text-[#B7C6CF] text-sm leading-relaxed mb-3">
                          {member.bio}
                        </p>
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="text-[#1E3FD8] hover:text-[#4F73D6] font-semibold text-sm transition-colors"
                          >
                            {member.email}
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        <div className="pt-48 pb-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-black text-[#E6E6E6] mb-4 tracking-tight">
                  PROJECT GALLERY
                </h1>
                <p className="text-xl text-[#B7C6CF]">
                  Explore our portfolio of completed installations
                </p>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-[#0A0F2C] border border-[#4F73D6]/30">
                  <TabsTrigger value="all" className="font-bold tracking-wider data-[state=active]:bg-[#1E3FD8] data-[state=active]:text-white">ALL PROJECTS</TabsTrigger>
                  <TabsTrigger value="athletic" className="font-bold tracking-wider data-[state=active]:bg-[#1E3FD8] data-[state=active]:text-white">ATHLETIC FIELDS</TabsTrigger>
                  <TabsTrigger value="adaptive" className="font-bold tracking-wider data-[state=active]:bg-[#1E3FD8] data-[state=active]:text-white">ADAPTIVE FIELDS</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                      <Card key={index} className="bg-[#0A0F2C] border-[#4F73D6]/30 hover:border-[#4F73D6] transition-all hover:shadow-2xl hover:shadow-[#1E3FD8]/20 group overflow-hidden">
                        <div className="relative overflow-hidden h-64">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <CardContent className="p-6 bg-[#111111]">
                          <Badge className="bg-[#4F73D6]/20 text-[#4F73D6] border border-[#4F73D6]/30 mb-3 font-bold">
                            {project.type}
                          </Badge>
                          <h3 className="text-xl font-black text-[#E6E6E6] mb-2 tracking-tight">
                            {project.name}
                          </h3>
                          <p className="text-[#B7C6CF] flex items-center gap-2 text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </p>
                          <button
                            onClick={() => {
                              setCurrentProjectSlug(project.slug);
                              setCurrentPage('project-detail');
                            }}
                            className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 w-full"
                            style={{
                              borderRadius: '6px',
                              padding: '10px 16px',
                              fontSize: '14px',
                              fontWeight: '700',
                              letterSpacing: '0.05em'
                            }}
                          >
                            View Project
                          </button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="athletic">
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.filter(p => p.type === 'Baseball / Softball').map((project, index) => (
                      <Card key={index} className="bg-[#0A0F2C] border-[#4F73D6]/30 hover:border-[#4F73D6] transition-all hover:shadow-2xl hover:shadow-[#1E3FD8]/20 group overflow-hidden">
                        <div className="relative overflow-hidden h-64">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <CardContent className="p-6 bg-[#111111]">
                          <Badge className="bg-[#4F73D6]/20 text-[#4F73D6] border border-[#4F73D6]/30 mb-3 font-bold">
                            {project.type}
                          </Badge>
                          <h3 className="text-xl font-black text-[#E6E6E6] mb-2 tracking-tight">
                            {project.name}
                          </h3>
                          <p className="text-[#B7C6CF] flex items-center gap-2 text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </p>
                          <button
                            onClick={() => {
                              setCurrentProjectSlug(project.slug);
                              setCurrentPage('project-detail');
                            }}
                            className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 w-full"
                            style={{
                              borderRadius: '6px',
                              padding: '10px 16px',
                              fontSize: '14px',
                              fontWeight: '700',
                              letterSpacing: '0.05em'
                            }}
                          >
                            View Project
                          </button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="adaptive">
                  <div className="grid md:grid-cols-3 gap-8">
                    {featuredProjects.filter(p => p.type === 'Adaptive Field').map((project, index) => (
                      <Card key={index} className="bg-[#0A0F2C] border-[#4F73D6]/30 hover:border-[#4F73D6] transition-all hover:shadow-2xl hover:shadow-[#1E3FD8]/20 group overflow-hidden">
                        <div className="relative overflow-hidden h-64">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <CardContent className="p-6 bg-[#111111]">
                          <Badge className="bg-[#4F73D6]/20 text-[#4F73D6] border border-[#4F73D6]/30 mb-3 font-bold">
                            {project.type}
                          </Badge>
                          <h3 className="text-xl font-black text-[#E6E6E6] mb-2 tracking-tight">
                            {project.name}
                          </h3>
                          <p className="text-[#B7C6CF] flex items-center gap-2 text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            {project.location}
                          </p>
                          <button
                            onClick={() => {
                              setCurrentProjectSlug(project.slug);
                              setCurrentPage('project-detail');
                            }}
                            className="bg-[#1E3FD8] text-white hover:bg-[#4F73D6] transition-colors duration-200 w-full"
                            style={{
                              borderRadius: '6px',
                              padding: '10px 16px',
                              fontSize: '14px',
                              fontWeight: '700',
                              letterSpacing: '0.05em'
                            }}
                          >
                            View Project
                          </button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // PARTNERS PAGE
  if (currentPage === 'partners') {
    return (
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        <div className="pt-48 pb-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-black text-[#E6E6E6] mb-4 tracking-tight">
                  PARTNER WITH US
                </h1>
                <p className="text-xl text-[#B7C6CF]">
                  Join our network of suppliers, contractors, and bidders
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Partnership Inquiry Form */}
                <Card className="bg-[#0A0F2C] border-[#4F73D6]/30">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-black text-[#E6E6E6] mb-8 tracking-tight">
                      PARTNERSHIP INQUIRY
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Company Name
                        </label>
                        <Input placeholder="Your company" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Contact Person
                        </label>
                        <Input placeholder="Full name" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Email
                        </label>
                        <Input type="email" placeholder="email@company.com" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Partnership Type
                        </label>
                        <select className="w-full px-4 py-2 bg-[#111111] border border-[#4F73D6]/30 rounded-lg text-[#E6E6E6]">
                          <option>Supplier</option>
                          <option>Contractor</option>
                          <option>Distributor</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Message
                        </label>
                        <Textarea 
                          placeholder="Tell us about your company and partnership interest..."
                          rows={4}
                          className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]"
                        />
                      </div>
                      <Button className="w-full bg-[#1E3FD8] text-white font-black hover:bg-[#4F73D6] tracking-wider">
                        <Send className="mr-2 w-4 h-4" />
                        SUBMIT INQUIRY
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Bidder List */}
                <Card className="bg-[#0A0F2C] border-[#4F73D6]/30">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-black text-[#E6E6E6] mb-8 tracking-tight">
                      JOIN BIDDER LIST
                    </h2>
                    <p className="text-[#B7C6CF] mb-6 leading-relaxed">
                      Get notified of upcoming project opportunities and RFPs. Join our contractor network to receive exclusive bidding invitations.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Company Name
                        </label>
                        <Input placeholder="Your company" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Primary Contact
                        </label>
                        <Input placeholder="Full name" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Email
                        </label>
                        <Input type="email" placeholder="email@company.com" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Service Area
                        </label>
                        <Input placeholder="States/regions you serve" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Specialties
                        </label>
                        <Textarea 
                          placeholder="List your construction specialties..."
                          rows={3}
                          className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]"
                        />
                      </div>
                      <Button className="w-full bg-[#1E3FD8] text-white font-black hover:bg-[#4F73D6] tracking-wider">
                        JOIN BIDDER LIST
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // CONTACT PAGE
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        <section className="pt-48 pb-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-6xl md:text-7xl font-black text-[#E6E6E6] mb-4 tracking-tight">
                  LET'S BUILD TOGETHER
                </h1>
                <p className="text-xl text-[#B7C6CF]">
                  Ready to transform your field? Get in touch with our team today
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="bg-[#0A0F2C] border-[#4F73D6]/30">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-black text-[#E6E6E6] mb-8 tracking-tight">
                      REQUEST A CONSULTATION
                    </h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                            First Name
                          </label>
                          <Input placeholder="John" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                        </div>
                        <div>
                          <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                            Last Name
                          </label>
                          <Input placeholder="Doe" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                        </div>
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Email
                        </label>
                        <Input type="email" placeholder="john@example.com" className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]" />
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Project Type
                        </label>
                        <select className="w-full px-4 py-2 bg-[#111111] border border-[#4F73D6]/30 rounded-lg text-[#E6E6E6]">
                          <option>Baseball / Softball</option>
                          <option>Soccer / Lacrosse</option>
                          <option>Football</option>
                          <option>Adaptive Field</option>
                          <option>Daycare Center</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-bold text-sm text-[#E6E6E6] mb-2 block tracking-wider">
                          Message
                        </label>
                        <Textarea 
                          placeholder="Tell us about your project..."
                          rows={5}
                          className="bg-[#111111] border-[#4F73D6]/30 text-[#E6E6E6] placeholder:text-[#B7C6CF]"
                        />
                      </div>
                      <Button className="w-full bg-[#1E3FD8] text-white font-black text-lg hover:bg-[#4F73D6] py-6 tracking-wider">
                        <Send className="mr-2 w-5 h-5" />
                        SEND MESSAGE
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <div className="space-y-8">
                  <Card className="bg-[#0A0F2C] border-[#4F73D6]/30">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-lg mb-1 text-[#E6E6E6] tracking-wider">PHONE</h3>
                          <p className="text-sm text-[#B7C6CF]">Monday - Friday, 8AM - 6PM EST</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-lg mb-1 text-[#E6E6E6] tracking-wider">EMAIL</h3>
                          <p className="text-[#B7C6CF]">triffon@pesfieldsystems.com</p>
                          <p className="text-sm text-[#B7C6CF]">We respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-lg mb-1 text-[#E6E6E6] tracking-wider">ADDRESS</h3>
                          <p className="text-[#B7C6CF]">
                            3460 Oakmeadow Lane<br/>
                            Cincinnati, Ohio 45239
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-black text-lg mb-1 text-[#E6E6E6] tracking-wider">BUSINESS HOURS</h3>
                          <p className="text-[#B7C6CF]">
                            Monday - Friday: 8:00 AM - 6:00 PM EST<br/>
                            Saturday: 9:00 AM - 3:00 PM EST<br/>
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Social Media */}
                  <Card className="bg-[#0A0F2C] border-[#4F73D6]/30">
                    <CardContent className="p-8">
                      <h3 className="font-black text-xl mb-6 text-[#E6E6E6] tracking-wider">CONNECT WITH US</h3>
                      <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                          <Instagram className="w-6 h-6 text-white" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                          <Facebook className="w-6 h-6 text-white" />
                        </a>
                        <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#1E3FD8] via-[#4F73D6] to-[#B7C6CF] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                          <Linkedin className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-[#0A0F2C] border-t border-[#B7C6CF]/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.9384706863935!2d-84.56486892346795!3d39.23856997167895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b2f8a8a8a8a9%3A0x1234567890abcdef!2s3460%20Oakmeadow%20Ln%2C%20Cincinnati%2C%20OH%2045239!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PES Field Systems Location"
          />
        </section>

        <Footer />
      </div>
    );
  }

  // PROJECT DETAIL PAGES
  if (currentPage === 'project-detail' && currentProjectSlug) {
    const project = featuredProjects.find(p => p.slug === currentProjectSlug);

    if (!project) {
      return null;
    }

    return (
      <div className="min-h-screen" style={{ background: '#0A1428' }}>
        <Navigation />

        <section className="pt-48 pb-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Back Button */}
              <button
                onClick={() => setCurrentPage('gallery')}
                className="text-[#4F73D6] hover:text-[#1E3FD8] transition-colors mb-8 inline-flex items-center gap-2"
                style={{
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Projects
              </button>

              {/* Hero Section */}
              <div className="mb-16">
                <Badge className="bg-[#4F73D6]/20 text-[#4F73D6] border border-[#4F73D6]/30 mb-4 font-bold tracking-wider">
                  {project.type}
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black text-[#E6E6E6] mb-4 tracking-tight">
                  {project.slug === 'mid-america-ballyard'
                    ? 'Mid-America Ballyard Baseball & Softball Facility'
                    : project.slug === 'lasalle-high-school'
                    ? 'La Salle High School Baseball Field Upgrade'
                    : project.slug === 'miracle-league-plymouth'
                    ? 'The Miracle League Of Plymouth'
                    : project.slug === 'miracle-league-central-florida'
                    ? 'Miracle League of Central Florida'
                    : project.name}
                </h1>
                <p className="text-xl text-[#B7C6CF] flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {project.location}
                </p>
              </div>

              {/* Featured Image */}
              <div className="mb-16 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Project Overview */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-6">
                  <h3 className="text-[#4F73D6] text-sm font-bold tracking-wider mb-2">
                    PROJECT TYPE
                  </h3>
                  <p className="text-[#E6E6E6] text-lg font-bold">
                    {project.type}
                  </p>
                </div>
                <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-6">
                  <h3 className="text-[#4F73D6] text-sm font-bold tracking-wider mb-2">
                    LOCATION
                  </h3>
                  <p className="text-[#E6E6E6] text-lg font-bold">
                    {project.location}
                  </p>
                </div>
                <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-6">
                  <h3 className="text-[#4F73D6] text-sm font-bold tracking-wider mb-2">
                    STATUS
                  </h3>
                  <p className="text-[#E6E6E6] text-lg font-bold">
                    Completed
                  </p>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-[#E6E6E6] mb-6 tracking-tight">
                  About This Project
                </h2>
                <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-8">
                  {project.slug === 'mid-america-ballyard' ? (
                    <>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed mb-4 font-semibold">
                        A start-to-finish field build focused on safety, performance, and long-term quality.
                      </p>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed">
                        This project involved the complete transformation of an athletic field that required significant upgrades to improve safety, playability, and long-term performance. From initial planning through final installation, PES Field Systems delivered a professionally managed, start-to-finish field solution designed to serve athletes, programs, and the surrounding community.
                      </p>
                    </>
                  ) : project.slug === 'lasalle-high-school' ? (
                    <>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed mb-4">
                        La Salle High School required a comprehensive baseball field upgrade to meet the expectations of elite student-athletes while improving safety, consistency, and long-term performance. PES Field Systems partnered closely with school leadership to refresh the existing field, addressing surface wear, drainage challenges, and playability issues that had developed over time.
                      </p>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed">
                        The project focused on precision grading, improved drainage systems, and durable, environmentally responsible materials to create a high-performing baseball field capable of supporting competitive play, daily practices, and community use. The result is a refreshed athletic surface that reflects La Salle's commitment to excellence—providing athletes with a safe, reliable field designed to perform at the highest level.
                      </p>
                    </>
                  ) : project.slug === 'miracle-league-nw-montana' ? (
                    <>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed mb-4">
                        This project involved the design and construction of several baseball fields built to support safe play, long-term durability, and high performance for athletes of all ages. PES Field Systems engineered each field with precision grading, advanced drainage solutions, and environmentally responsible materials to ensure consistent playability and reduced maintenance over time.
                      </p>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed">
                        From initial site preparation through final installation, our team delivered a complete, start-to-finish baseball field solution that meets the demands of competitive programs while serving the broader community with reliable, professionally built athletic surfaces.
                      </p>
                    </>
                  ) : project.slug === 'miracle-league-plymouth' ? (
                    <>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed mb-4 font-semibold">
                        The Miracle League of Plymouth enriches the community by offering inclusive recreation—especially baseball—for individuals with special needs and their families. Through player and "buddy" partnerships, the league promotes friendship, social development, and lasting connections.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-[#111111] border border-[#4F73D6]/30 rounded-lg p-6">
                          <h3 className="text-[#4F73D6] text-xl font-bold mb-3 tracking-wide">Before the Build</h3>
                          <p className="text-[#B7C6CF] leading-relaxed">
                            Before construction began, Plymouth lacked an adaptive baseball field that could safely support athletes with special needs. The community envisioned a space where every child—regardless of ability—could experience the game in a safe, inclusive environment. Working alongside the Miracle League of Plymouth, we prepared for a field that would remove physical barriers and create a welcoming space for connection, confidence, and fun.
                          </p>
                        </div>
                        <div className="bg-[#111111] border border-[#4F73D6]/30 rounded-lg p-6">
                          <h3 className="text-[#4F73D6] text-xl font-bold mb-3 tracking-wide">After the Build</h3>
                          <p className="text-[#B7C6CF] leading-relaxed">
                            The finished field features a custom rubberized turf surface designed for accessibility, safety, and all-weather play. Our team completed the surfacing and detail work to meet Miracle League standards, ensuring smooth mobility for wheelchairs and walkers while maintaining a professional look and feel. Today, the field is more than just a place to play—it's a space where inclusion thrives and every player gets their moment at bat.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : project.slug === 'miracle-league-central-florida' ? (
                    <>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed mb-4 font-semibold">
                        Restoring Playability and Safety.
                      </p>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed">
                        The Miracle League of Central Florida baseball field project addressed significant surface deterioration, drainage issues, and inconsistent playability that impacted both safety and performance. PES Field Systems completed a comprehensive field renovation that included site preparation, regrading, improved drainage solutions, and the installation of durable, environmentally responsible materials designed for Florida's climate. The upgraded baseball field now delivers reliable play conditions, reduced maintenance demands, and a professional-quality surface that supports daily use, competitive play, and long-term community investment.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed mb-4">
                        [Placeholder: Project description and overview will be added here. This section will detail the scope of work, challenges overcome, and key features of the installation.]
                      </p>
                      <p className="text-[#B7C6CF] text-lg leading-relaxed">
                        [Placeholder: Additional details about the project timeline, client collaboration, and outcomes will be included in this section.]
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Project Phases - Mid-America Ballyard Only */}
              {project.slug === 'mid-america-ballyard' && (
                <div className="mb-16">
                  <h2 className="text-3xl font-black text-[#E6E6E6] mb-8 tracking-tight">
                    Project Phases
                  </h2>
                  <div className="space-y-6">
                    {/* Phase 1 */}
                    <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#1E3FD8] rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-lg">1</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-[#E6E6E6] mb-3">
                            Planning & Site Preparation
                          </h3>
                          <p className="text-[#B7C6CF] leading-relaxed">
                            PES Field Systems began with a detailed evaluation of site conditions, field usage, and long-term goals. Careful planning and site preparation ensured proper grading, efficient drainage, and a strong foundation for a durable, high-performing athletic surface.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#1E3FD8] rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-lg">2</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-[#E6E6E6] mb-3">
                            Field Construction & Materials
                          </h3>
                          <p className="text-[#B7C6CF] leading-relaxed">
                            Using high-quality, environmentally responsible materials, our team constructed the field to support consistent play and heavy use. Precision installation techniques were applied to create a safe, reliable surface that meets the demands of competitive athletic programs.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#1E3FD8] rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-lg">3</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-[#E6E6E6] mb-3">
                            Safety & Performance Enhancements
                          </h3>
                          <p className="text-[#B7C6CF] leading-relaxed">
                            Safety was a primary focus throughout the project. PES Field Systems incorporated design features and construction methods that enhance athlete safety, improve surface stability, and promote consistent ball response and footing across the entire field.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-[#1E3FD8] rounded-lg flex items-center justify-center">
                            <span className="text-white font-black text-lg">4</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-[#E6E6E6] mb-3">
                            Finished Field & Community Impact
                          </h3>
                          <p className="text-[#B7C6CF] leading-relaxed">
                            The completed field delivers a professional-quality playing environment built for long-term performance and reduced maintenance. The upgraded facility now supports regular practices, competitive events, and community use—providing a reliable athletic space designed to last.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Gallery */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-[#E6E6E6] mb-6 tracking-tight">
                  Project Gallery
                </h2>
                <div className={project.slug === 'miracle-league-nw-montana' ? 'grid md:grid-cols-3 gap-6' : 'grid md:grid-cols-2 gap-6'}>
                  {project.slug === 'mid-america-ballyard' ? (
                    <>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={midAmericaImg1}
                          alt="Mid-America Ballyard synthetic baseball field Cincinnati Ohio built by PES Field Systems - Image 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={midAmericaImg2}
                          alt="Mid-America Ballyard synthetic baseball field Cincinnati Ohio built by PES Field Systems - Image 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  ) : project.slug === 'lasalle-high-school' ? (
                    <>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={lasalleImg1}
                          alt="aSalle High School baseball field synthetic turf installation Cincinnati Ohio - Image 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={lasalleImg2}
                          alt="aSalle High School baseball field synthetic turf installation Cincinnati Ohio - Image 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  ) : project.slug === 'miracle-league-nw-montana' ? (
                    <>
                      {/* Hero image spanning 2 columns */}
                      <div className="md:col-span-2 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-96">
                        <img
                          src={montanaImg1}
                          alt="Miracle League adaptive synthetic turf field Kalispell Montana by PES Field Systems- Hero"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Right side tall image */}
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-96">
                        <img
                          src={montanaImg2}
                          alt="Miracle League adaptive synthetic turf field Kalispell Montana by PES Field Systems - Image 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Second row - 3 images */}
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-72">
                        <img
                          src={montanaImg3}
                          alt="Miracle League NW Montana - Image 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-72">
                        <img
                          src={montanaImg4}
                          alt="Miracle League NW Montana - Image 4"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-72">
                        <img
                          src={montanaImg5}
                          alt="Miracle League NW Montana - Image 5"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Third row - 2 images spanning width */}
                      <div className="md:col-span-2 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={montanaImg6}
                          alt="Miracle League NW Montana - Image 6"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={montanaImg7}
                          alt="Miracle League NW Montana - Image 7"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  ) : project.slug === 'miracle-league-plymouth' ? (
                    <>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={plymouthImg1}
                          alt="Miracle League inclusive adaptive field Plymouth Michigan synthetic turf - After"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={plymouthImg2}
                          alt="Miracle League inclusive adaptive field Plymouth Michigan synthetic turf - Before"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={plymouthImg3}
                          alt="Miracle League Plymouth - Flag"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={plymouthImg4}
                          alt="Miracle League Plymouth - Team"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  ) : project.slug === 'miracle-league-central-florida' ? (
                    <>
                      {/* Hero image spanning full width */}
                      <div className="md:col-span-2 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-96">
                        <img
                          src={floridaImg1}
                          alt="Miracle League synthetic turf adaptive field Orlando Florida - Hero"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Second row - 2 medium images */}
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={floridaImg2}
                          alt="Miracle League Central Florida - Image 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={floridaImg3}
                          alt="Miracle League Central Florida - Image 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Third row - 2 medium images */}
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={floridaImg4}
                          alt="Miracle League Central Florida - Before 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-80">
                        <img
                          src={floridaImg5}
                          alt="Miracle League Central Florida - Before 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                        <p className="text-[#4F73D6] font-bold">[Placeholder Image 1]</p>
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                        <p className="text-[#4F73D6] font-bold">[Placeholder Image 2]</p>
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                        <p className="text-[#4F73D6] font-bold">[Placeholder Image 3]</p>
                      </div>
                      <div className="bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg overflow-hidden h-64 flex items-center justify-center">
                        <p className="text-[#4F73D6] font-bold">[Placeholder Image 4]</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-16">
                <h2 className="text-3xl font-black text-[#E6E6E6] mb-6 tracking-tight">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.slug === 'mid-america-ballyard' ? (
                    <>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Professional-grade baseball and softball field surface</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Enhanced athlete safety with optimized fall protection</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Engineered drainage system for all-weather performance</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Low-maintenance design for long-term durability</p>
                      </div>
                    </>
                  ) : project.slug === 'lasalle-high-school' ? (
                    <>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Elite-level baseball field for competitive play</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Improved drainage system for all-weather performance</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Precision grading for consistent playability</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Environmentally responsible materials and construction</p>
                      </div>
                    </>
                  ) : project.slug === 'miracle-league-nw-montana' ? (
                    <>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Multiple baseball fields for athletes of all ages</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Advanced drainage solutions for year-round use</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Precision-engineered grading for consistent performance</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Low-maintenance, environmentally responsible design</p>
                      </div>
                    </>
                  ) : project.slug === 'miracle-league-plymouth' ? (
                    <>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Custom rubberized turf surface for accessibility</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Wheelchair and walker-friendly surface design</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">All-weather play capability for year-round use</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Meets Miracle League safety and accessibility standards</p>
                      </div>
                    </>
                  ) : project.slug === 'miracle-league-central-florida' ? (
                    <>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Comprehensive field renovation and surface restoration</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Improved drainage solutions for Florida's climate</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Durable, environmentally responsible materials</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">Reduced maintenance with professional-quality surface</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">[Placeholder: Feature 1 description]</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">[Placeholder: Feature 2 description]</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">[Placeholder: Feature 3 description]</p>
                      </div>
                      <div className="flex items-start gap-3 bg-[#0A0F2C] border border-[#4F73D6]/30 rounded-lg p-4">
                        <CheckCircle className="w-5 h-5 text-[#4F73D6] flex-shrink-0 mt-0.5" />
                        <p className="text-[#B7C6CF]">[Placeholder: Feature 4 description]</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-[#1E3FD8] to-[#4F73D6] rounded-xl p-12 text-center">
                <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
                  Ready to Build Your Field?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can bring the same quality and innovation to your project.
                </p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-white text-[#1E3FD8] hover:bg-[#E6E6E6] transition-colors duration-200"
                  style={{
                    borderRadius: '8px',
                    padding: '14px 32px',
                    fontSize: '16px',
                    fontWeight: '700',
                    letterSpacing: '0.05em'
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return null;
}
