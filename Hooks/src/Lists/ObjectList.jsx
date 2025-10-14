const ObjectList = () => {
  const people = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
      city: "New York",
    },
    {
      id: 2,
      name: "Brian Smith",
      age: 35,
      email: "brian.smith@example.com",
      city: "Los Angeles",
    },
    {
      id: 3,
      name: "Carla Davis",
      age: 22,
      email: "carla.davis@example.com",
      city: "Chicago",
    },
    {
      id: 4,
      name: "David Lee",
      age: 31,
      email: "david.lee@example.com",
      city: "Houston",
    },
    {
      id: 5,
      name: "Eva Green",
      age: 26,
      email: "eva.green@example.com",
      city: "Phoenix",
    },
    {
      id: 6,
      name: "Frank Martin",
      age: 40,
      email: "frank.martin@example.com",
      city: "Philadelphia",
    },
    {
      id: 7,
      name: "Grace Kim",
      age: 30,
      email: "grace.kim@example.com",
      city: "San Diego",
    },
    {
      id: 8,
      name: "Henry Clark",
      age: 27,
      email: "henry.clark@example.com",
      city: "Dallas",
    },
    {
      id: 9,
      name: "Isla Moore",
      age: 33,
      email: "isla.moore@example.com",
      city: "San Jose",
    },
    {
      id: 10,
      name: "Jack Wilson",
      age: 29,
      email: "jack.wilson@example.com",
      city: "Austin",
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {people.map((user, id) => {
            return (
              <>
                <tr key={id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ObjectList;