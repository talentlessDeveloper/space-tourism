function SpaceCrewButtons({ handleActive, idx }) {
  return (
    <>
      <button
        data-name="btn-0"
        onClick={handleActive}
        className={idx === 0 ? "buttonCrewActive" : ""}
      ></button>
      <button
        data-name="btn-1"
        onClick={handleActive}
        className={idx === 1 ? "buttonCrewActive" : ""}
      ></button>
      <button
        data-name="btn-2"
        onClick={handleActive}
        className={idx === 2 ? "buttonCrewActive" : ""}
      ></button>
      <button
        data-name="btn-3"
        onClick={handleActive}
        className={idx === 3 ? "buttonCrewActive" : ""}
      ></button>
    </>
  );
}

export default SpaceCrewButtons;
