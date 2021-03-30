const url = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  const urlFetch = id ? `${url}${id}` : url;

  try {
    const response = await fetch(urlFetch);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
