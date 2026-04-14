"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaEnvelope, FaDownload, FaArrowDown } from "react-icons/fa";

export default function PortfolioHero({ data }) {
  const hasPhoto = !!(data?.heroImageBase64 || data?.profile_photo);
  const firstName = data?.name?.split(" ")[0] ?? "";
  const restName  = data?.name?.split(" ").slice(1).join(" ") ?? "";

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", background: "#090806", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <style>{`
        @keyframes vy-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes vy-orbit { from { transform: rotate(0deg) translateX(52px) rotate(0deg); } to { transform: rotate(360deg) translateX(52px) rotate(-360deg); } }
        @keyframes vy-pulse { 0%,100% { opacity:0.5; transform:scale(1); } 50% { opacity:1; transform:scale(1.08); } }
        @keyframes vy-drift { 0%,100% { transform:translateY(0) scale(1); } 50% { transform:translateY(-24px) scale(1.06); } }
        @keyframes vy-crack-draw { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
        @keyframes vy-bob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }
        .vy-cta-primary {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 32px; border-radius:6px; cursor:pointer;
          background:#FACC15;
          color:#090806; font-size:13px; font-weight:800; letter-spacing:0.06em;
          border:none; text-decoration:none;
          box-shadow:0 0 32px rgba(250,204,21,0.3);
          transition:all 0.25s ease;
        }
        .vy-cta-primary:hover {
          transform:translateY(-2px);
          box-shadow:0 0 50px rgba(250,204,21,0.5);
          background:#FFD700;
        }
        .vy-cta-secondary {
          display:inline-flex; align-items:center; gap:10px;
          padding:14px 32px; border-radius:6px; cursor:pointer;
          background:transparent; color:rgba(250,250,245,0.7);
          font-size:13px; font-weight:700; letter-spacing:0.06em;
          border:1px solid rgba(250,204,21,0.3); text-decoration:none;
          transition:all 0.25s ease;
        }
        .vy-cta-secondary:hover {
          transform:translateY(-2px);
          background:rgba(250,204,21,0.08);
          border-color:rgba(250,204,21,0.55);
          color:#FACC15;
          box-shadow:0 0 24px rgba(250,204,21,0.15);
        }
        .vy-scroll-btn { background:none; border:none; cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:6px; animation:vy-bob 2.5s ease-in-out infinite; }
        @media(max-width:768px) { .vy-hero-grid { grid-template-columns:1fr!important; padding:5rem 1.25rem 3rem!important; gap:2.5rem!important; } .vy-two-col { display:block!important; } .vy-two-col>*{margin-bottom:2rem;} section>div{padding-left:1.25rem!important;padding-right:1.25rem!important;} #hero{padding-bottom:7rem!important;} }
      `}</style>

      {/* Lightning crack SVG background */}
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", opacity:0.15 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="vy-crack1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0" />
            <stop offset="50%" stopColor="#FACC15" stopOpacity="1" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vy-crack2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points="520,0 480,180 540,190 460,420 530,435 440,700 520,720 430,1080"
          fill="none" stroke="url(#vy-crack1)" strokeWidth="1.5"
          strokeDasharray="1200" style={{ animation:"vy-crack-draw 3s ease forwards" }} />
        <polyline points="480,180 390,280 420,300 340,500"
          fill="none" stroke="url(#vy-crack2)" strokeWidth="0.8"
          strokeDasharray="600" style={{ animation:"vy-crack-draw 3.5s 0.5s ease forwards" }} />
        <polyline points="540,190 650,310 610,330 720,520"
          fill="none" stroke="url(#vy-crack1)" strokeWidth="0.8"
          strokeDasharray="600" style={{ animation:"vy-crack-draw 3.5s 0.8s ease forwards" }} />
        <polyline points="120,0 80,250 140,270 60,600"
          fill="none" stroke="#FACC15" strokeWidth="0.6" strokeOpacity="0.25"
          strokeDasharray="800" style={{ animation:"vy-crack-draw 4s 1s ease forwards" }} />
        <polyline points="1300,100 1260,350 1340,380 1280,800"
          fill="none" stroke="#F59E0B" strokeWidth="0.6" strokeOpacity="0.25"
          strokeDasharray="800" style={{ animation:"vy-crack-draw 4s 1.2s ease forwards" }} />
      </svg>

      {/* Glow orbs */}
      <div style={{ position:"absolute", top:"15%", left:"8%", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle, rgba(250,204,21,0.1) 0%, transparent 70%)", animation:"vy-drift 9s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"6%", width:"560px", height:"560px", borderRadius:"50%", background:"radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)", animation:"vy-drift 12s 2s ease-in-out infinite", pointerEvents:"none" }} />

      {/* Content */}
      <div className="vy-hero-grid" style={{
        position:"relative", zIndex:10, maxWidth:"1200px", margin:"0 auto",
        padding:"100px 1.5rem 2rem",
        display:"grid",
        gridTemplateColumns: hasPhoto ? "1fr auto" : "1fr",
        gap:"4rem", alignItems:"center",
      }}>

        {/* Left: text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity:0, y:-12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}
            style={{ marginBottom:"2rem" }}
          >
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"6px 18px", borderRadius:"999px",
              background:"rgba(250,204,21,0.08)",
              border:"1px solid rgba(250,204,21,0.2)",
              color:"#FACC15", fontSize:"10px", fontWeight:800,
              letterSpacing:"0.35em", textTransform:"uppercase",
            }}>
              <FaBolt style={{ fontSize:"9px", animation:"vy-pulse 2s ease-in-out infinite" }} />
              {data?.title || "Portfolio"}
            </span>
          </motion.div>

          {/* Name */}
          <div style={{ overflow:"hidden", marginBottom:"0.5rem" }}>
            <motion.h1
              initial={{ opacity:0, y:60 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.15 }}
              style={{
                fontSize:"clamp(3.2rem, 9vw, 7.5rem)",
                fontWeight:900, lineHeight:0.88,
                letterSpacing:"-0.04em", color:"#FAFAF5", margin:0,
              }}
            >
              {firstName}
            </motion.h1>
          </div>
          <div style={{ overflow:"hidden", marginBottom:"2rem" }}>
            <motion.h1
              initial={{ opacity:0, y:60 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.3 }}
              style={{
                fontSize:"clamp(3.2rem, 9vw, 7.5rem)",
                fontWeight:900, lineHeight:0.88,
                letterSpacing:"-0.04em", margin:0,
                color:"#FACC15",
                filter:"drop-shadow(0 0 40px rgba(250,204,21,0.35))",
              }}
            >
              {restName || firstName}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1, delay:0.55 }}
            style={{
              fontSize:"clamp(1rem, 2vw, 1.2rem)", fontWeight:300,
              color:"rgba(250,250,245,0.5)", maxWidth:"520px", lineHeight:1.75,
              marginBottom:"3rem", letterSpacing:"-0.01em",
            }}
          >
            {data?.sloganHeroSection || data?.bio?.slice(0, 120)}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.75 }}
            style={{ display:"flex", flexWrap:"wrap", gap:"1rem", alignItems:"center" }}
          >
            <button onClick={scrollToContact} className="vy-cta-primary">
              <FaEnvelope style={{ fontSize:"13px" }} /> Get In Touch
            </button>
            {(data?.resumeBase64 || data?.resume || data?.resumeUrl) && (
              <a href={data.resumeBase64 ? `data:application/pdf;base64,${data.resumeBase64}` : (data.resume || data.resumeUrl)} download="Resume.pdf" className="vy-cta-secondary">
                <FaDownload style={{ fontSize:"12px" }} /> Download Resume
              </a>
            )}
          </motion.div>
        </div>

        {/* Right: photo */}
        {hasPhoto && (
          <motion.div
            initial={{ opacity:0, scale:0.85 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.9, delay:0.4 }}
            style={{ position:"relative", flexShrink:0 }}
            className="vy-hero-photo"
          >
            {/* Static gradient ring */}
            <div style={{
              width:"280px", height:"280px", borderRadius:"50%",
              background:"conic-gradient(from 0deg, #FACC15, #F59E0B, #D97706, #FACC15)",
              display:"flex", alignItems:"center", justifyContent:"center",
              boxShadow:"0 0 60px rgba(250,204,21,0.3), 0 0 120px rgba(250,204,21,0.1)",
            }}>
              <div style={{
                width:"268px", height:"268px", borderRadius:"50%",
                background:"#090806",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <img
                  src={data.heroImageBase64 || data.profile_photo}
                  alt={data.name}
                  style={{ width:"256px", height:"256px", borderRadius:"50%", objectFit:"cover" }}
                />
              </div>
            </div>
            {/* Bolt decorations */}
            <div style={{ position:"absolute", top:"-16px", right:"-8px", color:"#FACC15", opacity:0.8, animation:"vy-pulse 3s ease-in-out infinite" }}>
              <FaBolt size={22} />
            </div>
            <div style={{ position:"absolute", bottom:"-12px", left:"-4px", color:"#F59E0B", opacity:0.5, animation:"vy-pulse 3.5s 1s ease-in-out infinite" }}>
              <FaBolt size={14} />
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}
        style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", zIndex:10 }}
      >
        <button className="vy-scroll-btn" onClick={scrollToAbout}>
          <span style={{ fontSize:"9px", letterSpacing:"0.4em", color:"rgba(250,204,21,0.45)", textTransform:"uppercase", fontWeight:600 }}>Scroll</span>
          <FaArrowDown style={{ color:"rgba(250,204,21,0.45)", fontSize:"12px" }} />
        </button>
      </motion.div>

      {/* Bottom fade */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"120px", background:"linear-gradient(to top, #090806, transparent)", pointerEvents:"none" }} />
    </section>
  );
}
