import "../Styles/ContactPage.css";
import Header from "./Header";

function ContactPage() {
  return (
    <>
      <div className="contact-page-div">
        <div className="contact-page-left-side">
          <h1 className="contact-us-page-main-title">Contact us</h1>
          <div className="contact-bar">
            <div className="inner-contact-bar">
              <div>
                <h1 className="contact-us-page-title">HQ</h1>
              </div>
              <div className="contact-information">
                <h1 className="contact-page-details-title">Telephone:&nbsp;</h1>
                <h1 className="contact-page-details">02 123 4567</h1>
              </div>
              <div className="contact-information">
                <h1 className="contact-page-details-title">Email:&nbsp;</h1>
                <h1 className="contact-page-details">
                  booker@customer-support.com
                </h1>
              </div>
              <div className="contact-information">
                <h1 className="contact-page-details-title">Address:&nbsp;</h1>
                <h1 className="contact-page-details">
                  Avenue Bajnok 123, 1050 Brussels, Belgium
                </h1>
              </div>
            </div>
            <div className="inner-contact-bar">
              <div>
                <h1 className="contact-us-page-title">Customer support</h1>
              </div>
              <div className="contact-information">
                <h1 className="contact-page-details-title">Telephone:&nbsp;</h1>
                <h1 className="contact-page-details">02 123 4567</h1>
              </div>
              <div className="contact-information">
                <h1 className="contact-page-details-title">Email:&nbsp;</h1>
                <h1 className="contact-page-details">
                  booker@customer-support.com
                </h1>
              </div>
              <div className="contact-information">
                <h1 className="contact-page-details-title">Address:&nbsp;</h1>
                <h1 className="contact-page-details">
                  {" "}
                  Avenue Bajnok 123, 1050 Brussels, Belgium
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-page-right-side">
          <h1 className="contact-page-title">Get in Touch with Us!</h1>
          <h1 className="contact-page-description">
            We’d love to hear from you! Whether you have questions about our
            products, need assistance with an order, or just want to share your
            feedback, our team is here to help. You can reach us through the
            form below, or connect with us on social media. Your satisfaction is
            our top priority, and we’re committed to providing you with the best
            shopping experience!
          </h1>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
