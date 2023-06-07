import style from './card.module.css';

const Card = ({ src, alt, text, color, name }) => {
	return (
		<div className={`${style.card} ${style[color]}`}>
			<img className={style.img} src={src} alt={alt} />
			<h2 className={style['card-h2']}>{name}</h2>
			<p className={style['card-p']}>{text}</p>
			<button className={`${style['card-button']} ${style[color]}`}>
				Learn More
			</button>
		</div>
	);
};

export default Card;
