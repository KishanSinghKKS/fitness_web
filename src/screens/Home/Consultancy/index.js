import React, { useState } from 'react'
import styles from "./Consultancy.module.sass";
import cn from 'classnames';
import { useDispatch } from 'react-redux'
import { submitConsultancyForm } from '../../../Store/ConsultancyActions'

const Consultancy = () => {
    const [mode, setMode] = useState(false);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        age: '',
        email: '',
        gender: '',
        city: '',
        contactNumber: '',
        goalConcern: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitConsultancyForm(formData));
        setMode(true);
    };

    return (
        <div className={cn("container", styles.container)} id='consultancy'>
            <div className={styles.wrap}>
                <div className={styles.information}>
                    <div className={styles.headline}>Start your weight loss journey today with Fit4Sure, Join us just ₹ 999 per month</div>
                    <div className={styles.description}>Take the first step towards a healthier you! Fill out the form to schedule your free consultation with our team of fitness experts and start your weight loss journey today."
</div>
                </div>
                {!mode ? <form onSubmit={handleSubmit} className={styles.form}>
                    <div>
                        <div>
                            <label className={styles.label}>
                                <div>Name</div>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            </label>
                            <label className={styles.label}>
                                <div>Age</div>
                                <input type="text" name="age" value={formData.age} onChange={handleChange} required />
                            </label>

                            <label className={styles.label}>
                                <div>Email</div>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </label>

                            <label className={styles.label}>
                                <div>Gender</div>
                                <select name="gender" value={formData.gender} onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className={styles.label}>
                                <div>Country</div>
                                <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                            </label>

                            <label className={styles.label}>
                                <div>City</div>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                            </label>

                            <label className={styles.label}>
                                <div>Contact Number</div>
                                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                            </label>

                            <label className={styles.label}>
                                <div>What is your goal/concern?</div>
                                <textarea name="goalConcern" value={formData.goalConcern} onChange={handleChange} required></textarea>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className={cn('button', styles.button)}>Consult Now</button>
                    </div>
                </form> : <div>We will contact you in 24 hours</div>

                }

            </div>
        </div>
    )
}

export default Consultancy
