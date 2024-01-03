
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
      className="absolute top-20 left-0 w-full background brightness-75 z-30 h-[88vh]"
    ></div>
  );
}


export default Blur