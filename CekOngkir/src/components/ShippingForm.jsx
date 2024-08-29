import { useState, useContext } from "react";
import { ShippingContext } from "../context/ShippingProvider";
import ShippingOriginCard from "./ShippingOriginCard";
import ShippingDestinationCard from "./ShippingDestinationCard";
import ShippingDetailsCard from "./ShippingDetailsCard";
import { PropTypes } from "prop-types";

const ShippingForm = ({ onSubmit }) => {
  const {
    provinces,
    originCities,
    destinationCities,
    isLoading,
    fetchCitiesByProvince,
  } = useContext(ShippingContext);

  const [originProvince, setOriginProvince] = useState("");
  const [originCity, setOriginCity] = useState("");
  const [destinationProvince, setDestinationProvince] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [weight, setWeight] = useState("");
  const [courier, setCourier] = useState("jne");

  const handleProvinceChange = (value, type) => {
    if (type === "origin") {
      setOriginProvince(value);
      setOriginCity("");
      fetchCitiesByProvince(value, "origin");
    } else {
      setDestinationProvince(value);
      setDestinationCity("");
      fetchCitiesByProvince(value, "destination");
    }
  };

  const handleSubmit = () => {
    onSubmit({
      originCity,
      destinationCity,
      weight,
      courier,
    });
  };

  return (
    <div>
      <ShippingOriginCard
        provinces={provinces}
        cities={originCities}
        province={originProvince}
        city={originCity}
        onProvinceChange={handleProvinceChange}
        onCityChange={setOriginCity}
      />
      <ShippingDestinationCard
        provinces={provinces}
        cities={destinationCities}
        province={destinationProvince}
        city={destinationCity}
        onProvinceChange={handleProvinceChange}
        onCityChange={setDestinationCity}
      />
      <ShippingDetailsCard
        weight={weight}
        courier={courier}
        onWeightChange={setWeight}
        onCourierChange={setCourier}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

ShippingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ShippingForm;
