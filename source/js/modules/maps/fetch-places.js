const URL = 'img/map/places.json';

export const fetchPlaces = async () => {
  // let places;
  let places = await fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        return Object.keys(data).map(k => {
          return {"id": Object.keys(data)[k - 1], ...data[k]}
        });
      });

  return places;
};
