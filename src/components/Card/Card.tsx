import { FC } from "react";


interface CardProps {
  title: string,
  image: string,
  subTitle: string,
  description: string,
}




const Card: FC<CardProps> = (props) => (
      <div className="flex flex-col items-center">
        <img className="w-20 rounded-lg" src={props.image} />
        <p className="mt-5  text-center font-JosefinSlab uppercase"> {props.subTitle} </p>
        <p className="mt-3 text-center font-JosefinSlab text-4xl font-black uppercase"> {props.title} </p>
        <p className="mt-3 text-balance text-center font-JosefinSlab font-black uppercase">{props.description}</p>
      </div>
  )

export default Card;
