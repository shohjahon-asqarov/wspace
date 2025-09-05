import Image from 'next/image'
import WorkingImg from '../../../public/img/working.png'
import ArrovRight from '../ui/ArrovRight'

const WorkTogether = () => {
  return (
    <div className="container grid lg:grid-cols-2 text-center lg:text-left gap-[100px] relative top-24">
      <Image 
        className="w-full" 
        width={710} 
        height={661} 
        src={WorkingImg} 
        alt="work img" 
      />
      
      <div className="lg:py-[183px] order-[-1] lg:order-2 ">
        <h2 className="font-bold text-[36px] leading-[56px] md:text-[54px] md:leading-[100%] lg:text-[64px] lg:leading-[100%] tracking-[-0.02em]">
          Work together
        </h2>
        
        <p className="defoult_p mt-6 mb-15">
          With whitepace, share your notes with your colleagues and collaborate on them.
          You can also publish a note to the internet and share the URL with others.
        </p>
        
        <button className="defoult_btn">
          Try it now 
          <ArrovRight />
        </button>
      </div>
    </div>
  )
}

export default WorkTogether