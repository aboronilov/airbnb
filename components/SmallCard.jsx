import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <section className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer transition duration-300 ease-out hover:scale-105 hover:bg-gray-100">
        {/* left */}
        <div className="relative h-16 w-16 mb-2">
            <Image 
                src={img}
                layout="fill"
                objectFit="cover"
                width="100px"
                className="rounded-lg"
            />
        </div>

        {/* right */}
        <div className="">
            <h2>{location}</h2>
            <h3 className="text-gray-500">{distance}</h3>
        </div>
    </section>
  );
};

export default SmallCard;
