import { useState } from "react";
import Modal from "./AnimalModal";
import AnimalList from "./AnimalList";
import Header from "./Header";

export default function () {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<Header />
			<AnimalList setIsModalOpen={setIsModalOpen} />
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
		</>
	);
}
