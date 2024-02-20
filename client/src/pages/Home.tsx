import { BiSolidWidget, BiBookOpen, BiHighlight, BiUser } from 'react-icons/bi'

import HeroText from '../components/Home/HeroText'
import HeroSwapCards from '../components/Home/HeroSwapCards'
import VerticalAccordion from '../components/layout/VerticalAccordion'
import ourMission from '../assets/imgs/ourMission.jpg'
import whoWeAre from '../assets/imgs/whoWeAre.jpg'
import ourHistory from '../assets/imgs/ourHistory.jpg'
import ourValues from '../assets/imgs/ourValues.jpg'

const Home = () => {
  return (
    <main className="flex justify-center w-full">
      <div className="w-full max-w-[1600px]">
        <div className="flex flex-col lg:flex-row min-h-screen items-center py-16">
          <div className="lg:w-[50%] flex justify-center">
            <HeroText />
          </div>
          <div className="lg:w-[50%] flex justify-center mt-72 lg:mt-0 mb-80 lg:mb-0 -translate-x-6 lg:translate-x-0">
            <HeroSwapCards />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <VerticalAccordion
            items={[
              {
                id: 1,
                title: 'Our Mission',
                icon: <BiHighlight size={20} />,
                imgSrc: ourMission,
                description: `At ReduxFlow, we are on a mission to revolutionize the way teams manage projects.
                  We believe in creating a tool that is not only powerful and capable of handling complex
                  project management tasks but also user-friendly and accessible to everyone`,
              },
              {
                id: 2,
                title: 'Who We Are',
                icon: <BiUser size={20} />,
                imgSrc: whoWeAre,
                description: `ReduxFlow was founded by a group of project managers, software developers,
                 and design thinkers who were frustrated with the existing project management tools 
                 that were either too complicated or too simplistic`,
              },
              {
                id: 3,
                title: 'Our History',
                icon: <BiBookOpen size={20} />,
                imgSrc: ourHistory,
                description: `Our journey began in a small office with a big idea: to make project management 
                effortless and more effective. Today, ReduxFlow is trusted by startups, agencies, and enterprises 
                alike, helping them to manage their projects and achieve their goals`,
              },
              {
                id: 4,
                title: 'Our Values',
                icon: <BiSolidWidget size={20} />,
                imgSrc: ourValues,
                description: `Our core values shape the culture and define the character of our company. 
                We value innovation, striving to continually improve our product. Integrity guides our 
                actions, ensuring we build trust with our customers`,
              },
            ]}
          />
        </div>
      </div>
    </main>
  )
}

export default Home
