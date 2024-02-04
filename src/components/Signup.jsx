import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    return (
        <div className="signup">
            <div className="signup-heading">
                <h3>Sign Up For Logic-Pro Mixing & Mastering Masterclass</h3>
                <p>Fill up the form below and proceed to make payments so we
                    can get you started</p>
            </div>
            <form className="enroll-now-form">
                <div className="input-group-grid">
                    <div className="input-group">
                        <input type="text" name="first_name" placeholder="Input name" />
                        <label htmlFor="first-name">First Name</label>
                    </div>
                    <div className="input-group">
                        <input type="text" name="last_name" placeholder="Input name" />
                        <label htmlFor="last-name">Last Name</label>
                    </div>
                </div>
                <div className="input-group-grid">
                    <div className="input-group">
                        <input type="date" name="date_of_birth" />
                        <label htmlFor="date-of-birth">Date of Birth</label>
                    </div>
                    <div className="input-group">
                        <input type="email" name="email_address" placeholder="Input email" />
                        <label htmlFor="email-address">Email Address</label>
                    </div>
                </div>
                <div className="input-group-grid">
                    <div className="input-group">
                        <input type="text" name="telephone" placeholder="Input telephone number" />
                        <label htmlFor="telephone-number">Telephone Number</label>
                    </div>
                    <div className="input-group">
                        <select name="location">
                            <option value="">Select Country</option>
                            <option value="nigeria">Nigeria</option>
                            <option value="usa">USA</option>
                        </select>
                        <label htmlFor="location">Location</label>
                    </div>
                </div>
                <div className="input-group-grid">
                    <div className="input-group">
                        <select name="knowledge">
                            <option value="">Select</option>
                            <option value="fl">Fl Studio</option>
                            <option value="logic">Logic Pro</option>
                            <option value="mixing_n_mastering">Mixing & Mastering</option>
                        </select>
                        <label htmlFor="knowledge">Existing Course Knowledge</label>
                    </div>
                    <div className="input-group">
                        <select name="skill_level">
                            <option value="">Select</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="professional">Professional</option>
                        </select>
                        <label htmlFor="location">Your skill level</label>
                    </div>
                </div>
                <div className="input-group-grid">
                    <div className="radio-input-group">
                        <input type="radio" name="masterclass" />
                        <label htmlFor="masterclass">4 days masterclass</label>
                        <p>$30.99</p>
                    </div>
                    <div className="radio-input-group">
                        <input type="radio" name="full_course" />
                        <label htmlFor="full-course">5 months access to the full course</label>
                        <p>$119.99</p>
                    </div>
                </div>
                <div className="submit-button-div">
                    <button type="submit">Proceed To Payment</button>
                    <a onClick={() => navigate('/')}>Back to home</a>
                </div>
            </form>
        </div>
    )
}

export default Signup;