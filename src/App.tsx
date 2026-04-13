import { Zap, TrendingUp, Shield, ArrowRight, CheckCircle2, Instagram, Twitter, Github } from "lucide-react";

const Navbar = () => (
  <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:50,borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(8,8,16,0.8)",backdropFilter:"blur(12px)"}}>
    <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px",height:80,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <span style={{fontSize:12,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)"}}>Digital Bit Foundry</span>
      <a href="#testflight" style={{padding:"10px 24px",background:"#3b82f6",color:"white",fontSize:14,fontWeight:700,borderRadius:9999,textDecoration:"none",border:"none",cursor:"pointer"}}>
        Join TestFlight
      </a>
    </div>
  </nav>
);

const PhoneMockup = () => (
  <div style={{background:"#0f0f1a",border:"2px solid rgba(255,255,255,0.1)",borderRadius:40,padding:20,width:280,boxShadow:"0 0 60px rgba(59,130,246,0.15)"}}>
    <div style={{background:"rgba(255,255,255,0.05)",borderRadius:8,padding:16,marginBottom:12}}>
      <div style={{fontSize:10,color:"rgba(255,255,255,0.4)",marginBottom:4}}>CURRENT SESSION</div>
      <div style={{fontSize:16,fontWeight:700,color:"white"}}>Workout A</div>
    </div>
    {[{name:"Squat",weight:"225 lbs"},{name:"Bench Press",weight:"185 lbs"},{name:"Barbell Row",weight:"155 lbs"}].map((ex,i) => (
      <div key={i} style={{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:12,marginBottom:8}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontSize:13,fontWeight:600,color:"white"}}>{ex.name}</span>
          <span style={{fontSize:12,color:"#3b82f6"}}>{ex.weight}</span>
        </div>
        <div style={{display:"flex",gap:4}}>
          {[1,2,3].map(s => <div key={s} style={{width:28,height:28,background:"#3b82f6",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"white"}}>5</div>)}
          {[4,5].map(s => <div key={s} style={{width:28,height:28,background:"rgba(255,255,255,0.08)",borderRadius:6}}/>)}
        </div>
      </div>
    ))}
  </div>
);

const Hero = () => (
  <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"120px 24px 80px",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:800,height:600,background:"rgba(59,130,246,0.06)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>
    <div style={{maxWidth:1280,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center",width:"100%"}}>
      <div>
        <div style={{fontSize:36,fontWeight:900,color:"#3b82f6",marginBottom:8}}>IronPlan</div>
        <h1 style={{fontSize:56,fontWeight:900,lineHeight:1.1,marginBottom:24,background:"linear-gradient(135deg,#fff 0%,#94a3b8 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
          Simple 5x5 tracker for barbell strength
        </h1>
        <p style={{fontSize:18,color:"rgba(255,255,255,0.5)",marginBottom:40}}>Fast workout logging, clear progress, no clutter.</p>
        <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
          <a href="#testflight" style={{display:"flex",alignItems:"center",gap:8,padding:"14px 28px",background:"#3b82f6",color:"white",fontWeight:700,borderRadius:9999,textDecoration:"none",fontSize:15}}>
            Join TestFlight <ArrowRight size={16}/>
          </a>
          <a href="#features" style={{display:"flex",alignItems:"center",gap:8,padding:"14px 28px",border:"1px solid rgba(255,255,255,0.15)",color:"white",fontWeight:600,borderRadius:9999,textDecoration:"none",fontSize:15}}>
            Learn More
          </a>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <PhoneMockup/>
      </div>
    </div>
  </section>
);

const features = [
  {icon:<Zap size={24}/>,title:"Log workouts fast",desc:"Minimal taps required. Get in, log your sets, and get back to the bar."},
  {icon:<TrendingUp size={24}/>,title:"Track sets, reps, and progress",desc:"Automatic weight increments and clear history of your strength gains."},
  {icon:<Shield size={24}/>,title:"Stay consistent",desc:"A simple, proven strength plan that keeps you focused on what matters."},
];

const Features = () => (
  <section id="features" style={{padding:"100px 24px"}}>
    <div style={{maxWidth:1280,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:64}}>
        <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:16}}>Features</div>
        <h2 style={{fontSize:40,fontWeight:900,color:"white"}}>Everything you need. Nothing you don't.</h2>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
        {features.map((f,i) => (
          <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:32}}>
            <div style={{width:48,height:48,background:"rgba(59,130,246,0.15)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",color:"#3b82f6",marginBottom:20}}>{f.icon}</div>
            <h3 style={{fontSize:18,fontWeight:700,color:"white",marginBottom:8}}>{f.title}</h3>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.6}}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const why = [
  "Built for focused 5x5 training — we do one thing perfectly",
  "Less clutter than generic workout apps — no social feeds, no ads",
  "Designed for fast gym use — optimized for chalky hands and a focused mind",
];

const Why = () => (
  <section style={{padding:"100px 24px",background:"rgba(255,255,255,0.01)"}}>
    <div style={{maxWidth:800,margin:"0 auto",textAlign:"center"}}>
      <h2 style={{fontSize:40,fontWeight:900,color:"white",marginBottom:48}}>Why IronPlan?</h2>
      <div style={{display:"flex",flexDirection:"column",gap:20,textAlign:"left"}}>
        {why.map((w,i) => (
          <div key={i} style={{display:"flex",gap:16,alignItems:"flex-start"}}>
            <CheckCircle2 size={20} style={{color:"#3b82f6",flexShrink:0,marginTop:2}}/>
            <span style={{fontSize:17,color:"rgba(255,255,255,0.75)",lineHeight:1.6}}>{w}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="testflight" style={{padding:"100px 24px",textAlign:"center"}}>
    <div style={{maxWidth:600,margin:"0 auto"}}>
      <h2 style={{fontSize:48,fontWeight:900,color:"white",marginBottom:16}}>Ready to get stronger?</h2>
      <p style={{fontSize:18,color:"rgba(255,255,255,0.5)",marginBottom:40}}>Join the early access list and be one of the first to try IronPlan.</p>
      <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
        <a href="https://testflight.apple.com" style={{padding:"14px 32px",background:"#3b82f6",color:"white",fontWeight:700,borderRadius:9999,textDecoration:"none",fontSize:15}}>
          Join TestFlight
        </a>
        <a href="mailto:stjani01@gmail.com" style={{padding:"14px 32px",border:"1px solid rgba(255,255,255,0.15)",color:"white",fontWeight:600,borderRadius:9999,textDecoration:"none",fontSize:15}}>
          Get Updates
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"48px 24px"}}>
    <div style={{maxWidth:1280,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:32}}>
      <div>
        <div style={{fontSize:18,fontWeight:700,color:"white",marginBottom:8}}>IronPlan</div>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.4)",maxWidth:280}}>A product of Digital Bit Foundry. Focused tools for focused people.</p>
        <div style={{display:"flex",gap:16,marginTop:16}}>
          {[Twitter,Instagram,Github].map((Icon,i) => (
            <a key={i} href="#" style={{color:"rgba(255,255,255,0.3)",display:"flex"}}><Icon size={18}/></a>
          ))}
        </div>
      </div>
      <div style={{display:"flex",gap:64,flexWrap:"wrap"}}>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:16}}>Product</div>
          {["IronPlan","Support"].map(l => <a key={l} href="#" style={{display:"block",fontSize:14,color:"rgba(255,255,255,0.5)",textDecoration:"none",marginBottom:8}}>{l}</a>)}
        </div>
        <div>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:16}}>Legal</div>
          {["Privacy","Terms"].map(l => <a key={l} href="#" style={{display:"block",fontSize:14,color:"rgba(255,255,255,0.5)",textDecoration:"none",marginBottom:8}}>{l}</a>)}
        </div>
      </div>
    </div>
    <div style={{maxWidth:1280,margin:"32px auto 0",borderTop:"1px solid rgba(255,255,255,0.04)",paddingTop:24,textAlign:"center",fontSize:12,color:"rgba(255,255,255,0.2)"}}>
      © {new Date().getFullYear()} Digital Bit Foundry. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div style={{minHeight:"100vh",background:"#080810"}}>
      <Navbar/>
      <Hero/>
      <Features/>
      <Why/>
      <CTA/>
      <Footer/>
    </div>
  );
}
