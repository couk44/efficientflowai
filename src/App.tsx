import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Link, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  MessagesSquare,
  Database,
  Clock,
  Users,
  Zap,
  ChevronDown,
  Terminal,
  Cpu,
  Network,
  Code,
  Binary,
  Workflow
} from 'lucide-react';

const MatrixRain = () => {
  useEffect(() => {
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const container = document.querySelector('.matrix-bg');
    
    const createRain = () => {
      const element = document.createElement('span');
      element.className = 'matrix-rain';
      element.style.left = Math.random() * 100 + 'vw';
      element.style.animationDuration = Math.random() * 2 + 1 + 's';
      element.innerText = chars[Math.floor(Math.random() * chars.length)];
      container?.appendChild(element);
      
      setTimeout(() => {
        element.remove();
      }, 3000);
    };

    const interval = setInterval(createRain, 50);
    return () => clearInterval(interval);
  }, []);

  return <div className="matrix-bg" />;
};

const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-[1200px] h-[1200px] opacity-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-0 border-[3px] border-blue-500 rounded-full animate-[rotate_20s_linear_infinite]" />
      <div className="absolute inset-0 border-[2px] border-orange-500 rounded-full animate-[rotate_15s_linear_infinite_reverse]" />
      <div className="absolute inset-0 border-[1px] border-purple-500 rounded-full animate-[rotate_25s_linear_infinite]" />
      <div className="absolute inset-0 border-[4px] border-cyan-500 rounded-full animate-[rotate_30s_linear_infinite_reverse]" />
    </div>
  </div>
);

const TechStats = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => setCount1(prev => (prev + 1) % 1000), 50);
    const interval2 = setInterval(() => setCount2(prev => (prev + 1) % 100), 30);
    const interval3 = setInterval(() => setCount3(prev => (prev + 1) % 10000), 20);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="absolute top-4 right-4 font-mono text-sm text-cyan-400 opacity-60">
      <div>SYSTEM.STATUS: ONLINE</div>
      <div>MEMORY.ALLOCATED: {count1}MB</div>
      <div>NEURAL.PROCESSES: {count2}</div>
      <div>QUANTUM.CYCLES: {count3}</div>
    </div>
  );
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Customer Support Automation",
      description: "Resolve tickets faster with AI-driven chatbots and self-service solutions."
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "CRM Integrations",
      description: "Seamlessly connect your favorite tools for real-time insights and data sync."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Appointment Setting",
      description: "Automate scheduling, reminders, and follow-ups to never miss a lead."
    }
  ];

  const testimonials = [
    {
      quote: "EfficientFlowAI helped us reduce support response times by 60%.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp"
    },
    {
      quote: "Our lead conversion rate increased by 40% after implementing their AI solutions.",
      author: "Michael Chen",
      role: "CEO, GrowthScale"
    },
    {
      quote: "The best investment we've made in our customer service infrastructure.",
      author: "Emily Rodriguez",
      role: "Head of Support, SaaS Solutions"
    }
  ];

  const steps = [
    {
      icon: <MessagesSquare className="w-8 h-8" />,
      title: "Consultation",
      description: "Discuss your needs and goals."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Integration & Setup",
      description: "Our team customizes AI workflows for your business."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Launch & Optimize",
      description: "Go live and let us fine-tune your automation."
    }
  ];

  const faqs = [
    {
      question: "How long does integration take?",
      answer: "Most integrations are completed within 1-2 weeks, depending on complexity."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide 24/7 support and continuous optimization of your AI workflows."
    },
    {
      question: "Will AI replace human interaction?",
      answer: "No, our AI solutions enhance human capabilities rather than replace them."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient text-white overflow-hidden">
      <MatrixRain />
      <GlowingBackground />
      <TechStats />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-6 font-mono text-cyan-400 text-sm tracking-wider">INITIALIZING AI SYSTEMS...</div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 glow-text">
            Revolutionize Your Workflow with AI-Driven Automation
          </h1>
          <p className="text-xl text-gray-400 mb-8 font-mono">
            {'<'}optimize{'>'} Cut costs, streamline operations, scale faster {'</'}optimize{'>'}
          </p>
          <button className="neon-button px-8 py-4 bg-black text-white rounded-lg text-lg font-light hover:scale-105 transition-transform">
            <span className="mr-2">{'{'}</span>
            Initialize System
            <span className="ml-2">{'}'}</span>
          </button>
          <div className="mt-8 font-mono text-sm text-cyan-400 opacity-60">
            SYSTEM.VERSION: 2.5.0 | NEURAL.CAPACITY: UNLIMITED
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center glow-text">Why Settle for Inefficiency?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">High customer support overhead</h3>
                  <p className="text-gray-400">Stop drowning in support tickets and automate responses.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Missed leads</h3>
                  <p className="text-gray-400">Never miss another opportunity with automated scheduling.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h3 className="text-xl font-light mb-2">Disconnected systems</h3>
                  <p className="text-gray-400">Unify your data and processes with smart integrations.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-2xl font-light text-center">
                Our AI-Powered Solutions Eliminate Bottlenecks, 
                <span className="block mt-2 text-blue-400">So You Can Focus on Growth.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 bg-black bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card p-6 rounded-xl">
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-light mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <div className="mt-4 text-sm text-blue-400">
                  Cut Costs • Save Time • Boost Satisfaction
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">
            Trusted by Forward-Thinking Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card p-6 rounded-xl">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-4 bg-black bg-opacity-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="step-card text-center">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-light mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="service-card p-6 rounded-xl">
                <h3 className="text-xl font-light mb-3 flex items-center justify-between">
                  {faq.question}
                  <ChevronDown className="w-5 h-5" />
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 px-4 bg-black bg-opacity-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8">Let's Supercharge Your Business with AI</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-lg form-input"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="neon-button px-8 py-3 bg-black text-white rounded-lg text-lg font-light hover:scale-105 transition-transform w-full"
            >
              Request Your Custom AI Plan
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-light mb-4">EfficientFlowAI</h3>
              <p className="text-gray-400 text-sm">
                Revolutionizing business automation with cutting-edge AI solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 EfficientFlowAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;