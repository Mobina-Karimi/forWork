import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// import UserMenu from "components/templates/UserMenu";

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <input
          type="text"
          placeholder="جستجو در همه آگهی ها"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBox}
        />
      </div>
      <div>
      <Link to="/auth">
          <span>
            <img src="profile.svg" />
            <p>دیوار من</p>
          </span>
          {/* <UserMenu/> */}
        </Link>
        <Link to="/dashboard" className={styles.button}>ثبت آگهی</Link>
      </div>
    </header>
  );
}

export default Header;


