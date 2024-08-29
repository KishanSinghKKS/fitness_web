import React, { useState, useEffect } from 'react';
import styles from './PlanForm.module.sass';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addPlan } from '../../../../Store/PlanActions';
import { PlanAction } from '../../../../Store/PlanReducer';
import { useAlert } from 'react-alert';
import { SketchPicker } from 'react-color';

const PlanForm = ({ setForm }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { addSuccess } = useSelector((state) => state.plan);

    // State to manage form data
    const [formData, setFormData] = useState({
        title: '',
        color: '', // Default color
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

    useEffect(() => {
        if (addSuccess) {
            setForm(0);
            dispatch(PlanAction.clearAddSuccess());
            alert.success('Plan has been added');
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

    // Handle options checkbox changes
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

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('hello');
        dispatch(addPlan(formData));
    };

    const handleChildClick = (event) => {
        event.stopPropagation();
      };

    return (
        <div className={styles.section} onClick={() => setForm(0)}>
            <form onSubmit={handleSubmit} className={styles.form} onClick={handleChildClick}>
                <h2>Add Plan</h2>
                <div className={styles.detail}>
                    <div className={styles.column}>
                        <label>
                            Title:
                            <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                        </label>

                        <label>
                            Color:
                            <input type="color" name="color" value={formData.color} onChange={handleInputChange} required />
                        </label>


                        <label>
                            Description:
                            <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />
                        </label>

                        <label>
                            Price:
                            <input type="text" name="price" value={formData.price} onChange={handleInputChange} required />
                        </label>

                        <label>
                            Note:
                            <input type="text" name="note" value={formData.note} onChange={handleInputChange} required />
                        </label>

                        <label>
                            Button:
                            <input type="text" name="button" value={formData.button} onChange={handleInputChange} required />
                        </label>
                    </div>

                    <div className={styles.column}>
                        <label>
                            Options:
                            <div className={styles.options}>
                                {formData.options.map((option, index) => (
                                    <label key={index} style={{'margin':'2px'}}>
                                        {options[index]}
                                        <input
                                            type="checkbox"
                                            name={`options[${index}]`}
                                            checked={option}
                                            onChange={(e) => handleOptionsChange(index, e.target.checked)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </label>
                    </div>
                </div>

                <div className={styles.submitButton}>
                    <button className={cn("button", styles.button)} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PlanForm;
