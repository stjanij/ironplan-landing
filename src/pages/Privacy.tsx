import Nav from "../Nav";
import Footer from "../Footer";

const sections = [
  {h:"Overview",p:"IronPlan is built by Digital Bit Foundry, operated by Kristján Jónsson. This policy explains what data we collect, how we use it, and your rights."},
  {h:"Data We Collect",p:"IronPlan collects only what is necessary. This includes workout logs and settings you enter directly. We do not collect your name or email unless you contact us."},
  {h:"Data Storage",p:"All workout data is stored locally on your device using Apple SwiftData. We do not upload your data to any external server."},
  {h:"Analytics",p:"We may use Apple's anonymous analytics tools to understand how the app is used. This data cannot identify you personally."},
  {h:"Subscriptions",p:"Subscriptions are managed entirely by Apple's App Store. We never store or process your payment information."},
  {h:"Third Parties",p:"We do not share your data with advertisers or third-party analytics companies. We do not display ads."},
  {h:"Children",p:"IronPlan is not directed at children under 13. We do not knowingly collect data from children."},
  {h:"Your Rights",p:"You can delete all your data by deleting the app. Contact us at stjani01@gmail.com with any questions."},
  {h:"Contact",p:"Email: stjani01@gmail.com"},
];

export default function Privacy() {
  return (
    <div style={{minHeight:"100vh",background:"#080810"}}>
      <Nav/>
      <div style={{maxWidth:720,margin:"0 auto",padding:"100px 24px 80px"}}>
        <h1 style={{fontSize:40,fontWeight:900,color:"white",marginBottom:8}}>Privacy Policy</h1>
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
