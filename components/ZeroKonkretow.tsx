import clsx from "clsx";

type ZeroKonkretowProps = {
  variant?: "white" | "black";
};

const variantClasses = {
  black: "text-black",
  white: "text-white",
};

const ZeroKonkretow: React.FC<ZeroKonkretowProps> = ({ variant = "black" }) => {
  return (
    <p className={clsx("uppercase text-xl font-bold", variantClasses[variant])}>
      <span className="text-accent">#zero</span>konkretów
    </p>
  );
};

export default ZeroKonkretow;
