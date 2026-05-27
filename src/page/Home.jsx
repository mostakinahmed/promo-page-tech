import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Menu, X, Play, ChevronDown, ChevronUp, Star, Phone, Activity, Mic, ShieldCheck, User, Mail, MapPin,
    ShoppingCart, CheckCircle2
} from 'lucide-react';
import HeroSection from './Hero';



const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);

    // --- HERO SECTION DATA ---
    const heroData = {
        badge: "DJI Air 3 is an advanced all-around drone", // From your reference image
        titleTop: "Ultra 8 Smart",
        titleBottom: "Watch",
        description: "a wide-angle and a 3x medium telephoto. Enjoy optimized flights with a 46-minute max",
        rating: 5.0,
        price: "$149.00",
        shipping: "Free",
        warranty: "1 Year"
    };

    // --- HIGHLIGHTS GRID DATA ---
    const highlightsData = [
        {
            id: 1,
            title: 'Tough And Firm',
            image: '/images/tough-and-firm.jpg'
        },
        {
            id: 2,
            title: 'HD Large Screen',
            image: '/images/hd-large-screen.jpg'
        },
        {
            id: 3,
            title: 'Magnetic Charging',
            image: '/images/magnetic-charging.jpg'
        },
        {
            id: 4,
            title: 'Health Management',
            image: '/images/health-management.jpg'
        }
    ];

    // --- CORE FEATURES LIST ---
    const featuresData = [
        {
            id: "bt-calling",
            title: "BT v5.1 Calling",
            description: "Capitalize on low hanging fruit to identify a ballpark value added activity.",
            icon: "Phone" // Maps to Lucide React <Phone />
        },
        {
            id: "mic-support",
            title: "Micro Phone Support",
            description: "Capitalize on low hanging fruit to identify a ballpark value added activity.",
            icon: "Mic" // Maps to Lucide React <Mic />
        },
        {
            id: "voice-assist",
            title: "Voice Assistant",
            description: "Capitalize on low hanging fruit to identify a ballpark value added activity.",
            icon: "ShieldCheck" // Maps to Lucide React <ShieldCheck />
        }
    ];



    const faqs = [
        { q: "Can Smartwatch Work Without Phone?", a: "Yes, our Ultra 8 features standalone capabilities for fitness tracking and basic offline functions." },
        { q: "What Are The Features Of A Smart Watch?", a: "Fitness tracking (steps, heart rate, sleep monitoring), GPS navigation, smartphone notifications, music control, contactless payments, and health monitoring." },
        { q: "Does A Smartwatch Need A SIM Card?", a: "Only if you want completely independent cellular calling and data. Otherwise, it tethers via Bluetooth." },
        { q: "What Is The Battery Life Like?", a: "The Ultra 8 provides up to 14 days of battery life on a single charge under typical usage modes." }
    ];

    return (
        <div className="font-sans text-slate-900 bg-white overflow-hidden">
            {/* NAVBAR */}
            <nav className="bg-black text-white md:px-6 px-4 md:py-4 py-3 fixed w-full top-0 z-50 border-b border-white/10">
                <div className="max-w-7xl mx-auto flex justify-between items-center">



                    <a
                        href="https://victusbyte.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
                    >
                        <div className="md:w-8 md:h-8 w-6 h-6 bg-[#ccff00] rounded-tl-xl rounded-br-xl"></div>
                        <span className="md:text-3xl text-2xl font-extrabold tracking-tight"> <span className="text-[#fe741d]"> Victus</span> Byte</span>
                    </a>



                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#services" className="hover:text-[#ccff00] transition-colors">Services</a>
                        <a href="#about" className="hover:text-[#ccff00] transition-colors">About</a>
                        <a href="#faq" className="hover:text-[#ccff00] transition-colors">Faq</a>
                        <a href="#updates" className="hover:text-[#ccff00] transition-colors">Updates</a>
                        <a href="#contact" className="hover:text-[#ccff00] transition-colors">Contact</a>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-md">PH: +880 9611-342936</span>
                        <motion.button
                            animate={{
                                scale: [1, 1.05, 1],
                                boxShadow: [
                                    "0px 0px 0px rgba(204, 255, 0, 0)",
                                    "0px 0px 20px rgba(204, 255, 0, 0.6)",
                                    "0px 0px 0px rgba(204, 255, 0, 0)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-white text-black text-bold px-5 py-2 rounded-full font-semibold hover:bg-[#ccff00] hover:text-black transition-colors"
                        >
                            Order Now
                        </motion.button>
                    </div>


                    <motion.button
                        animate={{
                            scale: [1, 1.07, 1],
                            boxShadow: [
                                "0px 0px 0px rgba(204, 255, 0, 0)",
                                "0px 0px 20px rgba(204, 255, 0, 0.9)",
                                "0px 0px 0px rgba(204, 255, 0, 0)"
                            ]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="bg-white text-sm md:hidden text-black text-bold px-4 py-1.5 rounded-full font-bold hover:bg-[#ccff00] hover:text-black transition-colors"
                    >
                        Order Now
                    </motion.button>

                    <button className="hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* HERO SECTION */}
            <HeroSection />

            {/* HIGHLIGHTS GRID */}
            <section className="md:py-24 pb-12 pt-5 md:px-6 px-2 bg-white text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="max-w-3xl mx-auto md:mb-16 mb-6"
                >
                    <Activity className="w-12 h-12 mx-auto mb-4 text-black" />

                    <h2 className="text-sm font-bold tracking-widest uppercase mb-2">
                        Ultra Series 8
                    </h2>

                    <h3 className="text-2xl md:text-5xl font-bold leading-tight">
                        Ultra Smartwatch Series 8 <br />
                        Waterproof Long Battery Life
                    </h3>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6"
                >
                    {[
                        {
                            title: "Tough And Firm",
                            image:
                                "https://winsfolio.net/html/promix/demos/assets/img/services-1.jpg"
                        },
                        {
                            title: "HD Large Screen",
                            image:
                                "https://winsfolio.net/html/promix/demos/assets/img/services-2.jpg"
                        },
                        {
                            title: "Magnetic Charging",
                            image:
                                "https://winsfolio.net/html/promix/demos/assets/img/services-3.jpg"
                        },
                        {
                            title: "Health Management",
                            image:
                                "https://winsfolio.net/html/promix/demos/assets/img/services-4.jpg"
                        }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-2xl aspect-square cursor-pointer group shadow-lg"
                        >
                            {/* Background Image */}
                            <motion.div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${feature.image})` }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                            {/* Content */}
                            <div className="relative z-20 h-full flex items-end p-4 md:p-6">
                                <h4 className="text-white text-sm md:text-xl font-bold transition-colors duration-300 group-hover:text-[#ccff00]">
                                    {feature.title}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* FEATURES SPLIT / ABOUT SECTION */}
            <section className="relative overflow-hidden bg-black text-white md:py-28 py-16">

                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ccff00]/10 blur-[140px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto md:px-8 px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="relative w-full h-[420px] md:h-[650px]"
                    >

                        {/* Decorative Border */}
                        <div className="absolute inset-0 border border-white/10 rounded-[40px]"></div>

                        {/* Top Right */}
                        <div className="absolute top-0 right-0 w-[68%] h-[42%] rounded-[30px] overflow-hidden group shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage:
                                        "url('https://winsfolio.net/html/promix/demos/assets/img/about-img-1.jpg')"
                                }}
                            />
                        </div>

                        {/* Middle Left Main */}
                        <div className="absolute top-[24%] left-0 w-[58%] h-[45%] rounded-[30px] border-[10px] border-black overflow-hidden z-20 group shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage:
                                        "url('https://winsfolio.net/html/promix/demos/assets/img/about-img-2.jpg')"
                                }}
                            />
                        </div>

                        {/* Bottom Right */}
                        <div className="absolute bottom-0 right-[8%] w-[62%] h-[42%] rounded-[30px] overflow-hidden group shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                    backgroundImage:
                                        "url('https://winsfolio.net/html/promix/demos/assets/img/about-img-3.jpg')"
                                }}
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute bottom-10 left-8 bg-[#ccff00] text-black px-5 py-3 rounded-full font-bold shadow-2xl z-30"
                        >
                            Series 8 Ultra
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="relative"
                    >

                        {/* Small Heading */}
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#ccff00] md:text-sm text-xs font-semibold tracking-wider uppercase mb-5">
                            Ultra Smartwatch Series 8
                        </span>

                        {/* Title */}
                        <h2 className="text-3xl md:text-7xl font-black leading-[1.05] mb-6">
                            The Future <br />
                            On Your Wrist
                        </h2>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
                            Experience premium performance, health tracking, waterproof durability,
                            and ultra-fast connectivity with the next-generation smartwatch.
                        </p>

                        {/* Features */}
                        <div className="space-y-6">

                            {[
                                {
                                    icon: <Phone className="w-6 h-6" />,
                                    title: "BT v5.1 Calling"
                                },
                                {
                                    icon: <Mic className="w-6 h-6" />,
                                    title: "Microphone Support"
                                },
                                {
                                    icon: <ShieldCheck className="w-6 h-6" />,
                                    title: "Voice Assistant"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="group flex items-center gap-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition-all duration-300"
                                >

                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-2xl bg-[#ccff00] text-black flex items-center justify-center shrink-0 shadow-lg">
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h4 className="text-xl font-bold mb-1 group-hover:text-[#ccff00] transition-colors">
                                            {item.title}
                                        </h4>

                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            Premium smartwatch technology with modern connectivity
                                            and advanced smart features.
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Button */}
                        <div className="mt-10">
                            <button className="bg-[#ccff00] hover:bg-white text-black font-bold md:px-8  md:py-4 px-5  py-2.5 rounded-full transition-all duration-300 shadow-[0_10px_40px_rgba(204,255,0,0.4)]">
                                Explore More
                            </button>
                        </div>

                    </motion.div>
                </div>
            </section>


            {/* ORDER FORM SECTION (Added per user request) */}
            <section id="order" className="hidden py-24 px-6 max-w-7xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid md:grid-cols-2 gap-12 bg-black text-white rounded-3xl overflow-hidden shadow-2xl">

                    <div className="p-12 md:p-16 flex flex-col justify-center bg-zinc-950 relative">
                        {/* Topographic pattern background */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold mb-2">Order Now</h3>
                            <p className="text-gray-400 mb-8">Secure your Ultra 8 Smartwatch today.</p>

                            <form className="space-y-6">
                                <div>
                                    <input type="text" placeholder="Complete Name" className="w-full bg-transparent border border-zinc-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#ccff00] transition-colors" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email Address" className="w-full bg-transparent border border-zinc-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#ccff00] transition-colors" />
                                </div>
                                <div>
                                    <input type="tel" placeholder="Phone No" className="w-full bg-transparent border border-zinc-700 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#ccff00] transition-colors" />
                                </div>
                                <div>
                                    <textarea placeholder="Delivery Address" rows="3" className="w-full bg-transparent border border-zinc-700 rounded-3xl px-6 py-4 text-white focus:outline-none focus:border-[#ccff00] transition-colors"></textarea>
                                </div>
                                <button type="button" className="w-full bg-[#ccff00] text-black font-bold text-lg rounded-full py-4 hover:bg-[#b3e600] transition-colors transform hover:-translate-y-1">
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="hidden md:flex flex-col justify-center items-center p-12 bg-zinc-900">
                        <div className="w-64 h-64 bg-zinc-800 rounded-full flex items-center justify-center border-4 border-zinc-700 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
                            <span className="text-zinc-500 font-bold">Product Image</span>
                        </div>
                        <h4 className="text-2xl font-bold mt-8 mb-2 text-white">Ultra 8 Smartwatch</h4>
                        <p className="text-4xl font-black text-[#ccff00]">$149.00</p>
                        <div className="mt-8 space-y-2 text-gray-400 text-sm w-full max-w-xs">
                            <div className="flex justify-between border-b border-zinc-800 pb-2"><span>Shipping</span> <span className="text-white">Free</span></div>
                            <div className="flex justify-between border-b border-zinc-800 pb-2"><span>Warranty</span> <span className="text-white">1 Year</span></div>
                        </div>
                    </div>

                </motion.div>
            </section>


            {/* ENHANCED ORDER FORM SECTION */}
            <section id="order" className="py-24 md:px-6 px-2 max-w-7xl mx-auto">
                {/* Changed to md:grid-cols-2 to split 50/50 */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
                    }}
                    className="grid md:grid-cols-2 gap-0 bg-black text-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-800"
                >

                    {/* LEFT SIDE: FORM */}
                    <div className="p-3 md:p-16 flex flex-col justify-center bg-zinc-950 relative">
                        {/* Animated Topographic pattern background */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '400px 400px' }}></div>

                        <div className="relative z-10">
                            <motion.div variants={fadeUp} className="text-center md:text-base">
                                <h3 className="md:text-4xl text-2xl font-bold mb-2 mt-3 md:mt-0">Order Now</h3>
                                <p className="text-gray-400 mb-8">Secure your Ultra 8 Smartwatch today.</p>
                            </motion.div>

                            <form className="space-y-5">
                                {/* Form Fields with Staggered Entrance */}
                                {[
                                    { placeholder: "Complete Name", type: "text", icon: <User className="text-gray-500 w-5 h-5" /> },
                                    { placeholder: "Email Address", type: "email", icon: <Mail className="text-gray-500 w-5 h-5" /> },
                                    { placeholder: "Phone No", type: "tel", icon: <Phone className="text-gray-500 w-5 h-5" /> }
                                ].map((field, idx) => (
                                    <motion.div key={idx} variants={fadeUp} className="relative group">
                                        <div className="absolute inset-y-0 left-0 md:pl-6 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-[#ccff00]">
                                            {field.icon}
                                        </div>
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-full md:pl-14 pl-12 pr-6 md:py-4 py-2.5 text-white focus:outline-none focus:border-[#ccff00] focus:bg-black focus:ring-1 focus:ring-[#ccff00] transition-all duration-300"
                                        />
                                    </motion.div>
                                ))}

                                <motion.div variants={fadeUp} className="relative group">
                                    <div className="absolute top-4 left-0 pl-6 pointer-events-none transition-colors group-focus-within:text-[#ccff00]">
                                        <MapPin className="text-gray-500 w-5 h-5" />
                                    </div>
                                    <textarea
                                        placeholder="Delivery Address"
                                        rows="3"
                                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-3xl pl-14 pr-6 py-4 text-white focus:outline-none focus:border-[#ccff00] focus:bg-black focus:ring-1 focus:ring-[#ccff00] transition-all duration-300 resize-none"
                                    ></textarea>
                                </motion.div>

                                {/* Animated Submit Button */}
                                <motion.button
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="w-full bg-[#ccff00] mb-3 md:mb-0 text-black font-bold text-lg rounded-full md:py-4 py-2.5 flex items-center justify-center gap-3 hover:bg-[#b3e600] transition-colors shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                                >
                                    Place Order <ShoppingCart className="w-5 h-5" />
                                </motion.button>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT SIDE: PRODUCT DISPLAY */}
                    <div className="hidden md:flex flex-col justify-center items-center p-12 bg-zinc-900 relative overflow-hidden">
                        {/* Neon glow effect in the background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ccff00] opacity-[0.05] blur-[80px] rounded-full pointer-events-none"></div>

                        {/* Levitating Image Animation */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-64 h-64 bg-black rounded-full flex items-center justify-center border-4 border-zinc-800 shadow-[0_0_50px_rgba(204,255,0,0.15)] relative z-10"
                        >
                            {/* Actual watch image */}
                            <img
                                src="https://winsfolio.net/html/promix/demos/assets/img/android-watch.png"
                                alt="Ultra 8 Smartwatch"
                                className="w-[85%] h-[85%] object-contain drop-shadow-2xl relative z-20"
                            />
                        </motion.div>

                        <motion.div variants={fadeUp} className="text-center relative z-10 mt-10">
                            <h4 className="text-2xl font-bold mb-2 text-white">Ultra 8 Smartwatch</h4>
                            <p className="text-5xl font-black text-[#ccff00] drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">$149.00</p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-10 space-y-4 w-full max-w-[350px] relative z-10">
                            <div className="flex justify-between items-center bg-black/40 px-6 py-3 rounded-2xl border border-zinc-800 backdrop-blur-sm">
                                <span className="text-gray-400">Shipping</span>
                                <span className="text-white font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ccff00]" /> Free</span>
                            </div>
                            <div className="flex justify-between items-center bg-black/40 px-6 py-3 rounded-2xl border border-zinc-800 backdrop-blur-sm">
                                <span className="text-gray-400">Warranty</span>
                                <span className="text-white font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ccff00]" /> 1 Year</span>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </section>

            {/* FOOTER */}
            <footer className="hidden bg-black text-white py-7 px-6 border-t border-zinc-900 relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
                    <div className="col-span-1 md:col-span-2 pr-0 md:pr-16">
                        <h2 className="text-4xl font-bold mb-2">Special features or updates <br /> are <span className="border-b-4 border-[#ccff00]">waiting for you!</span></h2>
                        <p className="text-gray-400 mb-8 mt-4">Get recent news and feature updates notification.</p>

                        <div className="flex bg-zinc-900 rounded-full p-1 border border-zinc-800 max-w-md">
                            <input type="email" placeholder="email address" className="bg-transparent flex-1 px-6 text-white focus:outline-none" />
                            <button className="bg-[#ccff00] text-black px-8 py-3 rounded-full font-bold hover:bg-[#b3e600] transition-colors">Subscribe</button>
                        </div>

                        <div className="mt-12 space-y-2 font-medium">
                            <p>Phone: +880 9611-342936</p>
                            <p>Email: contact@victusbyte.com</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Useful Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-[#ccff00]">Documents</a></li>
                            <li><a href="#" className="hover:text-[#ccff00]">Products</a></li>
                            <li><a href="#" className="hover:text-[#ccff00]">Shop</a></li>
                            <li><a href="#" className="hover:text-[#ccff00]">Blog and News</a></li>
                            <li><a href="#" className="hover:text-[#ccff00]">About Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Resources</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-[#ccff00]">Help Center</a></li>
                            <li><a href="#" className="hover:text-[#ccff00]">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#ccff00]">Terms and Condition</a></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-6 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 relative z-10">
                    <p>© 2026 Victus Byte. All Rights Reserved.</p>
                    {/* Social Media Links (Using Static Images) */}
                    <div className="flex gap-4">
                        {/* Facebook */}
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-11 h-11 border border-zinc-700 bg-zinc-900/50 rounded-full flex items-center justify-center hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(204,255,0,0.4)]"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s"
                                alt="Facebook"
                                className=" object-contain rounded-full"
                            />
                        </a>

                        {/* Twitter / X */}
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="w-11 h-11 border border-zinc-700 bg-zinc-900/50 rounded-full flex items-center justify-center hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(204,255,0,0.4)]"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeFK2NtY-Ljhq7Fo_sAhlGNjWABnNFVaWIQ&s"
                                alt="Twitter"
                                className=" object-contain rounded-full"
                            />
                        </a>

                        {/* Instagram */}
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="w-11 h-11 border border-zinc-700 bg-zinc-900/50 rounded-full flex items-center justify-center hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(204,255,0,0.4)]"
                        >
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56S3XVx_siGrbcwh6R-yzBMZBgwwRrzRTQQ&s"
                                alt="Instagram"
                                className=" object-contain rounded-full"
                            />
                        </a>
                    </div>
                </div>




            </footer>


            {/* COMPACT ANIMATED FOOTER */}
            <footer className="bg-[#050505] text-white md:pt-16 pt-6  pb-6 md:px-6 border-t border-zinc-900 relative overflow-hidden">
                {/* Subtle Topographic Background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                {/* Background Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ccff00] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl md:px-6 px-3 mx-auto relative z-10">

                    {/* Floating Newsletter Card */}
                    <motion.div
                        variants={fadeUp}
                        className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-[2rem] p-3 md:p-8 flex flex-col md:flex-row items-center justify-between md:gap-6 gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    >
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-extrabold mb-1">Stay updated</h3>
                            <p className="text-gray-400 text-sm">Get the latest features and special offers.</p>
                        </div>

                        <div className="flex w-full md:w-auto bg-black rounded-full p-1.5 border border-zinc-800 focus-within:border-[#ccff00] transition-colors">
                            <input
                                type="email"
                                placeholder="Email address..."
                                className="bg-transparent w-full md:w-64 px-4 text-white focus:outline-none text-sm placeholder:text-zinc-600"
                            />
                            <button className="bg-[#ccff00] text-black px-6 md:py-2.5 py-2 rounded-full font-bold text-sm hover:bg-[#b3e600] transition-colors transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>

                    {/* Brand, Contact & Socials */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8"
                    >
                        {/* Left: Brand & Contact */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <a
                                href="https://victusbyte.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
                            >
                                <div className="w-8 h-8 bg-[#ccff00] rounded-tl-xl rounded-br-xl"></div>
                                <span className="text-3xl font-extrabold tracking-tight"> <span className="text-[#fe741d]">Victus</span> Byte</span>
                            </a>

                            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 font-medium">
                                <a href="mailto:contact@victusbyte.com" className="hover:text-[#ccff00] transition-colors">contact@victusbyte.com</a>
                                <span className="hidden md:inline text-zinc-700">|</span>
                                <a href="tel:+8809611342936" className="hover:text-[#ccff00] transition-colors">+880 9611-342936</a>
                            </div>
                        </div>

                        {/* Right: Social Media Links */}
                        <div className="flex gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-12 h-12 border border-zinc-800 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s"
                                    alt="Facebook"
                                    className="w-full h-full object-cover rounded-full p-1"
                                />
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-12 h-12 border border-zinc-800 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeFK2NtY-Ljhq7Fo_sAhlGNjWABnNFVaWIQ&s"
                                    alt="Twitter"
                                    className="w-full h-full object-cover rounded-full p-1"
                                />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-12 h-12 border border-zinc-800 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-[#ccff00] hover:border-[#ccff00] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56S3XVx_siGrbcwh6R-yzBMZBgwwRrzRTQQ&s"
                                    alt="Instagram"
                                    className="w-full h-full object-cover rounded-full p-1"
                                />
                            </a>
                        </div>
                    </motion.div>

                    {/* Copyright Divider */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-12 text-center border-t border-zinc-900 pt-6 text-sm text-zinc-600"
                    >
                        <p>© 2026 Victus Byte. All Rights Reserved.</p>
                    </motion.div>
                </div>
            </footer>

        </div>
    );
}