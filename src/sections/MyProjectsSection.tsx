import SectionTitle from "@/components/custom/SectionTitle";
import { useEffect, useState } from "react";
import Button from "@/components/buttons/Button";
import proj1 from "@/assets/images/cyber-losowanie.png";
import proj2 from "@/assets/images/store-app.png";
import proj3 from "@/assets/images/portfolio-web.png";
import { TAGS } from "@/config/tags";

const projects = [
	{
		title: "Cyber Losowanie",
		description:
			"Full stack project built with React and .NET API, enabling friends to organize and draw their Secret Santa gift exchanges.",
		image: proj1,
		githubUrl: "https://github.com/majowielki/CyberLosowanie",
		liveUrl: "https://cyberlosowanie20250822170522-csbsa4avhcajb8bx.canadacentral-01.azurewebsites.net/",
		tags: [
			TAGS.react,
			TAGS.typescript,
			TAGS.tailwindcss,
			TAGS.redux,
			TAGS.aspnetcore,
			TAGS.csharp,
			TAGS.restapi,
			TAGS.entityframework,
			TAGS.monolith,
			TAGS.sqlserver,
			TAGS.xunit,
		],
	},
	{
		title: "E-commerce Store",
		description:
			"Full stack e-commerce platform powered by Dockerized API microservices and a modern React front-end.",
		image: proj2,
		githubUrl: "https://github.com/majowielki/Store-app",
		liveUrl: "https://store-app-ui-new.mangocoast-91b8ba19.polandcentral.azurecontainerapps.io",
		tags: [
			TAGS.react,
			TAGS.typescript,
			TAGS.tailwindcss,
			TAGS.redux,
			TAGS.aspnetcore,
			TAGS.csharp,
			TAGS.restapi,
			TAGS.entityframework,
			TAGS.docker,
			TAGS.rabbitmq,
			TAGS.redis,
			TAGS.microservices,
			TAGS.postgresql,
			TAGS.xunit,
		],
	},
	{
		title: "Portfolio Website",
		description:
			"A modern, responsive portfolio site built with React and powered by Tailwind CSS for a clean and modern interface.",
		image: proj3,
		githubUrl: "https://github.com/majowielki/Portfolio",
		tags: [
			TAGS.react,
			TAGS.typescript,
			TAGS.tailwindcss,
			TAGS.responsiveDesign,
		],
	},
];

const MyProjectsSection = () => {
	const [flippedIdx, setFlippedIdx] = useState<number | null>(null);
	const [showTapHint, setShowTapHint] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const updateHint = () => {
			let cols = 1;
			if (window.matchMedia('(min-width: 1280px)').matches) {
				cols = 3; // xl breakpoint: 3 columns
			} else if (window.matchMedia('(min-width: 768px)').matches) {
				cols = 2; // md breakpoint: 2 columns
			}
			setShowTapHint(projects.length > cols);
			// If switching to xl (hover mode), ensure no card remains flipped via state
			if (cols === 3) {
				setFlippedIdx(null);
			}
		};
		updateHint();
		window.addEventListener('resize', updateHint);
		return () => window.removeEventListener('resize', updateHint);
	}, []);

	const handleCardClick = (idx: number) => {
		if (typeof window !== "undefined" && window.matchMedia("(min-width: 1280px)").matches) {
			// On wide desktop (xl and up), keep hover-based flip; ignore click
			return;
		}
		setFlippedIdx(prev => (prev === idx ? null : idx));
	};
	return (
		<section
			id="Projects"
			className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
		>
			{/* Title */}
			<div className="w-full flex justify-center mb-12 md:mb-16">
				<SectionTitle>
					My <span className="text-main">Projects</span>
				</SectionTitle>
			</div>

			{/* Projects Grid - fixed column widths per breakpoint */}
			<div className="w-full max-w-6xl lg:max-w-7xl grid [grid-template-columns:repeat(1,340px)] md:[grid-template-columns:repeat(2,340px)] xl:[grid-template-columns:repeat(3,360px)] justify-center gap-6 md:gap-8 xl:gap-10 items-stretch">
				{projects.map((project, index) => (
					<div
						key={project.title}
						className={`flip-card ${flippedIdx === index ? 'is-flipped' : ''} ${showTapHint ? 'tap-ring-on' : ''} rounded-[28px] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] cursor-pointer lg:cursor-default h-[470px] w-full min-w-0 overflow-hidden`}
						role="button"
						tabIndex={0}
						onClick={() => handleCardClick(index)}
					>
						<div className="flip-card-inner">
							{/* Front */}
							<div className="flip-card-front bg-[#2d343f] p-5 flex flex-col relative">
								<img
									src={project.image}
									alt={project.title}
									className="w-full rounded-[24px] mb-4 object-cover"
									style={{ height: 200 }}
								/>
								<h4 className="text-[22px] md:text-[24px] font-bold mb-2 leading-snug break-words">
									{project.title}
								</h4>
								<p className="text-other text-[15px] md:text-base break-words">
									{project.description}
								</p>

								{/* Tap hint icon - show below xl only and only if grid spans >= 2 rows */}
								{showTapHint && (
									<i
										className="ri-share-forward-line xl:hidden absolute bottom-3 right-3 text-main text-[22px] opacity-80"
										aria-hidden="true"
									/>
								)}

							</div>

							{/* Back */}
							<div
								className="flip-card-back bg-[#2d343f] p-5 flex flex-col items-center justify-center text-center relative"
								onClick={(e) => { e.stopPropagation(); handleCardClick(index); }}
							>
								<h4 className="text-[22px] font-bold mb-4 leading-snug">
									{project.title}
								</h4>
								{/* Tags in manual order */}
								<div className="flex flex-wrap items-center justify-center gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag.label}
											className={`px-3 py-1 rounded-full text-sm ${tag.color}`}
										>
											{tag.label}
										</span>
									))}
								</div>
								<div className="flex flex-wrap items-center justify-center gap-3">
									{project.liveUrl && index !== projects.length - 1 && (
										<Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
											View Demo
										</Button>
									)}
									{project.githubUrl && (
										<Button as="a" href={project.githubUrl} variant="outline" target="_blank" rel="noopener noreferrer">
											GitHub
										</Button>
									)}
								</div>
								{/* Tap hint icon on back - below xl only, to allow flipping back */}
								{showTapHint && (
									<i
										className="ri-share-forward-line xl:hidden absolute bottom-3 right-3 text-main text-[22px] opacity-80"
										aria-hidden="true"
									/>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default MyProjectsSection;