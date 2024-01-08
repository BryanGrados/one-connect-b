import type { Metadata } from "next";
import "@/src/styles/globals.css";
import { inter } from "@/src/styles/fonts";
import { Toaster } from "@/src/components/ui/sonner";

export const metadata: Metadata = {
	title: "One Connect",
	description: "One Connect",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-zinc-200 min-h-screen flex`}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
