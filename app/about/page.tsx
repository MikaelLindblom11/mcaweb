"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Globe, Users, Zap, MapPin, BarChart, Clock, Linkedin, ChevronRight, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeLeader, setActiveLeader] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const leadershipTeam = [
    {
      id: 1,
      name: "Marius Ohl",
      role: "Client Services Director",
      image: "/images/marius-web.jpeg",
      linkedin: "https://www.linkedin.com/",
      bio: "A digital marketing enthusiast with a passion for connecting brands with their audiences. Having led go-to-market strategies for Tencent in Southeast Asia and managed operations across Europe and North America, I bring a unique cross-cultural perspective to every project. My experience at EssilorLuxottica taught me the art of premium brand positioning in competitive markets. When I'm not crafting marketing strategies, you'll find me exploring local street food or hiking the trails around Singapore.",
      expertise: ["Digital Strategy", "Cross-Cultural Marketing", "Brand Positioning"],
      languages: ["English", "German", "Mandarin (Basic)"],
      location: "Singapore"
    },
    {
      id: 2,
      name: "Mikael Lindblom",
      role: "Business Development Director",
      image: "/images/mikael-profile.jpeg",
      linkedin: "https://www.linkedin.com/",
      bio: "A relationship builder at heart with a knack for spotting business opportunities. Based in Singapore, I've spent over a decade helping industrial and B2B companies navigate the complex APAC landscape. I believe in combining data with intuition to create expansion strategies that actually work. My background in marketing development across diverse markets has taught me that success comes from understanding local nuances. Outside work, I'm an avid sailor and coffee enthusiast, always on the hunt for the perfect espresso.",
      expertise: ["B2B Sales", "Market Expansion", "Strategic Partnerships"],
      languages: ["English", "Swedish", "Finnish"],
      location: "Singapore"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=100&w=2000&brightness=80&contrast=110"
            alt="Modern office environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="container relative z-10"
        >
          <div className="max-w-3xl">
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
            >
              Who We Are
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              At Marketing Collective Asia, we help brands navigate and grow in China and APAC with tailored, high-impact digital strategies.
            </motion.p>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground mb-8"
            >
              We specialize in <span className="font-semibold text-foreground">market-driven, data-backed solutions</span> that enable brands to <span className="font-semibold text-foreground">expand, engage, and lead</span> in the region's fast-evolving digital landscape. Recognizing that <span className="font-semibold text-foreground">every brand's journey is unique</span>, we craft strategies <span className="font-semibold text-foreground">rooted in research, data, and creativity</span>—aligning with your business goals, audience, and industry trends to drive <span className="font-semibold text-foreground">real business impact</span>.
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="container relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Our Approach
              <span className="gradient-text block mt-2">What Sets Us Apart</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground"
            >
              Your brand is more than a logo—it's a story, a promise, and an experience. We create compelling brand identities that connect with your audience, ensuring every element—from messaging to design—is optimized for impact. With a deep understanding of APAC's markets, we help brands evolve into powerful, recognizable entities that stand out where it matters most.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* How We Help Section */}
      <section className="py-24 relative">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
          >
            How We Help
            <span className="gradient-text block mt-2">Our Approach</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Local Expertise</h3>
                  <p className="premium-card-description">
                    On-the-ground presence, cultural insight, and platform mastery.
                  </p>
                  
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        Teams in <span className="font-medium text-foreground">China & Singapore</span> provide first-hand market insights & real-time execution.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        Strategies tailored for <span className="font-medium text-foreground">WeChat, XiaohongShu, Baidu, LinkedIn, TikTok, and more</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        Deep understanding of <span className="font-medium text-foreground">local consumer behaviors, platform trends, and regulations</span>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Results-Driven</h3>
                  <p className="premium-card-description">
                    Every strategy is built for impact and measurable growth.
                  </p>
                  
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-medium text-foreground">Optimized for ROI, lead generation, and market expansion</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BarChart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-medium text-foreground">Data-backed decision-making & real-time performance tracking</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-medium text-foreground">Adaptive marketing strategies that evolve with trends</span>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="premium-card group"
            >
              <div className="premium-card-content">
                <div className="premium-card-icon">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="premium-card-text">
                  <h3 className="premium-card-title">Long-Term Success</h3>
                  <p className="premium-card-description">
                    More than an agency—we're a strategic partner.
                  </p>
                  
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-medium text-foreground">Sustainable growth over quick wins</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-medium text-foreground">A collaborative, transparent approach that aligns with business goals</span>.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="font-medium text-foreground">Built for long-term brand presence & customer loyalty</span>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-secondary/5 to-background relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
          
          {/* Animated dots */}
          {isMounted && Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%", 
                opacity: Math.random() * 0.5 + 0.3 
              }}
              animate={{ 
                y: [null, Math.random() * 100 + "%"],
                opacity: [null, Math.random() * 0.5 + 0.1]
              }}
              transition={{ 
                duration: Math.random() * 10 + 10, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
          ))}
        </div>
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Meet Our Leadership
              <span className="gradient-text block mt-2">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry veterans with decades of combined experience in digital marketing, B2B sales, and APAC market expansion.
            </p>
          </motion.div>

          {/* Interactive Leadership Cards - Smaller and More Personal */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div 
                  className={`bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transition-all duration-500 h-full
                    ${activeLeader === leader.id ? 'ring-2 ring-primary/30 shadow-xl' : 'hover:shadow-xl hover:translate-y-[-4px]'}`}
                >
                  <div className="p-6 pb-4 relative">
                    {/* Header with photo and basic info */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-md flex-shrink-0">
                        {isMounted && (
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{leader.name}</h3>
                        <p className="text-sm font-medium text-foreground/80">{leader.role}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 text-primary/70" />
                          <span>{leader.location}</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setActiveLeader(activeLeader === leader.id ? null : leader.id)}
                        className="ml-auto text-primary hover:text-primary/80 transition-colors"
                        aria-label={activeLeader === leader.id ? "Show less" : "Show more"}
                      >
                        <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${activeLeader === leader.id ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                    
                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {leader.expertise.map((skill, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Bio with expand/collapse */}
                    <div className={`prose prose-sm max-w-none transition-all duration-500 overflow-hidden ${activeLeader === leader.id ? 'max-h-[500px]' : 'max-h-20'}`}>
                      <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                      
                      {/* Additional content that shows when expanded */}
                      <div className={`mt-4 transition-opacity duration-500 ${activeLeader === leader.id ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Languages */}
                        <div className="mb-4">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Languages</p>
                          <div className="flex flex-wrap gap-2">
                            {leader.languages.map((language, i) => (
                              <span key={i} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Connect buttons */}
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs h-8 rounded-full" asChild>
                            <Link href={`mailto:${leader.name.toLowerCase().replace(' ', '.')}@marketingcollective.asia`}>
                              <Mail className="h-3 w-3" />
                              <span>Email</span>
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-2 text-xs h-8 rounded-full" asChild>
                            <Link href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-3 w-3" />
                              <span>LinkedIn</span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {activeLeader !== leader.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a1a2f]">
          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a2f] via-[#0d2a4a] to-[#0f3060]" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
              Ready to Transform Your Digital Presence?
              <span className="block mt-3 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-primary to-blue-300">Let's Talk</span>
            </h2>
            
            <p className="text-xl mb-12 text-white/80">
              Get in touch with our team of APAC marketing experts today.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg font-medium group px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              asChild
            >
              <Link href="/contact">
                <span className="flex items-center">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}