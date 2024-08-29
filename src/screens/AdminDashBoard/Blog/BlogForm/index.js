import React, { useState, useEffect } from 'react';
import styles from './BlogForm.module.sass';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from '../../../../Store/BlogActions';
import { BlogAction } from '../../../../Store/BlogReducer';
import { useAlert } from 'react-alert';

const BlogForm = ({ setForm }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { addSuccess } = useSelector((state) => state.blog);
    // State to manage form data
    const [formData, setFormData] = useState({
        type: 'Fitness', // Default type
        items: {
            info: '',
            author: '',
            outsideimage: null,
            innerimage: null,
            category: '#000000',
            categoryContent: 'yoga',
            para1: '',
            para2: '',
            title: '',
        },
    });

    const categoryOptions = ["yoga", "new", "featured"];

    useEffect(() => {
        if (addSuccess) {
            setForm(0);
            dispatch(BlogAction.clearAddSuccess());
            alert.success('Blog has been added');
        }
    }, [dispatch, addSuccess]);

    // Handle form field changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: {
                ...prevFormData.items,
                [name]: value,
            },
        }));
    };


    // Handle items field changes
    const handleItemsChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: {
                ...prevFormData.items,
                [name]: value,
            },
        }));
    };

    // Handle image file changes
    const handleImageChange = (e, fileType) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    items: {
                        ...prevFormData.items,
                        [fileType]: reader.result,
                    },
                }));
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Only include 'title' and 'items' in the payload
        const { type, items } = formData;
        const payload = { type, items };
        dispatch(addBlog(payload));
    };

    const handleChildClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.section} onClick={() => setForm(0)}>
            <form onSubmit={handleSubmit} className={styles.form} onClick={handleChildClick}>
                <h2>Add Trainer</h2>
                <div className={styles.box}>
                    <div className={styles.column}>
                        <label>
                            Title:
                            <input type="text" name="title" value={formData.items.title} onChange={handleItemsChange} required />
                        </label>

                        <label>
                            Type:
                            <select name="type" value={formData.type} onChange={handleInputChange} required>
                                <option value="Fitness">Fitness</option>
                                <option value="Lifestyle">Lifestyle</option>
                                <option value="Mindfulness">Mindfulness</option>
                            </select>
                        </label>
                        <label>
                            Info:
                            <input type="text" name="info" value={formData.items.info} onChange={handleItemsChange} required />
                        </label>
                        <label>
                            Author:
                            <input type="text" name="author" value={formData.items.author} onChange={handleItemsChange} required />
                        </label>
                        <label>
                            Category:
                            <input type="color" name="category" value={formData.items.category} onChange={handleItemsChange} required />
                        </label>

                    </div>

                    <div className={styles.column}>

                        <label>
                            Category Content:
                            <select name="categoryContent" value={formData.items.categoryContent} onChange={handleItemsChange} required>
                                {categoryOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Para1:
                            <input type="text" name="para1" value={formData.items.para1} onChange={handleItemsChange} required />
                        </label>
                        <label>
                            Para2:
                            <input type="text" name="para2" value={formData.items.para2} onChange={handleItemsChange} required />
                        </label>
                        <label>
                            Outside Image:
                            <input type="file" name="outsideimage" onChange={(e) => handleImageChange(e, 'image1')} accept="image/*" />
                        </label>

                        <label>
                            Inner Image:
                            <input type="file" name="innerimage" onChange={(e) => handleImageChange(e, 'image2')} accept="image/*" />
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

export default BlogForm;
