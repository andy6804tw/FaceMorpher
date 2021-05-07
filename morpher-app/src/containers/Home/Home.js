import './Home.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Footer from './component/Footer/Footer';
import Morph from './component/Morph/Morph';
import Loading from './component/Loading/Loading';



function Home() {

  return (
    <div>
      <Loading/>
      <Header />
      <Hero />
      <main className="content">
        <Morph/>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
