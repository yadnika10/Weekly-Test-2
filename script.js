const container1 = document.querySelector(".container");
window.addEventListener("mousemove",(event) => {
    container1.innerHTML = `
    <div class="mouse-event">
        ${event.clientX}
        <h4>Mouse X Position</h4>
    </div>
    <div class="mouse-event">
        ${event.clientY}
        <h4>Mouse Y Position</h4>
    </div>`;
});