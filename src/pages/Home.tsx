import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

const products = [
  {
    name: "IronPlan",
    tag: "iOS App · Live",
    desc: "Simple 5x5 barbell strength tracker. Fast logging, clear progress, no clutter.",
    status: "live",
    href: "/ironplan",
  },
  {
    name: "Coming Soon",
    tag: "In Development",
    desc: "Next product in the pipeline.",
    status: "soon",
    href: "#",
  },
];

export default function Home() {
  return (
    <div style={{minHeight:"100vh",background:"#080810"}}>
      <Nav/>
      <section style={{minHeight:"80vh",display:"flex",alignItems:"center",padding:"120px 24px 80px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:400,background:"rgba(59,130,246,0.05)",borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>
        <div style={{maxWidth:800,margin:"0 auto",width:"100%"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:24}}>Digital Bit Foundry</div>
          <h1 style={{fontSize:"clamp(40px,7vw,72px)",fontWeight:900,lineHeight:1.05,marginBottom:24,background:"linear-gradient(135deg,#fff 0%,#64748b 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            We build digital products.
          </h1>
          <p style={{fontSize:"clamp(16px,2vw,20px)",color:"rgba(255,255,255,0.45)",maxWidth:520,lineHeight:1.7}}>
            Focused apps and tools designed to solve real problems. Built with care. Shipped with intent.
          </p>
        </div>
      </section>
      <section style={{padding:"40px 24px 100px"}}>
        <div style={{maxWidth:800,margin:"0 auto"}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:32}}>Products</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:16}}>
            {products.map(p => (
              <Link key={p.name} to={p.href} style={{textDecoration:"none",display:"block",background:"#0f0f1a",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:28}}>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:p.status==="live"?"#3b82f6":"rgba(255,255,255,0.25)",marginBottom:16}}>{p.tag}</div>
                <h2 style={{fontSize:22,fontWeight:800,color:"white",marginBottom:8}}>{p.name}</h2>
                <p style={{fontSize:14,color:"rgba(255,255,255,0.45)",lineHeight:1.6}}>{p.desc}</p>
                {p.status==="live" && <div style={{marginTop:20,fontSize:13,color:"#3b82f6",fontWeight:600}}>View →</div>}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
