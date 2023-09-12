import Benefits from "../components/Home/Benefits"
import Details from "../components/Home/Details"
import Footer from "../components/Home/Footer"
import Hero from "../components/Home/Hero"
import Video from "../components/Home/Video"
import Working from "../components/Home/Working"

const Home = () => {
  return (
    <div className="w-full min-h-full">
      <Hero />
      <Details />
      <Video />
      <Benefits />
      <Working />
      <Footer />
    </div>
  )
}

export default Home