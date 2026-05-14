import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Heart, Shield, Activity, Calendar, Phone, Star, CheckCircle, ChevronDown, Facebook, Twitter, Instagram, Linkedin, User, MessageSquare, Info } from 'lucide-react';
import { cn } from '../lib/utils';

export const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center bg-white/90 backdrop-blur-lg border-b border-slate-200">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
        <Heart size={18} fill="currentColor" />
      </div>
      <span className="text-xl font-bold tracking-tight text-blue-900">Lumina Health</span>
    </div>
    <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-600 uppercase tracking-wide">
      <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
      <a href="#doctors" className="hover:text-blue-600 transition-colors">Specialists</a>
      <a href="#reviews" className="hover:text-blue-600 transition-colors">Patient Care</a>
      <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
    </div>
    <div className="flex items-center gap-6">
      <div className="hidden lg:block text-right">
        <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Emergency 24/7</p>
        <p className="text-sm font-bold text-red-600">(555) 911-0400</p>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-blue-700 transition-all">
        Book Appointment
      </button>
    </div>
  </nav>
);

export const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 pt-20">
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-8 border border-teal-100">
        Trusted Medical Care
      </span>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8"
      >
        Advanced care <br />
        <span className="text-blue-600">designed for you.</span>
      </motion.h1>
      <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed">
        Combining world-class clinical expertise with a compassionate touch for your family’s wellness.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg flex items-center gap-3">
          <Calendar size={22} />
          Our Specialties
        </button>
        <button className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center gap-3 shadow-sm">
          <Phone size={22} />
          Virtual Visit
        </button>
      </div>
      
      <div className="mt-16 flex items-center gap-8">
        <div className="flex -space-x-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-50 bg-slate-200 shadow-sm" />
          ))}
        </div>
        <div>
          <div className="flex text-blue-600 mb-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Michael R. & 10k+ others</p>
        </div>
      </div>
    </motion.div>
  </section>
);

export const Services = () => (
  <section id="services" className="py-24 px-8 md:px-24 bg-white/40 backdrop-blur-lg">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Premium Core Services</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Lumina Health provides a spectrum of clinical expertise tailored to your wellness journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Activity />, title: "Cardiology", desc: "Expert heart care and diagnostic testing for all ages.", color: "bg-teal-500 text-white" },
          { icon: <Heart />, title: "Neurology", desc: "Treating complex brain and nervous system disorders.", color: "bg-blue-600 text-white" },
          { icon: <Stethoscope />, title: "Pediatrics", desc: "Specialized care for infants, children, and teens.", color: "bg-white border-slate-200" },
          { icon: <Shield />, title: "Diagnostics", desc: "Advanced imaging and rapid laboratory services.", color: "bg-white border-slate-200" },
          { icon: <User />, title: "Surgery", desc: "Minimally invasive procedures with rapid recovery.", color: "bg-white border-slate-200" },
          { icon: <MessageSquare />, title: "Urgent Care", desc: "Immediate assistance for non-life-threatening conditions.", color: "bg-slate-900 text-white" }
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "p-10 rounded-[32px] flex flex-col justify-between transition-all hover:scale-[1.02] cursor-default shadow-sm border",
              service.color === "bg-white border-slate-200" ? "bg-white border-slate-200" : service.color
            )}
          >
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-10",
              service.color === "bg-white border-slate-200" ? "bg-blue-50 text-blue-600" : "bg-white/20 text-white"
            )}>
              {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className={cn(
                "leading-relaxed",
                service.color.includes("text-white") ? "text-white/80" : "text-slate-500"
              )}>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Doctors = () => (
  <section id="doctors" className="py-24 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Meet Our Experts</h2>
          <p className="text-slate-600 max-w-xl">
            Our medical team consists of highly qualified professionals dedicated to your well-being.
          </p>
        </div>
        <button className="text-teal-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Doctors <ChevronDown size={20} className="-rotate-90" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Dr. Sarah Johnson", specialty: "Cardiologist", img: "https://images.unsplash.com/photo-1594824476967-38cf8f3a3c15?q=80&w=400&h=500&auto=format&fit=crop" },
          { name: "Dr. Michael Chen", specialty: "Neurologist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=500&auto=format&fit=crop" },
          { name: "Dr. Elena Rodriguez", specialty: "Pediatrician", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=400&h=500&auto=format&fit=crop" },
          { name: "Dr. David Smith", specialty: "Surgeon", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=500&auto=format&fit=crop" }
        ].map((doctor, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
          >
            <img src={doctor.img} alt={doctor.name} className="w-full h-80 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-800">{doctor.name}</h3>
              <p className="text-teal-600 text-sm font-medium mb-4">{doctor.specialty}</p>
              <div className="flex gap-3">
                <button className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-teal-600 transition-colors"><Twitter size={18} /></button>
                <button className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-teal-600 transition-colors"><Linkedin size={18} /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const BookingFlow = () => (
  <section className="py-24 px-8 md:px-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7 flex flex-col justify-center">
        <h2 className="text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
          Next Available <br />
          <span className="text-teal-400 font-black">Slot: 09:45 AM</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { t: "Fastest Response", d: "Average wait time is under 15 minutes." },
            { t: "24/7 Availability", d: "Our team is always on call for your needs." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h4 className="font-bold text-teal-400 mb-2 uppercase text-xs tracking-widest">{item.t}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="bg-white rounded-[40px] p-10 text-slate-900 shadow-2xl border border-slate-100 italic">
          <h3 className="text-3xl font-black mb-8 not-italic">Claim Appointment</h3>
          <div className="space-y-6 not-italic">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Subject</label>
              <input type="text" placeholder="General Consultation" className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Service</label>
                <select className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-semibold appearance-none">
                  <option>Cardiology</option>
                  <option>Neurology</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Visit Date</label>
                <input type="date" className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-semibold" />
              </div>
            </div>
            <button className="w-full bg-teal-600 text-white font-black py-5 rounded-2xl hover:bg-teal-700 transition-all shadow-xl uppercase tracking-widest text-sm">
              Confirm Instant Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const FAQ = () => (
  <section id="faq" className="py-24 px-6 md:px-20">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
        <p className="text-slate-600">Everything you need to know about our clinic and services.</p>
      </div>
      <div className="space-y-4">
        {[
          { q: "What should I bring to my first appointment?", a: "Please bring your ID, insurance card, and any relevant medical records or current medications." },
          { q: "Do you accept international insurance?", a: "Yes, we work with most major international providers. Contact us to verify your specific coverage." },
          { q: "How long is a typical consultation?", a: "Consultations usually last 30 to 45 minutes, though complex cases may take longer." },
          { q: "Can I book a same-day appointment?", a: "Same-day bookings are available for urgent cases. Please call our hotline for immediate assistance." }
        ].map((item, i) => (
          <details key={i} className="group bg-white rounded-2xl border border-slate-100 open:shadow-md transition-all">
            <summary className="list-none flex justify-between items-center p-6 cursor-pointer font-bold text-slate-800">
              {item.q}
              <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400" />
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 px-6 md:px-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white">
              <Heart size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold text-slate-800">Medivox</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Leading the way in medical excellence. Trusted by thousands of families for compassionate and professional healthcare services.
          </p>
          <div className="flex gap-4">
            <button className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm"><Facebook size={20} /></button>
            <button className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm"><Twitter size={20} /></button>
            <button className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-600 hover:border-teal-200 transition-all shadow-sm"><Instagram size={20} /></button>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4 text-slate-500">
            <li><a href="#" className="hover:text-teal-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Our Services</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Specialists</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-lg">Contact Info</h4>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-3"><Phone size={20} className="mt-1 text-teal-600" /> <span>+1 (555) 000-1234</span></li>
            <li className="flex items-start gap-3"><Activity size={20} className="mt-1 text-teal-600" /> <span>info@medivox.com</span></li>
            <li className="flex items-start gap-3"><Shield size={20} className="mt-1 text-teal-600" /> <span>123 Medical Dr, Suite 500, Wellness City</span></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm">© 2026 Medivox Health Center. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);
