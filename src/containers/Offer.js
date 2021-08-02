import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Offer() {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://vinty-app.herokuapp.com/offer/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>Loading .. 🎛</span>
  ) : (
    <section className="offer-container">
      <img src={data.product_image.secure_url} alt={data.product_name} />
      <div>
        {data.product_price}
        <div>
          {data.product_details.map((detail, index) => {
            const key = Object.keys(detail);
            console.log(key);
            return (
              <div key={index}>
                {key[0]} : {detail[key[0]]}
              </div>
            );
          })}
          <hr />
          <div>{data.product_name}</div>
          <div>{data.product_description}</div>
          <div>{data.owner._id}</div>
        </div>
        <button>Acheter</button>
      </div>
    </section>
  );
}

export default Offer;
