import AccordionSection from "./AccordionSection";

function FAQs() {

    return (
        <div className="faqs">
            <div className="heading">
                <h6>FAQs</h6>
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
            <div className="accordion">
                <AccordionSection
                    question="Can beginners take the course?"
                    answer="Yes, the course is for both beginners and experienced producers. If you're starting out as a beginner, the course will give you the essential foundation to confidently create new melodies and beats from scratch." 
                />
                <AccordionSection
                    question="What level of experience with music production do i need to start?"
                    answer="Whether you're new to music production or feeling stuck in your progress. The course will teach you how to create awesome melodies and beats. It's not just theory; we'll make beats together! From basic melodies to drums and bass, you'll learn step by step."
                />
                <AccordionSection
                    question="Would there be practical sessions?"
                    answer="That's right! This course isn't some boring music theory training. After each level, we'll apply what you learn by creating pro level beats together. We would start creating melodies, then add counter melodies and chords as well as drums and bass."
                />
                {/* <AccordionSection
                    question="How long does it take to apply?"
                    answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                /> */}
            </div>
            <svg
                width={60}
                height={257}
                viewBox="0 0 79 257"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="place-left"
            >
                <path
                    d="M76.7644 2H-336V254.449H76.7644V2Z"
                    stroke="#0050EC"
                    strokeWidth={4}
                    strokeMiterlimit={10}
                />
            </svg>
        </div>
    )
}

export default FAQs;