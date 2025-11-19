import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200 border-t border-slate-800 ">
            <div className="container px-4 py-16 md:py-24 mx-auto">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white tracking-tight">
                            Samset<span className="text-primary">Engineering</span>
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            Building the future with precision, quality, and integrity. Your trusted partner in construction and engineering excellence.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-slate-900 hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Our Services</h4>
                        <ul className="space-y-3">
                            <li className="text-slate-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> General Construction
                            </li>
                            <li className="text-slate-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Heavy Machinery
                            </li>
                            <li className="text-slate-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Renovation & Repair
                            </li>
                            <li className="text-slate-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" /> Civil Engineering
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>123 Engineering Way, Construction City, ST 12345</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@samsetengineering.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Samset Engineering PLC. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
