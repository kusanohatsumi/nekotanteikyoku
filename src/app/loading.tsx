import Image from "next/image";

export default function Loading() {
	return (
		<>
			<div className="w-screen h-screen flex items-center justify-center">
				<Image
					src="/images/syasyaki.png"
					alt="しゃしゃき"
					width={0}
					height={0}
					sizes="100vw"
					className="w-auto h-52 Logo"
				/>
			</div>
		</>
	);
}
