import { db } from './db';
import { users } from './schema';

const fetchdata = async () => {
  try {
    const allUsers = await db.select().from(users);
    return { data: allUsers, error: false };
  } catch (error) {
    console.log(error);
    return { data: null, error: true };
  }
};

export default async function Home() {
  const { data, error } = await fetchdata();

  if (error) {
    <h1 className='text-9xl'>There is an error</h1>;
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <h1 className='text-9xl'>My first website in cloudflare</h1>
      <div>
        {data?.map(user => {
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
