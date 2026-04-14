"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBolt, FaEnvelope, FaUser, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";

export default function PortfolioContact({ data }) {
  const [form, setForm]       = useState({ name:"", email:"", message:"" });
  const [status, setStatus]   = useState("idle");
  const [focused, setFocused] = useState(null);

  const hasContact = !!(data?.email || data?.github || data?.linkedin || data?.twitter || data?.website || data?.web3forms_key);
  if (!hasContact) return null;

  const WEB3FORMS_KEY = data?.web3forms_key || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:"POST",
        headers:{ "Content-Type":"application/json", Accept:"application/json" },
        body:JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
          botcheck: "",
        }),
      });
      const r = await res.json();
      setStatus(r.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field) => ({
    width:"100%", background:"transparent", border:"none",
    borderBottom:`1px solid ${focused === field ? "#FACC15" : "rgba(250,204,21,0.15)"}`,
    color:"#FAFAF5", fontSize:"14px", padding:"12px 0", outline:"none",
    transition:"border-color 0.25s",
    boxShadow: focused === field ? "0 2px 0 rgba(250,204,21,0.25)" : "none",
  });

  return (
    <section id="contact" style={{ background:"#090806", padding:"8rem 1.5rem 9rem", position:"relative", overflow:"hidden" }}>
      <style>{`
        .vy-submit-btn {
          display:inline-flex; align-items:center; gap:10px; cursor:pointer;
          padding:14px 36px; border-radius:6px; border:none;
          background:#FACC15;
          color:#090806; font-size:13px; font-weight:800; letter-spacing:0.08em;
          box-shadow:0 0 28px rgba(250,204,21,0.25);
          transition:all 0.25s ease;
        }
        .vy-submit-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 0 44px rgba(250,204,21,0.45); background:#FFD700; }
        .vy-submit-btn:disabled { opacity:0.5; cursor:not-allowed; }
        .vy-root input::placeholder, .vy-root textarea::placeholder { color:rgba(250,250,245,0.2); }
        textarea { resize:none; font-family:inherit; }
        @media (max-width: 767px) { .vy-two-col { display: block !important; } #contact { padding: 4rem 1.25rem 9rem !important; } }
      `}</style>

      <div style={{ position:"absolute", top:"3rem", right:"3%", fontSize:"200px", fontWeight:900, color:"rgba(250,204,21,0.02)", pointerEvents:"none", lineHeight:1, userSelect:"none" }}>07</div>
      <div style={{ position:"absolute", top:"-100px", right:"-80px", width:"450px", height:"450px", borderRadius:"50%", background:"radial-gradient(circle, rgba(250,204,21,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-100px", left:"-80px", width:"350px", height:"350px", borderRadius:"50%", background:"radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:"1200px", margin:"0 auto", position:"relative", zIndex:1 }}>
        <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} style={{ marginBottom:"4rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"1rem" }}>
            <span style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.4em", color:"rgba(250,204,21,0.45)", textTransform:"uppercase" }}>07</span>
            <div style={{ width:"40px", height:"1px", background:"linear-gradient(90deg, #FACC15, transparent)" }} />
            <FaBolt style={{ color:"#FACC15", fontSize:"12px", opacity:0.6 }} />
          </div>
          <h2 style={{ fontSize:"clamp(2rem, 4vw, 3rem)", fontWeight:900, letterSpacing:"-0.04em", color:"#FAFAF5", margin:"0 0 1rem" }}>Let's Connect</h2>
          <p style={{ fontSize:"15px", color:"rgba(250,250,245,0.45)", maxWidth:"480px", lineHeight:1.7, margin:0 }}>
            Have a project in mind or just want to talk? Send a message and I'll get back to you.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }}
          className="vy-two-col"
        >
          {/* Form */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.1 }}>
            {status === "sent" ? (
              <div style={{ padding:"3rem", textAlign:"center", border:"1px solid rgba(250,204,21,0.2)", borderRadius:"12px", background:"rgba(250,204,21,0.04)" }}>
                <div style={{ fontSize:"48px", marginBottom:"1rem" }}>⚡</div>
                <h3 style={{ fontSize:"20px", fontWeight:800, color:"#FAFAF5", marginBottom:"0.5rem" }}>Message Sent!</h3>
                <p style={{ color:"rgba(250,250,245,0.5)", fontSize:"14px" }}>I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"2rem" }}>
                <div>
                  <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(250,204,21,0.55)", textTransform:"uppercase", marginBottom:"10px" }}>
                    <FaUser style={{ fontSize:"9px" }} /> Name
                  </label>
                  <input
                    type="text" placeholder="Your name" required
                    value={form.name} onChange={(e) => setForm({...form, name:e.target.value})}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(250,204,21,0.55)", textTransform:"uppercase", marginBottom:"10px" }}>
                    <FaEnvelope style={{ fontSize:"9px" }} /> Email
                  </label>
                  <input
                    type="email" placeholder="your@email.com" required
                    value={form.email} onChange={(e) => setForm({...form, email:e.target.value})}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>
                <div>
                  <label style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(250,204,21,0.55)", textTransform:"uppercase", marginBottom:"10px" }}>
                    <FaBolt style={{ fontSize:"9px" }} /> Message
                  </label>
                  <textarea
                    rows={5} placeholder="Tell me about your project..." required
                    value={form.message} onChange={(e) => setForm({...form, message:e.target.value})}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), display:"block" }}
                  />
                </div>

                {status === "error" && (
                  <p style={{ fontSize:"12px", color:"rgba(248,113,113,0.8)" }}>Something went wrong. Please try again.</p>
                )}

                <div>
                  <button type="submit" disabled={status === "sending"} className="vy-submit-btn">
                    {status === "sending" ? "Sending..." : <><FaPaperPlane /> Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.25 }}>
            <div style={{ height:"1px", background:"linear-gradient(90deg, #FACC15, #F59E0B, transparent)", marginBottom:"2.5rem" }} />

            {data?.email && (
              <div style={{ marginBottom:"2rem" }}>
                <p style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(250,250,245,0.3)", textTransform:"uppercase", marginBottom:"6px" }}>Email</p>
                <a href={`mailto:${data.email}`} style={{ fontSize:"15px", color:"#FACC15", textDecoration:"none", fontWeight:600 }}>
                  {data.email}
                </a>
              </div>
            )}

            {data?.location && (
              <div style={{ marginBottom:"2rem" }}>
                <p style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(250,250,245,0.3)", textTransform:"uppercase", marginBottom:"6px" }}>Location</p>
                <p style={{ fontSize:"15px", color:"rgba(250,250,245,0.65)", margin:0, fontWeight:500 }}>{data.location}</p>
              </div>
            )}

            <div style={{ display:"flex", gap:"1rem", marginTop:"2rem" }}>
              {data?.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer"
                  style={{ width:"44px", height:"44px", borderRadius:"10px", border:"1px solid rgba(250,204,21,0.18)", background:"rgba(250,204,21,0.05)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(250,204,21,0.65)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(250,204,21,0.45)"; e.currentTarget.style.background="rgba(250,204,21,0.12)"; e.currentTarget.style.color="#FACC15"; e.currentTarget.style.boxShadow="0 0 18px rgba(250,204,21,0.25)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(250,204,21,0.18)"; e.currentTarget.style.background="rgba(250,204,21,0.05)"; e.currentTarget.style.color="rgba(250,204,21,0.65)"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <FaGithub size={18} />
                </a>
              )}
              {data?.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
                  style={{ width:"44px", height:"44px", borderRadius:"10px", border:"1px solid rgba(245,158,11,0.18)", background:"rgba(245,158,11,0.05)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(245,158,11,0.65)", textDecoration:"none", transition:"all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="rgba(245,158,11,0.45)"; e.currentTarget.style.background="rgba(245,158,11,0.12)"; e.currentTarget.style.color="#F59E0B"; e.currentTarget.style.boxShadow="0 0 18px rgba(245,158,11,0.22)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(245,158,11,0.18)"; e.currentTarget.style.background="rgba(245,158,11,0.05)"; e.currentTarget.style.color="rgba(245,158,11,0.65)"; e.currentTarget.style.boxShadow="none"; }}
                >
                  <FaLinkedin size={18} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
