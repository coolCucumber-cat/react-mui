import { Modal } from "@mui/material";
import { Animal } from "./types";

export default function ({
	open,
	animal,
	onClose,
}: {
	open: boolean;
	animal: Partial<Animal>;
	onClose: (animal: Animal, success: boolean) => void;
}) {
	return (
		<Modal open={open}>
			<div></div>
		</Modal>
	);
}
