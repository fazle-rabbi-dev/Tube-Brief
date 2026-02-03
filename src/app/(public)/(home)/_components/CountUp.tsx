"use client";

import CountUp from "react-countup";

const CountUpComponent = ({ end, suffix }: { end: number; suffix: string }) => {
	return (
		<CountUp
			start={0}
			end={end}
			duration={4.75}
			separator="^"
			decimals={2}
			suffix={suffix}
		/>
	);
};

export default CountUpComponent;
