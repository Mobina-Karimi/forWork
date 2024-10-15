import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCategory, deleteAllPosts } from 'services/admin'; 
import styles from "./CategoryForm.module.css";

function CategoryForm() {
    const queryClient = useQueryClient();
    const [form, setForm] = useState({ name: '', slug: '', icon: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const { mutate: addCategoryMutate, isLoading: isAddingCategory, error, data } = useMutation(
        addCategory, 
        {
            onSuccess: () => {
                queryClient.invalidateQueries('get-categories');
                setForm({ name: '', slug: '', icon: '' }); // Reset form fields
                setSuccessMessage('دسته بندی با موفقیت اضافه شد.');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000); // Clear success message after 3 seconds
            },
            onError: (error) => {
                console.error('Error adding category:', error);
            },
        }
    );

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!form.name || !form.slug || !form.icon) {
            alert('لطفاً تمام فیلدها را پر کنید.');
            return;
        }
        addCategoryMutate(form);
    };

    return (
        <>
            <form onSubmit={submitHandler} className={styles.form}>
                <h3>دسته بندی جدید</h3>
                {!!error && <p>مشکلی پیش آمده است: {error.message}</p>}
                {successMessage && <p>{successMessage}</p>}
                <label htmlFor="name">اسم دسته بندی</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={form.name} 
                    onChange={changeHandler} // اضافه کردن onChange برای فیلد name
                />
                <label htmlFor="slug">اسلاگ</label>
                <input 
                    type="text" 
                    name="slug" 
                    id="slug" 
                    value={form.slug} 
                    onChange={changeHandler} // اضافه کردن onChange برای فیلد slug
                />
                <label htmlFor="icon">آیکون</label>
                <input 
                    type="text" 
                    name="icon" 
                    id="icon" 
                    value={form.icon} 
                    onChange={changeHandler} // اضافه کردن onChange برای فیلد icon
                />
                <button type="submit" disabled={isAddingCategory}>
                    {isAddingCategory ? 'در حال ایجاد...' : 'ایجاد'}
                </button>
            </form>
        </>
    );
}

export default CategoryForm;


