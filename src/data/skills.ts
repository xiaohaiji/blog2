// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "python",
		name: "python",
		description:
			"简单的编程语言",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: [""],
		color: "#F7DF1E",
	},

	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"基于 Chrome V8 引擎的 JavaScript 运行环境，用于服务器端开发",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 3 },
		projects: [""],
		color: "#339933",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"世界上最流行的开源关系型数据库管理系统，广泛应用于网页应用程序中。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: [""],
		color: "#de20c1ff",
	},

	// Tools
	{
		id: "vscode",
		name: "VS Code",
		description:
			"好用的轻量化编辑器",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 6 },
		color: "#007ACC",
	},

	// Other Skills
	{
		id: "japanese",
		name: "japanese",
		description:
			"one of language",
		icon: "logos:graphql",
		category: "other",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#ee1212ff",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
