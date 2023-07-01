import { useQuery } from '@tanstack/react-query'

const MakeAdmin = () => {

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      return data;

    }
  });

  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json()).then(result => {
      if (result.modifiedCount > 0) {
        refetch();
      }
    })
  }

  return (
    <div className="overflow-x-auto">
      <h1 className='font-bold text-2xl my-5'>Admin</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {
            users.length > 0 && users.map((user, index) =>

              <tr>

                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td className='flex'>
                  <button onClick={() => handleAdmin(user._id)} className="btn btn-outline btn-primary">{user?.role === "admin" ? "Cancel Admin" : "Make Admin"}</button>
                  <button className="btn btn-outline  btn-error">Delete</button>
                </td>

              </tr>)

          }


        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;