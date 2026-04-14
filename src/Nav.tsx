import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:50,borderBottom:"1px solid rgba(255,255,255,0.05)",background:"rgba(8,8,16,0.85)",backdropFilter:"blur(12px)"}}>
      <div style={{maxWidth:1280,margin:"0 auto",padding:"0 24px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Link to="/" style={{textDecoration:"none"}}>
          <span style={{fontSize:11,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)"}}>Digital Bit Foundry</span>
        </Link>
        <div style={{display:"flex",gap:24,alignItems:"center"}}>
          <Link to="/ironplan" style={{fontSize:13,color:"rgba(255,255,255,0.5)",textDecoration:"none",fontWeight:600}}>IronPlan</Link>
          <Link to="/ironplan" style={{padding:"8px 20px",background:"#3b82f6",color:"white",fontSize:13,fontWeight:700,borderRadius:9999,textDecoration:"none"}}>Join TestFlight</Link>
        </div>
      </div>
    </nav>
  );
}
