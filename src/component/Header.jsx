import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import image from "../assets/images/cart.gif";
import { Del } from "../redux/action/action";
import { Navbar, Container, Nav, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.cartreduce.carts);
  console.log("get x data", getdata);
  const [price, setPrice] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dle = (id) => {
    dispatch(Del(id));
  };

  const price1 = () => {
    let total = 0;
    getdata.map((ele, k) => {
      total = ele.price + total;
    });
    setPrice(total);
  };

  useEffect(() => {
    price1();
  }, [price1]);

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Card
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-sharp fa-solid fa-cart-plus text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table />
              <thead>
                <tr>
                  <th>photos</th>
                  <th>Restaurant Name</th>
                </tr>
              </thead>
              <tbody>
                {getdata.map((e) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <NavLink to={`/cards/${e.id}`} onClick={handleClose}>
                            <img
                              src={e.imgdata}
                              style={{ height: "5rem", width: "5rem" }}
                            />
                          </NavLink>
                        </td>
                        <td>
                          <p>{e.rname}</p>
                          <p>price : {e.price}</p>
                          <p>Quantity : {e.qnty}</p>
                          <p
                            style={{
                              //   color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dle(e.id)}
                          >
                            <i className="fas fa-trash "></i>
                          </p>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <p className="text-center ">Total : {price}</p>
              </tbody>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center d-flex justify-content-center align-item-center "
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
                onClick={handleClose}
              ></i>
              <p style={{ fontSize: 22 }}>your cart is empty</p>
              <img
                src={image}
                className="emptycart_img"
                stytle={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}

          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
