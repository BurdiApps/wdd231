// Output Module - Handles rendering course information to the DOM

export function setTitle(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

export function renderSections(sections) {
    const output = document.querySelector("#sectionsOutput");

    // Clear existing content
    output.innerHTML = "";

    // Create a card for each section
    sections.forEach((section) => {
        const sectionCard = document.createElement("div");
        sectionCard.className = "section-card";

        sectionCard.innerHTML = `
            <h4>Section ${section.sectionNum}</h4>
            <div class="section-info">
                <span><strong>Room:</strong> ${section.roomNum}</span>
                <span><strong>Enrolled:</strong> ${section.enrolled}</span>
                <span><strong>Days:</strong> ${section.days}</span>
                <span><strong>Instructor:</strong> ${section.instructor}</span>
            </div>
        `;

        output.appendChild(sectionCard);
    });
}
