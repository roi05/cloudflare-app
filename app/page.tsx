import { db } from './db';
import { users } from './schema';
import { eq } from 'drizzle-orm';

export default async function Home() {
  const allUsers = await db.select().from(users);

  return (
    <div className='h-screen flex items-center justify-center'>
      <h1 className='text-9xl'>My first website in cloudflare</h1>
      <div>
        {allUsers.map(user => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.age}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
