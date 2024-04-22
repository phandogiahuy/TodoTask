import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import axios from "axios";

async function edit({ taskId }:any) {
    const { data } = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${taskId}`,
        { completed: true }
    );
    return data;
}
const useChangeTaskById = () => {
  return useMutation({mutationFn: edit,
    onSuccess: () => {
    },
    onError: () => {
      message.error("error");
    },
  });
};
export { useChangeTaskById };
