import "../Styles/UserPage.css";
import Header from "./Header";

function UserPage() {
  return (
    <>
      <h1 className="welcome-text">Welcome Brian</h1>
      <div className="user-page-div">
        <div className="user-page-inner-div">
          <div className="user-information-left">
            <div className="user-information-div">
              <h1 className="left-side-user-information">
                Registration:&nbsp;
              </h1>
              <h1 className="right-side-user-information"> 2.5.2024</h1>
            </div>
            <div className="user-information-div">
              <h1 className="left-side-user-information">Points:&nbsp;</h1>
              <h1 className="right-side-user-information">109</h1>
            </div>
            <div className="user-information-div">
              <h1 className="left-side-user-information">Last order:&nbsp;</h1>
              <h1 className="right-side-user-information">10.7.2024</h1>
            </div>
            <div className="user-information-div">
              <h1 className="left-side-user-information">Email:&nbsp;</h1>
              <h1 className="right-side-user-information">
                brian.julius.k@gmail.com
              </h1>
            </div>
            <div className="user-information-div">
              <h1 className="left-side-user-information">Address:&nbsp;</h1>
              <h1 className="right-side-user-information">
                921/24 04012 Kosice Slovakia
              </h1>
            </div>
          </div>
          <div className="user-information-right">
            <img src="UserLogo.svg" className="user-logo-img"></img>
            <h1 style={{ marginTop: "-10px" }} className="user-name">
              Brian Julius Kiss
            </h1>
            <div className="acc-settings-logout">
              <h1
                style={{
                  marginTop: "0px",
                }}
                className="user-settings"
              >
                Account settings
              </h1>
              <h1 style={{ marginTop: "0px" }} className="user-settings">
                &nbsp;|&nbsp;
              </h1>
              <h1 style={{ marginTop: "0px" }} className="user-settings">
                Logout
              </h1>
            </div>
            <img src="Barcode.png" className="barcode-img"></img>
            <h1 className="user-id">Id: 2048292482193310</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
