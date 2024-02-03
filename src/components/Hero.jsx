import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="hero">
            <h1>Begin Today On The Path To Success As A Music Producer.</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Non molestie nisl sapien donec congue
                aliquet lectus pellentesque. Id sed posuere diam arcu amet aliquam nec libero.
                Eget platea.</p>
            <button onClick={() => navigate('/enroll-now')}>Enroll Now</button>
        </div>
    )
};

export default Hero;