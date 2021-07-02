import React, { useContext } from "react";
import clsx from "clsx";
import { CartContext } from "../../helpers/CartProvider";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CartBar from "./CartBar";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
}));

export default function MobileCartDrawer() {
  const { cartTotal, totalCartItems } = useContext(CartContext);
  const invoiceTaxes = cartTotal * TAX_RATE;
  const invoiceTotal = invoiceTaxes + cartTotal;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <CartBar />
      </List>
    </div>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Link to="#" onClick={toggleDrawer(anchor, true)}>
            <Typography component="span" className="cart-icon">
              <i className="fas fa-shopping-cart"></i>
              <Typography component="span" className="count">
                {totalCartItems}
              </Typography>
            </Typography>
            <Typography
              component="span"
              className="cart-amount ml-2"
            >{`$ ${ccyFormat(invoiceTotal)}`}</Typography>
          </Link>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
