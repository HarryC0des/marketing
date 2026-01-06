import { Github, Linkedin, Mail, Twitter, Pencil, Box, BookOpen, Video } from "lucide-react";
import { LinkCard } from "./components/LinkCard";
import headshot from "../assets/headshotharry.png";

export default function App() {
  const links = [
    {
      label: "LinkedIn",
      subtext: "Professional background and experience",
      href: "https://www.linkedin.com/in/harry-wahl-writes/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      subtext: "Code, projects, and open source contributions",
      href: "https://github.com/HarryC0des",
      icon: Github,
    },
    {
      label: "Writing",
      subtext: "Essays, notes, and occasional thoughts",
      href: "https://example.com/writing",
      icon: Pencil,
    },
    {
      label: "What I'm Reading",
      subtext: "Current books and articles",
      href: "https://www.goodreads.com/user/show/106667989?ref=nav_profile_l",
      icon: BookOpen,
    },
    {
      label: "What I'm Watching",
      subtext: "Follow me on Letterboxd for movie musings",
      href: "https://letterboxd.com/HG0es2TheM0vies/",
      icon: Video,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Tech grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Profile Photo */}
        <div className="flex justify-center mb-12">
          <div className="relative group">
            {/* Animated ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
            <div className="absolute -inset-1 border border-white/20 rounded-full"></div>
            <img
              src={headshot}
              alt="Profile"
              className="relative w-32 h-32 rounded-full object-cover border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Header / Identity */}
        <header className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>
          <h1 className="text-white mb-3 tracking-tight">
            Harry Wahl
          </h1>
          <p className="text-white/60 tracking-wide">
            Marketer, amateur developer, and occasional writer
          </p>
        </header>

        {/* Intro Section */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <p className="text-white/70 leading-relaxed">
            I build products at the intersection of design and code. Currently exploring how we interact with digital tools and occasionally writing about craft, process, and the web.
          </p>
        </div>

        {/* Links Hub */}
        <div className="space-y-3 mb-20">
          {links.map((link) => (
            <LinkCard
              key={link.label}
              label={link.label}
              subtext={link.subtext}
              href={link.href}
              icon={link.icon}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-white/5">
          <div className="flex items-center justify-center gap-2 text-white/50 mb-3">
            <Mail size={16} strokeWidth={1.5} />
            <a
              href="mailto:hello@example.com"
              className="hover:text-white transition-colors duration-300"
            >
              hello@example.com
            </a>
          </div>
          <p className="text-white/30 mt-4">
            Built with care · 2026
          </p>
        </footer>
      </div>
    </div>
  );
}