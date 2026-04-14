"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaGraduationCap } from "react-icons/fa";

export default function PortfolioEducation({ data }) {
  const items = data?.education;
  if (!items || !Array.isArray(items) || items.length === 0) return null;

  return (
    <section id="education" style={{ background:"#090806", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .vy-edu-card {
          position:relative; padding:2rem 2rem 2rem 2.5rem;
          border:1px solid rgba(250,204,21,0.08);
          border-radius:12px; background:rgba(250,204,21,0.02);
          transition:all 0.3s ease; cursor:default;
        }
        .vy-edu-card::before {
          content:'';
          position:absolute; left:0; top:0; bottom:0;
          width:2px; border-radius:2px 0 0 2px;
          background:#FACC15;
          transform:scaleY(0); transform-origin:top;
          transition:transform 0.4s ease;
        }
        .vy-edu-card:hover { border-color:rgba(250,204,21,0.25); background:rgba(250,204,21,0.05); box-shadow:0 0 40px rgba(250,204,21,0.06); }
        .vy-edu-card:hover::before { transform:scaleY(1); }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(250,204,21,0.025)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>02</div>
      <div style={{ position:"absolute", bottom:"-80px", left:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(250,204,21,0.45)", textTransform:"uppercase" }}>02</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #FACC15, transparent)" }} />
            <FaBolt style={{ color:"#FACC15", fontSize:"12px", opacity:0.6 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#FAFAF5", margin:0 }}>Education</h2>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(320px,1fr))", gap:"1.5rem" }}>
          {items.map((edu, i) => (
            <motion.div key={i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:i * 0.1 }}>
              <div className="vy-edu-card">
                <div style={{ marginBottom:"1.25rem" }}>
                  <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.2em", padding:"4px 12px", borderRadius:"999px", background:"rgba(250,204,21,0.08)", border:"1px solid rgba(250,204,21,0.2)", color:"rgba(250,204,21,0.85)" }}>
                    {edu.period || edu.year || edu.graduationYear || "—"}
                  </span>
                </div>
                <div style={{ display:"flex", alignItems:"flex-start", gap:"14px" }}>
                  <span style={{ color:"rgba(250,204,21,0.6)", fontSize:"18px", marginTop:"2px", flexShrink:0 }}><FaGraduationCap /></span>
                  <div>
                    <h3 style={{ fontSize:"16px", fontWeight:800, color:"#FAFAF5", margin:"0 0 6px", letterSpacing:"-0.02em" }}>
                      {edu.degree || edu.field || edu.program}
                    </h3>
                    <p style={{ fontSize:"13px", fontWeight:600, color:"rgba(250,204,21,0.8)", margin:"0 0 4px" }}>
                      {edu.institution || edu.school}
                    </p>
                    {edu.location && (
                      <p style={{ fontSize:"12px", color:"rgba(250,250,245,0.35)", margin:"0 0 8px" }}>{edu.location}</p>
                    )}
                    {edu.description && (
                      <p style={{ fontSize:"13px", color:"rgba(250,250,245,0.45)", lineHeight:1.6, margin:"0 0 8px" }}>{edu.description}</p>
                    )}
                    {(edu.achievements || edu.highlights)?.length > 0 && (
                      <ul style={{ listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"4px" }}>
                        {(edu.achievements || edu.highlights).map((a, j) => (
                          <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:"8px", fontSize:"12px", color:"rgba(250,250,245,0.45)", lineHeight:1.6 }}>
                            <span style={{ color:"rgba(250,204,21,0.5)", flexShrink:0 }}>✦</span>{a}
                          </li>
                        ))}
                      </ul>
                    )}
                    {edu.gpa && (
                      <p style={{ fontSize:"11px", color:"rgba(245,158,11,0.7)", marginTop:"8px", fontWeight:600 }}>GPA: {edu.gpa}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
