import React, { useState } from "react";
import Button from "../../components/Button";
import classes from "./adminMenu.module.css";

const AdminMenu = () => {
  const [menuItemActive, setMenuItemActive] = useState(null);
  const [subMenuItemActive, setSubMenuItemActive] = useState("");

  const handleMenuItem = (n) => {
    setMenuItemActive((prev) => (prev === n ? null : n));
  };

  const handleSubMenuItem = (n) => {
    setSubMenuItemActive(n);
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Bigbox Admin</h2>
      <div>
        <div>
          <Button
            classes={{
              button:
                menuItemActive === 1
                  ? classes.adminMenuButtonActive
                  : classes.adminMenuButton,
            }}
            onClick={() => handleMenuItem(1)}
          >
            Dashboard
          </Button>
          {menuItemActive === 1 && (
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
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article2"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article2")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article3"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article3")}
                >
                  Manage Articles
                </li>
                <li
                  className={
                    subMenuItemActive === "article4"
                      ? classes.active
                      : null
                  }
                  onClick={() => handleSubMenuItem("article4")}
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
              button:
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
              button:
                menuItemActive === 3
                  ? classes.adminMenuButtonActive
                  : classes.adminMenuButton,
            }}
            onClick={() => handleMenuItem(3)}
          >
            Dashboard
          </Button>
          {menuItemActive === 3 && (
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
          <Button
            classes={{
              button:
                menuItemActive === 4
                  ? classes.adminMenuButtonActive
                  : classes.adminMenuButton,
            }}
            onClick={() => handleMenuItem(4)}
          >
            Dashboard
          </Button>
          {menuItemActive === 4 && (
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
