import Header from "./components/Header";
import Hero from "./components/Hero";
import Reason from "./components/Reasons";
import Trading from "./components/Trading";
import Head from "./components/Head";
function App() {
  return (
    <div>
      <Head>
        <Header />
        <Hero />
      </Head>
      <Trading />
      <Reason />
    </div>
  );
}
export default App;
