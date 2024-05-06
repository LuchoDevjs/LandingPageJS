export const getTitle = async () => {
  const url = "http://localhost:3005/jona/landing/title";
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.data)
    .catch((err) => console.log(err));
};
