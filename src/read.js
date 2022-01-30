import { readdir } from "fs/promises";

export function read(url) {
  const files = readdir(url);
  return files;
}
