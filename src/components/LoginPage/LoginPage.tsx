import { useNavigate } from "react-router-dom";
import { Link } from "../../shared/styles/GlobalStyles";

const LoginPage = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/landing-page/home/members");
  };

  return (
    <div>
      <Link onClick={() => navigateToDashboard()}>Go to Dashboard</Link>
    </div>
  );
};

export default LoginPage;
