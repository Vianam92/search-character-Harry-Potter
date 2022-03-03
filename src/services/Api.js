const getApi = () => {
  return fetch(
    "https://hp-api.herokuapp.com/api/characters"
  )
    .then((response) => response.json())
    .then((data) => {
      const result = data.map((item,index) => {
        return {
          id:index,
          name: item.name,
          alive: item.alive,
          gender: item.gender,
          house: item.house,
          image: item.image,
          species: item.species,
          wizard: item.wizard,
        };
      });
      return result;
    });
};

export default getApi;
