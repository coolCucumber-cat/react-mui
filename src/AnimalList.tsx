import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Animal, AnimalKind } from "./types";

export default function ({ setIsModalOpen }: { setIsModalOpen: (b: boolean) => void }) {
	const [animals, setAnimals] = useState<Animal[]>([
		{ name: "", price: "", birthday: undefined, kind: AnimalKind.Ant },
	]);
	return (
		<>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					pt: "100px",
					maxWidth: "80%",
					height: "45vh",
					margin: "0 auto",
				}}
			>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Tierart</TableCell>
								<TableCell>Geburtstag</TableCell>
								<TableCell>Preis</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{animals.map((animal, index) => (
								<TableRow key={index}>
									<TableCell>{animal.name}</TableCell>
									<TableCell>{animal.kind}</TableCell>
									<TableCell>{animal?.birthday?.toString()}</TableCell>
									<TableCell>{animal.price}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
			<Fab
				// color="primary"
				aria-label="add"
				onClick={() => setIsModalOpen(true)}
				sx={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
				}}
			>
				<AddIcon />
			</Fab>
		</>
	);
}
