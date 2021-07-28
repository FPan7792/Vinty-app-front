import App from "../";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />

      <section className="hero">
        <div className="hero-box">
          <h1>Title</h1>
          <button>Commencer à vendre </button>
        </div>
      </section>

      <section className="offers-box">
        <div>Offers</div>
      </section>
    </div>
  );
}

export default Home;
