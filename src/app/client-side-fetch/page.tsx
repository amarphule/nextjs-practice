"use client";

import React from "react";
import useSWR from "swr";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
};

export type UserResponse = {
  users: User[];
};

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};

const ClientSideDataFetch: React.FC = () => {
  const { data, error, isLoading } = useSWR<UserResponse>(
    "https://dummyjson.com/users",
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div>
      ClientSideDataFetch
      <ul>
        {data.users && data.users.length > 0
          ? data.users.map((user) => {
              return (
                <li key={user.id} className="hover:underline hover:m-2 m-2">
                  {user.firstName}
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default ClientSideDataFetch;
