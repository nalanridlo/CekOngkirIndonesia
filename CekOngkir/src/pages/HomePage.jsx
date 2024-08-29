/* eslint-disable react-hooks/exhaustive-deps */
import  { useContext, useEffect, useState } from "react";
import { ShippingContext } from "../context/ShippingProvider";
import ShippingForm from "../components/ShippingForm";
import ShippingCostResult from "../components/ShippingCostResult";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { fetchProvinces, calculateShippingCost } = useContext(ShippingContext);
  const [shippingCost, setShippingCost] = useState(null);

  useEffect(() => {
    fetchProvinces();
  }, []);

  const handleCheckOngkir = async (formData) => {
    const cost = await calculateShippingCost(
      formData.originCity,
      formData.destinationCity,
      formData.weight,
      formData.courier
    );
    setShippingCost(cost);
  };

  return (
    <div className="bg-light min-vh-100">
      <Navbar />
      <div className="container">
        <h1 className="text-center mb-5">Cek Ongkos Kirim</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <ShippingForm onSubmit={handleCheckOngkir} />
          </div>
          <div className="col-md-6 mb-4">
            <ShippingCostResult shippingCost={shippingCost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;