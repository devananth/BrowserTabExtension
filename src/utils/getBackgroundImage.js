const getBackgroundImage = async (setImageUrl) => {
  console.log(process.env.REACT_APP_UNSPLASH_API_KEY);

  const UNSPLASH_API_URL = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&&orientation=landscape&&query=mountains%20dark`;

  fetch(UNSPLASH_API_URL)
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.urls.regular);
    })
    .catch((error) => {
      console.log("Something went wrong ! Refresh the page after 1 min");
    });
};

export { getBackgroundImage };
