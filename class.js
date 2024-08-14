class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "Nowhata high school Rajshahi";
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(19, "jamal");
console.log(student1, student2, student3);