import Avatar from "@material-ui/core/Avatar";
import user from "../styles/user.module.css";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Notifications from "@material-ui/icons/Notifications";
import Link from "next/link";

const NavUser = () => {
  const mystyle = {
    width: "25px",
    height: "25px",
    color: "white",
    marginRight: "10px",
  };
  return (
    <div className={user.nav}>
      <div className={user.headNav}>
        <Avatar style={{ marginRight: "10px" }} />
        <div>
          <h4>username</h4>
          <a href="/user/profile">Edit Profile</a>
        </div>
      </div>
      <div className={user.bodyNav}>
        <div>
          <div className={user.link}>
            <Avatar style={mystyle} />
            <h5>My Account</h5>
          </div>
          <div id="sublink" className={user.sublink}>
            <Link href="/user/profile">
              <p>Personal Profile</p>
            </Link>
            <Link href="/user/address">
              <p>Addres List</p>
            </Link>
            <Link href="/user/bank">
              <p>Bank Account</p>
            </Link>
          </div>
        </div>
        <div className={user.link}>
          <Avatar style={mystyle}>
            <ListAltIcon fontSize="small" />
          </Avatar>
          <h5>My Order</h5>
        </div>
        <div className={user.link}>
          <Avatar style={mystyle}>
            <Notifications fontSize="small" />
          </Avatar>
          <h5>Notifications</h5>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
