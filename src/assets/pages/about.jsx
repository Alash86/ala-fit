import Logo from "../components/logo"
function About() {
    return (
        <div className="container ">
            <h1 className="text-primary fw-bold m-2 p-2">About {< Logo />}</h1>
            <h2 className="text-dark fw-bold m-2 p-2">Our Mission</h2>
            <p className="fs-4 word-wrap ">
                Shark Fit is a leading online training program dedicated to transforming lives through personalized fitness routines and expert guidance. Our platform offers a diverse range of workout plans, nutritional advice, and motivational support to help individuals achieve their fitness aspirations. With a focus on holistic well-being, we empower our members to lead healthier, happier lives.
            </p>
        </div>
    )
}

export default About