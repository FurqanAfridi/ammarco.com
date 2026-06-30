import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Globe, Phone, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    projectLocation: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.projectType) {
      toast({
        title: "Project type required",
        description: "Please select a project type before submitting.",
        variant: "destructive",
      });
      return;
    }

    const subject = `Project inquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Company/Organization: ${formData.company || "N/A"}`,
      `Project Type: ${formData.projectType}`,
      `Project Location: ${formData.projectLocation || "N/A"}`,
      `Estimated Budget: ${formData.budget || "N/A"}`,
      `Project Timeline: ${formData.timeline || "N/A"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:info@ammarco.pk?cc=ammarco.pk@gmail.com&subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Email draft opened",
      description: "Please send the prepared email from your mail app.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projectTypes = [
    "Civil Construction",
    "Interior & Exterior Design",
    "Electrical Works",
    "Plumbing Services",
    "HVAC Systems",
    "Firefighting & Alarms",
    "CCTV & Security",
    "Solar Panels",
    "Data Networking",
    "Other",
  ];

  const budgetRanges = [
    "Under PKR 1M",
    "PKR 1M - 5M",
    "PKR 5M - 10M",
    "PKR 10M - 50M",
    "Above PKR 50M",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 gradient-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-2"
          >
            Get in touch with our team
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">
                Request a Quote
                </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="+92-XXX-XXXXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select
                    name="projectType"
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="projectLocation">Project Location</Label>
                  <Input
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="City, Pakistan"
                  />
                </div>

                <div>
                  <Label htmlFor="budget">Estimated Budget</Label>
                  <Select
                    name="budget"
                    value={formData.budget}
                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Input
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="e.g., 3-6 months"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message/Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[200px]"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-12"
                >
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6 text-primary">Location Map</h2>
                <div className="rounded-2xl overflow-hidden shadow-xl h-[500px] border border-border">
                  <iframe
                    src="https://www.google.com/maps?q=33.6937736,73.0652015&hl=en&z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Follow Us</h3>
                <p className="text-white/80 mb-6">
                  Stay connected with us on social media for updates and news.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/company/ammarco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/ammarco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/ammarco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/ammarco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Office */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
              Corporate Office
            </h2>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Islamabad, Pakistan
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Phone</h3>
                  <a
                    href="tel:+923335766744"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 333 5766744
                  </a>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">Email</h3>
                  <div className="space-y-1">
                    <a
                      href="mailto:info@ammarco.pk"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      info@ammarco.pk
                    </a>
                    <a
                      href="mailto:ammarco.pk@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      ammarco.pk@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <a href="https://ammarco.pk" className="hover:text-primary transition-colors">
                      www.ammarco.pk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
