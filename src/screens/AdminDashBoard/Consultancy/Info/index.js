import React, { useEffect } from 'react'
import styles from './Info.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { getConsultancyForm, updateConsultancy,getConsultancyForms } from '../../../../Store/ConsultancyActions'
import { adminConsultancyAction } from '../../../../Store/ConsultancyReducer'
import { useAlert } from 'react-alert'
const Info = ({ setCurrentID, currentID, setType, type }) => {

  const dispatch = useDispatch();
  const alert = useAlert();
  const { form, updateSuccess } = useSelector((state) => state.adminConsultancy);



  useEffect(() => {
    if(updateSuccess){
      dispatch(adminConsultancyAction.clearUpdateSuccess());
      alert.success('Consultancy has been updated');
      dispatch(getConsultancyForms("hello"));
    }
    dispatch(getConsultancyForm(currentID));
  }, [dispatch, currentID,updateSuccess]);

  useEffect(() => {
    setType(form.isNew ? 'new' : 'old');
  }, [form, setType])

  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  const handleDropdownChange = (event) => {
    dispatch(updateConsultancy(currentID));
  };



  return (
    <div className={styles.section} onClick={() => { setCurrentID(null) }}>
      <div className={styles.detail} onClick={handleChildClick}>
        <div>
          <h2>Consultancy Information</h2>
          <p>
            <strong>Name:</strong> {form.name}
          </p>
          <p>
            <strong>Gender:</strong> {form.gender}
          </p>
          <p>
            <strong>Age:</strong> {form.age}
          </p>
          <p>
            <strong>Country:</strong> {form.country}
          </p>
          <p>
            <strong>City:</strong> {form.city}
          </p>
          <p>
            <strong>Contact Number:</strong> {form.contactNumber}
          </p>
          <p>
            <strong>Email:</strong> {form.email}
          </p>
          <p>
            <strong>Goal:</strong> {form.goal}
          </p>
          <p>
            <strong>consult:</strong>
            <select id="dropdown" value={type} onChange={handleDropdownChange}>
            <option value="new">new</option>
            <option value="old">old</option>
          </select>
          </p>
        </div>


      </div>
    </div>
  )
}

export default Info