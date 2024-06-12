import { useNavigate } from "react-router-dom";
import { Link } from "../../shared/styles/GlobalStyles";

const OptxLoginPage = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/landing-page/home/sample1");
  };

  return (
    <div>
      <Link onClick={() => navigateToDashboard()}>Go to Dashboard</Link>
    </div>
  );
};

export default OptxLoginPage;
