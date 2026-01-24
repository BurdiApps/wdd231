// Main Module - Coordinates all modules and handles event listeners

// Import the default export from course module
import byuiCourse from './course.mjs';

// Import named exports from sections module
import { setSectionSelection } from './sections.mjs';

// Import named exports from output module
import { setTitle, renderSections } from './output.mjs';

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set the course title
    setTitle(byuiCourse);

    // Populate the section dropdown
    setSectionSelection(byuiCourse.sections);

    // Display initial section information
    renderSections(byuiCourse.sections);
});

// Enroll Student Event Listener
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum);
    renderSections(byuiCourse.sections);
});

// Drop Student Event Listener
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = Number(document.querySelector("#sectionNumber").value);
    byuiCourse.changeEnrollment(sectionNum, false);
    renderSections(byuiCourse.sections);
});
