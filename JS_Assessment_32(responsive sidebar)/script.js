const resizer = document.querySelector(".resizer");
const sidebar = document.querySelector(".sidebar");
const movableGrid = document.querySelector(".movable-grid"); // Added this line

function initResizerFn(resizer, sidebar, movableGrid) {
  let x, w;

  function rs_mousedownHandler(e) {
    x = e.clientX;
    const sbWidth = window.getComputedStyle(sidebar).width;
    w = parseInt(sbWidth, 10);

    document.addEventListener("mousemove", rs_mousemoveHandler);
    document.addEventListener("mouseup", rs_mouseupHandler);
  }

  function rs_mousemoveHandler(e) {
    const dx = e.clientX - x;
    const cw = w + dx;

    
    if (cw < 600 && cw>100) {
      sidebar.style.width = `${cw}px`;
      movableGrid.style.marginLeft = `${cw + 40}px`; // Adjust the value according to your design
    }
  }

  function rs_mouseupHandler() {
    document.removeEventListener("mouseup", rs_mouseupHandler);
    document.removeEventListener("mousemove", rs_mousemoveHandler);
  }

  resizer.addEventListener("mousedown", rs_mousedownHandler);
}

initResizerFn(resizer, sidebar, movableGrid);

