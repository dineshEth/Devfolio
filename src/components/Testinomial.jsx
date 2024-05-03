import React from 'react'


const testimonials = [
  {
    name:'Prakash kumar',
    testimonial: "Dinesh's work is top-notch. His 3D creations are mesmerizing, and his UI designs are sleek and user-friendly.",
    designation : 'Engineer',
    company:'IBM',
    image : ''
  },
  {
    name:'Ayush',
    testimonial: `Impressed with Dinesh's frontend skills! His 3D work is exceptional, and his UIs are user-friendly`,
    designation : 'Client',
    company:'Freelance',
    image : ''
  },
  {
    name:'Sumuel wilson',
    testimonial: " Dinesh's UIs are seamless and enhance user experiences. Highly recommended",
    designation : 'Client',
    company:'Freelance',
    image : ''
  }
]

function FeedbackCard ({
  name, testimonial, designation, company, image
}) {
  return (
    <div
    className='bg-[#14044f] mx-auto z-20 p-10 rounded-3xl sm:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white bg-clip-text text-transparent bg-gradient-to-r from-[#22b6f1] to-[#e11c98] font-medium text-[16px]'>
            <span className=''>@</span> {name}
          </p>
          <p className='mt-1 text-subtitle text-[12px]'>
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