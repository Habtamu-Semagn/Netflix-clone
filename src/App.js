import Header from "./components/Header";
import Hero from "./components/Hero";
import Reason from "./components/Reasons";
import Trending from "./components/Trending";
import Head from "./components/Head";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Head>
        <Header />
        <Hero />
      </Head>
      <Trending />
      <Reason />
      <Questions />
      <Footer />
    </div>
  );
}
export default App;
