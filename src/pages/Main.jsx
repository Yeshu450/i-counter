import React from 'react';
import Increase from '../assets/increase.png';
import Decrease from '../assets/decrease.png';
import Reset from '../assets/reset.png';
import { useState } from 'react';

function Main() {
	const [min, setMin] = useState();
	const [start, setStart] = useState();
	const [max, setMax] = useState();
	const [count, setCount] = useState();
	const [text, setText] = useState();

	const setValues = () => {
		if (min > start || max < start) {
			setText('😕 Invalid Input 😕');
		} else {
			setCount(start);
			setText('');
		}
	};

	const increaseCounter = () => {
		if (count == max) {
			setText('😡 Increase Limit Reached 😡');
		} else {
			setCount(count + 1);
			setText('');
		}
	};

	const decreaseCounter = () => {
		if (count == min) {
			setText('😡 Decrease Limit Reached 😡');
		} else {
			setCount(count - 1);
			setText('');
		}
	};

	const resetValues = () => {
		setMin('');
		setStart('');
		setMax('');
		setCount('');
		setText('');
	};

	return (
		<div id='main'>
			<div id='input'>
				<input
					type='number'
					placeholder='Enter The Minimum Value'
					value={min}
					onChange={(e) => setMin(parseInt(e.target.value))}
				/>
				<input
					type='number'
					placeholder='Enter The Starting Value'
					value={start}
					onChange={(e) => setStart(parseInt(e.target.value))}
				/>
				<input
					type='number'
					placeholder='Enter The Maximum Value'
					value={max}
					onChange={(e) => setMax(parseInt(e.target.value))}
				/>
			</div>
			<div id='set'>
				<button id='btn' onClick={setValues}>
					Set
				</button>
			</div>
			<div id='count'>
				<h1 id='val'>{count}</h1>
			</div>
			<div id='invalid'>
				<h3 id='err'>{text}</h3>
			</div>
			<div id='button'>
				<img
					src={Increase}
					className='img'
					alt='button'
					width='80px'
					onClick={increaseCounter}
				/>
				<img
					src={Reset}
					className='img'
					alt='button'
					width='80px'
					onClick={resetValues}
				/>
				<img
					src={Decrease}
					className='img'
					alt='button'
					width='80px'
					onClick={decreaseCounter}
				/>
			</div>
		</div>
	);
}

export default Main;
