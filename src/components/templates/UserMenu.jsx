// // import React, { useState } from 'react';
// // import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// // import { getProfile } from 'services/user'; // تابع برای دریافت اطلاعات کاربر
// // import { logout } from 'services/auth'; // تابع برای خروج از حساب کاربری
// // import { useNavigate } from 'react-router-dom'; // برای هدایت به صفحه اصلی
// // import styles from './UserMenu.module.css'; // استایل‌ها

// // const UserMenu = () => {
// //     const [isOpen, setIsOpen] = useState(false); // وضعیت نمایش منو
// //     const queryClient = useQueryClient(); // برای مدیریت cache
// //     const navigate = useNavigate(); // استفاده از hook برای هدایت

// //     // دریافت اطلاعات کاربر
// //     const { data: user, isLoading, error } = useQuery(['userInfo'], getProfile); // اصلاح queryKey به آرایه

// //     // تابع برای خروج از حساب کاربری
// //     const { mutate: logoutMutate } = useMutation(logout, {
// //         onSuccess: () => {
// //             // پاک کردن کوکی‌ها و ری‌فچ اطلاعات کاربر
// //             queryClient.invalidateQueries(['userInfo']); // ری‌فچ اطلاعات کاربر
// //             navigate('/'); // هدایت به صفحه اصلی
// //         },
// //         onError: (error) => {
// //             console.error('Error logging out:', error); // مدیریت خطا
// //         },
// //     });

// //     const toggleMenu = () => {
// //         setIsOpen(!isOpen); // کشویی کردن منو
// //     };

// //     const handleLogout = () => {
// //         logoutMutate(); // خروج از حساب کاربری
// //     };

// //     // در صورتی که داده‌ها در حال بارگذاری هستند
// //     if (isLoading) return <p>در حال بارگذاری...</p>; 
// //     // در صورتی که خطایی پیش آمده باشد
// //     if (error) return <p>مشکلی پیش آمده است: {error.message}</p>; 

// //     console.log("User data:", user); // برای دیباگ اطلاعات کاربر

// //     return (
// //         <div className={styles.userMenu}>
// //             <button onClick={toggleMenu} className={styles.menuButton}>
// //             <img src="profile.svg" />
// //                 دیوار من
// //             </button>
// //             {isOpen && (
// //                 <div className={styles.dropdown}>
// //                     <p>{user.name}</p> {/* نام کاربر */}
// //                     <button onClick={handleLogout} className={styles.logoutButton}>
// //                         خروج از حساب کاربری
// //                     </button>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default UserMenu;

// import React, { useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { getProfile } from 'services/user'; // تابع برای دریافت اطلاعات کاربر
// import { logout } from 'services/auth'; // تابع برای خروج از حساب کاربری
// import { useNavigate } from 'react-router-dom'; // برای هدایت به صفحه اصلی
// import styles from './UserMenu.module.css'; // استایل‌ها

// const UserMenu = () => {
//     const [isOpen, setIsOpen] = useState(false); // وضعیت باز یا بسته بودن منو
//     const queryClient = useQueryClient();
//     const navigate = useNavigate(); // استفاده از hook برای هدایت

//     // دریافت اطلاعات کاربر
//     const { data: user, isLoading, error } = useQuery(['userInfo'], getProfile);

//     // تابع برای خروج از حساب کاربری
//     const { mutate: logoutMutate } = useMutation(logout, {
//         onSuccess: () => {
//             // پاک کردن کوکی‌ها و ری‌فچ اطلاعات کاربر
//             queryClient.invalidateQueries(['userInfo']); // ری‌فچ اطلاعات کاربر
//             navigate('/'); // هدایت به صفحه اصلی
//         },
//         onError: (error) => {
//             console.error('Error logging out:', error);
//         },
//     });

//     const toggleMenu = () => {
//         setIsOpen(prev => !prev); // کشویی کردن منو
//     };

//     const handleLogout = () => {
//         logoutMutate(); // خروج از حساب کاربری
//     };

//     if (isLoading) return <p>در حال بارگذاری...</p>; // بارگذاری داده‌ها
//     if (error) return <p>مشکلی پیش آمده است: {error.message}</p>; // خطا در بارگذاری

//     return (
//         <div className={styles.userMenu}>
//             <button onClick={toggleMenu} className={styles.menuButton}>
//                 دیوار من
//             </button>
//             {isOpen && (
//                 <div className={styles.dropdown}>
//                     {user ? (
//                         <>
//                             <p>{user.name}</p> {/* نام کاربر */}
//                             <button onClick={handleLogout} className={styles.logoutButton}>
//                                 خروج از حساب کاربری
//                             </button>
//                             <button onClick={() => navigate('/dashboard')} className={styles.userPanelButton}>
//                                 پنل کاربری
//                             </button>
//                         </>
//                     ) : (
//                         <button onClick={() => navigate('/auth')} className={styles.loginButton}>
//                             ورود به حساب کاربری
//                         </button>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UserMenu;

