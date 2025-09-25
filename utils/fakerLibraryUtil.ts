// utils/fakerLibraryUtil.ts
import { faker } from "@faker-js/faker";

/**
 * Utility class for generating random data using Faker.js.
 * This class provides methods to generate various types of random data
 */

export class FakerLibraryUtil {
  //  User-related data
  static getRandomFullName(): string {
    return faker.person.fullName(); // e.g., "Lena Schneider"
  }

  static getRandomEmail(): string {
    return faker.internet.email(); // e.g., "lena.schneider@example.com"
  }

  static getRandomPassword(length = 12): string {
    return faker.internet.password({ length, memorable: true }); // e.g., "sunnyHorse42"
  }

  static getRandomPhoneNumber(): string {
    return faker.phone.number({ style: "international" }); // e.g., "+49 30 12345678"
  }

  //  Address-related data
  static getRandomStreetAddress(): string {
    return faker.location.streetAddress(); // e.g., "Hauptstraße 12"
  }

  static getRandomCity(): string {
    return faker.location.city(); // e.g., "Berlin"
  }

  static getRandomPostalCode(): string {
    return faker.location.zipCode("#####"); // e.g., "10115"
  }

  //  Company-related data

  static getRandomJobTitle(): string {
    return faker.person.jobTitle(); // e.g., "QA Automation Engineer"
  }

  static getRandomDepartment(): string {
    return faker.commerce.department(); // e.g., "Quality Assurance"
  }

  //  Date-related data
  static getRandomPastDate(): Date {
    return faker.date.past(); // e.g., "2023-04-18T10:24:00.000Z"
  }

  static getRandomFutureDate(): Date {
    return faker.date.future(); // e.g., "2026-11-03T08:15:00.000Z"
  }

  //  others
  static getRandomUrl(): string {
    return faker.internet.url(); // e.g., "https://nenya-test-solutions.de"
  }

  static getRandomIpAddress(): string {
    return faker.internet.ip(); // e.g., "192.168.1.45"
  }

  static getRandomItemFromList(list: string[]): string {
    return faker.helpers.arrayElement(list);
  }

  /*
  Example usage:

  const cities = ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'];
  const departments = ['QA', 'DevOps', 'Product', 'Design', 'Support'];

  const selectedCity = FakerLibraryUtil.getRandomItemFromList(cities);
  const selectedDepartment = FakerLibraryUtil.getRandomItemFromList(departments);

or 

  const mockUser = {
    id: FakerLibraryUtil.getRandomFullName(),
    email: FakerLibraryUtil.getRandomEmail(),
    password: FakerLibraryUtil.getRandomPassword(),
    city: selectedCity,
    department: selectedDepartment
  };
  
  */
}
