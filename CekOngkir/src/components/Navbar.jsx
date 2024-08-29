import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Implement logout functionality here
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <a className="navbar-brand" href="/">
            CekOngkir.id
          </a>
          <button
            className="btn btn-outline-light"
            onClick={() => {
              handleLogout();
            }}
          >
            Keluar
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
