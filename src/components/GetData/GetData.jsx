import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitData } from '../../slice';
import "../GetData/GetData.css"
const CustomLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      submitData({
        name: name,
        email: email,
        contact: contact,
        gender: gender,
        isSubmit: true,
      })
    );
  };

  return (
    <div className="" style={{height:'100vh',
      background: 'linear-gradient(0deg, rgba(0, 188, 212, 1) 0%, rgba(31, 61, 120, 1) 100%)',
    }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 mt-5">
              <h1 className="text-center mb-4">Redux Implementation</h1>
          <div className="card border-2 border-dark rounded-3"
         
          style={{
            background: 'linear-gradient(178deg, rgba(0, 188, 212, 1) 0%, rgba(31, 61, 120, 1) 100%)',
          }}>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">
                    Contact:
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Gender:</label>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="male"
                      value="male"
                      checked={gender === 'male'}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-check-input"
                      required
                    />
                    <label htmlFor="male" className="form-check-label radio-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="female"
                      value="female"
                      checked={gender === 'female'}
                      onChange={(e) => setGender(e.target.value)}
                      className="form-check-input"
                      required
                    />
                    <label htmlFor="female" className="form-check-label radio-label">
                      Female
                    </label>
                  </div>
                </div>

                <center><button type="submit" className="btn btn-primary ">
                  Submit
                </button></center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLogin;
