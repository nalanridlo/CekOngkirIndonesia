import { PropTypes } from "prop-types";

const ShippingCostResult = ({ shippingCost }) => {
  if (!shippingCost || !Array.isArray(shippingCost) || shippingCost.length === 0) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-header bg-warning">
        <h5 className="mb-0">Hasil Perhitungan Ongkir</h5>
      </div>
      <div className="card-body">
        {shippingCost.map((service, index) => (
          <div key={index} className="mb-4">
            <h6 className="fw-bold">{service.name}</h6>
            {service.costs.map((cost, costIndex) => (
              <div key={costIndex} className="card mb-2">
                <div className="card-body">
                  <p className="mb-1"><strong>Layanan:</strong> {cost.service}</p>
                  <p className="mb-1"><strong>Deskripsi:</strong> {cost.description}</p>
                  <p className="mb-1"><strong>Biaya:</strong> Rp {cost.cost[0]?.value.toLocaleString('id-ID') || "N/A"}</p>
                  <p className="mb-0"><strong>Estimasi:</strong> {cost.cost[0]?.etd || "N/A"} hari</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ShippingCostResult.propTypes = {
    shippingCost: PropTypes.array,
};


export default ShippingCostResult;