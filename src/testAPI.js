async function getData() {
  const response = await fetch.get('https://api.themoviedb.org/3/movie/550?api_key=3d40d25d4d7afe06ffaa2029c27da6f7')
  console.log(response);
}

getData();
