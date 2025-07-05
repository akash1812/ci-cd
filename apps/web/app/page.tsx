import { client } from '@repo/db/client';
export default async function Home(){
  const user = await client.user.findFirst();
  return(
    <div>Hello, {user?.username} we're trying out CI/CD pipleine</div>
  )
}