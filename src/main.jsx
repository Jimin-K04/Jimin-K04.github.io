import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, Github, Mail, FileDown, Home, Grid2X2, UserRound, Wrench, BriefcaseBusiness, ChevronLeft, X, ExternalLink, Menu, Copy, Check, Sparkles, CircleDot, GraduationCap, Cpu, FlaskConical } from 'lucide-react';
import { identity, projects, skillGroups } from './data';
import { PhotoViewer, ProjectVisual } from './Visuals';
import './style.css';

const nav = [
  {key:'work',title:'Projects',Icon:Grid2X2},
  {key:'about',title:'About',Icon:UserRound},
  {key:'skills',title:'Skills',Icon:Wrench},
  {key:'experience',title:'Experience',Icon:BriefcaseBusiness}
];
const experiences = [
  {time:'2026.07 — 현재',title:'학부 연구 · On-Device AI',detail:'MCU 기반 AI 추론 환경 구축, CPU/NPU 성능·전력 분석'},
  {time:'2026.05 — 2026.06',title:'RTOS 기반 UGV 로봇',detail:'STM32 및 uC/OS-III를 이용한 로봇 제어와 센서 연동'},
  {time:'2025.08',title:'DIVE 2025 · 카카오모빌리티 트랙 3위',detail:'부산 특화 대화형 내비게이션 서비스 기획 및 프론트엔드 개발'},
  {time:'2025.07 — 2026.01',title:'Drilling · Unity 동아리 팀 프로젝트',detail:'게임 맵 및 주요 시스템 구현, Steam 출시'}
];
function Avatar() {
  return (
    <PhotoViewer
      src={import.meta.env.BASE_URL + identity.avatar.replace(/^\//, '')}
      alt="김지민 프로필 이미지"
      label="프로필 이미지 전체 화면으로 보기"
      imageClassName="avatar"
    />
  );
}
function Brand(){return <span className="brand-word">{identity.brand}</span>}
function ProjectCard({p,onOpen}){return <button className="project-card" onClick={()=>onOpen(p)} aria-label={`${p.name} 상세 보기`}><div className="project-art"><ProjectVisual project={p}/><span className="art-flag">{p.category}</span></div><div className="card-body"><div className="card-line"><span className="card-no">{p.number} / {p.year}</span><ArrowUpRight className="card-arrow" size={18}/></div><h3>{p.name}</h3><p>{p.description}</p></div></button>}
function AboutPage() {
  const { education, interests, research } = identity.about;

  return (
    <div className="content inner-page">
      <span className="eyebrow">02 / ABOUT ME</span>
      <h2>From Code to <em>Reality.</em></h2>
      <div className="about-sections">
        <section className="about-row" aria-labelledby="education-heading">
          <h3 id="education-heading"><GraduationCap size={20} aria-hidden="true" />학력</h3>
          <div>
            <p className="about-primary">{education.school}</p>
            <p className="about-secondary">{education.major}</p>
          </div>
        </section>
        <section className="about-row" aria-labelledby="interests-heading">
          <h3 id="interests-heading"><Cpu size={20} aria-hidden="true" />관심 분야</h3>
          <ul className="about-interests">
            {interests.map(interest => <li key={interest}>{interest}</li>)}
          </ul>
        </section>
        <section className="about-row" aria-labelledby="research-heading">
          <h3 id="research-heading"><FlaskConical size={20} aria-hidden="true" />연구 활동</h3>
          <div>
            <p className="about-primary">{research.lab}</p>
            <p className="about-secondary">{research.work}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function App(){
  const [section,setSection]=useState('work');
  const [all,setAll]=useState(false);
  const [selected,setSelected]=useState(null);
  const [menu,setMenu]=useState(false);
  const [copied,setCopied]=useState(false);
  useEffect(()=>{const esc=e=>{if(e.key==='Escape'&&!document.querySelector('.photo-viewer[open]'))setSelected(null)};window.addEventListener('keydown',esc);return()=>window.removeEventListener('keydown',esc)},[]);
  useEffect(()=>{document.body.style.overflow=selected?'hidden':'';return()=>document.body.style.overflow=''},[selected]);
  function navigate(s){setSection(s);setMenu(false);setAll(false);window.scrollTo({top:0,behavior:'smooth'})}
  async function copyEmail(){if(!identity.email)return;await navigator.clipboard.writeText(identity.email);setCopied(true);setTimeout(()=>setCopied(false),1800)}
  return <div className="page-shell">
    <div className="decor decor-a"/><div className="decor decor-b"/>
    <div className="site-frame">
      <aside className={`side ${menu?'side-open':''}`}>
        <div className="side-head"><Brand/><button className="mobile-close" aria-label="메뉴 닫기" onClick={()=>setMenu(false)}><X size={19}/></button><span className="tiny-plus">✳</span></div>
        <div className="profile-top"><div className="avatar-ring"><Avatar/></div><h1>{identity.name}</h1><div className="english-name">{identity.english}</div><p className="profile-field">{identity.tagline}</p><p className="profile-bio">{identity.bio}</p></div>
        <div className="status"><span className="status-dot"/> Exploring On-Device AI</div>
        <div className="side-rule"/>
        <nav className="side-nav" aria-label="포트폴리오 메뉴">{nav.map(({key,title,Icon})=><button key={key} onClick={()=>navigate(key)} className={`nav-link ${section===key?'nav-active':''}`}><Icon size={18}/><span>{title}</span>{section===key?<ArrowUpRight size={15} className="nav-end"/>:null}</button>)}</nav>
        <div className="side-bottom"><div className="side-bottom-title">LET'S CONNECT <span>↗</span></div><div className="socials"><a href={identity.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20}/></a>{identity.email?<button aria-label="이메일 주소 복사" onClick={copyEmail}>{copied?<Check size={20}/>:<Mail size={20}/>}</button>:<span className="social-disabled" title="이메일 주소는 설정 후 표시됩니다"><Mail size={20}/></span>}{identity.resume?<a href={import.meta.env.BASE_URL+identity.resume.replace(/^\//,'')} download aria-label="이력서 PDF 다운로드"><FileDown size={20}/></a>:<span className="social-disabled" title="이력서 파일은 추후 추가 가능"><FileDown size={20}/></span>}</div><p className="copyright">© 2026 Jimin Kim</p></div>
      </aside>
      <main className="main-area">
        <header className="topbar"><div className="topmark"><span className="mark-square"/> PERSONAL PORTFOLIO <span className="top-year">/ 2026</span></div><div className="topright"><span>ENGINEERING · DESIGN · BUILD</span><button aria-label="메뉴 열기" className="menu-button" onClick={()=>setMenu(true)}><Menu size={21}/></button></div></header>
        {section==='work'&&<div className="content content-work"><div className="intro"><div><span className="eyebrow">01 / SELECTED PROJECTS</span><h2>Selected <em>Work.</em></h2><p>아이디어를 구현하고, 실험하고, 개선해 온 프로젝트들입니다.</p></div><div className="intro-aside"><span className="intro-count">0{projects.length}</span><span>PROJECTS IN ARCHIVE</span></div></div><div className="project-grid">{projects.filter(p=>all||p.featured).map(p=><ProjectCard key={p.id} p={p} onOpen={setSelected}/>)}</div><div className="work-footer"><div className="work-counter"><span className="rule-swatch"/>{all?'07 / 07 ALL PROJECTS':'04 / 07 FEATURED PROJECTS'}</div><button className="text-action" onClick={()=>setAll(v=>!v)}>{all?'Show featured only':'Explore all work'} <ArrowUpRight size={17}/></button></div></div>}
        {section==='about'&&<AboutPage/>}
        {section==='skills'&&<div className="content inner-page"><span className="eyebrow">03 / TOOLBOX</span><h2>Tools & <em>Skills.</em></h2><p className="lead">프로젝트에서 사용해 본 언어와 개발 환경을 정리했습니다.</p><div className="skill-groups">{skillGroups.map((g,i)=><section className="skill-group" key={g.name}><div className="skill-heading"><span>0{i+1}</span><h3>{g.name}</h3></div><div className="skill-tags">{g.items.map(x=><span key={x}>{x}</span>)}</div></section>)}</div></div>}
        {section==='experience'&&<div className="content inner-page"><span className="eyebrow">04 / EXPERIENCE</span><h2>Selected <em>Milestones.</em></h2><p className="lead">연구, 팀 프로젝트, 해커톤에서 쌓아 온 경험입니다.</p><div className="timeline">{experiences.map((e,i)=><div className="timeline-item" key={i}><div className="time">{e.time}</div><div><h3>{e.title}</h3><p>{e.detail}</p></div><span className="timeline-num">0{i+1}</span></div>)}</div></div>}
        <footer className="main-footer"><span>BUILT WITH CURIOSITY.</span><span>JIMIN KIM · 2026</span></footer>
      </main>
    </div>
    {selected&&<div className="modal-scrim" onClick={()=>setSelected(null)}><div className="modal" role="dialog" aria-modal="true" aria-label={`${selected.name} 상세 정보`} onClick={e=>e.stopPropagation()}><div className="modal-header"><span>PROJECT DETAIL / {selected.number}</span><button aria-label="닫기" onClick={()=>setSelected(null)}><X size={22}/></button></div><div className="modal-visual">
      {selected.image ? (
        <PhotoViewer
          src={import.meta.env.BASE_URL + selected.image.src}
          alt={selected.image.alt}
          label={`${selected.name} 대표사진 전체 화면으로 보기`}
          imageClassName="project-image"
        />
      ) : <ProjectVisual project={selected}/>}
    </div><div className="modal-content"><span className="eyebrow">{selected.category} / {selected.date}</span><h2>{selected.name}</h2><p className="modal-desc">{selected.description}</p><div className="modal-section"><h3>01 / Problem & Goal</h3><p>{selected.problem}</p></div><div className="modal-section"><h3>02 / My Role</h3><p>{selected.role}</p></div><div className="modal-section"><h3>03 / Outcome</h3><p>{selected.outcome}</p></div><div className="modal-section"><h3>Technology</h3><div className="modal-tags">{selected.stack.map(s=><span key={s}>{s}</span>)}</div></div><div className="modal-actions">{selected.link?<a className="primary-action" target="_blank" rel="noopener noreferrer" href={selected.link}>{selected.linkLabel||'프로젝트 페이지'} <ExternalLink size={17}/></a>:<span className="unavailable">공개된 외부 링크 없음</span>}<button className="secondary-action" onClick={()=>setSelected(null)}><ChevronLeft size={17}/> Back to portfolio</button></div></div></div></div>}
  </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
