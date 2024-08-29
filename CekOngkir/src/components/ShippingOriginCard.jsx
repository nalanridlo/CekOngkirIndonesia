import Dropdown from './Dropdown';
import { PropTypes } from "prop-types";

const ShippingOriginCard = ({ provinces, cities, province, city, onProvinceChange, onCityChange }) => {
  return (
    <div className="card mb-md-3">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Asal Pengiriman</h5>
      </div>
      <div className="card-body">
        <Dropdown
          label="Provinsi Asal"
          value={province}
          onChange={(value) => onProvinceChange(value, "origin")}
          options={provinces.map((province) => ({
            value: province.province_id,
            label: province.province,
          }))}
        />
        <Dropdown
          label="Kota/Kabupaten Asal"
          value={city}
          onChange={onCityChange}
          options={cities.map((city) => ({
            value: city.city_id,
            label: city.city_name,
            type: city.type,
          }))}
        />
      </div>
    </div>
  );
};

ShippingOriginCard.propTypes = {
    provinces: PropTypes.arrayOf(PropTypes.object).isRequired,
    cities: PropTypes.arrayOf(PropTypes.object).isRequired,
    province: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    onProvinceChange: PropTypes.func.isRequired,
    onCityChange: PropTypes.func.isRequired,
    };

export default ShippingOriginCard