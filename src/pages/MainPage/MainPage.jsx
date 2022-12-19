import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <h1>List of users</h1>
      <Link to={"table-users"}>
        <Button>Click to find users</Button>
      </Link>
    </div>
  );
};
