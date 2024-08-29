import React, { useState, useEffect } from 'react';
import styles from './TrainerForm.module.sass'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { addTrainer } from '../../../../Store/TrainerActions'
import { trainerAction } from '../../../../Store/TrainerReducer';
import { useAlert } from 'react-alert'

const TrainerForm = ({ setForm }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { addSuccess } = useSelector((state) => state.trainer);
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    yoe: '',
    specialties: [],
    contactNumber: '',
    email: '',
    accountDetails: {
      bankName: '',
      accountNumber: '',
      ifscNumber: '',
    },
  });

  useEffect(() => {

    if (addSuccess) {
      setForm(0)
      dispatch(trainerAction.clearAddSuccess());
      alert.success('Trainer has been added');
    }

  }, [dispatch, addSuccess]);
  // Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handle Account Detail
  const handleAccountDetailsChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      accountDetails: {
        ...formData.accountDetails,
        [name]: value,
      },
    });
  };

  // Handle specialties checkbox changes
  const handleSpecialtiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, value],
      });
    } else {
      setFormData({
        ...formData,
        specialties: formData.specialties.filter((specialty) => specialty !== value),
      });
    }
  };

  // handle file
  const handleFileChange = (e, fileType) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFormData({
          ...formData,
          [fileType]: reader.result,
        });
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTrainer(formData));
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.section} onClick={() => { setForm(0) }}>
      <form onSubmit={handleSubmit} className={styles.form} onClick={handleChildClick} required>
        <h2>Add Trainer</h2>
        <div className={styles.detail}>
        <div className={styles.coloumn}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>

        <label>
          Gender:
          <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} required />
        </label>

        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />
        </label>

        <label>
          Years of Experience:
          <input type="number" name="yoe" value={formData.yoe} onChange={handleInputChange} required />
        </label>

        <label>
          Specialties:
          <div className={styles.specialties}>
            <label>
              <input type="checkbox" name="specialties" value="Cardio" onChange={handleSpecialtiesChange} /> Cardio
            </label>
            <label>
              <input type="checkbox" name="specialties" value="Strength" onChange={handleSpecialtiesChange} /> Strength
            </label>
            {/* Add more specialties as needed */}
          </div>
        </label>

        <label>
          Contact Number:
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
        </label>
        </div>
        <div className={styles.coloumn}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <label>
          Aadhar Card Image:
          <input type="file" name="aadharCardImage" onChange={(e) => handleFileChange(e, 'aadharCard')} accept="image/*" required />
        </label>

        <label>
          PAN Card Image:
          <input type="file" name="panCardImage" onChange={(e) => handleFileChange(e, 'panCard')} accept="image/*" required />
        </label>
        <label>
          Bank Name:
          <input type="text" name="bankName" value={formData.accountDetails.bankName} onChange={handleAccountDetailsChange} required />
        </label>

        <label>
          Account Number:
          <input type="text" name="accountNumber" value={formData.accountDetails.accountNumber} onChange={handleAccountDetailsChange} required />
        </label>

        <label>
          IFSC Number:
          <input type="text" name="ifscNumber" value={formData.accountDetails.ifscNumber} onChange={handleAccountDetailsChange} required />
        </label>
        </div>
        </div>
        <div className={styles.submitButton}>
          <button className={cn("button", styles.button)} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TrainerForm;
