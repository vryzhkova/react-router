import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.scss";
import { Button } from "../../components/Button/Button";

export const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.text}>Page Not found</h1>
      <Link to={"/"}>
        <Button>Go to homepage</Button>
        {/* <button className={styles.btn}>Go to homepage</button> */}
      </Link>
    </div>
  );
};
