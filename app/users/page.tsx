import UserList from "@/components/users/UserList";
import { getUsers } from "@/lib/api/users/queries";


export const revalidate = 0;

export default async function Users() {
  const { users } = await getUsers();
  

  return (
    <main className="max-w-3xl mx-auto p-4 rounded-lg bg-card">
      <div className="relative">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl my-2">Users</h1>
        </div>
        <UserList users={users}  />
      </div>
    </main>
  );
}
