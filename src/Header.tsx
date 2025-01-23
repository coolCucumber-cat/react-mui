// von miguel und nikolai kopiert, weil ich keine ahnung habe

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export default function () {
	return (
		<>
			<AppBar sx={{ overflow: "visible" }}>
				<Container maxWidth="xl" sx={{ overflow: "visible" }}>
					<Toolbar disableGutters>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="#"
							sx={{
								position: "relative", // Positionierung relativ zur Toolbar
								top: "-10px", // Leichte Verschiebung nach oben
								mr: 2,
								flexGrow: 0,
								fontSize: 45,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
								overflow: "visible", // Allow overflow
								whiteSpace: "nowrap", // Prevent text wrapping
								textOverflow: "clip",
							}}
						>
							Z
							<span style={{ transform: "rotate(180deg)", display: "inline-block" }}>
								o
							</span>
							<span style={{ transform: "rotate(180deg)", display: "inline-block" }}>
								o
							</span>
						</Typography>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="#"
							sx={{
								mr: 2,
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Inventory
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
}
