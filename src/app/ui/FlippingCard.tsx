import Image from "next/image";

const FlippingCart = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="border border-slate-700 rounded-3xl hover:bg-base-200 transition duration-300">
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />
        <div className="swap-off flex flex-col gap-4 justify-center items-center py-20 px-6">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={src}
            alt="Service icon"
            width={70}
            height={40}
            priority
          />
          <h3 className="text-lg text-white font-semibold text-center">
            {title}
          </h3>
          <Image
            src={"/click-arrow.svg"}
            width={50}
            height={50}
            alt="Flip card arrow icon"
          />
        </div>
        <div className="swap-on flex flex-col gap-2 justify-center items-center py-20 px-6">
          <p className="text-lg text-white font-bold text-center">
            {description}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </label>
    </div>
  );
};

export default FlippingCart;
