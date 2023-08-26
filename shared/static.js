import fs from "fs";
import path from "path";

const STATIC_DATA_FOLDER = "config";

/**
 * Load static data from file for generating webpages.
 *
 * @param {string} filename Name of the static data file
 * @param {string} type Type of static data file. Defaults to null, in which case the data type is inferred from the extension.
 * @param {string} data_folder Storage location of static data file. Defaults to "./config".
 * @returns Contents of the file
 */
export default function loadStaticData(
  filename,
  type = null,
  data_folder = STATIC_DATA_FOLDER
) {
  const filePath = path.join(process.cwd(), data_folder, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  if (type === null) {
    const parts = filename.split(".");
    type = parts[parts.length - 1];
  }

  if (type === "json") {
    return JSON.parse(fileContent);
  }
  return fileContent;
}
