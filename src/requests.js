const key = "3139d69066cabdae59ebd0c31af34170";

const requests={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestToprated:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`

}

export default requests