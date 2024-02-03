import AboutImg from "../assets/about-image.svg";

function About() {
    return (
        <div className="about">
            <div className="heading">
                <h6>About</h6>
                <svg
                    width={140}
                    height={12}
                    viewBox="0 0 140 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 2H140" stroke="#0050EC" strokeWidth={4} />
                    <path d="M0 10H140" stroke="#0050EC" strokeWidth={4} />
                </svg>
            </div>
            <div className="content">
                <img src={AboutImg} alt="about image" />
                <p>
                    <span className="bold">Walitali</span> is a top-tier music producer and the brains behind Wave
                    Music Digital Academy. With decades in the game, he's worked
                    with big names like Iceprince, Tiwa Savage, Barijhay, Chopstix,
                    Phazehop, Jessejagz and more, releasing hits on major labels. He's
                    not just about commercial success; <span className="bold">Walitali</span> has deep roots in Hip
                    hop and Afrobeat, shaping some of the genre's biggest hits.
                    <br />
                    <br />
                    Passionate about sharing his knowledge, <span className="bold">Walitali</span> founded Wave
                    Music Digital Academy, offering a comprehensive Music
                    Masterclass. This course, focused on Afrobeat and Hip-hop, covers
                    everything from creating beats to finalizing tracks. It's all done
                    using Logic Pro, with <span className="bold">Walitali</span> diving into its features and plug-ins.
                    <br />
                    <br />
                    In a world where music production is more technical but essential
                    than ever, <span className="bold">Walitali</span> emphasizes the value of digital music-making
                    skills. No need for a fancy school; now you can enroll in the Wave
                    Masterclass from the comfort of your software  with just a laptop.
                    It's a unique opportunity to learn from the pros, including celebrity
                    insights, and collaborate with peers. This masterclass is the ticket
                    to advancing your music career.
                </p>
            </div>
            <svg
                width={60}
                height={257}
                viewBox="0 0 86 257"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="place-right"
            >
                <path
                    d="M414.764 2H2V254.449H414.764V2Z"
                    stroke="#0050EC"
                    strokeWidth={4}
                    strokeMiterlimit={10}
                />
            </svg>
        </div>
    )
}

export default About;