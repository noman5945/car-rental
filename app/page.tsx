import { CarCard, Hero, ShowMore } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: any) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "BMW",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "M8",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className=" overflow-hidden">
      <Hero></Hero>
      <div className=" mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h3 className=" text-4xl font-extrabold">Car Catalog</h3>
          <p>Explore the cars you might like</p>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="Fuel" options={fuels} />
              <CustomFilter title="Year" options={yearsOfProduction} />
            </div>
          </div>
          {!isDataEmpty ? (
            <section className=" flex flex-col items-center">
              <div className="home__cars-wrapper">
                {allCars.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>
              <ShowMore />
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className=" text-black text-xl font-bold">No Results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
