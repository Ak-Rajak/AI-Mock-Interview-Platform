import React from 'react'
import { Link } from "react-router";
import Containers from "@/components/Containers";
import { MainRoutes } from '@/lib/helper';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:${hoverColor}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to:string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
          {children}
        </Link>
    </li>
  );
};


export const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 hover:text-grey-100 py-8">
      <Containers >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>
      </Containers>
    </div>
  )
}

