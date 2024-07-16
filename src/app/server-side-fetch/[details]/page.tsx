type UserPageProps = {
  params: {
    details: string;
  };
};

const fetchUser = async (id: string) => {
  try {
    const resp = await fetch(`https://dummyjson.com/users/${id}`);
    const result = await resp.json();
    return result;
  } catch (error) {}
};

const fetchSingleUserDetails = async ({ params }: UserPageProps) => {
  const singleuser = await fetchUser(params.details);

  return (
    <div className="text-center">
      <h1 className="text-2xl">{`${singleuser.firstName} ${singleuser.lastName}`}</h1>
      <p className="text-xl">{singleuser.age}</p>
      <p className="text-xl">{singleuser.email}</p>
      <p className="text-sm">{`${singleuser.address.address} ${singleuser.address.city}`}</p>
    </div>
  );
};

export default fetchSingleUserDetails;
