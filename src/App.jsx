import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HogList from "./components/HogList";
import AddHogForm from "./components/AddHogForm";
import hogs from "./porkers_data";

const App = () => {
	const [hogData, setHogData] = useState(hogs);

	const addNewHog = (newHog) => {
		setHogData([...hogData, newHog]);
	};

	return (
		<div>
			<Navbar />
			<AddHogForm onAddHog={addNewHog} />
			<HogList hogs={hogData} />
		</div>
	);
};

export default App;