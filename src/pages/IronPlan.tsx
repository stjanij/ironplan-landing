import { Link } from "react-router-dom";
import { Zap, TrendingUp, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import Nav from "../Nav";
import Footer from "../Footer";

const PhoneMockup = () => (
  <div style={{background:"#0f0f1a",border:"2px solid rgba(59,130,246,0.4)",borderRadius:32,padding:16,width:"100%",maxWidth:280,margin:"0 auto",boxShadow:"0 0 80px rgba(59,130,246,0.35),0 0 160px rgba(59,130,246,0.15)"}}>
    <div style={{background:"rgba(255,255,255,0.05)",borderRadius:8,padding:12,marginBottom:10}}>
      <div style={{fontSize:9,color:"rgba(255,255,255,0.4)",marginBottom:2}}>CURRENT SESSION</div>
      <div style={{fontSize:14,fontWeight:700,color:"white"}}>Workout A</div>
    </div>
    {[{name:"Squat",weight:"225 lbs"},{name:"Bench Press",weight:"185 lbs"},{name:"Barbell Row",weight:"155 lbs"}].map((ex,i) => (
      <div key={i} style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:10,marginBottom:6}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
          <span style={{fontSize:12,fontWeight:600,color:"white"}}>{ex.name}</span>
          <span style={{fontSize:11,color:"#3b82f6"}}>{ex.weight}</span>
        </div>
        <div style={{display:"flex",gap:4}}>
          {[1,2,3].map(s => <div key={s} style={{width:24,height:24,background:"#3b82f6",borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"white"}}>5</div>)}
          {[4,5].map(s => <div key={s} style={{width:24,height:24,background:"rgba(255,255,255,0.08)",borderRadius:5}}/>)}
        </div>
      </div>
    ))}
  </div>
);

const features = [
  {icon:<Zap size={22}/>,title:"Log workouts fast",desc:"Minimal taps. Get in, log your sets, get back to the bar."},
  {icon:<TrendingUp size={22}/>,title:"Track progress",desc:"Auto weight progression and clear history of your strength gains."},
  {icon:<Shield size={22}/>,title:"Stay consistent",desc:"A proven strength plan that keeps you focused on what matters."},
];

const why = [
  "Built for focused 5x5 training — one thing done right",
  "No social feeds, no ads, no distractions",
  "Optimized for use in the gym with minimal taps",
];

export default function IronPlan() {
  return (
    <div style={{minHeight:"100vh",background:"#080810"}}>
      <Nav/>
      <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"100px 24px 60px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"min(800px,100%)",height:400,background:"rgba(59,130,246,0.06)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>
        <div style={{maxWidth:1280,margin:"0 auto",width:"100%"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:48,alignItems:"center"}}>
            <div>
              <Link to="/" style={{fontSize:11,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",textDecoration:"none",display:"inline-block",marginBottom:20}}>← Digital Bit Foundry</Link>
              <div style={{fontSize:"clamp(28px,5vw,40px)",fontWeight:900,color:"#3b82f6",marginBottom:8}}>IronPlan</div>
              <h1 style={{fontSize:"clamp(32px,6vw,56px)",fontWeight:900,lineHeight:1.1,marginBottom:20,background:"linear-gradient(135deg,#fff 0%,#94a3b8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                Simple 5x5 tracker for barbell strength
              </h1>
              <p style={{fontSize:"clamp(15px,2vw,18px)",color:"rgba(255,255,255,0.5)",marginBottom:32}}>Fast workout logging, clear progress, no clutter.</p>
              <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
                <a href="https://testflight.apple.com" style={{display:"flex",alignItems:"center",gap:8,padding:"12px 24px",background:"#3b82f6",color:"white",fontWeight:700,borderRadius:9999,textDecoration:"none",fontSize:14}}>
                  Join TestFlight <ArrowRight size={16}/>
                </a>
                <a href="#features" style={{display:"flex",alignItems:"center",gap:8,padding:"12px 24px",border:"1px solid rgba(255,255,255,0.15)",color:"white",fontWeight:600,borderRadius:9999,textDecoration:"none",fontSize:14}}>
                  Learn More
                </a>
              </div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}><PhoneMockup/></div>
          </div>
        </div>
      </section>

      <section id="features" style={{padding:"80px 24px"}}>
        <div style={{maxWidth:1280,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:900,color:"white"}}>Everything you need. Nothing you don't.</h2>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:20}}>
            {features.map((f,i) => (
              <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:24}}>
                <div style={{width:44,height:44,background:"rgba(59,130,246,0.15)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:"#3b82f6",marginBottom:16}}>{f.icon}</div>
                <h3 style={{fontSize:16,fontWeight:700,color:"white",marginBottom:8}}>{f.title}</h3>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.6}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"80px 24px",background:"rgba(255,255,255,0.01)"}}>
        <div style={{maxWidth:600,margin:"0 auto"}}>
          <h2 style={{fontSize:"clamp(28px,4vw,40px)",fontWeight:900,color:"white",marginBottom:32,textAlign:"center"}}>Why IronPlan?</h2>
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {why.map((w,i) => (
              <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start"}}>
                <CheckCircle2 size={20} style={{color:"#3b82f6",flexShrink:0,marginTop:2}}/>
                <span style={{fontSize:"clamp(14px,2vw,16px)",color:"rgba(255,255,255,0.7)",lineHeight:1.6}}>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:"80px 24px",textAlign:"center"}}>
        <div style={{maxWidth:560,margin:"0 auto"}}>
          <h2 style={{fontSize:"clamp(32px,5vw,48px)",fontWeight:900,color:"white",marginBottom:14}}>Ready to get stronger?</h2>
          <p style={{fontSize:"clamp(14px,2vw,18px)",color:"rgba(255,255,255,0.5)",marginBottom:36}}>Join the early access list and be one of the first to try IronPlan.</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="https://testflight.apple.com" style={{padding:"12px 28px",background:"#3b82f6",color:"white",fontWeight:700,borderRadius:9999,textDecoration:"none",fontSize:14}}>Join TestFlight</a>
            <a href="mailto:stjani01@gmail.com" style={{padding:"12px 28px",border:"1px solid rgba(255,255,255,0.15)",color:"white",fontWeight:600,borderRadius:9999,textDecoration:"none",fontSize:14}}>Get Updates</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
