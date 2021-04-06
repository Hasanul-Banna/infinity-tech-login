import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NumberFormat from 'react-number-format';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [mobileNumber, setMobileNumber] = useState(0);
  const [password, setPassword] = useState(0);
  const axios = require('axios')

  const handleSubmit = (e) => {
    const regXmobile = /^(?:\+?)?[0-9]{10}$/;
    const checkingMobile = regXmobile.test(mobileNumber);
    const regXpassword = /^[0-9]{1,4}$/;
    const checkingPassword = regXpassword.test(password);
    console.log(mobileNumber, checkingMobile, checkingPassword);

    if (checkingMobile && checkingPassword) {
      const url = '52.149.222.217:5001/api/auth/login'
      axios({
        method: 'post',
        url: url,
        data: {
          mobile: mobileNumber,
          password: password
        },
        headers: {
          "Module": "JW9tc0ByZWRsdGQl",
          "Content-Type": "application/json"
        },
      })
        .then(res => {
          console.log('ok');
        })
        .catch(error => {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      toast.error('Number must be 10 digit long & password must be 4 digit long', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    e.preventDefault();
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-6">
            <img src="./Login-bg.png" alt="" className="image-fluid" />
          </div>

          <div className="col-md-6 d-flex align-items-center">

            <form > <h1>WELCOME</h1> <hr className="rounded-pill" />
              <small>Mobile No : </small>
              <NumberFormat prefix={"+44"} allowEmptyFormatting allowLeadingZeros={false}
                onValueChange={(values) => {
                  const { formattedValue } = values;
                  setMobileNumber(formattedValue);
                }}
              />
              <br /> <br />
              <small>password : </small>
              <NumberFormat allowEmptyFormatting format={"####"}
                onValueChange={(values) => {
                  const { formattedValue } = values;
                  setPassword(formattedValue);
                }}
              /> <br /> <br />
              <input onClick={handleSubmit} className="btn btn-brand rounded-pill" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
