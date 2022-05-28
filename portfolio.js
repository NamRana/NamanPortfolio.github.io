import emoji from "react-easy-emoji";

export const greetings = {
	name: "Naman Rana",
	title: "Hi all, I'm Naman Rana",
	description:
		"I'm passionate Full Stack web developer having an experience of web applications with  React.js",
	resumeLink:
		"https://drive.google.com/file/d/1hSp2Z-eFgInI_Bakgg_iUbdPYZ14eeY7/view?usp=drivesdk",
};

export const openSource = {
	githubUserName: "NamRana",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/NamRana",
	linkedin: "https://www.linkedin.com/in/naman-rana-065738228/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "GL Bajaj Institue of Technology and Management, Greater Noida",
		subHeader: "BTech in Computer Science and Engineering",
		duration: "September 2020 - Present",
		desc: "Participated in the Hackathon and got 1st Rank.",
		descBullets: [
			"Full Stack Web Developer",
			"One year experience in Reactjs , Angular , React Native , Nodejs, REST api, Mongodb",
		],
	},
];

export const experience = [
	{
		role: "Fronted Web Developer",
		company: "Digi Infotech ",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Aug 2020 – Jul 2021",
		desc: ["Optimizing the user experience.",
			"Using HTML, JavaScript and CSS to bring concepts to life",
			"Developing and maintaining the user interface",
			"Implementing design on mobile websites",
			"Creating tools that improve site interaction regardless of the browse."
	]
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	}
];
