import './Home.css';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Footer from './component/Footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="content">
        <section>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
