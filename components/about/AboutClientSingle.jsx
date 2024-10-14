import Image from 'next/image';
import Link from 'next/link';

function AboutClientSingle({ title, image, lien }) {
	return (
		<Link href={lien}	>
			<div className="border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer flex justify-center items-center">
				<Image
					src={image}
					alt={title}
					width={250}
					height={250}
				/>
			</div>
		</Link>
	);
}

export default AboutClientSingle;
