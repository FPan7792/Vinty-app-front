import { useState } from "react";
import axios from "axios";

function Publish() {
  const [data, setData] = useState();

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
    const value = event.target.value;
    setPicture(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, description, price, condition, size, price, color, place);
  };

  return (
    <div>
      <h1>Sell your items </h1>
      <form className="publishpage-form-container" onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              type="file"
              placeholder="Add a picture"
              name="file"
              value={picture}
              onChange={handlePictureChange}
            />
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
                type="text"
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
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default Publish;
