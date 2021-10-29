import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import "./style.css";
import { BsSearch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { ReduxStore } from "../../types/storeType";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTheName, setCleanAll, setSearch } from "../../redux/action/actions";
import NavProf from "./NavProf";
import { useHistory } from "react-router";

function Navbar() {
  const [userName, setuserName] = useState<string>("");
  const user = useSelector((state: ReduxStore) => state.user);
  const weather = useSelector((state: ReduxStore) => state.weather);
  const dispatch = useDispatch();
  const history = useHistory();
  //
  const [DropDown, setDropDown] = useState(false);
  const closeDropdown = () => setDropDown(false);
  return (
    <div className="navContainer">
      <Container>
        <Row className="navBar">
          <Col xs="6" md="4" className="d-flex align-items-center my-1">
            <Link
              to="/"
              className="mr-3 navIcon"
              onClick={(x) => dispatch(setCleanAll())}
            >
              <AiFillHome size="1.8rem" className="" />
            </Link>
            <div className="navSearch">
              <BsSearch className="mx-1" size="1.5rem" />
              <Form.Control
                value={weather.search}
                type="text"
                placeholder="...search"
                onChange={(e) => {
                  dispatch(setSearch(e.target.value));
                  if (e.target.value.length > 2) {
                    history.push("/");
                  }
                }}
              />
            </div>
          </Col>
          <Col
            xs="6"
            md="8"
            className="d-flex align-items-center justify-content-end my-1"
          >
            {" "}
            <NavLink
              className="d-flex align-items-center navBtn font-weight-bold mr-2"
              exact
              to="/"
              activeClassName="selectedNavb"
              onClick={() => dispatch(setSearch(""))}
            >
              <span className="text-dropdown">Home</span>
            </NavLink>
            {!user?.name ? (
              <FormControl
                className="nameInput"
                placeholder="...your name"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                onKeyPress={(e: any) =>
                  e.key === "Enter" && dispatch(addTheName(userName))
                }
              />
            ) : (
              <>
                <div className="separator mr-2"> </div>

                {/*  */}
                <div className="position-relative">
                  <OutsideClickHandler
                    onOutsideClick={() => {
                      setDropDown(false);
                    }}
                  >
                    <div
                      // activeClassName="selectedNavb"
                      // exact
                      // to="/profile"
                      className="navBtn profileName d-flex align-items-center mr-2"
                      onClick={() => setDropDown(!DropDown)}
                      onMouseEnter={() => setDropDown(!DropDown)}
                      onMouseOver={() => setDropDown(true)}
                    >
                      <h5 className="my-0">{user.name}</h5>{" "}
                    </div>
                    <div>
                      {DropDown && <NavProf closeDropdown={closeDropdown} />}
                    </div>
                  </OutsideClickHandler>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
