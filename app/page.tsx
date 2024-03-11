import getAllUsers from './prismaServices/user/getAllUsers';
import Header from './components/Header';
import Link from 'next/link';

async function Home() {
  const users: any = await getAllUsers();
  return (
    <div className='h-screen bg-slate-800'>
      <Header></Header>
      <h1 className='text-white text-3xl text-center font-bold p-7 mb-20'>welcome to this cool template demo app</h1>
      <h1 className='text-white text-xl font-bold px-4 uppercase'>those are the current registred users in the website</h1>
      <table className="table-auto m-4">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-white">ID</th>
            <th className="border px-4 py-2 text-white">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id}>
              <td className="border px-4 py-2 text-blue-200">{user.id}</td>
              <td className="border px-4 py-2 text-blue-200 ">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Home
