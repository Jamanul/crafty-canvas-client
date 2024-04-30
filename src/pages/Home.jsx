
import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import ArtCard from '../components/ArtCard';
import ArtCategory from '../components/ArtCategory';
import { GiThreeLeaves } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    const allArtData =useLoaderData()
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
      const handleType = () => {
        // access word count number
        console.log(count)
      }
    return (
        <div>
            <div  className='my-10'>
                  <Fade><Slider></Slider></Fade>
            </div>
            <Fade>
            <div className='text-center mb-10'>
                   <div  className='flex items-center justify-center mb-2'><GiThreeLeaves className='text-6xl text-[#A55E3F]'></GiThreeLeaves></div> 
                   <h2 className='text-5xl text-[#A55E3F] '>We are <Typewriter
            words={['Art', 'Craft', 'Skilled', 'The Best!']}
            loop={Infinity}
            cursor
            cursorStyle='...'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          /></h2> 
            </div>
            </Fade>
            
           <Fade>
           <div className='mb-10'>
                <h2 className='text-5xl text-center font-semibold text-[#A55E3F]'>Craft items section</h2>
                <h2 className='text-xl mt-4 mb-8 text-center text-[#A55E3F]'>Here you can see some of the best artworks we have done. We are not done yet. We are working hard so that we can excel even further.</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        allArtData.slice(0,6).map(singleArt=><ArtCard key={singleArt._id} singleArt={singleArt}></ArtCard>)
                    }
                </div>
            </div>
           </Fade>
            <div>
                <Fade><ArtCategory></ArtCategory></Fade>
            </div>
        </div>
    );
};

export default Home;