export type Project = {
	title: string;
	description: string;
	stack: string;
	year: number;
	href?: string;
};

export const projects: Project[] = [
	{
		title: 'Sistem Absensi Kelas',
		description: 'Aplikasi pencatatan kehadiran siswa dengan rekap otomatis per bulan.',
		stack: 'SvelteKit',
		year: 2026,
		href: 'https://github.com/Khoyru-Sho/absensi'
	},
	{
		title: 'Landing Page UKM',
		description: 'Halaman profil organisasi sekolah dengan formulir pendaftaran anggota.',
		stack: 'Tailwind',
		year: 2026,
		href: 'https://github.com/Khoyru-Sho/ukm'
	},
	{
		title: 'Dashboard Jaringan',
		description: 'Pemantauan status perangkat lab sekolah secara real-time.',
		stack: 'TypeScript',
		year: 2026,
		href: 'https://github.com/Khoyru-Sho/dashboard'
	},
	{
		title: 'Aplikasi To-Do List',
		description: 'Aplikasi pencatatan tugas harian dengan notifikasi dan pengingat.',
		stack: 'Svelte',
		year: 2026,
		href: 'https://github.com/Khoyru-Sho/todo'
	}
];

export const profile = {
	bio: 'Saya suka membangun hal yang berguna dan terlihat rapi. Saat ini belajar SvelteKit dan TypeScript, sambil mengerjakan proyek kecil untuk sekolah dan komunitas.',
	facts: [
		{ label: 'FOKUS', value: 'Antarmuka web & sistem informasi' },
		{ label: 'STACK', value: 'SvelteKit · TypeScript · Tailwind' },
		{ label: 'LOKASI', value: 'Indonesia' },
		{ label: 'STATUS', value: 'Terbuka untuk kolaborasi' }
	],
	skills: ['HTML', 'CSS', 'JavaScript', 'SvelteKit', 'Tailwind', 'Git']
};
