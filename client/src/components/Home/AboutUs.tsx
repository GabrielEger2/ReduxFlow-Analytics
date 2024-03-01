import { BiHighlight, BiUser, BiBookOpen, BiSolidWidget } from 'react-icons/bi'
import VerticalAccordion from '../layout/VerticalAccordion'
import ourMission from '../../assets/imgs/ourMission.jpg'
import whoWeAre from '../../assets/imgs/whoWeAre.jpg'
import ourHistory from '../../assets/imgs/ourHistory.jpg'
import ourValues from '../../assets/imgs/ourValues.jpg'

const AboutUs = () => {
  return (
    <section className="px-8">
      <div className="flex w-full items-end">
        <div className="w-full md:w-1/2 flex justify-center">
          <div>
            <div className="text-6xl underline font-bold mb-10 text-center">
              About Us
            </div>
            <div className="text-lg text-center">
              Welcome to ReduxFlow - where innovation meets efficiency in
              project management. Our platform is designed to bring a fresh
              perspective to how projects are managed, combining ease of use
              with comprehensive features to cater to the needs of diverse teams
              and industries.
            </div>
          </div>
        </div>
        <div className="w-1/2 justify-center hidden md:flex">
          <BiSolidWidget size={150} />
        </div>
      </div>
      <div className="flex justify-center mt-10">
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
    </section>
  )
}

export default AboutUs
