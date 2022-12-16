import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <div className="wrapper">
      <h1>List of users</h1>
      <Link to={"table-users"}>
        <button>Click to table</button>
      </Link>
    </div>
  );
};
