import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
const Banner = () => {

    return (
        <div className="carousel w-full h-[600px]">
            {/* slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-8 p-20 w-3/4">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className="mb-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-8 p-20 w-3/4">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className="mb-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4 ">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide3  */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-8 p-20 w-3/4">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className="mb-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 4  */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-8 p-20 w-3/4">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className="mb-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 5  */}
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute h-full flex rounded-xl items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-8 p-20 w-3/4">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className="mb-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* slide 6  */}
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl flex items-center gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white space-y-8 p-20 w-3/4">
                        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                        <p className="mb-4">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error mr-4">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;