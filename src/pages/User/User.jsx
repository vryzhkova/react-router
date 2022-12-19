import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { useEffect, useState } from "react";
import { Error } from "../TableUsers/TableUsers";
import { Spinner } from "../../components/Spinner/Spinner";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //     .then(handleErrors)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser(data);
  //     })
  //     .catch(() => {
  //       setErrorMessage("No data");
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        handleErrors(response);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setErrorMessage("No data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
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
      {/* <div>{JSON.stringify(user, null, 2)}</div> */}
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
