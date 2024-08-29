import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
export const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [provinces, setProvinces] = useState([]);
  const [originCities, setOriginCities] = useState([]);
  const [destinationCities, setDestinationCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProvinces = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/provinces");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProvinces(data.rajaongkir.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCitiesByProvince = async (provinceId, type) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/cities?province=${provinceId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (type === "origin") {
        setOriginCities(data.rajaongkir.results);
      } else {
        setDestinationCities(data.rajaongkir.results);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateShippingCost = async (
    origin,
    destination,
    weight,
    courier
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/cost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ origin, destination, weight, courier }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.rajaongkir.results;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue = {
    provinces,
    originCities,
    destinationCities,
    isLoading,
    error,
    fetchProvinces,
    fetchCitiesByProvince,
    calculateShippingCost,
  };

  return (
    <ShippingContext.Provider value={contextValue}>
      {children}
    </ShippingContext.Provider>
  );
};

ShippingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
