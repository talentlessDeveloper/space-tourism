import { useQuery } from "react-query";

const fetchSpace = async (spaceApi) => {
  const response = await fetch(spaceApi);
  const data = await response.json();

  return data;
};

export const useFetchSpace = (spaceApi) => {
  return useQuery("spaceData", async () => await fetchSpace(spaceApi));
};
