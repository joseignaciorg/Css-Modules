import Card from './components/card/Card';

const App = () => {
	return (
		<div className='container'>
			<Card
				src='/public/icon-sedans.svg'
				alt='Sedans'
				name='sedans'
				text='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
				color='orange'
			/>
			<Card
				src='/public/icon-suvs.svg'
				alt='Suvs'
				name='suvs'
				text='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
				color='blue'
			/>
			<Card
				src='/public/icon-luxury.svg'
				alt='Luxury'
				name='luxury'
				text='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. '
				color='green'
			/>
		</div>
	);
};

export default App;
