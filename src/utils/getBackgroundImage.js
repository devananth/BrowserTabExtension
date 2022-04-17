const getBackgroundImage = async (setImageUrl) => {
  const UNSPLASH_API_URL = `https://api.unsplash.com/photos/random/?client_id=XqByhaz8qx069KZ_7Kk528zhO_02RDftaH3ioB8y1No&&orientation=landscape&&query=mountains%20dark`;

  fetch(UNSPLASH_API_URL)
    .then((response) => response.json())
    .then((data) => {
      setImageUrl(data.urls.regular);
    })
    .catch((error) => {
      console.log(
        "Something went wrong with UNSPLASH API ! Try again after refreshing the page"
      );
    });
};

export { getBackgroundImage };
