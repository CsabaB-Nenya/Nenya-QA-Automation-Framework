import fs from "fs";
import path from "path";

export class FileUtil {
  /*
 A utility class for common file operations, including:
- Reading files as strings
- Reading and parsing JSON files
- Writing strings to files
- Writing objects as JSON
- Checking if a file exists

*/

  //  Read file content as string
  static readFile(filePath: string): string {
    return fs.readFileSync(path.resolve(filePath), "utf-8");
  }

  //  Read and parse JSON file
  static readJson<T = unknown>(filePath: string): T {
    const content = this.readFile(filePath);
    return JSON.parse(content);
  }

  //  Write string content to file
  static writeFile(filePath: string, data: string): void {
    fs.writeFileSync(path.resolve(filePath), data, "utf-8");
  }

  //  Write object as JSON to file
  static writeJson(filePath: string, data: unknown): void {
    const json = JSON.stringify(data, null, 2);
    this.writeFile(filePath, json);
  }

  //  Check if file exists
  static fileExists(filePath: string): boolean {
    return fs.existsSync(path.resolve(filePath));
  }

  /*
USAGE EXAMPLES:

// Example of creating a mock user object using FakerLibraryUtil
const mockUser = {
  id: FakerLibraryUtil.getRandomFullName(),        // unique identifier or name
  name: FakerLibraryUtil.getRandomFullName(),      // realistic full name
  email: FakerLibraryUtil.getRandomEmail(),        // valid email
  address: FakerLibraryUtil.getRandomStreetAddress() // realistic street address
};

// Write mock user to JSON file
FileUtil.writeJson('data/mock-user.json', mockUser);

// Read back the user
const userFromFile = FileUtil.readJson('data/mock-user.json');
console.log(userFromFile);

*/
}
