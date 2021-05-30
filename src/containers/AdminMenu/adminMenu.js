import React from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../../components/Button";
import classes from "./adminMenu.module.css";

const AdminMenu = () => {
  const location = useLocation();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Admin</h2>
      <div className={classes.menuBar}>
        <div className={classes.btnContainer}>
          <Link to="/products">
            <Button
              classes={{
                root:
                  location.pathname === "/products"
                    ? classes.adminMenuButtonActive
                    : classes.adminMenuButton,
              }}
            >
              Ապրանքներ
            </Button>
          </Link>
        </div>
        <div className={classes.btnContainer}>
          <Link to="/">
            <Button
              classes={{
                root:
                  location.pathname === "/"
                    ? classes.adminMenuButtonActive
                    : classes.adminMenuButton,
              }}
            >
              Հաճախորդներ
            </Button>
          </Link>
        </div>
        <div className={classes.btnContainer}>
          <Link to="/categories">
            <Button
              classes={{
                root:
                  location.pathname === "/categories"
                    ? classes.adminMenuButtonActive
                    : classes.adminMenuButton,
              }}
            >
              Կատեգորիաներ
            </Button>
          </Link>
        </div>
        <div className={classes.btnContainer}>
          <Link to="/orders">
            <Button
              classes={{
                root:
                  location.pathname === "/orders"
                    ? classes.adminMenuButtonActive
                    : classes.adminMenuButton,
              }}
            >
              Պատվերներ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
