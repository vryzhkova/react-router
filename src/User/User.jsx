const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

export const User = () => {
  return (
    <>
      <h1>User info</h1>
      <div>
        <p>{user.name}</p>
        <p>{user.address.city}</p>
        <p>{user.address.street}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
        <p>{user.company.name}</p>
      </div>
    </>
  );
};
