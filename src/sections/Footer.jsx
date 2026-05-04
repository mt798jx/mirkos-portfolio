import { Element } from 'react-scroll';
import { content } from '../content.js';
import { useI18n } from '../i18n.jsx';

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
    const { language } = useI18n();
    const footer = content[language].footer;

    return (
        <Element className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>{footer.terms}</p>
                <p>|</p>
                <p>{footer.privacy}</p>
            </div>

            <div className="flex gap-3">
                {socialLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${footer.socialLabel} ${item.name}`}
                        className="social-icon"
                    >
                        <img src={item.icon} alt="" className="w-1/2 h-1/2" />
                    </a>
                ))}
            </div>

            <p className="text-white-500">© 2025 Miroslav Tvrdoň. {footer.rights}</p>
        </Element>
    )
}
