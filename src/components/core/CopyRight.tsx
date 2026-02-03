// Prevent rendering on server
// Otherwise it will prevent page content pre-rendering:
//    ::: page content won't goes into static html :::

"use client";

import { useEffect, useState } from "react";

const CopyRight = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return <p>&copy; {new Date().getFullYear()} Tube-Brief. All rights reserved.</p>;
};

export default CopyRight;
