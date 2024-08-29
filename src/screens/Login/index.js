import React, { useState, useEffect } from 'react'
import styles from './Login.module.sass'
import { TextField, Button, Typography } from '@mui/material'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getOTP, otpVerification } from '../../Store/UserAction'
import { useAlert } from 'react-alert'
import { userActions } from '../../Store/UserReducer'
import { useNavigate} from 'react-router-dom';
const Login = () => {

  const [mobileNumber, setMobileNumber] = useState('');
  const [submit, setSubmit] = useState(false);
  const {error, isAuthenticated, otpSend } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) { //if error come
      alert.error(error);
      dispatch(userActions.clearError());// for clearing the error
    };
    if(otpSend){
      alert.success('OTP has been sent');
      setSubmit(true);
      dispatch(userActions.clearOtpSend());
    }
    if (isAuthenticated) {
      navigate('/adminDashBoard');
    }
  }, [isAuthenticated, otpSend, error, alert, dispatch, navigate]);


  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleMobileSubmit = (event) => {
    event.preventDefault();
    console.log(mobileNumber)
    // Handle form submission logic here
    dispatch(getOTP({phoneNumber: mobileNumber}));
  };

  const [otp, setOTP] = useState('');

  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  const handleOTPSubmit = (event) => {
    event.preventDefault();
    dispatch(otpVerification({phoneNumber:mobileNumber, otp}));
  };

  return (
    <div className={cn("section", styles.section)}>
      {submit === false ?
        <form className={styles.formContainer} onSubmit={handleMobileSubmit}>
          <Typography variant="h5" className={styles.heading}>
            Login
          </Typography>
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            type="tel"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            sx={{
              width: '80%',
              marginBottom: '8px',
              marginLeft: '30px',
              marginTop: '10px'
            }}
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              marginTop: '10px',
              marginLeft: '60%',
              marginRight: '5%'
            }}
          >
            Submit
          </Button>
        </form> :
        <form className={styles.formContainer} onSubmit={handleOTPSubmit}>
          <Typography variant="h5"  className={styles.heading}>
            OTP Verification
          </Typography>
          <TextField
            label="OTP"
            variant="outlined"
            fullWidth
            type="text"
            value={otp}
            onChange={handleOTPChange}
            sx={{
              width: '70%',
              marginBottom: '8px',
              marginLeft: '30px',
              marginTop: '10px'
            }}
            required
          />
          <div className={styles.setButton}>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginLeft: '4px',
                marginRight: '8px'
              }}
              onClick={() => { setSubmit(false) }}
            >
              Regenerate OTP
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginLeft: '4px',
                marginRight: '8px'
              }}
            >
              Verify OTP
            </Button>
          </div>

        </form>
      }

    </div>
  )
}

export default Login