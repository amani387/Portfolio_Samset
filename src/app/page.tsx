import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Hammer, HardHat, Truck, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Carousel from "@/components/Carousel";
import ProjectCard from "@/components/ProjectCard";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";

export const dynamic = 'force-dynamic';

export default async function Home() {
  await dbConnect();
  // Fetch latest 3 projects for the showcase
  const projects = await Project.find({}).sort({ createdAt: -1 }).limit(3);

  const slides = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      title: "Building Tomorrow's Infrastructure",
      description: "Leading the way in civil engineering and construction excellence across the region.",
      cta: "View Our Projects",
      ctaLink: "/projects",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop",
      title: "Expertise You Can Trust",
      description: "Over 20 years of delivering high-quality residential and commercial projects on time and within budget.",
      cta: "Contact Us",
      ctaLink: "#contact",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1590986469974-ba979e0e8b3e?q=80&w=1974&auto=format&fit=crop",
      title: "Sustainable Solutions",
      description: "Innovative engineering practices that respect the environment and build lasting value.",
      cta: "Learn More",
      ctaLink: "#about",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <Carousel slides={slides} />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-32 bg-background mx-auto">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop"
                alt="About Samset Engineering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-8 text-center">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Engineering Excellence Since 2005
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Samset Engineering PLC is a premier construction and engineering firm dedicated to delivering world-class infrastructure solutions. With a team of seasoned professionals and state-of-the-art technology, we transform complex challenges into enduring structures.
              </p>
              <ul className="space-y-4 inline-block text-left">
                {[
                  "Certified Professional Engineers",
                  "ISO 9001:2015 Quality Management",
                  "Sustainable Construction Practices",
                  "On-Time Project Delivery"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Learn More About Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-muted/50 mx-auto">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="text-muted-foreground md:text-xl">
              Comprehensive engineering and construction solutions tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors mb-4">
                  <HardHat className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">General Construction</CardTitle>
                <CardDescription>
                  From residential complexes to commercial skyscrapers, we deliver quality structures built to last generations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors mb-4">
                  <Truck className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Heavy Machinery</CardTitle>
                <CardDescription>
                  Equipped with a massive fleet of state-of-the-art machinery for excavation, grading, and site preparation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors mb-4">
                  <Hammer className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Renovation & Repair</CardTitle>
                <CardDescription>
                  Expert renovation services to revitalize existing structures, improving efficiency and aesthetics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-background mx-auto">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl md:text-xl">
              A showcase of our most recent and significant engineering achievements.
            </p>
            <Button variant="outline" size="lg" asChild className="mt-4">
              <Link href="/projects">View All Projects <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project._id.toString()} project={JSON.parse(JSON.stringify(project))} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed border-border">
              <p className="text-muted-foreground">No projects found. Add some projects to the database to see them here.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden mx-auto my-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let&apos;s Build Together</h2>
              <p className="text-slate-400 text-lg">
                Ready to start your next project? Contact us today for a consultation and quote. Our team is ready to bring your vision to life.
              </p>
              <div className="space-y-6 inline-block text-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Call Us</p>
                    <p className="text-lg font-bold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Email Us</p>
                    <p className="text-lg font-bold">info@samsetengineering.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-200">Visit Us</p>
                    <p className="text-lg font-bold">123 Engineering Way, Construction City</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" type="email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input id="subject" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us about your project..." />
                </div>
                <Button size="lg" className="w-full text-lg font-semibold">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
