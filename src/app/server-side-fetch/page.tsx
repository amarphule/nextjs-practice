type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

type UserResponse = {
  users: User[];
};
const fetchUser = async (): Promise<User[] | undefined> => {
  try {
    const resp = await fetch("https://dummyjson.com/users");
    const res: UserResponse = await resp.json();

    return res.users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return undefined;
  }
};

const ServerSideDataFetch = async () => {
  const listOfUsers = await fetchUser();

  return (
    <div>
      server side data fetch
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => {
              return (
                <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default ServerSideDataFetch;
