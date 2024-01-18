const API_KEY = "275ac4a3ef8f8d35e99c86d1e6cce478";

const requests = {
  fetchtrending: `/trending/all/day?,api_key=${API_KEY}`,
  fetchnowplaying: `/movie/now_playing?api_key=${API_KEY}`,
  fetchpopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchtoprated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchupcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
