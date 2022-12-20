import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/BackButton/BackButton";
import { Spinner } from "../../components/Spinner/Spinner";
import axios from "axios";

export const TableUsers = () => {
  const navigate = useNavigate();
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
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
      <h1>Table Users</h1>
      <Table withBorder withColumnBorders striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Websites</th>
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((user) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/table-users/${user.id}`)}
              >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{`${user.address?.city}, ${user.address.street}`}</td>
                <td>{user.website}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export const Error = ({ errorMessage }) => {
  return <h1>{errorMessage}</h1>;
};
