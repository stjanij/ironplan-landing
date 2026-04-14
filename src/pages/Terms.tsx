import Nav from "../Nav";
import Footer from "../Footer";

const sections = [
  {h:"Acceptance",p:"By using IronPlan you agree to these terms. If you do not agree, do not use the app."},
  {h:"Use of the App",p:"IronPlan is a fitness tracking tool for personal use only. It is not a substitute for professional medical or fitness advice."},
  {h:"Subscriptions",p:"Subscriptions are billed through Apple App Store. Cancel anytime in your Apple account settings. Cancellation takes effect at the end of the billing period."},
  {h:"Intellectual Property",p:"All content and code within IronPlan is owned by Digital Bit Foundry. You may not copy or distribute any part without written permission."},
  {h:"Disclaimer",p:"IronPlan is provided as-is. We are not responsible for any injury or loss resulting from use of the app."},
  {h:"Governing Law",p:"These terms are governed by the laws of Iceland."},
  {h:"Contact",p:"Email: stjani01@gmail.com"},
];

export default function Terms() {
  return (
    <div style={{minHeight:"100vh",background:"#080810"}}>
      <Nav/>
      <div style={{maxWidth:720,margin:"0 auto",padding:"100px 24px 80px"}}>
        <h1 style={{fontSize:40,fontWeight:900,color:"white",marginBottom:8}}>Terms of Use</h1>
        <p style={{fontSize:13,color:"rgba(255,255,255,0.3)",marginBottom:56}}>Last updated: April 13, 2026</p>
        {sections.map((s,i) => (
          <div key={i} style={{marginBottom:32}}>
            <h2 style={{fontSize:18,fontWeight:700,color:"#3b82f6",marginBottom:12}}>{s.h}</h2>
            <p style={{fontSize:15,color:"rgba(255,255,255,0.65)",lineHeight:1.75}}>{s.p}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
