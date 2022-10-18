import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <div className="color--home">
      <ol>
        <Link to="triprography">
          <li>lac#3--Triprography</li>
        </Link>
        <Link to="button">
          <li>lac#4,5,6--Button</li>
        </Link>{" "}
        <Link to="textField">
          <li>lac#7--TextField</li>
        </Link>{" "}
        <Link to="select">
          <li>lac#8--selectComponent</li>
        </Link>
        <Link to="radioButton">
          <li>lac#9--radioButton</li>
        </Link>{" "}
        <Link to="checkBok">
          <li>lac#10--checkBok</li>
        </Link>{" "}
        <Link to="switch">
          <li>lac#11--Switch</li>
        </Link>
        <Link to="rating">
          <li>lac#12--Rating</li>
        </Link>{" "}
        <Link to="autoComplete">
          <li>lac#13--AutoComplete</li>
        </Link>
        <Link to="layout">
          <li>lac#15,16,17--Layout</li>
        </Link>{" "}
        <Link to="card">
          <li>lac#18--Card</li>
        </Link>
        <Link to="accordian">
          <li>lac#19--Accordian</li>
        </Link>
        <Link to="imagelist">
          <li>lac#20--ImageList</li>
        </Link>
        <Link to="navbar">
          <li>lac#22--Navbar</li>
        </Link>{" "}
        <Link to="link">
          <li>lac#23--Link</li>
        </Link>{" "}
        <Link to="breadCrums">
          <li>lac#24--BreadCrums</li>
        </Link>{" "}
        <Link to="drawer">
          <li>lac#25--Drawer</li>
        </Link>{" "}
        <Link to="speedDail">
          <li>lac#26--SpeedDail</li>
        </Link>{" "}
        <Link to="buttonNavigation">
          <li>lac#27--ButtonNavigation</li>
        </Link>
        <Link to="avatar">
          <li>lac#28--Avatar</li>
        </Link>
        <Link to="badge">
          <li>lac#29--Badge</li>
        </Link>
        <Link to="list">
          <li>lac#30--List</li>
        </Link>{" "}
        <Link to="list">
          <li>lac#30--List</li>
        </Link>{" "}
        <Link to="list">
          <li>lac#30--List</li>
        </Link>{" "}
        <Link to="list">
          <li>lac#30--List</li>
        </Link>{" "}
        <Link to="list">
          <li>lac#30--List</li>
        </Link>
      </ol>
    </div>
  );
}

export default Home;
