import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"48px 24px"}}>
      <div style={{maxWidth:1280,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:32}}>
        <div style={{maxWidth:280}}>
          <div style={{fontSize:13,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:8}}>Digital Bit Foundry</div>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.7}}>Building focused digital products.</p>
        </div>
        <div style={{display:"flex",gap:48,flexWrap:"wrap"}}>
          <div>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:12}}>Products</div>
            <Link to="/ironplan" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.5)",textDecoration:"none",marginBottom:8}}>IronPlan</Link>
          </div>
          <div>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:12}}>Legal</div>
            <Link to="/privacy" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.5)",textDecoration:"none",marginBottom:8}}>Privacy</Link>
            <Link to="/terms" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.5)",textDecoration:"none",marginBottom:8}}>Terms</Link>
            <Link to="/support" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.5)",textDecoration:"none",marginBottom:8}}>Support</Link>
          </div>
        </div>
      </div>
      <div style={{maxWidth:1280,margin:"24px auto 0",borderTop:"1px solid rgba(255,255,255,0.04)",paddingTop:20,textAlign:"center",fontSize:11,color:"rgba(255,255,255,0.2)"}}>
        © 2026 Digital Bit Foundry. All rights reserved.
      </div>
    </footer>
  );
}
