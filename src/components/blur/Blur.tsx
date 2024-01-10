
function Blur({
  setTogglenav,
  togglenav,
}: {
  setTogglenav: any;
  togglenav: boolean;
}) {
  return (
    <div
      onClick={() => setTogglenav(!togglenav)}
      className="background fixed top-20 left-0 w-full h-screen brightness-75 z-30"
    ></div>
  );
}


export default Blur