"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

export default function PortfolioSkills({ data }) {
  const skills = data?.skills;
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null;

  const groups = (() => {
    if (
      Array.isArray(skills) && skills.length > 0 &&
      typeof skills[0] === "object" && skills[0] !== null &&
      (skills[0].items || skills[0].category || skills[0].skills)
    ) {
      return skills.map((g) => ({
        category: g.category || g.name || "Skills",
        items: Array.isArray(g.items) ? g.items : Array.isArray(g.skills) ? g.skills : [],
      })).filter((g) => g.items.length > 0);
    }
    return null;
  })();
  const isGrouped = !!groups;

  return (
    <section id="skills" style={{ background:"#090806", padding:"8rem 1.5rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .vy-skill-tag {
          display:inline-flex; align-items:center; gap:6px;
          padding:8px 18px; border-radius:6px; cursor:default;
          font-size:12px; font-weight:600; letter-spacing:0.05em;
          transition:all 0.25s ease;
        }
        .vy-skill-tag.yellow {
          background:rgba(250,204,21,0.07); border:1px solid rgba(250,204,21,0.2);
          color:rgba(250,204,21,0.88);
        }
        .vy-skill-tag.amber {
          background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.15);
          color:rgba(245,158,11,0.82);
        }
        .vy-skill-tag.yellow:hover {
          background:rgba(250,204,21,0.15); border-color:rgba(250,204,21,0.4);
          color:#FACC15; transform:translateY(-2px);
          box-shadow:0 0 18px rgba(250,204,21,0.2);
        }
        .vy-skill-tag.amber:hover {
          background:rgba(245,158,11,0.13); border-color:rgba(245,158,11,0.35);
          color:#F59E0B; transform:translateY(-2px);
          box-shadow:0 0 18px rgba(245,158,11,0.18);
        }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(250,204,21,0.02)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>05</div>
      <div style={{ position:"absolute", top:"-100px", left:"-100px", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle, rgba(250,204,21,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(250,204,21,0.45)", textTransform:"uppercase" }}>05</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #FACC15, transparent)" }} />
            <FaBolt style={{ color:"#FACC15", fontSize:"12px", opacity:0.6 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#FAFAF5", margin:0 }}>Skills</h2>
        </motion.div>

        {isGrouped ? (
          <div style={{ display:"flex", flexDirection:"column", gap:"3rem" }}>
            {groups.map((group, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.5, delay:ci * 0.08 }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1.25rem" }}>
                  <div style={{ width:"2px", height:"20px", background:"linear-gradient(180deg, #FACC15, #F59E0B)", borderRadius:"2px" }} />
                  <span style={{ fontSize:"11px", fontWeight:700, letterSpacing:"0.25em", color:"rgba(250,250,245,0.4)", textTransform:"uppercase" }}>{group.category}</span>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
                  {group.items.map((skill, i) => {
                    const label = typeof skill === "string" ? skill : skill?.name || skill?.label || String(skill);
                    return (
                      <span key={i} className={`vy-skill-tag ${i % 2 === 0 ? "yellow" : "amber"}`}>
                        <FaBolt style={{ fontSize:"8px" }} />
                        {label}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.6 }}
          >
            <div style={{ height:"1px", background:"linear-gradient(90deg, transparent, rgba(250,204,21,0.3), rgba(245,158,11,0.2), transparent)", marginBottom:"2.5rem" }} />
            <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
              {skills.map((skill, i) => {
                const label = typeof skill === "string" ? skill : skill?.name || skill?.label || String(skill);
                return (
                  <span key={i} className={`vy-skill-tag ${i % 2 === 0 ? "yellow" : "amber"}`}
                    style={{ fontSize: i % 5 === 0 ? "13px" : "11px" }}
                  >
                    <FaBolt style={{ fontSize:"8px" }} />
                    {label}
                  </span>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
