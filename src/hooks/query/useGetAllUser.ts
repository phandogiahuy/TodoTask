import axios from "axios";
import {
    useQuery,
  } from '@tanstack/react-query'

import { GET_USER } from "../../constant/queryKey.ts";
import { User } from "../../types/user.ts";

const getUser = async (): Promise<User[]>  => {

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  return data;
};
const useGetAllUsers = () => useQuery({queryKey:GET_USER,queryFn: () => getUser()});
export { useGetAllUsers  };