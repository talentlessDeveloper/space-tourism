function SpaceDestinationButtons({ handleActive, idx }) {
  return (
    <>
      <button
        data-name="btn-0"
        onClick={handleActive}
        className={idx === 0 ? "buttonActive" : ""}
      >
        Moon
      </button>
      <button
        data-name="btn-1"
        onClick={handleActive}
        className={idx === 1 ? "buttonActive" : ""}
      >
        Mars
      </button>
      <button
        data-name="btn-2"
        onClick={handleActive}
        className={idx === 2 ? "buttonActive" : ""}
      >
        Europa
      </button>
      <button
        data-name="btn-3"
        onClick={handleActive}
        className={idx === 3 ? "buttonActive" : ""}
      >
        Titan
      </button>
    </>
  );
}

export default SpaceDestinationButtons;
