/**
 * Reads an Antigravity CLI JSONL transcript and converts it into a Markdown document.
 * This is particularly useful for attaching transparent AI logs to pull requests.
 *
 * @param {string} inputPath - The absolute or relative path to transcript.jsonl.
 * @param {string} outputPath - The destination path for the generated Markdown file.
 * @returns {Promise<void>} Resolves when the file stream finishes writing.
 */
async function exportToMarkdown(inputPath: string, outputPath: string): Promise<void> {
  const fileContent = await Deno.readTextFile(inputPath);
  const delimiter = "\n";
  const lines = fileContent.split(delimiter).filter((line) => line.trim() !== "");
  
  let markdown = "# Antigravity CLI Transcript\n\n";

  for (const line of lines) {
    try {
      const entry = JSON.parse(line);
      const timestamp = new Date(entry.created_at).toLocaleString();
      const sender = entry.type === "USER_INPUT" ? "Developer" : "Antigravity Agent";
      
      markdown += "### " + sender + " (" + timestamp + ")\n\n";
      markdown += entry.content + "\n\n";
      markdown += "---\n\n";
    } catch (error) {
      console.error("Failed to parse line", error);
    }
  }

  await Deno.writeTextFile(outputPath, markdown);
  console.log("Audit log exported successfully to " + outputPath);
}

const inputArg = Deno.args[0];
const outputArg = Deno.args[1];

if (inputArg && outputArg) {
  exportToMarkdown(inputArg, outputArg);
} else {
  console.error("Usage: deno run --allow-read --allow-write parser.ts <input.jsonl> <output.md>");
}