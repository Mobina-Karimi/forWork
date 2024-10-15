import styles from "./Sidebar.module.css";

function Sidebar({ categories, selectedCategory, onCategorySelect }) {
  // بررسی وجود دسته‌بندی‌ها
  if (!categories || categories.length === 0) {
    return <p>دسته‌بندی‌ای یافت نشد</p>; // نمایش پیام مناسب در صورت عدم وجود دسته‌بندی‌ها
  }

  return (
    <div className={styles.sidebar}>
      <h4>دسته بندی ها</h4>
      <ul className={styles.categoryList}>
        {/* نمایش گزینه "همه" تنها یکبار */}
        <li>
          <a
            href="#"
            className={selectedCategory === "همه" ? styles.active : ""}
            onClick={(e) => {
              e.preventDefault();
              onCategorySelect("همه"); // انتخاب دسته‌بندی "همه"
            }}
          >
            همه
          </a>
        </li>

        {/* نمایش سایر دسته‌بندی‌ها به صورت لینک‌های <a> */}
        {categories.filter(category => category.name !== "همه").map((category) => (
          <li key={category._id || category.slug}>
            <a
              href="#"
              className={selectedCategory === category.name ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault(); 
                onCategorySelect(category.name); // انتخاب دسته‌بندی مشخص
              }}
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

