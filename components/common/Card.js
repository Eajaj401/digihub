import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const Card = ({ data, show }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={data.cover} alt={data.title} />
      </div>
      <div className='card-details'>
        <TitleSm title={data.title} />
        <div className='flex'>
          <span> {data.catgeory} </span> {data.date && <span> / {data.date}</span>}
        </div>
        {show && (
          <ul>
            {data.desc.map((text, i) => (
              <li key={i}> - {text.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
