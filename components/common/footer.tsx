import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Send,
  Leaf,
  Award,
  Globe,
  ShieldCheck,
} from "lucide-react";

const Footer = () => {
  const navigation = {
    social: [
      {
        name: "Facebook",
        href: "https://facebook.com",
        icon: Facebook,
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: Twitter,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: Linkedin,
      },
      {
        name: "YouTube",
        href: "https://youtube.com",
        icon: Youtube,
      },
      {
        name: "Instagram",
        href: "https://instagram.com",
        icon: Instagram,
      },
    ],
  };

  const features = [
    {
      icon: Leaf,
      title: "Effortless PDF Upload",
      description:
        "Easily upload your PDF documents with a simple drag-and-drop or click.",
    },
    {
      icon: Award,
      title: "AI-Powered Summarization",
      description:
        "Our advanced AI extracts key information to generate accurate and concise summaries.",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description:
        "Get summaries for documents in various languages, supporting a global user base.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Private Processing",
      description:
        "Your documents are processed securely, ensuring confidentiality and data privacy.",
    },
  ];

  return (
    <footer
      className="bg-linear-to-r from-slate-900 to-rose-800"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-white flex items-center"
            >
              Sommaire
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Transform your documents into concise summaries with AI-powered
              technology.
              <br />
              Be part of the Sommaire family!
            </p>
            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-l-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-400 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-rose-600 hover:bg-rose-700 text-white p-3 rounded-r-md flex items-center justify-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white bg-slate-800 p-2 rounded-full"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-3 xl:mt-0">
            {/* Removed navigation sections */}
          </div>
        </div>
        <div className="mt-8 border-t border-rose-400 pt-8 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{feature.title}</h4>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center text-md text-center w-full leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Sommaire. All rights reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
