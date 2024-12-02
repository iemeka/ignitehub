import AppContextProvider from "./app-context";
import "@/app/ui/globals.css";


export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<AppContextProvider>{children}</AppContextProvider>
			</body>
		</html>
	);
}
