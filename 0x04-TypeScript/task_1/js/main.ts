export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
export interface StudentClassInterface {
  displayName(): string;
  workOnHomework(): string;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
