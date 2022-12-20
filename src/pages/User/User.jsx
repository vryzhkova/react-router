import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { useEffect, useState } from "react";
import { Error } from "../TableUsers/TableUsers";
import { Spinner } from "../../components/Spinner/Spinner";
import axios from "axios";

export const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        setUser(response.data);
      } catch (error) {
        setErrorMessage("No data");
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, []);

  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton />
      <h1>User info</h1>
      <div>
        <p key={user.id} onClick={() => navigate(`/table-users/${user.id}`)}>
          {user.name}
        </p>
        <p>{user?.address?.city}</p>
        <p>{user?.address?.street}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
        <p>{user?.company?.name}</p>
      </div>
    </>
  );
};
