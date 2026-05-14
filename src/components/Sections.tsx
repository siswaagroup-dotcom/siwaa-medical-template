import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Heart, Shield, Activity, Calendar, Phone, Star, CheckCircle, ChevronDown, Facebook, Twitter, Instagram, Linkedin, User, MessageSquare, Info, X } from 'lucide-react';
import { cn, scrollToSection } from '../lib/utils';

export const BookingDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-[40px] p-8 md:p-12 max-w-xl w-full shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400"
          >
            <X size={24} />
          </button>
          
          <h3 className="text-4xl font-black text-slate-900 mb-2 leading-none tracking-tight">Instant Care.</h3>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-10">Premium Member Reservation</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Subject</label>
                <input type="text" placeholder="General Checkup" className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-semibold" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Service</label>
                <select className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-semibold appearance-none bg-no-repeat bg-right pr-10">
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Diagnostics</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Preferred Specialist</label>
              <select className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-semibold appearance-none">
                <option>Select Doctor (Automatic matching)</option>
                <option>Dr. Sarah Johnson</option>
                <option>Dr. Michael Chen</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Visit Date</label>
              <input type="date" className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 font-semibold" />
            </div>
            <button className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl uppercase tracking-widest text-sm mt-4">
              Secure Slot Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Nav = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-8 py-4 md:py-6 flex justify-between items-center bg-white/95 md:bg-white/70 backdrop-blur-2xl border-b border-slate-100 shadow-sm">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={(e) => scrollToSection(e, 'home')}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-[12px] flex items-center justify-center text-white shadow-xl group-hover:rotate-[15deg] transition-transform duration-500">
            <Heart size={20} fill="currentColor" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Lumina<span className="text-blue-600">.</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#specialists" onClick={(e) => scrollToSection(e, 'specialists')} className="hover:text-blue-600 transition-colors">Specialists</a>
          <a href="#patient-care" onClick={(e) => scrollToSection(e, 'patient-care')} className="hover:text-blue-600 transition-colors">Patient Care</a>
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-blue-600 transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={() => setIsDialogOpen(true)}
            className="hidden sm:block bg-slate-900 text-white px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-blue-600 transition-all transform active:scale-95"
          >
            Express Booking
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-900"
          >
            {isMenuOpen ? <X size={28} /> : <div className="space-y-1.5"><div className="w-8 h-1 bg-slate-900 rounded-full" /><div className="w-8 h-1 bg-slate-900 rounded-full" /></div>}
          </button>
        </div>
        
        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 top-[73px] bg-white z-[90] flex flex-col p-10 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col gap-10">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Services', id: 'services' },
                  { name: 'Specialists', id: 'specialists' },
                  { name: 'Patient Care', id: 'patient-care' },
                  { name: 'FAQ', id: 'faq' }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    onClick={(e) => {
                      scrollToSection(e, item.id);
                      setIsMenuOpen(false);
                    }} 
                    className="text-4xl font-black text-slate-900 uppercase tracking-tighter hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setIsDialogOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="mt-6 bg-blue-600 text-white px-10 py-6 rounded-[30px] font-black text-xs uppercase tracking-[0.3em] shadow-3xl"
                >
                  Express Booking
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <BookingDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 md:px-24 pt-32 pb-20 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 text-left"
        >
          <span className="inline-block px-8 py-3 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.5em] rounded-full mb-10 shadow-2xl shadow-blue-500/20">
            World-Class Healthcare 2026
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black text-slate-900 leading-[0.8] tracking-tighter mb-10 uppercase">
            Future <br />
            <span className="text-blue-600">Medicine.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-bold tracking-tight italic">
            "Where technical surgical precision meets human empathy in a new medical dimension."
          </p>
          <div className="flex flex-wrap gap-4 md:gap-8">
            <button 
              onClick={(e) => scrollToSection(e, 'services')}
              className="w-full sm:w-auto bg-slate-900 text-white px-10 md:px-12 py-5 md:py-6 rounded-[25px] md:rounded-[30px] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-3xl hover:-translate-y-2"
            >
              Explore Specialties
            </button>
            <button 
               onClick={(e) => scrollToSection(e, 'specialists')}
               className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-100 px-10 md:px-12 py-5 md:py-6 rounded-[25px] md:rounded-[30px] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-2"
            >
              Virtual Campus
            </button>
          </div>
        </motion.div>

        {/* Right: Animated Cards */}
        <div className="relative hidden lg:block h-[600px]">
          <div className="absolute -inset-10 bg-blue-200/30 rounded-full blur-[120px] animate-pulse" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 right-0 w-[400px] h-[500px] bg-white p-4 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-20 border-8 border-white overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover rounded-[40px]" 
              alt="Medical Tech" 
            />
            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl">
              <Activity className="text-blue-600 mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Status</p>
              <p className="text-sm font-black text-slate-900">Clinically Ready</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 5 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="absolute bottom-0 left-0 w-[350px] h-[450px] bg-white p-4 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-30 border-8 border-white overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" 
              className="w-full h-full object-cover rounded-[40px]" 
              alt="Surgeon" 
            />
            <div className="absolute top-10 right-10 bg-blue-600 p-4 rounded-2xl shadow-xl">
              <Heart className="text-white animate-pulse" />
            </div>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>
    </section>
  );
};

export const PatientCare = () => (
  <section id="patient-care" className="py-32 md:py-60 px-6 md:px-24 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_50%_0%,#3b82f6_0%,transparent_70%)]" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="mb-20 md:mb-32 text-center">
        <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px]">Exceptional Outcomes</span>
        <h2 className="text-5xl md:text-7xl font-black mt-8 mb-12 tracking-tighter">Healing Journeys.</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {[
          { name: "Michael Reed", text: "The holographic diagnostics provided a clarity I've never seen before. Truly life-changing care.", role: "Cardiac Patient" },
          { name: "Elena K.", text: "A seamless blend of tech-forward medicine and soulful bedside manner. They saved my career.", role: "Neural Specialist" },
          { name: "David Thorne", text: "Lumina isn't just a clinic; it's a sanctuary for health. My recovery was weeks ahead of schedule.", role: "Wellness Advocate" }
        ].map((review, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="p-14 bg-white/5 border border-white/10 rounded-[60px] backdrop-blur-3xl hover:bg-white/10 transition-colors group"
          >
            <div className="flex text-blue-400 mb-8 font-serif text-5xl opacity-50 group-hover:opacity-100 transition-opacity">“</div>
            <p className="text-2xl text-slate-300 leading-relaxed mb-12 italic font-medium tracking-tight">
              {review.text}
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center font-black text-blue-400 text-xl border border-blue-500/30">
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-black text-lg">{review.name}</h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black leading-none">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Services = () => (
  <section id="services" className="py-32 md:py-40 px-6 md:px-24 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 md:mb-24">
        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Specialized Core</span>
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 leading-none tracking-tight">Capabilities.</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {[
          { icon: <Activity />, title: "Precision Cardiology", desc: "Advanced cardiac mapping and treatment protocols.", color: "bg-teal-500 text-white" },
          { icon: <Heart />, title: "Neural Networks", desc: "Exploring the frontiers of neural care and regeneration.", color: "bg-blue-600 text-white" },
          { icon: <Stethoscope />, title: "Pediatric Wellness", desc: "Foundational care for the next generation of bright minds.", color: "bg-slate-50 text-slate-900 border-slate-100" },
          { icon: <Shield />, title: "Quantum Diagnostics", desc: "Ultra-high resolution imaging and rapid sequencing.", color: "bg-slate-50 text-slate-900 border-slate-100" },
          { icon: <User />, title: "Bio-Surging", desc: "Regenerative surgical techniques with AI assistance.", color: "bg-slate-50 text-slate-900 border-slate-100" },
          { icon: <MessageSquare />, title: "Virtual Nexus", desc: "24/7 holographic and telemetric medical assistance.", color: "bg-slate-900 text-white" }
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className={cn(
              "p-12 rounded-[50px] flex flex-col justify-between transition-all hover:scale-[1.05] shadow-2xl border aspect-square",
              service.color
            )}
          >
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg",
              service.color.includes("text-white") ? "bg-white/20" : "bg-white text-blue-600"
            )}>
              {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
            </div>
            <div>
              <h3 className="text-3xl font-black mb-6 leading-tight">{service.title}</h3>
              <p className={cn(
                "text-lg opacity-70 font-medium leading-relaxed",
                service.color.includes("text-white") ? "text-white" : "text-slate-600"
              )}>{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Doctors = () => (
  <section id="specialists" className="py-32 md:py-40 px-6 md:px-24">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10">
        <div>
          <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Exceptional Talent</span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 leading-none tracking-tight">Our Experts.</h2>
        </div>
        <button className="text-blue-600 font-black uppercase text-xs tracking-widest flex items-center gap-4 hover:gap-6 transition-all">
          View All Specialists <ChevronDown size={20} className="-rotate-90" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {[
          { name: "Dr. Sarah Johnson", specialty: "Chief of Cardiology", img: "https://images.unsplash.com/photo-1594824476967-38cf8f3a3c15?q=80&w=400&h=600&auto=format&fit=crop" },
          { name: "Dr. Michael Chen", specialty: "Neurosurgeon", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&h=600&auto=format&fit=crop" },
          { name: "Dr. Elena Rodriguez", specialty: "Regenerative PED", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=400&h=600&auto=format&fit=crop" },
          { name: "Dr. David Smith", specialty: "Trauma Specialist", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=600&auto=format&fit=crop" }
        ].map((doctor, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[40px] shadow-2xl"
          >
            <img src={doctor.img} alt={doctor.name} className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <h3 className="text-2xl font-black text-white mb-2">{doctor.name}</h3>
              <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-6">{doctor.specialty}</p>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-3 bg-white/10 rounded-xl text-white hover:bg-blue-600 transition-colors"><Twitter size={18} /></button>
                <button className="p-3 bg-white/10 rounded-xl text-white hover:bg-blue-600 transition-colors"><Linkedin size={18} /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const BookingFlow = () => {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <section id="booking" className="py-24 px-6 md:px-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">
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
          <div className="bg-white rounded-[40px] p-10 text-slate-900 shadow-2xl border border-slate-100 italic min-h-[400px] flex flex-col justify-center">
            {isBooked ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-black mb-4 not-italic">Confirmed!</h3>
                <p className="text-slate-500 font-medium not-italic">Your priority slot is secured. Check your email for details.</p>
              </motion.div>
            ) : (
              <>
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
                  <button 
                    onClick={() => setIsBooked(true)}
                    className="w-full bg-teal-600 text-white font-black py-5 rounded-2xl hover:bg-teal-700 transition-all shadow-xl uppercase tracking-widest text-sm"
                  >
                    Confirm Instant Slot
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

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
  <footer className="bg-slate-950 text-white pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-20 md:mb-24">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2 mb-8 md:mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-xl">
              <Heart size={20} fill="currentColor" />
            </div>
            <span className="text-3xl font-black tracking-tighter">Lumina.</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-10 md:mb-12 leading-relaxed text-lg italic">
            Defining the next generation of medical excellence. Trusted globally for surgical precision and empathetic care.
          </p>
          <div className="flex gap-4">
            <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all"><Facebook size={20} /></button>
            <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all"><Twitter size={20} /></button>
            <button className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all"><Instagram size={20} /></button>
          </div>
        </div>
        <div>
          <h4 className="font-black text-xs uppercase tracking-widest text-blue-400 mb-10">Navigation</h4>
          <ul className="space-y-6 text-slate-400 font-bold text-sm">
            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors uppercase tracking-widest">Home</a></li>
            <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors uppercase tracking-widest">Services</a></li>
            <li><a href="#specialists" onClick={(e) => scrollToSection(e, 'specialists')} className="hover:text-white transition-colors uppercase tracking-widest">Specialists</a></li>
            <li><a href="#patient-care" onClick={(e) => scrollToSection(e, 'patient-care')} className="hover:text-white transition-colors uppercase tracking-widest">Patient Care</a></li>
            <li><a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-white transition-colors uppercase tracking-widest">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black text-xs uppercase tracking-widest text-blue-400 mb-10">Direct Contact</h4>
          <ul className="space-y-6 text-slate-400 font-bold text-sm">
            <li className="flex items-start gap-4 uppercase tracking-widest"> <span>+1 (555) 911-0400</span></li>
            <li className="flex items-start gap-4 uppercase tracking-widest"> <span>care@lumina.health</span></li>
            <li className="flex items-start gap-4 text-xs leading-relaxed max-w-[200px]"> <span>123 Medical Plaza, Surgery Tower Level 4, Wellness City</span></li>
          </ul>
        </div>
      </div>
      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <p className="text-[10px] font-black uppercase tracking-widest">© 2026 Lumina Health Center. AI Studio Generated.</p>
        <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
