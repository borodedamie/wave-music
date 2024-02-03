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
                    question="Is it an online or physical session?"
                    answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                />
                <AccordionSection
                    question="How long does it take to apply?"
                    answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                />
                <AccordionSection
                    question="How long does it take to apply?"
                    answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                />
                <AccordionSection
                    question="How long does it take to apply?"
                    answer="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                />
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