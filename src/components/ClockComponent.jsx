import '../App.css';

export default function DisplayClock( props ) { 
  return (
    <div>
      <h2 className="clockHeader">Current Time</h2>
      <p className='clockTime'>{props.time}tiidy</p>
    </div>
  );
}