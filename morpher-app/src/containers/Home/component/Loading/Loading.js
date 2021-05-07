import './Loading.css';

function Loading() {
  return (
    <div className="loading d-none" id="loading">
  <div id="smileyFace" className="centered">
    <div className="mouth right"></div>
    <div className="mouth left"></div>
    <span className="eyes"></span>
    <p className="test">Loading</p>
  </div>
</div>
  );
}

export default Loading;
