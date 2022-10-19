import Image from "next/image";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer transition duration-300 ease-out hover:scale-105">
      <div className="relative min-w-[300px] h-96">
        <Image 
            src={img} 
            layout="fill"
            className="rounded-lg"
            objectFit="cover" 
        />
      </div>

      <div className="absolute left-6 sm:left-12 top-1/4">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5 cursor-pointer transition duration-300 ease-out hover:opacity-80 hover:shadow-lg">{buttonText}</button>
      </div>
    </section>
  );
};

export default LargeCard;
