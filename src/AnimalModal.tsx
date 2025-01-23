import { AnimalKind } from "./types";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
// import { DatePicker, DatePickerToolbar } from "@mui/x-date-pickers";

const now = new Date();

export default function ({
	isModalOpen,
	setIsModalOpen,
}: {
	isModalOpen: boolean;
	setIsModalOpen: (b: boolean) => void;
}) {
	function isNameValid(name: string) {
		return /^[A-Z]/.test(name);
	}
	function isPriceValid(price: string) {
		return /^[0-9]+$/.test(price);
	}

	const [name, setName] = React.useState("");
	const [price, setPrice] = React.useState<string>("");
	const [animalCategory, setAnimalCategory] = React.useState<string | undefined>(undefined);
	const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);

	const handleClose = () => {
		setIsModalOpen(false);
		setName("");
		setAnimalCategory(undefined);
		setPrice("");
		setSelectedDate(undefined);
	};

	const options = [
		AnimalKind.Giraffe,
		AnimalKind.Zebra,
		AnimalKind.Wolf,
		AnimalKind.Panda,
		AnimalKind.Lion,
		AnimalKind.Cheetah,
		AnimalKind.Elephant,
		AnimalKind.Tiger,
		AnimalKind.Bear,
		AnimalKind.Kangaroo,
		AnimalKind.Ant,
	];

	return (
		<>
			<Dialog open={isModalOpen} onClose={handleClose}>
				<Box
					sx={{
						p: 5,
						display: "flex",
						flexDirection: "column",
						gap: 5,
					}}
				>
					<DialogTitle>Animal</DialogTitle>
					<TextField
						id="name"
						label="Name"
						name="name"
						value={name}
						variant="outlined"
						error={isNameValid(name)}
						{...(isNameValid(name) ? { color: "success" } : "")}
						helperText={isNameValid(name) ? "invalid name" : ""}
					/>
					<TextField
						id="price"
						label="Price"
						name="price"
						value={price}
						variant="outlined"
						error={isPriceValid(price)}
						{...(isPriceValid(price) ? { color: "success" } : "")}
						helperText={isPriceValid(price) ? "invalid price" : ""}
					/>
					{/* <FormControl fullWidth>
						<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
						<OutlinedInput
							id="amount"
							name="amount"
							startAdornment={<InputAdornment position="start">CHF </InputAdornment>}
							label="Amount"
							value={price}
							error={isAmountValid != undefined && !isAmountValid}
							{...(isAmountValid ? { color: "success" } : "")}
						/>
						{isAmountValid != undefined && !isAmountValid && (
							<FormHelperText error={true}>Amount is not valid</FormHelperText>
						)}
					</FormControl> */}
					{/* <DatePicker
						label="Pick a date"
						onError={(newError) => setError(newError)}
						slotProps={{
							textField: {
								helperText: errorMessage,
							},
						}}
						minDate={now}
						value={selectedDate}
					/> */}
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button type="submit">Add Animal</Button>
					</DialogActions>
				</Box>
			</Dialog>
		</>
	);
}
