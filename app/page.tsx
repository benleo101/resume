import Image from "next/image";
import PortfolioShowcase from "./portfolio/components/PortfolioShowcase";
import { withBasePath } from "@/lib/site";

const contact = [
  { label: "โทรศัพท์", value: "0896198222", icon: "phone", valueClass: "text-4xl", wrapClass: "md:whitespace-nowrap" },
  {
    label: "อีเมล",
    value: "leowappook@gmail.com",
    icon: "mail",
    valueClass: "text-[2.6rem] md:text-[2.8rem]",
    wrapClass: "break-all md:break-normal md:whitespace-nowrap",
  },
  { label: "การเดินทาง", value: "BTS / MRT", icon: "map", valueClass: "text-4xl", wrapClass: "md:whitespace-nowrap" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "HTML", icon: withBasePath("/HTML.png"), tone: "bg-orange-100" },
      { label: "CSS", icon: withBasePath("/b3nj5m1n-logo-2582747_1920.png"), tone: "bg-sky-100" },
      { label: "JavaScript", icon: withBasePath("/javascript.png"), tone: "bg-amber-100" },
      { label: "React", icon: withBasePath("/react-js.png"), tone: "bg-cyan-100" },
      { label: "Next.js", icon: withBasePath("/next-js-logo-png_seeklogo-394608.png"), tone: "bg-stone-100" },
      { label: "Flutter", icon: withBasePath("/flutter.png"), tone: "bg-blue-100" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: withBasePath("/nodejs.png"), tone: "bg-lime-100" },
      { label: "TypeScript", icon: withBasePath("/images.png"), tone: "bg-blue-50" },
      { label: "MySQL", icon: withBasePath("/1711355118921.png"), tone: "bg-orange-50" },
    ],
  },
  {
    title: "Tools",
    items: [
      { label: "Bruno", icon: withBasePath("/114530840.png"), tone: "bg-yellow-50" },
      { label: "Postman", icon: withBasePath("/302491264_447689710712870_8058423586079742582_n.png"), tone: "bg-orange-50" },
      { label: "Codex", icon: withBasePath("/codex-color.png"), tone: "bg-stone-100" },
    ],
  },
];

const experience = [
  {
    period: "2023 - ปัจจุบัน",
    role: "Full Stack Developer",
    company: "Orisma Technology Co., Ltd.",
    logo: withBasePath("/orisma_logo.jfif"),
    detail:
      "พัฒนาระบบจัดการพนักงานของ EZYHR ทั้งฝั่งเว็บและแอปพลิเคชัน พร้อมปรับปรุง ดูแล และเพิ่มฟีเจอร์ให้ระบบ Bizchat ตามความต้องการของผู้ใช้งาน",
  },
  {
    period: "2021 - 2023",
    role: "Full Stack Developer",
    company: "Taximail",
    logo: withBasePath("/312975738_808718073443055_4907734522817416042_n.png"),
    detail:
      "พัฒนาระบบ Customer Pos (Triller) มีทั้งฝั่งหน้าเว็บและแอปพลิเคชัน พัฒนาฟีเจอร์ใหม่ตามความต้องการของผู้ใช้งานและธุรกิจ เว็บแอปพลิเคชัน (Taximail) และพัฒนาระบบที่ให้องค์กรใช้มอบสิทธิประโยชน์ให้พนักงานทั้งเว็บและแอปพลิเคชัน (Jaijai)",
  },
  {
    period: "2021",
    role: "Intern",
    company: "ITBT Corporation Co., Ltd.",
    logo: withBasePath("/295085729_497586959037678_4590051014935419138_n.jpg"),
    detail:
      "พัฒนาระบบ Dashboard สำหรับจัดการข้อมูลหลังบ้าน เช่น ข้อมูลผู้ใช้ สถิติของระบบ และรายงานต่าง ๆ",
  },
];

const education = {
  year: "2020",
  degree: "ปริญญาตรี",
  university: "มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร",
  faculty: "คณะวิทยาศาสตร์และวิศวกรรมศาสตร์",
  major: "สาขาวิศวกรรมคอมพิวเตอร์",
};

function ContactIcon({ type }: { type: string }) {
  const baseClass = "h-5 w-5";

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.79.68 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.25a2 2 0 0 1 2.11-.45c.84.33 1.73.56 2.63.68A2 2 0 0 1 22 16.92Z"
        />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={baseClass}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z"
      />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="resume-shell text-stone-900">
      <section
        id="top"
        className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:px-10 md:py-16"
      >
        <div className="max-w-3xl">
          <h1 className="max-w-4xl text-5xl leading-[0.95] font-bold md:text-7xl">
            Leo Charudetch
            <span className="block pt-2 text-amber-900/80">
              Full Stack Developer
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-[2rem] leading-[1.12] text-stone-700 md:mt-8 md:max-w-4xl md:text-[2.35rem]">
            มีประสบการณ์ด้านการพัฒนาทั้งหน้าเว็บและหลังบ้าน
            พร้อมประยุกต์ใช้ AI เพื่อช่วยเร่งงานเขียนโค้ดและพัฒนาแนวคิดของโปรเจกต์
          </p>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="resume-panel-strong relative overflow-hidden rounded-[2rem] p-3">
            <div className="absolute inset-x-6 top-0 h-24 rounded-b-full bg-amber-200/60 blur-2xl" />
            <Image
              src={withBasePath("/278735453_4871965362873173_2117511330460536517_n.jpg")}
              alt="รูปโปรไฟล์ของ Leo Charudetch"
              width={360}
              height={360}
              className="relative h-[250px] w-[250px] rounded-[1.5rem] object-cover sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-4 md:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[0.95fr_1.15fr_0.95fr]">
          {contact.map((item, index) => (
            <div
              key={item.label}
              className={
                index === 1
                  ? "resume-card-hover rounded-3xl border border-stone-800/80 bg-stone-900 p-6 text-stone-50 shadow-[0_20px_80px_rgba(28,25,23,0.18)]"
                  : "resume-panel resume-card-hover rounded-3xl p-6"
              }
            >
              <div className="flex items-center gap-3">
                <div
                  className={
                    index === 1
                      ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-stone-50"
                      : "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-900"
                  }
                >
                  <ContactIcon type={item.icon} />
                </div>

                <div>
                  <p
                    className={
                  index === 1
                    ? "text-xl tracking-[0.08em] text-stone-300"
                    : "text-xl tracking-[0.08em] text-stone-500"
                }
                  >
                    {item.label}
                  </p>
                  <p className={`mt-1 leading-none font-semibold ${item.valueClass} ${item.wrapClass}`}>
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-12 md:px-10"
      >
        <div className="resume-panel rounded-[2rem] p-8">
          <p className="resume-title text-xl font-semibold text-stone-500">
            Skills
          </p>

          <div className="mt-6 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="resume-title mb-3 text-lg font-semibold text-stone-500">
                  {group.title}
                </p>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                  {group.items.map((skill) => (
                    <div
                      key={skill.label}
                      className="flex items-center justify-center"
                    >
                      <div
                        className={`resume-card-hover relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-stone-200/60 shadow-[0_10px_30px_rgba(120,53,15,0.12)] ${skill.tone}`}
                        title={skill.label}
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.label}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-6xl px-6 py-12 md:px-10"
      >
        <p className="resume-title text-xl font-semibold text-stone-500">
          Experience
        </p>
        <div className="mt-6 grid gap-5">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="resume-panel resume-card-hover rounded-[2rem] p-8"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-4xl leading-none font-semibold">{item.role}</h3>
                    <p className="mt-2 text-2xl text-stone-600">{item.company}</p>
                  </div>
                </div>
                <p className="text-xl font-medium tracking-[0.08em] text-amber-800">
                  {item.period}
                </p>
              </div>

              <p className="mt-5 max-w-4xl text-3xl leading-[1.18] text-stone-700">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="mx-auto max-w-6xl px-6 py-12 md:px-10"
      >
        <p className="resume-title text-xl font-semibold text-stone-500">
          Education
        </p>

        <article className="resume-card-hover mt-6 rounded-[2rem] border border-stone-800/80 bg-stone-950 p-8 text-stone-50 shadow-[0_24px_80px_rgba(28,25,23,0.24)]">
          <p className="text-xl font-medium tracking-[0.08em] text-stone-400">
            จบการศึกษาในปี {education.year}
          </p>
          <h3 className="mt-3 text-4xl leading-none font-semibold">{education.degree}</h3>
          <p className="mt-4 text-3xl leading-[1.18] text-stone-300">
            {education.university}
          </p>
          <p className="mt-3 text-2xl leading-[1.15] text-stone-400">{education.faculty}</p>
          <p className="mt-2 text-2xl leading-[1.15] text-stone-400">{education.major}</p>
        </article>
      </section>

      <section
        id="portfolio"
        className="mx-auto max-w-6xl px-6 py-12 md:px-10"
      >
        <p className="resume-title text-xl font-semibold text-stone-500">
          Portfolio
        </p>
        <PortfolioShowcase />
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10"
      >
        <div className="grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="resume-card-hover rounded-[2rem] bg-amber-900 px-8 py-10 text-amber-50 shadow-[0_20px_80px_rgba(120,53,15,0.22)]">
            <p className="resume-title text-xl font-semibold text-amber-200">
              Contact
            </p>
            <h2 className="mt-4 text-5xl leading-none font-bold">
              พร้อมร่วมงานด้าน Full Stack Development
            </h2>
            <div className="mt-4 flex max-w-3xl flex-col gap-3 text-3xl leading-[1.18] text-amber-100">
              <p className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-amber-50">
                  <ContactIcon type="phone" />
                </span>
                <span>0896198222</span>
              </p>
              <p className="flex items-center gap-3 break-all">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-amber-50">
                  <ContactIcon type="mail" />
                </span>
                <span>leowappook@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="flex md:h-full">
            <div className="resume-panel resume-card-hover flex w-full flex-col rounded-[2rem] p-5 md:h-full">
              <p className="resume-title text-xl font-semibold text-stone-500">
                Line
              </p>
              <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={withBasePath("/line.jfif")}
                  alt="Line"
                  fill
                  sizes="220px"
                  className="object-cover scale-[1.22]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
