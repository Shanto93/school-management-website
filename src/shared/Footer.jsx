import { Mail, LifeBuoy, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-[#1d1e4e] via-[#23245a] to-[#1d1e4e] py-6 px-6 mt-10 shadow-inner">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left: Brand */}
                <div className="flex items-center gap-2 text-gray-200 text-sm">
                    <span>© 2025, made with</span>
                    <Heart className="text-pink-400 w-4 h-4 animate-pulse" fill="currentColor" />
                    <span>
                        by <strong className="text-indigo-300 font-semibold">EduHub</strong>
                    </span>
                </div>

                {/* Right: Links */}
                <div className="flex gap-6">
                    <a
                        href="#"
                        className="flex items-center gap-1 text-gray-300 hover:text-indigo-200 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        Contact Us
                    </a>
                    <a
                        href="#"
                        className="flex items-center gap-1 text-gray-300 hover:text-indigo-200 transition-colors"
                    >
                        <LifeBuoy className="w-4 h-4" />
                        Support
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
