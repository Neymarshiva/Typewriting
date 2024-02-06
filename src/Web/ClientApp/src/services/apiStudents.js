import { StudentsClient } from "../web-api-client.ts";


export async function getStudents() {
    let client = new StudentsClient();
    const data = await client.getStudentsWithPagination(1,100);
  
    return data;
  }
  

  export async function CreateStudents(students) {
    let client = new StudentsClient();
    const data = await client.createStudents(students);
    return data;
  }

  export async function EditStudents(id, students) { 
    students = { ...students, id };
    let client = new StudentsClient();
    const data = await client.updateStudents(id, students);
    return data;
  }

  export async function DeleteStudents(id) { 
    let client = new StudentsClient();
    const data = await client.deleteStudents(id);
    return data;
  }