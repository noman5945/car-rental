import { FilterProps } from "@/types";

export async function fetchCars(filterProps: FilterProps) {
  const { manufacturer, model, year, fuel, limit } = filterProps;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

  const headers = {
    "X-RapidAPI-Key": "634615683emsh23337a313f9443fp110ce0jsn1246f3cd66ab",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const milageFactor = 0.1;
  const ageFactor = 0.05;

  const milageRate = city_mpg * milageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentPrice = basePricePerDay + milageRate + ageRate;

  return rentPrice.toFixed(0);
};

export const generateCarImageUrl = () => {};

/**
 * function that adds query with the link string according to which page will be refreshed and data will be loaded
 * @param type {string}  query type e.g limit,year,model,manufacturer
 * @param value {string} query value that must be converted into string
 * @returns {string} updated link with queries to fetch data
 */
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
