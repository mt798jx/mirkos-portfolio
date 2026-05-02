import React from 'react';
import { Element } from 'react-scroll';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/mt798jx',
        icon: '/assets/github.svg',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1DpYWdDspW/?mibextid=wwXIfr',
        icon: '/assets/facebook.svg',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/tvrdomir?igsh=MXIwZ2VpdjBweXRnZw%3D%3D&utm_source=qr',
        icon: '/assets/instagram.svg',
    },
];

export const Footer = () => {
    return (
        <Element className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                {socialLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${item.name}`}
                        className="social-icon"
                    >
                        <img src={item.icon} alt="" className="w-1/2 h-1/2" />
                    </a>
                ))}
            </div>

            <p className="text-white-500">© 2025 Miroslav Tvrdoň. All rights reserved.</p>
        </Element>
    )
}
