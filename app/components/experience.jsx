"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaBriefcase } from "react-icons/fa";

export default function PortfolioExperience({ data }) {
  const items = data?.experience;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="experience" style={{ background:"#090806", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .vy-exp-card {
          position:relative; display:grid; grid-template-columns:3rem 1fr; gap:1.5rem;
          padding:2.5rem 0; border-bottom:1px solid rgba(250,204,21,0.07);
          transition:all 0.3s;
        }
        .vy-exp-card:last-child { border-bottom:none; }
        .vy-exp-card:hover .vy-exp-num { color:#FACC15; text-shadow:0 0 20px rgba(250,204,21,0.5); }
        .vy-exp-card:hover .vy-exp-body { padding-left:12px; }
        .vy-exp-body { transition:padding 0.3s ease; }
        .vy-exp-num { font-size:32px; font-weight:900; color:rgba(250,204,21,0.1); line-height:1; transition:all 0.3s; font-variant-numeric:tabular-nums; }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(250,204,21,0.02)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>03</div>
      <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(250,204,21,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(250,204,21,0.45)", textTransform:"uppercase" }}>03</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #FACC15, transparent)" }} />
            <FaBolt style={{ color:"#FACC15", fontSize:"12px", opacity:0.6 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#FAFAF5", margin:0 }}>Experience</h2>
        </motion.div>

        <div>
          {items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.08 }}
              className="vy-exp-card"
            >
              <div className="vy-exp-num">{String(i + 1).padStart(2, "0")}</div>

              <div className="vy-exp-body">
                <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:"1rem", marginBottom:"0.75rem" }}>
                  <div>
                    <h3 style={{ fontSize:"18px", fontWeight:800, color:"#FAFAF5", margin:"0 0 4px", letterSpacing:"-0.02em" }}>
                      {exp.role || exp.title || exp.position}
                    </h3>
                    <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                      <FaBriefcase style={{ color:"rgba(250,204,21,0.6)", fontSize:"12px" }} />
                      <span style={{ fontSize:"13px", fontWeight:600, color:"rgba(250,204,21,0.85)" }}>
                        {exp.company || exp.organization}
                      </span>
                    </div>
                  </div>
                  <span style={{
                    fontSize:"10px", fontWeight:700, letterSpacing:"0.15em",
                    padding:"5px 14px", borderRadius:"6px",
                    background:"rgba(250,204,21,0.07)", border:"1px solid rgba(250,204,21,0.18)",
                    color:"rgba(250,204,21,0.8)", whiteSpace:"nowrap",
                  }}>
                    {exp.period || exp.duration || exp.startDate}
                  </span>
                </div>

                {exp.description && (
                  <p style={{ fontSize:"14px", color:"rgba(250,250,245,0.5)", lineHeight:1.75, margin:"0 0 1rem" }}>
                    {exp.description}
                  </p>
                )}

                {(exp.highlights || exp.responsibilities || exp.bullets)?.length > 0 && (
                  <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"6px" }}>
                    {(exp.highlights || exp.responsibilities || exp.bullets).map((item, j) => (
                      <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:"10px", fontSize:"13px", color:"rgba(250,250,245,0.5)", lineHeight:1.6 }}>
                        <FaBolt style={{ color:"rgba(250,204,21,0.5)", fontSize:"9px", marginTop:"5px", flexShrink:0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {(() => {
                  const tags = Array.isArray(exp.stack) ? exp.stack : Array.isArray(exp.tech) ? exp.tech : Array.isArray(exp.tags) ? exp.tags : [];
                  if (!tags.length) return null;
                  return (
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"6px", marginTop:"1rem" }}>
                      {tags.map((t, j) => {
                        const label = typeof t === "string" ? t : t?.name || t?.label || String(t);
                        return (
                          <span key={j} style={{ fontSize:"10px", fontWeight:600, padding:"3px 10px", borderRadius:"4px", background:"rgba(245,158,11,0.06)", border:"1px solid rgba(245,158,11,0.15)", color:"rgba(245,158,11,0.75)", letterSpacing:"0.05em" }}>
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
