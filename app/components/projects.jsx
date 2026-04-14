"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function PortfolioProjects({ data }) {
  const items = data?.projects;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="projects" style={{ background:"#090806", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .vy-proj-card {
          position:relative; height:100%;
          border:1px solid rgba(250,204,21,0.08);
          border-radius:12px; padding:2rem;
          background:rgba(250,204,21,0.02);
          display:flex; flex-direction:column;
          transition:all 0.35s ease; overflow:hidden;
        }
        .vy-proj-card::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:2px;
          background:#FACC15;
          transform:scaleX(0); transform-origin:left;
          transition:transform 0.4s ease;
        }
        .vy-proj-card:hover {
          border-color:rgba(250,204,21,0.28);
          background:rgba(250,204,21,0.05);
          box-shadow:0 0 50px rgba(250,204,21,0.08), 0 20px 40px rgba(0,0,0,0.4);
          transform:translateY(-4px);
        }
        .vy-proj-card:hover::before { transform:scaleX(1); }
        .vy-proj-icon-wrap { width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; background:rgba(250,204,21,0.08); border:1px solid rgba(250,204,21,0.18); color:#FACC15; margin-bottom:1.25rem; transition:all 0.3s; flex-shrink:0; }
        .vy-proj-card:hover .vy-proj-icon-wrap { background:rgba(250,204,21,0.15); box-shadow:0 0 20px rgba(250,204,21,0.25); }
        .vy-proj-link { color:rgba(250,250,245,0.35); transition:color 0.2s; text-decoration:none; }
        .vy-proj-link:hover { color:#FACC15; }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(250,204,21,0.02)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>04</div>
      <div style={{ position:"absolute", bottom:"-120px", right:"-120px", width:"500px", height:"500px", borderRadius:"50%", background:"radial-gradient(circle, rgba(250,204,21,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(250,204,21,0.45)", textTransform:"uppercase" }}>04</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #FACC15, transparent)" }} />
            <FaBolt style={{ color:"#FACC15", fontSize:"12px", opacity:0.6 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#FAFAF5", margin:0 }}>Projects</h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px,1fr))", gap:"1.5rem" }}>
          {items.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.08 }}
              style={{ height:"100%" }}
            >
              <div className="vy-proj-card">
                {proj.imageBase64 && (
                  <div style={{ width: "100%", paddingTop: "52%", position: "relative", overflow: "hidden", marginBottom: "1rem", flexShrink: 0 }}>
                    <img src={proj.imageBase64} alt={proj.title || "Project"}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                  </div>
                )}
                <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"0.25rem" }}>
                  <div className="vy-proj-icon-wrap">
                    <FaCode size={16} />
                  </div>
                  <div style={{ display:"flex", gap:"12px", paddingTop:"4px" }}>
                    {proj.github && (
                      <a href={proj.github} target="_blank" rel="noopener noreferrer" className="vy-proj-link" aria-label="GitHub">
                        <FaGithub size={17} />
                      </a>
                    )}
                    {(proj.live || proj.url || proj.link || proj.demo) && (
                      <a href={proj.live || proj.url || proj.link || proj.demo} target="_blank" rel="noopener noreferrer" className="vy-proj-link" aria-label="Live demo">
                        <FaExternalLinkAlt size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize:"17px", fontWeight:800, color:"#FAFAF5", margin:"0 0 10px", letterSpacing:"-0.02em", lineHeight:1.3 }}>
                  {proj.title || "Untitled"}
                </h3>
                <p style={{ fontSize:"13px", color:"rgba(250,250,245,0.45)", lineHeight:1.7, margin:0, flex:1 }}>
                  {proj.description}
                </p>

                {(() => {
                  const tags = Array.isArray(proj.stack) ? proj.stack : Array.isArray(proj.tech) ? proj.tech : Array.isArray(proj.technologies) ? proj.technologies : Array.isArray(proj.tags) ? proj.tags : [];
                  if (!tags.length) return null;
                  return (
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"1.5rem", paddingTop:"1rem", borderTop:"1px solid rgba(250,204,21,0.07)" }}>
                      {tags.map((t, j) => {
                        const label = typeof t === "string" ? t : t?.name || t?.label || String(t);
                        return (
                          <span key={j} style={{
                            fontSize:"10px", fontWeight:600, padding:"3px 10px",
                            borderRadius:"4px",
                            background: j % 2 === 0 ? "rgba(250,204,21,0.07)" : "rgba(245,158,11,0.06)",
                            border: j % 2 === 0 ? "1px solid rgba(250,204,21,0.18)" : "1px solid rgba(245,158,11,0.15)",
                            color: j % 2 === 0 ? "rgba(250,204,21,0.85)" : "rgba(245,158,11,0.75)",
                            letterSpacing:"0.05em",
                          }}>
                            {label}
                          </span>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
