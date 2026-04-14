import Nav from "../Nav";
import Footer from "../Footer";

const faqs = [
  {q:"How do I cancel my subscription?",a:"Open Settings on your iPhone → Apple ID → Subscriptions → IronPlan → Cancel. Takes effect at end of current period."},
  {q:"What is the 5x5 program?",a:"A barbell strength program built around 5 sets of 5 reps on compound lifts — Squat, Bench Press, Barbell Row, Overhead Press, and Deadlift. Train 3 days per week and add weight each session."},
  {q:"Will my data be lost if I delete the app?",a:"Your workout data is stored locally on your device. Deleting the app removes your data permanently."},
  {q:"Can I use IronPlan without a subscription?",a:"IronPlan offers a 7-day free trial. After the trial, a subscription is required."},
  {q:"Is my payment information stored?",a:"No. All payments are processed by Apple. We never see or store your payment details."},
];

export default function Support() {
  return (
    <div style={{minHeight:"100vh",background:"#080810"}}>
      <Nav/>
      <div style={{maxWidth:720,margin:"0 auto",padding:"100px 24px 80px"}}>
        <h1 style={{fontSize:40,fontWeight:900,color:"white",marginBottom:8}}>Support</h1>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.4)",marginBottom:56}}>Find answers below or contact us directly.</p>
        <h2 style={{fontSize:18,fontWeight:700,color:"#3b82f6",marginBottom:20}}>Frequently Asked Questions</h2>
        {faqs.map((f,i) => (
          <div key={i} style={{background:"#0f0f1a",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:20,marginBottom:12}}>
            <p style={{fontWeight:700,color:"white",marginBottom:6,fontSize:15}}>{f.q}</p>
            <p style={{color:"rgba(255,255,255,0.55)",fontSize:14,lineHeight:1.65}}>{f.a}</p>
          </div>
        ))}
        <div style={{marginTop:48,padding:28,background:"#0f0f1a",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16}}>
          <h2 style={{fontSize:20,fontWeight:700,color:"white",marginBottom:8}}>Still need help?</h2>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.5)",marginBottom:20}}>Send us an email and we'll get back to you within 24 hours.</p>
          <a href="mailto:stjani01@gmail.com" style={{display:"inline-block",padding:"12px 28px",background:"#3b82f6",color:"white",fontWeight:700,borderRadius:9999,textDecoration:"none",fontSize:14}}>Email Support</a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
