
import { useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider';
import ArtCard from '../components/ArtCard';

const Home = () => {
    const allArtData =useLoaderData()
    return (
        <div>
            <div  className='my-10'>
                  <Slider></Slider>
            </div>
            <div className='mb-10'>
                <h2 className='text-5xl text-center font-semibold text-[#A55E3F]'>Craft items section</h2>
                <h2 className='text-xl mt-4 mb-8 text-center text-[#A55E3F]'>Here you can see some of the best artworks we have done. We are not done yet. We are working hard so that we can excel even further.</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        allArtData.map(singleArt=><ArtCard key={singleArt._id} singleArt={singleArt}></ArtCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;