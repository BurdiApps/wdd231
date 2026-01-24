// Course Module - Manages course data and enrollment operations

const byuiCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        },
        {
            sectionNum: 3,
            roomNum: 'STC 348',
            enrolled: 22,
            days: 'TTh',
            instructor: 'Sis B'
        },
        {
            sectionNum: 4,
            roomNum: 'STC 353',
            enrolled: 24,
            days: 'TTh',
            instructor: 'Bro C'
        }
    ],

    changeEnrollment: function (sectionNum, add = true) {
        // Find the section index
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum === sectionNum
        );

        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            } else {
                this.sections[sectionIndex].enrolled--;
            }
        }
    }
};

export default byuiCourse;
