import { useState } from 'react';

const AccordionSection = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-content">
            <div className="heading-control" onClick={() => setIsOpen(!isOpen)}>
                <p style={{ color: isOpen ? 'rgba(0, 80, 236, 1)' : 'initial' }}>{question}</p>
                <svg
                    width={25}
                    height={20}
                    viewBox="0 0 34 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <path
                        d="M1.42913 1.23197C1.88913 0.763289 2.51294 0.5 3.16338 0.5C3.81381 0.5 4.43762 0.763289 4.89762 1.23197L17.0398 13.607L29.1819 1.23197C29.6446 0.776571 30.2642 0.524584 30.9074 0.53028C31.5505 0.535976 32.1658 0.798899 32.6206 1.26242C33.0754 1.72594 33.3333 2.35297 33.3389 3.00846C33.3445 3.66395 33.0973 4.29546 32.6504 4.76697L18.774 18.9095C18.314 19.3781 17.6902 19.6414 17.0398 19.6414C16.3893 19.6414 15.7655 19.3781 15.3055 18.9095L1.42913 4.76697C0.969272 4.29815 0.710938 3.66238 0.710938 2.99947C0.710938 2.33656 0.969272 1.70079 1.42913 1.23197Z"
                        fill="#0050EC"
                    />
                </svg>
            </div>
            {isOpen && (
                <p className="faq-answers">{answer}</p>
            )}
        </div>
    );
};

export default AccordionSection;