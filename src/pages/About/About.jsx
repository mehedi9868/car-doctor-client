import person from "../../../src/assets/images/about_us/person.jpg";
import parts from "../../../src/assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero bg-base-200 py-20 mb-20">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="w-1/2 relative">
                    <img src={person} className="h-[473px] w-4/5 rounded-lg shadow-2xl" />
                    <img src={parts} className=" h-[332px] w-3/5 rounded-lg border-8 border-white shadow-2xl absolute right-0 top-1/2" />
                </div>
                <div className="w-1/2">
                    <h3 className="text-xl font-bold text-orange-600">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;