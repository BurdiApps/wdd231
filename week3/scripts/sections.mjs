// Sections Module - Handles section selection dropdown

export function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");

    // Clear existing options
    sectionSelect.innerHTML = "";

    // Populate dropdown with section numbers
    sections.forEach((section) => {
        const option = document.createElement("option");
        option.value = section.sectionNum;
        option.textContent = `Section ${section.sectionNum}`;
        sectionSelect.appendChild(option);
    });
}
