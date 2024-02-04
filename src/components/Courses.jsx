import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Courses() {
    const navigate = useNavigate();
    const [selectedMasterclass, setSelectedMasterclass] = useState('logic-pro');

    return (
        <div className="courses">
            <div className="heading">
                <h6>Courses</h6>
                <svg
                    width={160}  
                    height={12}
                    viewBox="0 0 160 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 2H160" stroke="#0050EC" strokeWidth={4} />
                    <path d="M0 10H160" stroke="#0050EC" strokeWidth={4} />
                </svg>
            </div>
            <div className="courses-content">
                <div className="control-buttons">
                    <button onClick={() => setSelectedMasterclass('logic-pro')}>Logic Pro Masterclass</button>
                    <button onClick={() => setSelectedMasterclass('fl-studio')}>FL Studio Masterclass</button>
                </div>
                {selectedMasterclass === 'logic-pro' && (
                    <div className="logic-pro-cards">
                        <div className="logic-pro-card">
                            <p className="card-heading">Mixing and Mastering Masterclass</p>
                            <p className="masterclass">4 Days masterclass</p>
                            <p className="masterclass-fee">$30.99</p>
                            <p className="non-masterclass">5 months access to the full course</p>
                            <p className="non-masterclass-fee">$119.99</p>
                            <div className='card-enrol-button'>
                                <button onClick={() => navigate('/enroll-now')}>Enroll Now</button>
                            </div>
                        </div>
                        <div className="logic-pro-card">
                            <p className="card-heading">Production Masterclass</p>
                            <p className="masterclass">4 Days masterclass</p>
                            <p className="masterclass-fee">$30.99</p>
                            <p className="non-masterclass">5 months access to the full course</p>
                            <p className="non-masterclass-fee">$119.99</p>
                            <div className='card-enrol-button'>
                                <button onClick={() => navigate('/enroll-now')}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                )}
                {selectedMasterclass === 'fl-studio' && (
                    <div className="fl-studio-cards">
                        <div className="fl-studio-card mobile-fl-studio-card">
                            <p className="card-heading">Production Masterclass</p>
                            <p className="masterclass">4 Days masterclass</p>
                            <p className="masterclass-fee">$30.99</p>
                            <p className="non-masterclass">5 months access to the full course</p>
                            <p className="non-masterclass-fee">$119.99</p>
                            <div className='card-enrol-button'>
                                <button onClick={() => navigate('/enroll-now')}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Courses;