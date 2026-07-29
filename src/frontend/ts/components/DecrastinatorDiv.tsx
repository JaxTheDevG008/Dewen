export default function DecrastinatorDiv() {
  return (
    <div className="decrastinatorDiv">
      <div className="decrastinatorName">Decrastinator</div>
      <button className="closeDecrastinatorBtn">✕</button>
      <select className="decrastinatorTaskSelector" autoComplete="off">
        <option value="" disabled selected>
          Select a task
        </option>
      </select>
      <button className="startDecrastinatorBtn">
        <img
          src="/Images/Start-Timer-Icon.png"
          className="startDecrastinatorIcon w-4"
          alt="Start Decrastinator"
        />
      </button>
      <div className="decrastinatorMinutesDiv">3:00</div>
    </div>
  );
}