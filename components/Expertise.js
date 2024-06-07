import React from "react";
import { Title } from "./common/Title";
import { expertise } from "@/assets/data/dummydata";
import { Card } from "./common/Card";

const Expertise = () => {
  return (
    <section className='expertise'>
      <div className='container'>
        <div className='heading-title'>
          <Title title='Our expertise' />
          <p>We specialize in web and mobile application development, creating intuitive and responsive digital experiences. Our digital marketing services drive targeted traffic and conversions with innovative strategies. We excel in brand promotion, elevating your brand's presence and recognition.</p>
        </div>
        <div className='hero-content grid-4'>
          {expertise.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
