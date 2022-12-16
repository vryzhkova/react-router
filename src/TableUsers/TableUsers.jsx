import { Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const TableUsers = () => {
  const navigate = useNavigate();

  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        setErrorMessage("No data");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (errorMessage) {
    return <Error errorMessage={errorMessage} />;
  }

  // const rows

  return (
    <>
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
