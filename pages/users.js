import Head from 'next/head';
import { useContext } from 'react';
import { DataContext } from '../store/GlobalState';
import Link from 'next/link';

const Users = () => {
  const { state, dispatch } = useContext(DataContext);
  const { users, auth, modal } = state;

  if (!auth.user) return null;
  return (
    <div className="table-responsive">
      <Head>
        <title>Trang Quản Lý Người Dùng</title>
      </Head>

      <table className="table w-100">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th></th>
            <th>Tên</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Chỉnh Sửa</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} style={{ cursor: 'pointer' }}>
              <th>{index + 1}</th>
              <th>{user._id}</th>
              <th>
                <img />
              </th>
              <th>{user.name}</th>
              <th>{user.email}</th>
              <th>
                {user.role === 'admin' ? (
                  user.root ? (
                    <i className="fas fa-check text-success"></i>
                  ) : (
                    <i className="fas fa-check text-success"></i>
                  )
                ) : (
                  <i className="fas fa-times text-danger"></i>
                )}
              </th>
              <th>
                <Link
                  href={
                    auth.user.root && auth.user.email !== user.email
                      ? `/edit_user/${user._id}`
                      : '#!'
                  }
                >
                  <a>
                    <i
                      className="fas fa-edit text-info mr-2"
                      title="Chỉnh Sửa"
                    ></i>
                  </a>
                </Link>

                {auth.user.root && auth.user.email !== user.email ? (
                  <i
                    className="fas fa-trash-alt text-danger ml-2"
                    title="Xóa"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() =>
                      dispatch({
                        type: 'ADD_MODAL',
                        payload: [
                          {
                            data: users,
                            id: user._id,
                            title: user.name,
                            type: 'ADD_USERS',
                          },
                        ],
                      })
                    }
                  ></i>
                ) : (
                  <i
                    className="fas fa-trash-alt text-danger ml-2"
                    title="Xóa"
                  ></i>
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
