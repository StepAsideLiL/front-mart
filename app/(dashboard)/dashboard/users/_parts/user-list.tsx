import { clerkClient } from "@clerk/nextjs/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const UserList = async () => {
  const users = await clerkClient.users.getUserList({
    orderBy: "+created_at",
  });

  return (
    <section>
      {users && users.data.length !== 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14"></TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Link href={``}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={user.imageUrl}
                      alt={`Profile picture of ${user.username}`}
                      className="aspect-square"
                    />
                  </Link>
                </TableCell>
                <TableCell>
                  <Link href={``} className="hover:underline">
                    {user.username}
                  </Link>
                </TableCell>
                <TableCell>
                  {user.publicMetadata.role
                    ? (user.publicMetadata.role as string)
                    : "user"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="p-10">
          <h1 className="text-muted-foreground text-xl text-center">
            No users
          </h1>
        </div>
      )}
    </section>
  );
};

export default UserList;
