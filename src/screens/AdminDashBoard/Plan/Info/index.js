import React, { useState, useEffect } from 'react';
import styles from './Info.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import { getPlan, updatePlan } from '../../../../Store/PlanActions';
import { PlanAction } from '../../../../Store/PlanReducer';
import cn from 'classnames';
import { useAlert } from 'react-alert';

const Info = ({ setCurrentID, currentID }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { Plan, updateSuccess, error, loading } = useSelector((state) => state.plan);
  const [update, setUpdate] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    color: '',
    description: '',
    price: '',
    note: '',
    button: '',
    options: Array(13).fill(false),
  });

  const options = [
    "Personalized Training",
    "Customized Diet Plans",
    "Nutritional Guidance",
    "Calorie Management",
    "Fitness Tracking",
    "Progress Monitoring",
    "Goal Setting",
    "Meal Planning Assistance",
    "One-on-One Support",
    "Expert Advice",
    "Community Support",
    "Flexible Subscription Options",
    "App Support",
    ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionsChange = (index, checked) => {
    setFormData((prevFormData) => {
      const newOptions = [...prevFormData.options];
      newOptions[index] = checked;
      return {
        ...prevFormData,
        options: newOptions,
      };
    });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(PlanAction.clearError());
    }

    if (updateSuccess) {
      alert.success('Plan has been updated');
      dispatch(PlanAction.clearUpdateSuccess());
      setUpdate(false);
    }

    dispatch(getPlan(currentID));
  }, [dispatch, currentID, updateSuccess, error]);

  useEffect(() => {
    setFormData(Plan);
  }, [Plan]);

  const updateData = () => {
    const data = {
      id: formData._id,
      form: formData,
    };
    dispatch(updatePlan(data));
  };

  return (
    <div className={styles.section} onClick={() => { setCurrentID(null); setUpdate(false) }}>
      <div className={styles.detail} onClick={(event) => event.stopPropagation()}>
        <div>
          <h2>Plan Information</h2>
          <div className={styles.box}>
            <div>
              <p>
                <strong>Title:</strong> {update ? <input type="text" name="title" value={formData.title} onChange={handleInputChange} required /> : Plan.title}
              </p>
              <p>
                <strong>Color:</strong> {update ? <input type="color" name="color" value={formData.color} onChange={handleInputChange} required /> : <input type="color"  value={Plan.color}  />}
              </p>
              <p>
                <strong>Description:</strong> {update ? <input type="text" name="description" value={formData.description} onChange={handleInputChange} required /> : Plan.description}
              </p>
              <p>
                <strong>Price:</strong> {update ? <input type="text" name="price" value={formData.price} onChange={handleInputChange} required /> : Plan.price}
              </p>
              <p>
                <strong>Note:</strong> {update ? <input type="text" name="note" value={formData.note} onChange={handleInputChange} required /> : Plan.note}
              </p>
              <p>
                <strong>Button:</strong> {update ? <input type="text" name="button" value={formData.button} onChange={handleInputChange} required /> : Plan.button}
              </p>
            </div>
            <div>
              <p>
                <strong>Options:</strong> {update ? <div className={styles.options}>
                  {formData.options.map((option, index) => (
                    <label key={index}>
                      {options[index]}
                      <input
                        type="checkbox"
                        name={`options[${index}]`}
                        checked={option}
                        onChange={(e) => handleOptionsChange(index, e.target.checked)}
                      />
                    </label>
                  ))}
                </div> : Plan.options ? <div className={styles.options}>
                                {options.map((option, index) => (
                                    <label key={index} style={{'margin':'2px'}}>
                                        {option}
                                        <input
                                            type="checkbox"
                                            name={`options[${index}]`}
                                            checked={Plan.options[index]}
                                        />
                                    </label>
                                ))}
                            </div> : ''}
              </p>
            </div>
          </div>
          <div className={styles.submitButton}>
            {update ? <button className={cn("button", styles.button)} onClick={() => { updateData() }}>Save</button> :
              <button className={cn("button", styles.button)} onClick={() => { setUpdate(true) }}>Update</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;