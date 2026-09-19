import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Cases from './components/Cases';
import HitJay from './components/HitJay';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AntigravityCanvas from './components/AntigravityCanvas';
import SmoothScroll from './components/SmoothScroll';
import { use3DTilt } from './hooks/use3DTilt';
import { profileData } from './data/profileData';

export default function App() {
  // Attach 3D Card Tilt Effect to Project, Case, and Profile cards
  use3DTilt('.project-card, .case-card, .profile-card');

  return (
    <SmoothScroll>
      <div className="app">
        <AntigravityCanvas />

        <div className="bg-ambient">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        <Navbar 
          name={`${profileData.personal.name} (${profileData.personal.koreanName})`} 
          scheduleConfig={profileData.scheduleConfig} 
        />
        
        <Hero 
          personal={profileData.personal} 
          highlights={profileData.highlights} 
        />
        
        <Projects 
          projects={profileData.projects} 
          focusStatement={profileData.personal.focusStatement}
        />
        
        <Cases 
          cases={profileData.cases} 
        />
        
        <HitJay 
          personal={profileData.personal} 
        />
        
        <Footer 
          name={`${profileData.personal.name} (${profileData.personal.koreanName})`} 
        />
      </div>
    </SmoothScroll>
  );
}
