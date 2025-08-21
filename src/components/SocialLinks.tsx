// Social Links Component
import { socialLinks } from "../data/PersonalInfo";

const SocialLinks = () => {
  return (
    <div className="flex space-x-6">
      {socialLinks.map(({ href, src, alt }) => (
        <a
          key={alt}
          href={href}
          className="text-slate-400 hover:text-emerald-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={src} alt={alt} width={24} height={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
