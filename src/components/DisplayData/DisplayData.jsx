import React from 'react';
import { useDispatch } from 'react-redux';
import { goBack, submitUser } from '../../slice';
import { useSelector } from 'react-redux';
import "./DisplayData.css"
const DisplayData = () => {
  const dispatch = useDispatch();
  const data = useSelector(submitUser);

  const handleGoBack = (e) => {
    e.preventDefault();
    dispatch(goBack());
  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100"
    style={{height:'100vh',
    background: 'linear-gradient(0deg, rgba(0, 188, 212, 1) 0%, rgba(31, 61, 120, 1) 100%)',
}}>
      <div className="card text-center  border-2 border-dark rounded-3"
      style={{
          background: 'linear-gradient(175deg, rgba(0, 188, 212, 1) 0%, rgba(0, 75, 221, 1) 100%)',
        }}
      >
        <h1 className=''>User Data</h1>
        <div className="card-body">
          {/* <h5 className="card-title text-white">User Data</h5> */}
          <p className="card-text text-white">Name: {data.name}</p>
          <p className="card-text text-white">Email: {data.email}</p>
          <p className="card-text text-white">Contact: {data.contact}</p>
          <p className="card-text text-white">Gender: {data.gender}</p>
          <button className="btn csButton btn-primary" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default DisplayData;
