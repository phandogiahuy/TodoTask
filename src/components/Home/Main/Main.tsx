import {
  Button,
  message,
  Popconfirm,
  Skeleton,
  Space,
  Table,
  TableProps,
  Tag,
} from "antd";
import { useGetAllUsers } from "../../../hooks/query/useGetAllUser";
import UserComponent from "./UserComponent";
import {
  CheckCircleOutlined,
  CheckOutlined,
  ExclamationOutlined,
} from "@ant-design/icons";
import { useChangeTaskById } from "../../../hooks/mutation/useChangeTaskById";
import { useGetTaksByUserId } from "../../../hooks/query/useGetTasksByUserId";
import { useState } from "react";
import { User } from "../../../types/user";


const Main = () => {
  const [id, setId] = useState(1);
  const { isLoading, data } = useGetAllUsers();
  const mutate = useChangeTaskById();
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const task = useGetTaksByUserId(id);
  const [dataTask, setDataTask] = useState<[]>([]);
  if (isLoading && task.isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  const cancel = () => {
    message.error("Task don't complete");
  };

  const confirm = (taskId: number) => {
    mutate.mutate({ taskId });
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[taskId] = true;
      return newLoadings;
    });
    if (mutate.data) {
      setDataTask(():any => {
        const newData =
          dataTask.length > 0
            ? dataTask?.map((item:any) => {
                if (item.id === mutate.data?.id) {
                  return mutate.data;
                } else {
                  return item;
                }
              })
            : task.data?.map((item) => {
                if (item.id === mutate.data?.id) {
                  return mutate.data;
                } else {
                  return item;
                }
              });
        return newData;
      });
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[taskId] = false;
        return newLoadings;
      });
    }
  };

  if (mutate.isSuccess) {
    confirm(1);
  }

  const user = data?.map((item:any) => ({ value: item.id, label: item.name }));

  const onChangeById = (value: number) => {
    setId(value);
  };
  
  const defaultFooter = () => {
    const taskLength =
      dataTask.length > 0
        ? dataTask.filter((item:any) => item.completed).length
        : task.data?.filter((item:any) => item.completed).length;
    return `${taskLength}/${task.data?.length}`;
  };
  
  const columns: TableProps<User>["columns"] = [
    {
      title: "Status",
      dataIndex: "completed",
      rowScope: "row",
      filters: [
        {
          text: "In Progress",
          value: false,
        },
        {
          text: "Completed",
          value: true,
        },
      ],
      onFilter: (value:any, task:any) => task.completed === value,
      render: (task:any) => {
        let color;
        if (!task) {
          color = "red";
          task = "In Progress";
        } else {
          color = "blue";
          task = "Done";
        }
        return (
          <Tag color={color} key={task}>
            {task.toUpperCase()} {}
            {task === "Done" && <CheckOutlined />}
            {task === "In Progress" && <ExclamationOutlined />}
          </Tag>
        );
      },
      sorter: (a:any, b:any) => a.completed - b.completed,
    },

    {
      title: "Task",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      dataIndex: "completed",
      key: "completed",
      render: (value:boolean, record:any) => {
        return (
          <Space size="middle">
            {!value && (
              <Popconfirm
                title="Check Done"
                description="Are you sure to completed this task"
                onConfirm={() => confirm(record.id)}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  icon={<CheckCircleOutlined />}
                  style={{ backgroundColor: "#a8ffc8" }}
                  loading={loadings[record.id]}
                >
                  Mark Done
                </Button>
              </Popconfirm>
            )}
          </Space>
        );
      },
    },
  ];

  return (
    <div className="h-[80%] p-2">
      <div>
        <p className="font-jersey font-bold text-5xl">Task Mangement</p>
      </div>
      <div className="mt-5">
        {data && <UserComponent user={user} change={onChangeById} />}
        <div className="p-2">
          <Table
            dataSource={
              dataTask.length > 0
                ? dataTask.sort((a:any, b:any) => b.completed - a.completed)
                : task?.data?.sort((a:any, b:any) => b.completed - a.completed)
            }
            columns={columns}
            bordered
            loading={task.isLoading}
            footer={defaultFooter}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
