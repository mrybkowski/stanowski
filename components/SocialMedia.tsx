import Link from "next/link";
import SvgIcon from "./SvgIcon";

const SocialMedia: React.FC = () => {
  return (
    <div id="socials" className="gap-10 flex">
      <Link target="_blank" href="https://x.com/K_Stanowski">
        <SvgIcon name="x" className="hover:text-accent" />
      </Link>
      <Link target="_blank" href="https://www.facebook.com/stanowski.krzysztof">
        <SvgIcon name="facebook" className="hover:text-accent" />
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/krzysztof.stanowski/"
      >
        <SvgIcon name="instagram" className="hover:text-accent" />
      </Link>
    </div>
  );
};

export default SocialMedia;
