import React from 'react'
import Title from './Layouts/Title'
import CardCert from "./CardCert";

const Certifications = () => {
  return (
    <div>
      <section
      id="certifications"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Certifications" des="my certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
       <CardCert/>
      </div>
    </section>
    </div>
  )
}

export default Certifications
