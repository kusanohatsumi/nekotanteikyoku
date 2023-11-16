export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: {
		id: number;
	};
}) {
	return (
		<div>
			<figure style={{ width: "94px", height: "38px", margin: "12px" }}>
				<img alt="戻る" src="/back.png" />
			</figure>
			{children}
		</div>
	);
}
