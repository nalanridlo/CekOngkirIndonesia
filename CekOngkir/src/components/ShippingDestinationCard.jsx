import Dropdown from './Dropdown';
import { PropTypes } from "prop-types";
const ShippingDestinationCard = ({ provinces, cities, province, city, onProvinceChange, onCityChange }) => {
  return (
    <div className="card mb-md-3">
      <div className="card-header bg-success text-white">
        <h5 className="mb-0">Tujuan Pengiriman</h5>
      </div>
      <div className="card-body">
        <Dropdown
          label="Provinsi Tujuan"
          value={province}
          onChange={(value) => onProvinceChange(value, "destination")}
          options={provinces.map((province) => ({
            value: province.province_id,
            label: province.province,
          }))}
        />
        <Dropdown
          label="Kota/Kabupaten Tujuan"
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

ShippingDestinationCard.propTypes = {
    provinces: PropTypes.arrayOf(PropTypes.object).isRequired,
    cities: PropTypes.arrayOf(PropTypes.object).isRequired,
    province: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    onProvinceChange: PropTypes.func.isRequired,
    onCityChange: PropTypes.func.isRequired,
    };

export default ShippingDestinationCard