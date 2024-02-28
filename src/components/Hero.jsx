import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero">
            <h1>Begin Today On The Path To Success As A Music Producer.</h1>
            <p>Discover Wave Music Academy's premium masterclasses featuring top industry professionals. Explore topics such as music production, mixing, mastering, and more.</p>
            <button onClick={() => navigate('/enroll-now')}>Enroll Now</button>
        </div>
    )
};

export default Hero;