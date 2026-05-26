function showSection(sectionId) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function showStudentSection(sectionId) {
    let sections = document.querySelectorAll('.student-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function toggleMenu() {
    let menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
