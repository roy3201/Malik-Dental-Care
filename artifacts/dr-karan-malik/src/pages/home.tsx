import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, 
  Menu, X, CheckCircle2, ChevronRight, Stethoscope, Star, 
  Quote, ShieldCheck, HeartPulse, Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
    <div className="container mx-auto flex justify-between items-center max-w-7xl">
      <div className="flex items-center space-x-6">
        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
          <Phone className="h-4 w-4" />
          <span>Emergency: +91 98765 43210</span>
        </a>
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>123 Dental Street, New Delhi, India</span>
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
          <Facebook className="h-4 w-4" />
        </a>
        <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
          <Twitter className="h-4 w-4" />
        </a>
        <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
          <Instagram className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-lg">
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-serif text-foreground leading-none">Dr. Karan Malik</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">Dental Clinic</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            <a href="#contact">Book Appointment</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-foreground py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full mt-4 bg-primary text-white rounded-full">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</a>
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="/images/hero.png" 
        alt="Modern Dental Clinic" 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
    </div>
    
    <div className="container relative z-10 mx-auto px-4 max-w-7xl">
      <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6">
          Advanced Dental Care in New Delhi
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-foreground leading-tight mb-6">
          A Beautiful Smile Begins With Exceptional Care
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Experience world-class dentistry with Dr. Karan Malik. Over 20 years of crafting perfect smiles using state-of-the-art technology and a gentle, patient-centric approach.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full text-base h-14 px-8">
            <a href="#contact">Book Your Consultation</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full text-base h-14 px-8 border-primary/20 text-foreground hover:bg-primary/5">
            <a href="#services">Explore Services</a>
          </Button>
        </div>
        
        <div className="mt-12 flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <span>Painless Procedures</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <span>Modern Equipment</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-secondary/50 rounded-[2.5rem] transform -rotate-3 z-0"></div>
          <img 
            src="/images/doctor.png" 
            alt="Dr. Karan Malik" 
            className="relative z-10 rounded-[2rem] shadow-xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
          />
          <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-lg border border-border/50 animate-in fade-in zoom-in duration-1000 delay-300 hidden md:block">
            <div className="text-4xl font-bold text-primary mb-1">20+</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Years of<br/>Experience</div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
            Meet Dr. Karan Malik
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            With over two decades of clinical experience, Dr. Karan Malik is a leading figure in modern dentistry. His philosophy is simple: treat every patient like family, and use the best technology available to make every visit painless and perfect.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            From routine checkups to complex full-mouth rehabilitations, Dr. Malik brings a meticulous eye for detail and a warm, calming presence to his practice, ensuring you leave with a smile you're proud of.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Expert Care", desc: "Highly trained specialist" },
              { title: "Advanced Tech", desc: "Latest dental innovations" },
              { title: "Gentle Approach", desc: "Anxiety-free treatments" },
              { title: "Patient First", desc: "Tailored treatment plans" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-50" />
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "General Dentistry", desc: "Comprehensive checkups, cleanings, and preventative care to maintain optimal oral health.", icon: <Activity className="h-8 w-8" /> },
    { title: "Teeth Whitening", desc: "Professional bleaching treatments for a brighter, more confident smile in just one visit.", icon: <Star className="h-8 w-8" /> },
    { title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth that restore function and aesthetics.", icon: <ShieldCheck className="h-8 w-8" /> },
    { title: "Orthodontics", desc: "Traditional braces and clear aligners to straighten teeth and correct bite issues.", icon: <HeartPulse className="h-8 w-8" /> },
    { title: "Root Canal", desc: "Painless endodontic therapy to save infected teeth and relieve severe toothaches.", icon: <Activity className="h-8 w-8" /> },
    { title: "Cosmetic Dentistry", desc: "Veneers, bonding, and smile makeovers tailored to your unique facial features.", icon: <Star className="h-8 w-8" /> },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mt-4 mb-6">Comprehensive Dental Services</h2>
          <p className="text-muted-foreground text-lg">We offer a full spectrum of dental treatments under one roof, utilizing advanced techniques to deliver superior results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.desc}</p>
              <a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => (
  <section className="py-24 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Why Patients Trust Us</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Choosing a dentist is an important decision. We've built our practice on trust, transparency, and clinical excellence.
          </p>
          <ul className="space-y-6">
            {[
              "Over 20 years of proven clinical success",
              "State-of-the-art diagnostic and treatment technology",
              "Strict sterilization and hygiene protocols",
              "Transparent, affordable pricing with no hidden fees",
              "Comfortable, anxiety-free clinic environment"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="bg-white/20 p-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
            <div className="text-4xl font-bold text-accent mb-2">5k+</div>
            <div className="text-sm font-medium uppercase tracking-wider">Happy Patients</div>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 text-center translate-y-8">
            <div className="text-4xl font-bold text-accent mb-2">20+</div>
            <div className="text-sm font-medium uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 text-center -translate-y-8">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm font-medium uppercase tracking-wider">Awards Won</div>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm font-medium uppercase tracking-wider">Commitment</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "Rahul Sharma", text: "Dr. Malik is incredible! I was always afraid of dentists, but his gentle approach completely changed my mind. The clinic is spotless and the staff is wonderful.", rating: 5 },
    { name: "Priya Patel", text: "Got my Invisalign treatment here. The entire process was smooth, transparent, and the results are amazing. Highly recommend for any cosmetic work.", rating: 5 },
    { name: "Amit Kumar", text: "The best dental experience I've ever had. Modern equipment, no waiting time, and Dr. Karan explains everything clearly before starting the procedure.", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">Patient Stories</h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it. Read what our patients have to say about their experience with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-secondary/20 p-8 rounded-2xl relative border border-border/50">
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 text-lg italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Sent",
      description: "Our team will contact you shortly to confirm your appointment.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mt-4 mb-6">Book Your Appointment</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to improve your smile? Fill out the form, and our reception team will get back to you within 24 hours to schedule your visit.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Clinic Address</h4>
                  <p className="text-muted-foreground">123 Dental Street, Health Park Avenue<br />New Delhi, India 110001</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Phone Number</h4>
                  <p className="text-muted-foreground">+91 98765 43210<br />011-2345-6789</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-sm text-primary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 8:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input required placeholder="John" className="h-12 bg-secondary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input required placeholder="Doe" className="h-12 bg-secondary/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <Input required type="tel" placeholder="+91" className="h-12 bg-secondary/20" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <Input required type="email" placeholder="john@example.com" className="h-12 bg-secondary/20" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Preferred Date</label>
                <Input required type="date" className="h-12 bg-secondary/20" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message (Optional)</label>
                <Textarea placeholder="How can we help you?" className="min-h-[100px] bg-secondary/20" />
              </div>

              <Button type="submit" className="w-full h-14 text-lg rounded-xl bg-primary hover:bg-primary/90 text-white">
                Request Appointment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6 text-white">
            <Stethoscope className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-serif">Dr. Karan Malik</span>
          </div>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Providing exceptional dental care in a comfortable and friendly environment. Your smile is our top priority.
          </p>
          <div className="flex gap-4">
            <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Dental Services</a></li>
            <li><a href="#reviews" className="hover:text-primary transition-colors">Patient Reviews</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Our Services</h4>
          <ul className="space-y-4 text-slate-400">
            <li>General Dentistry</li>
            <li>Cosmetic Dentistry</li>
            <li>Orthodontics</li>
            <li>Dental Implants</li>
            <li>Teeth Whitening</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>123 Dental Street, Health Park Avenue, New Delhi, India 110001</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>info@drkaranmalik.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Dr. Karan Malik Dental Clinic. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}