export const NetflixBG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const NetflixLogo =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const baseURL = "https://api.themoviedb.org/3";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzVhYzRhM2VmOGY4ZDM1ZTk5Yzg2ZDFlNmNjZTQ3OCIsInN1YiI6IjY1ODE0YjMwYmYwZjYzMDg3NTYyYWQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AvFWn9sKVzAMHtL9LpEHrNXEpFuF5hzM8Ta9tpJ0rQQ";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + API_KEY,
  },
};

export default API_OPTIONS;
