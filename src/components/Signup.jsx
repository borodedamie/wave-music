import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup">
      <div className="signup-heading">
        <h3>Sign Up For Logic-Pro Mixing & Mastering Masterclass</h3>
        <p>
          Fill up the form below and proceed to make payments so we can get you
          started
        </p>
      </div>
      <form className="enroll-now-form">
        <div className="input-group-grid">
          <div className="input-group">
            <input type="text" name="full_name" placeholder="Input name" />
            <label htmlFor="full-name">Full Name</label>
          </div>
          <div className="input-group">
            <input type="text" name="state" placeholder="Input state" />
            <label htmlFor="state">State</label>
          </div>
        </div>
        <div className="input-group-grid">
          <div className="input-group">
            <input
              type="email"
              name="email_address"
              placeholder="Input email"
            />
            <label htmlFor="email-address">Email Address</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="telephone"
              placeholder="Input telephone number"
            />
            <label htmlFor="telephone-number">Mobile Number</label>
          </div>
        </div>
        <div className="input-group-grid">
          <div className="input-group">
            {/* <input type="date" name="date_of_birth" /> */}
            <select name="logic_or_not">
              <option value="">Select Yes or No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="logic-or-not">Have you ever used logic?</label>
          </div>
          <div className="input-group">
            <select name="logic_or_not">
              <option value="">Select Yes or No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="logic-or-not">
              Do you play any musical instrument?
            </label>
          </div>
        </div>
        <div className="input-group-grid">
          <div className="input-group">
            <select name="logic_or_not">
              <option value="">Select Yes or No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="logic-or-not">Are you new to this?</label>
          </div>
          <div className="input-group">
            <select name="knowledge">
              <option value="">Select</option>
              {/* <option value="fl">Fl Studio</option> */}
              <option value="production">Production</option>
              <option value="mixing_n_mastering">Mixing & Mastering</option>
            </select>
            <label htmlFor="knowledge">Existing Course Knowledge</label>
          </div>
        </div>
        <div className="input-group-grid">
          <div className="radio-input-group">
            <input type="radio" name="masterclass" />
            <label htmlFor="masterclass">4 days masterclass</label>
            <p>$50.99</p>
          </div>
          <div className="radio-input-group">
            <input type="radio" name="full_course" />
            <label htmlFor="full-course">
              4 months access to the full course
            </label>
            <p>$500.99</p>
          </div>
        </div>
        <div className="submit-button-div">
          <button type="submit">Proceed To Payment</button>
          <a onClick={() => navigate("/")}>Back to home</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
