import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NumberFormat from 'react-number-format';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [mobileNumber, setMobileNumber] = useState(0);
  const [password, setPassword] = useState(0);


  const handleSubmit = (e) => {
    if (mobileNumber > 999999999 && password > 999) {
      const formData = new FormData()
      formData.append('mobile', mobileNumber);
      formData.append('Password', password);

      const url = '52.149.222.217:5001/api/auth/login'
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: formData
      })
        .then(response => response.json())
        .then(data => {
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
        })
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


  const MAX_VAL = 99999999;
  const withValueLimit = (inputObj) => {
    const { value } = inputObj;
    if (value < MAX_VAL) return inputObj;
  };
  return (
    <div className="App">
      <h1>Login</h1>
      <form >
        <small>Mobile : </small>
        <NumberFormat prefix={"+44"} allowEmptyFormatting allowLeadingZeros={false} isAllowed={withValueLimit}
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
        <input onClick={handleSubmit} className="btn btn-warning" type="submit" value="Login" />
      </form>
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
    </div>
  );
}

export default App;
