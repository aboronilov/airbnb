import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import axios from "axios";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResult }) => {
  const router = useRouter();
  const { location, start, end, guests } = router.query;
  const startDate = format(new Date(start), "dd MMMM yy");
  const endDate = format(new Date(end), "dd MMMM yy");
  const range = `${startDate} - ${endDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {searchResult.length} stays - {range} - for {guests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 text-gray-800">
            Stays in {location}
          </h1>
          <div className="hidden lg:flex mb-5 space-x-3 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const response = await axios.get("https://www.jsonkeeper.com/b/5NPS");
  const searchResult = response.data;

  return {
    props: {
      searchResult,
    },
  };
}
