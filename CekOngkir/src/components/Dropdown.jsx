import { PropTypes } from "prop-types";

const Dropdown = ({ label, value, onChange, options }) => {
  return (
    <div>
      <label>{label}:</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Pilih {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.type ? `${option.type} ${option.label}` : option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;
