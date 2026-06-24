# Vaibhav Sharma — Portfolio

Personal portfolio website for **Vaibhav Sharma** — Full-Stack Developer, B.Tech CSE student at CGC University, and co-founder of **Kapstone Healthcare**. The site showcases skills, work experience, 25+ shipped projects, certifications, and writing.

🔗 **Live site:** _add your deployed URL here_

---

## ✨ Features

- **Animated hero section** with scroll-based parallax (Framer Motion)
- **Responsive navigation** with glassmorphism styling and mobile menu
- **Skills section** with categorized skill groups and animated proficiency bars
- **Experience timeline** — internships, founder work, and prior e-commerce experience
- **Projects grid** with category filters (Featured / AI-ML / Full-Stack) and a dedicated **"Live Projects Shipped"** showcase linking to deployed client sites
- **Certifications section** with credential details and skill tags
- **Animated achievement counters** (projects built, live projects shipped, etc.)
- **Books section** showcasing published and upcoming writing
- **Contact section** with email, social, and freelance platform links
- Fully responsive, dark-themed UI with custom gradient/blob background effects

---

## 🛠 Tech Stack

| Category        | Tools |
|------------------|-------|
| Framework        | [TanStack Router](https://tanstack.com/router) (file-based routing) |
| UI Library       | React |
| Styling          | Tailwind CSS, custom CSS (glassmorphism, gradients, `oklch` colors) |
| Animation        | [Framer Motion](https://www.framer.com/motion/) |
| Icons            | [lucide-react](https://lucide.dev/), [react-icons](https://react-icons.github.io/react-icons/) (FontAwesome) |
| Language         | TypeScript |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── vaibhav.jpg          # Profile photo used in the hero section
├── routes/
│   └── index.tsx            # Main portfolio page (this file) — all sections live here
```

The entire page is composed of small, self-contained components rendered in sequence by the `Portfolio` component:

```
Navbar → Hero → Marquee → About → Skills → Experience →
Projects → Certifications → Services → Achievements →
Books → Contact → Footer
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000` (or whichever port your TanStack Router dev server uses).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## ✏️ Customization

Most content lives in plain data arrays/objects at the top of `index.tsx`, making it easy to update without touching JSX:

| Section | Variable |
|---|---|
| Navigation links | `nav` |
| Skill groups & proficiency | `skillGroups`, `proficiency` |
| Work experience | `experience` |
| GitHub projects | `projects` |
| Live client projects | `clientProjects` |
| Services offered | `services` |
| Achievement stats | inside `Achievements()` |
| Certifications | `certifications` |
| Books | `books` |

To update the profile photo, replace `src/assets/vaibhav.jpg` with a new image of the same aspect ratio (square works best).

To change the resume download, replace `/resume.pdf` in the `public` folder (referenced by the **Download Resume** button).

---

## 📬 Contact

- **Email:** vaibhavattri77@gmail.com
- **GitHub:** [@VAIBHAVSHARMA608](https://github.com/VAIBHAVSHARMA608)
- **LinkedIn:** [vaibhav-sharma-918590348](https://linkedin.com/in/vaibhav-sharma-918590348)
- **Freelancer:** [vaibhavattri77](https://www.freelancer.com/u/vaibhavattri77)
- **Fiverr:** [vaibhav_attri](https://www.fiverr.com/vaibhav_attri/build-fix-and-deploy-your-website)

---

## 📄 License

This project is the personal portfolio of Vaibhav Sharma. Feel free to use the code structure as a reference, but please don't reuse the personal content (photos, bio, project details) as your own.
