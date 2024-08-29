import { PropTypes } from "prop-types";

const ShippingDetailsCard = ({ weight, courier, onWeightChange, onCourierChange, onSubmit, isLoading }) => {
  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h5 className="mb-0">Detail Pengiriman</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">Berat Paket (gram):</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            value={weight}
            onChange={(e) => onWeightChange(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courier" className="form-label">Kurir:</label>
          <select
            className="form-select"
            id="courier"
            value={courier}
            onChange={(e) => onCourierChange(e.target.value)}
          >
            <option value="jne">JNE</option>
            <option value="tiki">TIKI</option>
            <option value="pos">POS Indonesia</option>
          </select>
        </div>
        <button
          className="btn btn-primary w-100"
          onClick={onSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Memuat..." : "Cek Ongkir"}
        </button>
      </div>
    </div>
  );
};

ShippingDetailsCard.propTypes = {
    weight: PropTypes.string.isRequired,
    courier: PropTypes.string.isRequired,
    onWeightChange: PropTypes.func.isRequired,
    onCourierChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    };
    

export default ShippingDetailsCard 