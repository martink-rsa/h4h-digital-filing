import Dexie from "dexie";
import Fuse from "fuse.js";
import { File } from "../models/file";

class FileService {
  db: any = new Dexie("h4h-digital-filing");

  constructor() {
    this.db.version(1).stores({
      files:
        "++id, fileName, fileType, size, extractedText, fileBlob, tags, category",
    });
  }

  addFile(file: File) {
    this.db.files.add(file);
  }

  async findFiles(
    keyword: string = "",
    tags: Array<any> = [],
    categories: Array<any> = [],
    name?: string,
    fileType?: string
  ): Promise<Array<File>> {
    // TODO: Maybe query db high level before doing Fuze/Fuzzy search

    const docs = await this.db.files.toArray();

    if (!keyword) return docs;

    const options = {
      includeScore: true,
      keys: ["name", "extractedText", "tags", "category"],
    };
    const fuse = new Fuse(docs, options);
    const result = fuse.search<File>(keyword);
    return result.map((obj) => obj.item);
  }
}

// Single instance
const fileService = new FileService();

export { fileService };
