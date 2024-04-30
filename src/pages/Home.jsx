import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import ArtCard from "../components/ArtCard";
import ArtCategory from "../components/ArtCategory";
import { GiThreeLeaves } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Rating } from "@smastrom/react-rating";

const Home = () => {
  const allArtData = useLoaderData();
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const handleType = () => {
    // access word count number
    console.log(count);
  };
  return (
    <div>
      <div className="my-10">
        <Fade>
          <Slider></Slider>
        </Fade>
      </div>
      <Fade>
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-2">
            <GiThreeLeaves className="text-6xl text-[#A55E3F]"></GiThreeLeaves>
          </div>
          <h2 className="text-5xl text-[#A55E3F] ">
            We are{" "}
            <Typewriter
              words={["Art", "Craft", "Skilled", "The Best!"]}
              loop={Infinity}
              cursor
              cursorStyle="..."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </h2>
          <h2 className="text-xl mt-4 mb-8 text-center text-[#A55E3F]">
            We are here to provide the best of the best services for your
            different taste of art.
          </h2>
        </div>
      </Fade>

      <Fade>
        <div className="mb-10">
          <h2 className="text-5xl text-center font-semibold text-[#A55E3F]">
            Craft items section
          </h2>
          <h2 className="text-xl mt-4 mb-8 text-center text-[#A55E3F]">
            Here you can see some of the best artworks we have done. We are not
            done yet. We are working hard so that we can excel even further.
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allArtData.slice(0, 6).map((singleArt) => (
              <ArtCard key={singleArt._id} singleArt={singleArt}></ArtCard>
            ))}
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="my-10">
          <h2 className="text-5xl text-center mb-6 font-semibold text-[#A55E3F]">
            The personals who make us best
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-base-100 shadow-xl">
              <div className="flex flex-col">
                <figure className=" w-96 h-96 p-4 pt-8 flex-grow">
                  <img
                    src="https://i.postimg.cc/26zqCC7Q/ec07658e98a50c4f847f448be0c4e5ce.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl text-[#A55E3F]">
                    Our senior artist
                  </h2>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="flex flex-col">
                <figure className=" w-96 h-96 p-4 pt-8 flex-grow">
                  <img
                    src="https://i.postimg.cc/MpNNkTxL/0a0af549c7a8d0ae4795eaaa38b0b487.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl text-[#A55E3F]">
                    Our Market Executive
                  </h2>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="flex flex-col">
                <figure className=" w-96 h-96 p-4 pt-8 flex-grow">
                  <img
                    src="https://i.postimg.cc/2ypGMVsk/8c8e4d023cd2df5c9726dc2fe1ba9323.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl text-[#A55E3F]">
                    Our Social Media Manager
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <div>
        <Fade>
          <ArtCategory></ArtCategory>
        </Fade>
      </div>
      {/**   -------------------------- */}
      <div></div>
      <h2 className="text-5xl text-center mb-6 font-semibold text-[#A55E3F]">
        Our Reviews
      </h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="card bg-base-100 shadow-xl">
            <div className="flex flex-col">
              <div className="pt-4 pl-8">
                <img
                  className="w-16 h-16 rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.postimg.cc/L4T2fzB3/b4c7198c2176094f83ae770b1b9df3d0.jpg"
                />
              </div>
              <div className="pt-4 pl-8">
                <h2 className="text-2xl text-[#A55E3F]">Alexa Ross</h2>
                <p className="flex gap-2 text-xl text-[#A55E3F]">
                  Rating:{" "}
                  <Rating style={{ maxWidth: 100 }} value="5" readOnly />
                </p>
                <p className="text-[#A55E3F] pb-10">
                  I was looking for an artist for a charcoal art.I got the the
                  best piece of artwork from them. Totally recommended.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 shadow-xl">
            <div className="flex flex-col">
              <div className="pt-4 pl-8">
                <img
                  className="w-16 h-16 rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.postimg.cc/13DWnKD9/a0c3de191042b178a7ce3bc9e99cc277.jpg"
                />
              </div>
              <div className="pt-4 pl-8">
                <h2 className="text-2xl text-[#A55E3F]">Paul B.</h2>
                <p className="flex gap-2 text-xl text-[#A55E3F]">
                  Rating:{" "}
                  <Rating style={{ maxWidth: 100 }} value="5" readOnly />
                </p>
                <p className="text-[#A55E3F] pb-10">
                  I am an admirer of oil paintings. I brought lot of art works from different people but they gave me the best results. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 shadow-xl">
            <div className="flex flex-col">
              <div className="pt-4 pl-8">
                <img
                  className="w-16 h-16 rounded-full"
                  alt="Tailwind CSS Navbar component"
                  src="https://i.postimg.cc/Pq2QYVJk/33439d1296b28973f66542d6ca4dd530.jpg"
                />
              </div>
              <div className="pt-4 pl-8">
                <h2 className="text-2xl text-[#A55E3F]">Ben Chillwell</h2>
                <p className="flex gap-2 text-xl text-[#A55E3F]">
                  Rating:{" "}
                  <Rating style={{ maxWidth: 100 }} value="5" readOnly />
                </p>
                <p className="text-[#A55E3F] pb-10">
                  I was looking for an Cartoonist for my youtube video.They provided me the best cartoon artwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
