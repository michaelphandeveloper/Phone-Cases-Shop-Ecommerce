import { useContext } from 'react';
import { DataContext } from '../store/GlobalState';
import Loading from './Loading';
import Toast from './Toast';

const Notify = () => {
  const { state, dispatch } = useContext(DataContext);
  const { notify } = state;

  return (
    <>
      {notify.loading && <Loading />}
      {notify.error && (
        <Toast
          msg={{ msg: notify.error, title: 'Thất Bại' }}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          bgColor="bg-danger"
        />
      )}

      {notify.success && (
        <Toast
          msg={{ msg: notify.success, title: 'Thành Công' }}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
          bgColor="bg-success"
        />
      )}
    </>
  );
};

export default Notify;
