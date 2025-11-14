import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Globe, Building2, User, FileText, Phone } from "lucide-react";
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
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({
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
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const keyContacts = [
    {
      name: "Ammar Mahdi",
      title: "CEO & Founder",
      role: "Primary contact for all business inquiries and quotations",
      mobile: "+92 333 5766744",
      email: "ammarco.pk@gmail.com",
    },
    {
      name: "Mr. Imran Haider",
      title: "Director Technical",
      role: "Technical support and engineering consultations",
      mobile: "+92 332 9626792",
      email: "ammarco.pk@gmail.com",
    },
  ];

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
      <section className="pt-32 pb-20 gradient-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Get in touch with our team
          </motion.p>
        </div>
      </section>

      {/* Main Office Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
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
                    <a
                    href="mailto:ammarco.pk@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    ammarco.pk@gmail.com
                    </a>
                  </div>
                </div>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>NTN: 4301468-7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>PEC: 60357 (C-6)</span>
                  </div>
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

      {/* Key Contacts */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary text-center"
          >
            Key Contacts
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {keyContacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-white">
                      {contact.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary">
                      {contact.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{contact.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">{contact.role}</p>
                <div className="space-y-3">
                  {contact.mobile && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <a
                        href={`tel:${contact.mobile.replace(/\s/g, '')}`}
                        className="text-sm text-primary hover:text-secondary transition-colors"
                      >
                        {contact.mobile}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      {contact.email}
                    </a>
                </div>
                </div>
              </motion.div>
            ))}
              </div>
            </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
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
                    required
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212427.6862943669!2d72.80285791673963!3d33.61641321445988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675e6f6b0b3%3A0x68c8e5c4c5b6a8e4!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Working Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center opacity-60">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
            </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
