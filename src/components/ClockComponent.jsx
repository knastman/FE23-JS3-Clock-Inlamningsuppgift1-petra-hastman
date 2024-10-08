export default function DisplayClock({ time }) {
  return (
    <div>
      <h2 style={{textAlign:'center', marginBottom:'3px'}}>Current Time</h2>
      <p style={{textAlign:'center',marginTop:'3px', fontSize:'25px'}}>{time}</p>
    </div>
  );
}