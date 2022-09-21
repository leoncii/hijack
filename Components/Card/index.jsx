import Link  from "next/link";
import { feed } from '../../Layout/home.module.css'
import { card, title, image, media,small, figure, media_left, card_content, content, media_content } from './card.module.css'
import Image from 'next/image'
import { Paragraph } from "../Paragraph";

export function Card({
   machine: {
  name, description, posted, src, alt
}, namekey 
}) {
  return <Link href={`/box/${namekey}`} >
    <a className={`card block ${feed} ${card}`}>
      <div className={`card-content ${card_content}`}>
        <div className={`media ${media}`}>
          <div className={`media-left ${media_left}`}>
           <figure className={`image ${figure}`}>
              <Image
                className={`${image}`}
                src={src}
                fill="responsive"
                width={602}
                height={379}
                alt={alt}
              />
            </figure>
          </div>
          <div className={`media-content ${media_content}`}>
            <p className={`${title} title`}>{name} - Guía</p>
          </div>
        </div>
        <div className={`content ${content}`}>
          <Paragraph>
            {description}
              <small className={`${small}`}>
                Publicado:
                <time className="subtitle is-6" dateTime={posted}> {posted}</time>
              </small>
          </Paragraph>
        </div>
      </div>
    </a>
  </Link>
}