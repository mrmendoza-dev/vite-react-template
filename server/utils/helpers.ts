import fs from "node:fs/promises";

export const generateUnixTimestamp = (): number =>
  Math.floor(Date.now() / 1000);

export const ensureDirectoryExists = async (dirPath: string): Promise<void> => {
  try {
    await fs.access(dirPath);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
  }
};
