import axios from "axios";
import {
    useQuery,
  } from '@tanstack/react-query'

import { GET_TASK_USER_ID } from "../../constant/queryKey.ts";
import { User } from "../../types/user.ts";

const getUser = async (userId:number): Promise<User[]>  => {

  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos`
  );
  return data;
};
const useGetTaksByUserId = (userId:number) => useQuery({queryKey:[GET_TASK_USER_ID,userId],queryFn: () => getUser(userId)});
export { useGetTaksByUserId };