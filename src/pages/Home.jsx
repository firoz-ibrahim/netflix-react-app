import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";
const Home = () => {
  return (
    <>
      <Main />
      <Row Rowid="1" title="Upcoming" fetchUrl={requests.requestUpcoming} />
      <Row Rowid="2" title="Popular" fetchUrl={requests.requestPopular} />
      <Row Rowid="3" title="Trending" fetchUrl={requests.requestTrending} />
      <Row Rowid="4" title="Toprated" fetchUrl={requests.requestToprated} />
    </>
  );
};

export default Home;
