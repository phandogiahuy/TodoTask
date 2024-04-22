import { Select, Space } from 'antd'
function UserComponent({ user, change }: any) {
  return (
    <Space wrap>
      <div className="font-sans font-bold text-3xl">User</div>
      <Select
        defaultValue={user[0]?.value || ""}
        style={{ width: 150 }}
        options={user}
        onChange={change} />
    </Space>
  )
}

export default UserComponent