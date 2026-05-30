import fs from "node:fs";
import path from "node:path";

type CsvSheet = {
  name: string;
  rows: string[][];
};

const contentDir = path.join(process.cwd(), "content");
const pdfDir = path.join(process.cwd(), "public", "assets", "brand-pdf");

function parseCsv(input: string): string[][] {
  const lines = input.replace(/\r/g, "").split("\n").filter((line) => line.length > 0);
  const rows: string[][] = [];

  for (const line of lines) {
    const row: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      const next = line[i + 1];

      if (ch === '"') {
        if (inQuotes && next === '"') {
          current += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === "," && !inQuotes) {
        row.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }

    row.push(current.trim());
    rows.push(row);
  }

  return rows;
}

export function getBrandGuidelineText(): string {
  return fs.readFileSync(path.join(contentDir, "brand-guideline.txt"), "utf-8");
}

export function getBaoGiaText(): string {
  return fs.readFileSync(path.join(contentDir, "bao-gia.txt"), "utf-8");
}

export function getCsvSheets(): CsvSheet[] {
  const files = fs
    .readdirSync(contentDir)
    .filter((name) => name.startsWith("xlsx_") && name.endsWith(".csv"))
    .sort((a, b) => a.localeCompare(b, "vi"));

  return files.map((file) => ({
    name: file.replace(/^xlsx_/, "").replace(/\.csv$/, ""),
    rows: parseCsv(fs.readFileSync(path.join(contentDir, file), "utf-8"))
  }));
}

export function getSourceFiles(): string[] {
  return fs.readdirSync(contentDir).sort((a, b) => a.localeCompare(b, "vi"));
}

export function getBrandPdfFiles(): string[] {
  return fs.readdirSync(pdfDir).sort((a, b) => a.localeCompare(b, "vi"));
}
