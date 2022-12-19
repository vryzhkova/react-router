// import styles from "./BackButton.module.scss";

import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const BackButton = ({ to = -1 }) => {
  return (
    <Link to={to}>
      <Button>Back</Button>
    </Link>
  );
};
