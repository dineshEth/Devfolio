import React from 'react'


const testimonials = [
  {
    name:'Prakash kumar',
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    designation : 'Engineer',
    company:'IBM',
    image : ''
  },
  {
    name:'Dr. Khaleel Khan',
    testimonial: `After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!`,
    designation : 'Proffessor',
    company:'PhysicsWallah',
    image : ''
  },
  {
    name:'Isha Dora',
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    designation : 'Founder',
    company:'BOMS',
    image : ''
  }
]

function FeedbackCard ({
  name, testimonial, designation, company, image
}) {
  return (
    <div
    className='bg-[#14044f] mx-auto z-30 p-10 rounded-3xl sm:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </div>
  )
}

function Testinomial() {
  return (
    <div className={`mt-12 bg-[#10043d] rounded-[20px]`}>
    <div className={`bg-[#230d71] p-12 rounded-2xl min-h-[300px]`}>
      <div className='flex flex-col'>
        <p className={" text-subtitle sm:text-[18px] text-[14px]  uppercase"}>What others say</p>
        <h2 className={"  text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Testimonials.</h2>
      </div>
    </div>
    <div className={`-mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials?.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
  )
}

export default Testinomial