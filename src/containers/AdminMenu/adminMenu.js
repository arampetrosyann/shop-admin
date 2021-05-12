import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../components/Button";
import classes from "./adminMenu.module.css";

const AdminMenu = (props) => {
  const [menuItemActive, setMenuItemActive] = useState(null);
  const [subMenuItemActive, setSubMenuItemActive] = useState("");

  const history = useHistory();

  const changePage = ["products", ""];

  const handleMenuItem = (n) => {
    setMenuItemActive((prev) => (prev === n ? null : n));
    history.replace(`./${changePage[n]}`);
  };

  const handleSubMenuItem = (n) => {
    setSubMenuItemActive(n);
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Bigbox Admin</h2>
      <div className={classes.menuBar}>
        <div>
          <Link to="/products">
            <Button
              classes={{
                root:
                  props.activeClass === 0
                    ? classes.adminMenuButtonActive
                    : classes.adminMenuButton,
              }}
            >
              Ապրանքներ
            </Button>
          </Link>
          {props.activeClass === 0 && (
            <div className={classes.submenu}>
              <ul>
                <li
                  className={
                    subMenuItemActive === "article1"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article1")}
                >
                  Bestsellers
                </li>
                <li
                  className={
                    subMenuItemActive === "article2"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article2")}
                >
                  New Arrivals
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <Link to="/">
            <Button
              classes={{
                root:
                  props.activeClass === 1
                    ? classes.adminMenuButtonActive
                    : classes.adminMenuButton,
              }}
            >
              Հաճախորդներ
            </Button>
          </Link>
          {props.activeClass === 1 && (
            <div className={classes.submenu}>
              <ul>
                <li
                  className={
                    subMenuItemActive === "article11"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article11")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article22"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article22")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article33"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article33")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article44"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article44")}
                >
                  Manage Articles
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <Button
            classes={{
              root:
                menuItemActive === 2
                  ? classes.adminMenuButtonActive
                  : classes.adminMenuButton,
            }}
            onClick={() => handleMenuItem(2)}
          >
            Dashboard
          </Button>
          {menuItemActive === 2 && (
            <div className={classes.submenu}>
              <ul>
                <li
                  className={
                    subMenuItemActive === "article13"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article13")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article24"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article24")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article35"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article35")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article46"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article46")}
                >
                  Manage Articles
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <Link to="/reviews">
            <Button
              classes={{
                root:
                  props.activeClass === 2
                    ? classes.adminMenuButtonActive
                    : classes.adminMenuButton,
              }}
              onClick={() => handleMenuItem(2)}
            >
              Կարծիքներ
            </Button>
          </Link>
          {props.activeClass === 2 && (
            <div className={classes.submenu}>
              <ul>
                <li
                  className={
                    subMenuItemActive === "article14"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article14")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article25"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article25")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article36"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article36")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article47"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article47")}
                >
                  Manage Articles
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
