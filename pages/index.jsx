import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import https from "https";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";

const Home = ({ exploreData, liveData }) => {
  return (
    <div className="">
      <Head>
        <title>Boronilov AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                img={img}
                location={location}
                distance={distance}
                key={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveData?.map(({ img, title }) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const exploreResponse = await axios.get("https://links.papareact.com/pyp/", {
    httpsAgent: agent,
  });
  const exploreData = exploreResponse.data;

  const liveResponse = await axios.get("https://links.papareact.com/zp1/", {
    httpsAgent: agent,
  });
  const liveData = liveResponse.data;

  return {
    props: {
      exploreData,
      liveData,
    },
  };
};
