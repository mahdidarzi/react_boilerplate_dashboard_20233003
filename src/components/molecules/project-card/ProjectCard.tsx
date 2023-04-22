import React, { FunctionComponent } from 'react';
import Styles from './ProjectCard.module.scss';
import { ProfileCardFooter } from '../../atoms/product-card-footer';

interface Props {
  image: string;
  title: string;
  caption: string;
  description: string;
  onClick?: () => void;
  people: { src: string; name: string }[];
}

export const ProjectCard: FunctionComponent<Props> = ({ image, title, caption, description, onClick, people }) => {
  return (
    <div className={Styles.base}>
      <img className={Styles.image} src={image} />
      <p className={Styles.caption}>{caption}</p>
      <p className={Styles.title}>{title}</p>
      <p className={Styles.description}>{description}</p>
      <ProfileCardFooter people={people} onClick={onClick} />
    </div>
  );
};

export default ProjectCard;
