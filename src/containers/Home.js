import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vinty-app.herokuapp.com/offers"
        );
        console.log(response.data.offers);
        setData(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <section className="hero">
        <div className="hero-box">
          <h1>Made w/ Love by FPan7792</h1>
          <Link to="/offer/publish">
            <button>Commencer à vendre</button>
          </Link>
        </div>
      </section>

      <section>
        {isLoading ? (
          <span>Loading .. 🎛</span>
        ) : (
          <div className="offers-box">
            {data.map((category, index) => {
              return (
                <Link to={`/offer/${category._id}`}>
                  <div key={category._id}>
                    <div className="each-offer">
                      {category.owner}
                      <img
                        src={category.product_image.secure_url}
                        alt={category.product_name}
                        width="200"
                      />
                      <strong>{category.product_price} €</strong>
                    </div>
                    <div>
                      {category.product_details.map((detail, index) => {
                        return (
                          <div key={index}>
                            {detail.MARQUE}
                            {detail.TAILLE}
                            {detail.EMPLACEMENT}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
