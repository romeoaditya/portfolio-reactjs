import SimpleAdminDashboard from "../../assets/simple_admin_dashboard.webp";
import Sekolah from "../../assets/sekolah.webp";
import WordPress from "../../assets/wordpress.webp";
import QuranApp from "../../assets/quranapp.jpg";
import BoterviewAI from "../../assets/boterview.png";

export const projectsData = [
  {
    id: 1,
    image: SimpleAdminDashboard,
    title: "Dashboard Booking Tiket Wisata",
    description:
      "Dashboard admin untuk mengelola pemesanan tiket wisata secara efisien, termasuk manajemen destinasi dan riwayat pemesanan.",
    techstack: ["Laravel", "Filament", "MySQL"],
    category: "web",
    link: "https://github.com/romeoaditya/booking-tiket-wisata.git",
  },
  {
    id: 2,
    image: Sekolah,
    title: "Website Sekolah (Landing Page)",
    description:
      "Landing page informatif untuk menampilkan profil, program, dan fasilitas sekolah secara online.",
    techstack: ["HTML", "CSS", "JavaScript"],
    category: "web",
    link: "https://mts-saadatulmahabbah.vercel.app/",
  },
  {
    id: 3,
    image: WordPress,
    title: "Website Dealer Motor (WordPress)",
    description:
      "Website dealer motor berbasis WordPress untuk menampilkan produk, promo, dan kontak pemesanan.",
    techstack: ["WordPress", "PHP", "Elementor"],
    category: "web",
    link: "http://zahramotor.ct.ws/",
  },
  {
    id: 4,
    image: BoterviewAI,
    title: "AI Interviewer",
    description:
      "Platform wawancara kerja otomatis berbasis AI untuk membantu rekrutmen secara cepat dan efisien.",
    techstack: [
      "Next.js",
      "TailwindCSS",
      "Shadcn/UI",
      "Vapi",
      "Firebase",
      "Gemini API",
    ],
    category: "ai",
    link: "https://boterview-id.vercel.app/",
  },
  {
    id: 5,
    image: QuranApp,
    title: "Aplikasi Al-Quran (Android)",
    description:
      "Aplikasi Al-Quran dengan fitur pencarian surat, terjemahan bahasa Indonesia, dan navigasi surat yang mudah.",
    techstack: ["Flutter", "Dart", "Al-Quran API"],
    category: "app",
    link: "https://github.com/romeoaditya/alquran-app.git",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "ai",
  },
];
