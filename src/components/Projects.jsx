import React from 'react'
import { Tilt } from 'react-tilt'
import { portfolio, summz, currencyswapper, transit, github, link } from '../assets'


const ProjectsList = [
  {
    name: "Summz",
    description:
      "Created an innovative article summarizer leveraging AI technology. Seamlessly summarizing articles within seconds, the application extracts key insights from URL links, enhancing efficiency and facilitating rapid comprehension for users.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "gpt-4",
        color: "text-pink-500",
      },
      {
        name: "tailwind",
        color: "text-green-500",
      },
      {
        name: "axios",
        color: "text-violet-500",
      },
    ],
    image: summz,
    source_code_link: "https://github.com/dineshEth/Summz",
    project_link: 'https://aiarticlesummary.netlify.app/'
  },
  {
    name: "Currency Swapper",
    description:
      "Created a live currency exchange calculator, enabling seamless conversions with precision and accuracy. Enhances user accessibility and aids in financial decision-making.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "restapi",
          color: "text-pink-500",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "contextapi",
          color: "text-violet-500",
        },
      ],
    image: currencyswapper,
    source_code_link: "https://github.com/dineshEth/Currency-swapper",
    project_link: 'https://dinesheth.github.io/Currency-swapper'
  },
  {
    name: "3D Portfolio",
    description:
      " Implemented a custom-built Personal Portfolio website featuring interactive design elements, leading to a 25% increase in engagement and 15% growth in project bookings.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "threejs",
          color: "text-pink-500",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "shadcn",
          color: "text-violet-500",
        },
      ],
    image: portfolio,
    source_code_link: "https://github.com/dineshEth/Devfolio",
    project_link: 'https://dineshprajapati.netlify.app/'
  },
  {
    name: "Text Translator",
    description:
      "Text Translator helps in translating text from one language to another language. This app auto detects the language of the text the user provides. This application supports more than 50 languages.",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "mircosoftapi",
          color: "text-pink-500",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "axios",
          color: "text-violet-500",
        },
      ],
    image: transit,
    source_code_link: "https://github.com/dineshEth/TransIt",
    project_link: 'https://trans-it.vercel.app'
  },
]



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
project_link
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#10043d] p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          
          <div className='absolute z-30 inset-0 flex justify-start m-3 cursor-pointer'>
            <div
              onClick={() => window.open(project_link, "_blank")}
              className='blue-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='project link'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            </div>

          <div className='absolute inset-0 flex justify-end m-3'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-subtitle text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
  )
}

function Projects() {
  return (
    <div className='w-full my-40'>
      <div className='flex my-5 flex-col'>
        <p className={" text-subtitle sm:text-[18px] text-[14px]  uppercase"}>What others say</p>
        <h2 className={"  text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Projects.</h2>
        <p className='text-subtitle sm:text-[18px] text-[14px] max-w-3xl'>These showcased projects offer tangible demonstrations of my skills and expertise. Each project is succinctly described and includes links to code repositories and live demos, showcasing my problem-solving abilities, versatility with technologies, and adept project management.</p>
      </div>
      <div className='flex flex-row flex-wrap justify-start w-full mx-auto items-start gap-4'>
        {ProjectsList.map((project)=>(
          <ProjectCard key={project.name} name={project.name} description={project.description} image={project.image} tags={project.tags} source_code_link={project.source_code_link} project_link={project.project_link} />
        ))}
      </div>
    </div>
  )
}

export default Projects