import { useUsersQuery } from "../gql/graphql";

function Home() {
  const [{ data, error, fetching }] = useUsersQuery();
  console.log();
  if (fetching) {
    return <p>loading ...</p>;
  }
  if (error) {
    return <p>error .. </p>;
  }
  return (
    <div>
      {data.Users.map((user) => {
        return (
          <div key={user.id}>
            <p>id :{user.id}</p>
            <p>name :{user.name}</p>
            <p>email :{user.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
