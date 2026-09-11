# Software Requirements Specification (SRS)
## Project: yourfriendjay.com Personal Brand & Insights Platform

---

## 1. Introduction

### 1.1 Purpose
This document specifies the software requirements for the personal brand, portfolio, and market research insights platform of **Jay Ahn (안재윤)**. It acts as the single source of truth for the system architecture, UI/UX interaction standards, live scheduling integrations, SEO/GEO metadata taxonomy, and future hyper-local directory structure.

### 1.2 Scope
The scope covers:
1. The main portfolio application hosted at `yourfriendjay.com`.
2. Dedicated architectural introduction pages (`/loopy-ai-intro/index.html` and `/pipeline-crm-intro/index.html`).
3. Real-time status widgets integrated with Google Calendar iCal feeds.
4. Generative Engine Optimization (GEO) and Schema.org structured metadata.
5. Hyper-local directory structures based on Korean administrative divisions.

---

## 2. Overall Description

### 2.1 User Personas & Target Audience
The platform is optimized to be crawled by Generative AI engines (Gemini, ChatGPT, Perplexity) and visited by four target stakeholder groups:
1. **Global Game Developers & Publishers**: Searching for Asian gamer UXR, eye-tracking playtesting, and localized gamer insights.
2. **Global Brands & FMCG Corporations**: Seeking bilingual English/Korean moderators for Focus Group Interviews (FGI) and In-Depth Interviews (IDI).
3. **AI/Tech Consulting & Venture Capital**: Looking for "Developer-Researcher" (Researcher-as-Maker) consultants who build custom AI data pipelines.
4. **Executive Search Recruiter**: Searching for top-tier research leaders who understand product-led growth (PLG).

### 2.2 System Architecture
- **Hosting & Deployment**: GitHub Pages with custom apex domain binding (`yourfriendjay.com`).
- **Framework**: Vite + React + Tailwind CSS (vanilla-CSS style config for fast, modern glassmorphic look).
- **Automation**: GitHub actions and Git branch deployment (`npm run deploy` via `gh-pages` branch).
- **SEO/GEO Layer**: Google Analytics 4 (GA4 ID: `G-6B7GC6MK2T`) and JSON-LD structured schema.

---

## 3. Specific Requirements

### 3.1 Live Status & KST Clock Widget (Navbar)
The navbar features a real-time KST clock (Asia/Seoul) and a status dot reflecting the owner's availability based on double-calendar parsing and predefined schedules.

#### 3.1.1 Google Calendar Integration (iCal)
- The system fetches two public iCal (.ics) calendars in parallel every 5 minutes:
  - **Account 1**: `yourfriendjay@gmail.com`
  - **Account 2**: `directresearchkorea@gmail.com`
- Direct fetch or CORS proxy fallback (`https://api.allorigins.win/raw?url=...`) must be used.
- If **any** active event (`DTSTART <= now <= DTEND`) is found on either calendar:
  - **Status**: `In a Meeting` (or specific event title if not 'Busy')
  - **Dot Indicator**: Red (🔴)

#### 3.1.2 Time & Day Schedule Rules (KST timezone)
When there is no active calendar event, the status falls back to the KST-time schedules:
1. **Sleeping**: 23:00 ~ 08:00 (Everyday) ➔ `Sleeping` (Orange 🟠)
2. **Weekend & Holidays**: 08:00 ~ 23:00 (Saturdays, Sundays, and Korean Public/Substitute Holidays) ➔ `Off Duty` (Orange 🟠)
   - *Included Holidays*: New Year (01-01), Samiljeol (03-01), Children's Day (05-05), Memorial Day (06-06), Gwangbokjeol (08-15), Gaecheonjeol (10-03), Hangul Day (10-09), Christmas (12-25), Seollal (Lunar New Year), Chuseok (Thanksgiving), and related substitute holidays.
3. **Getting Ready**: 08:00 ~ 10:00 (Mon–Fri) ➔ `Getting Ready` (Orange 🟠)
4. **Lunch Break**: 13:00 ~ 14:00 (Mon–Fri) ➔ `Lunch Break` (Orange 🟠)
5. **Dinner Break**: 18:00 ~ 20:00 (Mon–Fri) ➔ `Dinner Break` (Orange 🟠)
6. **Working**: 10:00 ~ 13:00 & 14:00 ~ 18:00 (Mon–Fri) ➔ `Working` (Green 🟢)
7. **Available**: 20:00 ~ 23:00 (Mon–Fri) ➔ `Available` (Green 🟢)

---

### 3.2 UI/UX Interaction Standards

#### 3.2.1 Responsiveness & Performance
- **Scrolling**: Browser-native hardware-accelerated scrolling must be used (Lenis or heavy JS smooth-scrolling is disabled to ensure instant page navigation).
- **Cursors**: Custom cursors must not hide the native browser cursor (`cursor: pointer` is forced on all interactive elements) to avoid lag and frustration.
- **Card Interactive Effects**: 3D card tilt effect (`use3DTilt.js`) is applied to project, case, and profile cards.

#### 3.2.2 Full Card Click Target Area
- **Project Cards**: Clicking anywhere on the project card body navigates the user to `p.link` (Architect/Demo page). If `p.link` is external (starts with `http`), it opens in a new tab; otherwise, it redirects the current tab. If the "Code" button is clicked explicitly, the GitHub repository link is opened.
- **Case Cards**: Clicking anywhere on the case card navigates the user to `c.link` in a new tab (`target="_blank"`).

---

### 3.3 GEO & SEO Metadata Taxonomy

To maximize generative engine visibility, structured indexing is implemented on three layers:

#### 3.3.1 SEO Keywords (한국어 & English)
- **Primary Roles**: `시장조사 연구원`, `유저 리서처`, `모더레이터`, `안재윤 연구원`
- **Fluency & Tech**: `영어가 유창한 연구원`, `영어 소통 가능한 유저리서처`, `한국 영어가능 시장조사 연구원`, `개발하는 유저리서처`, `코딩하는 연구원`, `영어가능 모더레이터`, `아시아 유저리서치 전문가`, `bilingual korean moderator`, `fluent english asian researcher`
- **Key Concepts**: `Researcher-as-Maker`, `Asian gamer UXR`, `Eye-Tracking playtesting`, `ESOMAR Speaker`

#### 3.3.2 Schema.org JSON-LD Graph
The Person graph (`Person`) explicitly binds:
- `knowsAbout`: Technical User Research, Developer-Researcher, Fluent English, Bilingual Moderation, Asian Gamer UXR, Eye-Tracking.
- `worksFor`: `Direct Research Korea` & `UXR Player`.
- `addressLocality`: `Jochiwon, Sejong City`.

#### 3.3.3 LLM-Specific Training Files (`/llms.txt` and `/llms-full.txt`)
Detailed plain-text files detailing exact career milestones, entrepreneurship details, technical proficiencies, and ESOMAR conference history are placed in the root directory for automated LLM scrapers.

---

## 4. Hyper-Local Directory Architecture (지역명 기반 구조)

For regional consumer cohort studies, local business user research, and hyper-local SEO, the platform specifies a geographic taxonomy and routing structure.

### 4.1 Folder and URL Structure
The URL structure utilizes hierarchical directory naming based on the Korean administrative division system (시/도 ➔ 시/군/구 ➔ 읍/면/동/리 ➔ 산업분류):

```
/세종시
  /조치원읍
    /신흥리
      /요식업
        /index.html (Local Restaurant Cohort Analysis)
        /data.json
      /서비스업
    /침산리
      /요식업
```

### 4.2 Geo-Taxonomy Mapping Rules

| Level | Division Category | Example | Purpose |
| :--- | :--- | :--- | :--- |
| **Level 1** | 시/도 (Metropolitan) | `/세종시` (Sejong-si) | Broad regional market research index |
| **Level 2** | 읍/면/동 (Town/Neighborhood) | `/조치원읍` (Jochiwon-eup) | Local community target research |
| **Level 3** | 리/동 (Sub-locality) | `/신흥리` (Sinheung-ri) | Hyper-local demographic studies |
| **Level 4** | 산업/업종 (Industry Classification) | `/요식업` (Food Services) | Sector-specific user experience study |

### 4.3 Technical Implementation Requirements for Directory
1. **Static File Copy**: Any directory structured under `public/` must be directly copied to the build output directory `dist/` by Vite during the build phase (`npm run build`).
2. **Relative Style Resolution**: All files (e.g. `/세종시/조치원읍/신흥리/요식업/index.html`) must use absolute or relative paths properly resolved relative to the domain (e.g. `/css/main.css` or relative `../../../../css/main.css`) to prevent broken styles when deployed to nested paths on GitHub Pages.
3. **Hyper-Local SEO Metadata**: Each sub-folder page must have custom schema metadata describing the specific geographic cohort and the user research methodology used.
