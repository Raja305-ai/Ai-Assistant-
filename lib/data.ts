export const site = {
  name: "Tallat Hussain",
  role: "Security Operations Professional",
  tagline:
    "Security Operations Professional | CCTV Operator | Security Supervisor | Safety & Operations | AI Productivity",
  shortBio:
    "Security operations professional with experience across security monitoring, CCTV operations, control room activities, incident reporting, access control, emergency response and operational support — with a growing interest in using AI and modern tools to improve day-to-day reporting and productivity.",
  email: "sraza2973@gmail.com",
  linkedin: "https://www.linkedin.com/in/tallat-hussain-65962a245",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://tallathussain.com",
  locationNote: "Available for security operations, control room and safety-related roles.",
};

export type ExperienceItem = {
  title: string;
  employer: string;
  dates: string;
  summary: string;
  duties: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Security Supervisor",
    employer: "Expo City Dubai, UAE",
    dates: "11/2023 – Present",
    summary:
      "As Security Supervisor at Expo City Dubai, oversees the deployment of security personnel and enforcement of safety protocols across major site events. Responsible for monitoring surveillance systems, coordinating emergency response efforts, and liaising directly with local authorities to resolve security challenges as they arise. Ensures ongoing compliance with security policies and regulations through regular assessments, and maintains clear records while keeping abreast of evolving security trends and best practices.",
    duties: [],
  },
  {
    title: "Security System Operator (CCTV Operator)",
    employer: "Expo City Dubai | Expo 2020 Dubai, UAE",
    dates: "07/2021 – 11/2023",
    summary:
      "Operated CCTV and access control systems at Expo 2020 Dubai, monitoring and authorizing the movement of employees, visitors and contractors to maintain site security. Acted as first point of contact with police and fire services during emergencies, including fire incidents and unauthorized-access situations. Prepared daily activity reports documenting irregularities, equipment or property damage, theft and unusual occurrences, and maintained accurate records for fire alarm responses and daily building operations.",
    duties: [],
  },
  {
    title: "Security Administration",
    employer: "Expo 2020, Dubai, UAE",
    dates: "05/2019 – 07/2021",
    summary:
      "Provided front-line customer service within the security administration team at Expo 2020, welcoming visitors and managing the issuance of day passes and employee credentials in line with management instructions. Facilitated smooth, authorized access during high-traffic special events and maintained accurate records of uniforms and food cards, supporting staff and visitors with card-related issues throughout.",
    duties: [],
  },
  {
    title: "Airport Security Officer",
    employer: "DXB – Dubai International Airport (USA Flights Handler)",
    dates: "05/2018 – 05/2019",
    summary:
      "Served as an Airport Security Officer at Dubai International Airport supporting USA-bound flight operations, maintaining accurate entry and exit records and monitoring access control points to prevent unauthorized entry. Followed client security procedures and standard operating procedures consistently across shifts and varying weather conditions, and carried out security checks on duty-free materials and catering items prior to dispatch to aircraft.",
    duties: [],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Security Operations",
    skills: [
      "Security Operations",
      "Security Supervision",
      "Access Control",
      "Visitor Management",
      "Contractor Management",
      "Incident Management",
      "Emergency Response",
    ],
  },
  {
    category: "CCTV & Surveillance",
    skills: [
      "CCTV Monitoring",
      "Camera Monitoring",
      "Incident Detection",
      "Surveillance Operations",
      "Control Room Monitoring",
      "CCTV Reporting",
    ],
  },
  {
    category: "Safety",
    skills: [
      "Fire Safety Awareness",
      "Emergency Procedures",
      "Hazard Awareness",
      "Incident Reporting",
      "Risk Awareness",
    ],
  },
  {
    category: "Operations",
    skills: [
      "Control Room Operations",
      "Parking Operations",
      "Traffic Monitoring",
      "Operational Coordination",
      "Daily Reporting",
      "Documentation",
    ],
  },
  {
    category: "Technology",
    skills: [
      "Computer Skills",
      "AI Tools",
      "Prompting",
      "AI-Assisted Office Productivity",
      "Digital Documentation",
    ],
  },
];

export type Certification = {
  name: string;
  status: "Completed" | "In Progress";
  note?: string;
};

export const certifications: Certification[] = [
  { name: "Fire Safety Management", status: "Completed" },
  { name: "ITCILO", status: "Completed" },
  {
    name: "NEBOSH IGC",
    status: "In Progress",
    note: "Currently studying — not yet a completed qualification.",
  },
  { name: "Category 3 Driving License", status: "Completed" },
];

export type Project = {
  slug: string;
  title: string;
  status: "Concept" | "In Development" | "Planned";
  description: string;
  points: string[];
};

export const projects: Project[] = [
  {
    slug: "personal-ai-office-assistant",
    title: "Personal AI Office Assistant",
    status: "In Development",
    description:
      "An AI-based assistant intended to help with the day-to-day writing tasks that come with an operations role.",
    points: [
      "Drafting incident reports",
      "Emails and professional statements",
      "Daily report structuring",
      "Grammar correction and clarity checks",
      "General documentation support",
    ],
  },
  {
    slug: "cricket-live-scoring-application",
    title: "Cricket Live Scoring Application",
    status: "Concept",
    description:
      "A personal / local cricket scoring concept for informal matches and small tournaments.",
    points: [
      "Live scoring interface",
      "Match management",
      "Scoreboard display",
      "Scorer workflow and overs tracking",
    ],
  },
  {
    slug: "security-reporting-automation",
    title: "Security Reporting Automation",
    status: "Concept",
    description:
      "A concept for converting rough operational notes taken during a shift into structured, professional incident reports.",
    points: [
      "Turns shorthand shift notes into formatted reports",
      "Consistent structure for incident logs",
      "Aimed at reducing time spent on end-of-shift paperwork",
    ],
  },
];

export type Article = {
  slug: string;
  title: string;
  summary: string;
  dateLabel: string; // placeholder until real publish dates exist
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "security-supervisor-role",
    title: "The Security Supervisor's Role and Responsibilities",
    summary:
      "What a security supervisor is actually responsible for day to day — from shift coordination to incident escalation.",
    dateLabel: "[ADD DATE]",
    body: [
      "A security supervisor sits between the officers on the ground and the wider operation. The role is less about standing in one place and more about coordination — making sure every post is covered, every shift handover is clean, and every incident is handled the same way regardless of who is on duty.",
      "Day to day, that means checking in with officers across posts, reviewing CCTV and control room activity, and making quick decisions when something doesn't look right. A supervisor is often the first point of escalation, which means staying calm and following procedure even when a situation develops quickly.",
      "Documentation is a quiet but essential part of the job. Every incident, however small, needs to be logged clearly enough that someone reading it later — a manager, a client, an investigator — understands exactly what happened and what was done about it.",
      "Ultimately, the supervisor's job is to make the operation predictable: consistent coverage, consistent standards, and a clear record of what took place on every shift.",
    ],
  },
  {
    slug: "cctv-operator-silent-responsibility",
    title: "The CCTV Operator's Silent Responsibility",
    summary:
      "CCTV monitoring looks passive from the outside. In practice, it's one of the most attention-heavy roles in a security operation.",
    dateLabel: "[ADD DATE]",
    body: [
      "From the outside, watching a wall of monitors looks like the quietest job in a security operation. In practice, it's one of the more demanding ones — long periods of low activity where the operator still has to stay alert enough to catch the one moment that matters.",
      "A CCTV operator isn't just watching for something to happen; they're building a mental picture of what 'normal' looks like across every camera, so that anything unusual — a person lingering somewhere they shouldn't, a door left open, an unattended item — stands out immediately.",
      "When something does happen, the operator becomes the first source of truth. What they saw, when they saw it, and how quickly they flagged it often shapes everything that follows — from the response on the ground to how the incident is reported afterward.",
      "It's a role built on sustained attention and quick, accurate reporting, even though most of a shift can pass without a single notable event.",
    ],
  },
  {
    slug: "importance-of-incident-reporting",
    title: "Why Incident Reporting Matters More Than It Seems",
    summary:
      "A good incident report protects everyone involved. A vague one creates confusion long after the incident is over.",
    dateLabel: "[ADD DATE]",
    body: [
      "It's easy to treat incident reporting as paperwork that comes after the real work is done. In practice, the report often matters as much as the response itself — it's the only record of what actually happened once the moment has passed.",
      "A good incident report is specific: what happened, when, who was involved, what action was taken, and what the outcome was. A vague report — 'minor issue, resolved' — leaves gaps that can cause confusion or disputes weeks or months later.",
      "Reporting also protects the people writing it. A clear, factual account, written close to the time of the incident, is far more useful — and more defensible — than a memory reconstructed later under pressure.",
      "Good reporting habits are built through repetition: writing the same way every time, sticking to facts over interpretation, and never leaving a report until it's clear enough for someone with no prior context to understand exactly what took place.",
    ],
  },
  {
    slug: "security-control-room-operations",
    title: "Inside Security Control Room Operations",
    summary:
      "A look at what actually happens in a control room during a shift — monitoring, coordination, and decision-making under time pressure.",
    dateLabel: "[ADD DATE]",
    body: [
      "A security control room is the coordination point for everything happening on site — CCTV feeds, alarm panels, access control systems, and radio communication with officers on the ground, all in one place.",
      "Much of the job is routine monitoring: checking feeds, logging access events, and keeping communication with officers moving smoothly. The value of the role shows up in the moments that aren't routine — when an alarm triggers, a camera flags unusual activity, or an officer calls in something that needs a decision quickly.",
      "Control room work rewards calm, methodical thinking. Systems can generate a lot of information quickly, and the operator's job is to filter it, decide what matters, and communicate it clearly to whoever needs to act on it.",
      "Over time, a good control room operator develops a feel for the rhythm of a site — what's normal for a given time of day, and what isn't — which makes it easier to catch problems early.",
    ],
  },
  {
    slug: "fire-alarm-response",
    title: "Fire Alarm Response: What Good Practice Looks Like",
    summary:
      "Fire alarm response has to be fast, procedural, and unaffected by whether the alarm turns out to be real or not.",
    dateLabel: "[ADD DATE]",
    body: [
      "Every fire alarm has to be treated as real until confirmed otherwise. That's the starting principle behind good fire alarm response — the process doesn't change based on a guess about whether it's a false alarm.",
      "Good practice means knowing the procedure well enough that it's automatic: confirming the alarm zone, checking relevant CCTV where available, communicating with the control room or fire panel, and supporting evacuation or investigation as required.",
      "Clear communication matters as much as speed. Everyone involved — officers, supervisors, building occupants — needs consistent, accurate information, especially in the first few minutes when the situation is still unclear.",
      "Afterward, the response still isn't finished until it's documented — what triggered the alarm, what actions were taken, and what the outcome was, so the record is complete regardless of how the incident resolved.",
    ],
  },
  {
    slug: "access-control-best-practices",
    title: "Access Control Best Practices",
    summary:
      "Access control is a routine part of every shift, but small inconsistencies are where most access-related problems start.",
    dateLabel: "[ADD DATE]",
    body: [
      "Access control can feel like one of the more repetitive parts of a security role — checking credentials, managing visitor sign-ins, logging contractor access. But most access-related problems trace back to small inconsistencies in exactly this kind of routine check.",
      "Good practice starts with consistency: the same verification standard applied to everyone, every time, regardless of how familiar a face looks or how busy the shift is.",
      "Visitor and contractor management benefits from the same discipline — clear sign-in records, visible identification, and a clear understanding of where someone is authorized to be and for how long.",
      "Access control isn't glamorous work, but it's one of the more effective ways a security operation prevents problems before they start, rather than responding to them after the fact.",
    ],
  },
  {
    slug: "ai-tools-for-security-and-office-productivity",
    title: "AI Tools for Security and Office Productivity",
    summary:
      "Practical, everyday ways AI tools can support reporting and documentation in a security operations role.",
    dateLabel: "[ADD DATE]",
    body: [
      "AI tools are increasingly useful in operational roles — not as a replacement for judgment on the ground, but as support for the writing and documentation that surrounds it.",
      "In a security context, that can mean using AI to help structure an incident report from rough notes, tighten the language in a daily report, or draft a professional email without spending too much time on wording.",
      "The skill worth developing isn't just using an AI tool — it's prompting it well: giving clear context, being specific about the format needed, and checking the output against what actually happened rather than accepting it as-is.",
      "Used this way, AI becomes a productivity tool for the administrative side of an operations role, freeing up more attention for the monitoring and response work that actually needs a person's judgment.",
    ],
  },
];

export const faqs = [
  {
    question: "Who is Tallat Hussain?",
    answer:
      "Tallat Hussain is a security operations professional with experience in CCTV monitoring, control room operations, incident reporting, access control and emergency response.",
  },
  {
    question: "What does Tallat Hussain do?",
    answer:
      "Tallat Hussain works in security operations, covering CCTV and control room monitoring, security supervision, access control, and incident and emergency response.",
  },
  {
    question: "What are Tallat Hussain's professional skills?",
    answer:
      "Core skills include CCTV monitoring, control room operations, security supervision, access control, visitor and contractor management, incident reporting, and emergency response — alongside growing use of AI tools for documentation and office productivity.",
  },
  {
    question: "Does Tallat Hussain have CCTV experience?",
    answer:
      "Yes. Tallat Hussain has hands-on experience with CCTV and camera monitoring, incident detection, and CCTV-based reporting within control room environments.",
  },
  {
    question: "What security operations experience does Tallat Hussain have?",
    answer:
      "Experience spans security supervision, control room operations, access control, visitor and contractor management, parking and traffic monitoring, and incident and emergency response.",
  },
  {
    question: "What safety training does Tallat Hussain have?",
    answer:
      "Training includes Fire Safety Management and ITCILO, with NEBOSH IGC currently in progress.",
  },
  {
    question: "What type of security roles is Tallat Hussain interested in?",
    answer:
      "Roles in security operations, security supervision, CCTV and control room monitoring, and safety-focused operational positions.",
  },
  {
    question: "Does Tallat Hussain use AI tools?",
    answer:
      "Yes. Tallat Hussain uses AI tools to support day-to-day office productivity — including report drafting, documentation and written communication.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Articles", href: "#articles" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
