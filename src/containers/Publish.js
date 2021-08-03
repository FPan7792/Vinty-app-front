import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function Publish() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [place, setPlace] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [picture, setPicture] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };
  const handleBrandChange = (event) => {
    const value = event.target.value;
    setBrand(value);
  };
  const handleColorChange = (event) => {
    const value = event.target.value;
    setColor(value);
  };
  const handlePlaceChange = (event) => {
    const value = event.target.value;
    setPlace(value);
  };
  const handleSizeChange = (event) => {
    const value = event.target.value;
    setSize(value);
  };
  const handleConditionChange = (event) => {
    const value = event.target.value;
    setCondition(value);
  };
  const handlePictureChange = (event) => {
    const value = event.target.files[0];
    setPicture(value);
  };

  const formData = new FormData();
  formData.append("product_name", name);
  formData.append("product_description", description);
  formData.append("product_price", price);
  formData.append("product_image", picture);
  formData.append("ETAT", condition);
  formData.append("TAILLE", size);
  formData.append("COULEUR", color);
  formData.append("MARQUE", brand);
  formData.append("EMPLACEMENT", place);

  const publishAnounce = async () => {
    if (
      name === "" ||
      picture === "" ||
      description === "" ||
      price === "" ||
      condition === "" ||
      size === "" ||
      place === ""
    ) {
      alert("All the fields are required");
    } else {
      try {
        const response = await axios.post(
          "https://vinty-app.herokuapp.com/offer/publish",
          formData,
          { headers: { authorization: `Bearer ${Cookies.get("token")}` } }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      name,
      description,
      price,
      condition,
      size,
      color,
      place,
      picture,
      brand
    );
    publishAnounce();
    history.push("/");
  };

  return (
    <div className="signup-container">
      <h1>Sell your items </h1>
      <form className="publishpage-form-container" onSubmit={handleSubmit}>
        <div>
          <div>
            <input type="file" onChange={handlePictureChange} />
          </div>
        </div>
        <div>
          <div>
            <span>Titre</span>
            <span>
              <input
                type="text"
                placeholder=""
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </span>
          </div>
          <div>
            <span>Describe your item</span>
            <span>
              <input
                type=""
                placeholder=""
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              />
            </span>
          </div>
        </div>
        <div>
          <div>
            <span>Marque</span>
            <span>
              <input
                type="text"
                placeholder=""
                name="brand"
                value={brand}
                onChange={handleBrandChange}
              />
            </span>
          </div>
          <div>
            <span>Taille</span>
            <span>
              <input
                type="text"
                placeholder=""
                name="size"
                value={size}
                onChange={handleSizeChange}
              />
            </span>
          </div>
          <div>
            <span>Couleur</span>
            <span>
              <input
                type="text"
                placeholder=""
                name="color"
                value={color}
                onChange={handleColorChange}
              />
            </span>
          </div>
          <div>
            <span>Etat</span>
            <span>
              <input
                type="text"
                placeholder=""
                name="condition"
                value={condition}
                onChange={handleConditionChange}
              />
            </span>
          </div>
          <div>
            <span>Lieu</span>
            <span>
              <input
                type="text"
                placeholder=""
                name="place"
                value={place}
                onChange={handlePlaceChange}
              />
            </span>
          </div>
          <div>
            <span>Prix</span>
            <span>
              <input
                type="text"
                placeholder=""
                name="price"
                value={price}
                onChange={handlePriceChange}
              />
            </span>
          </div>
        </div>

        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Publish;
