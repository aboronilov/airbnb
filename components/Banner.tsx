import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-[50%] w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
        <button type="button" className="rounded-xl bg-white px-10 py-4 text-purple-500 shadow-md font-bold my-3 transition duration-300 hover:shadow-xl hover:opacity-80 hover:text-purple-700 active:scale-110">I'm flexible</button>
      </div>
    </div>
  );
};

export default Banner;
