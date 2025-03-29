import { logOut } from "@/auth/authenticate";

export function LogOutButton() {
  return (
    <form action={logOut}>
      <button type="submit">LogOut</button>
    </form>
  );
}
