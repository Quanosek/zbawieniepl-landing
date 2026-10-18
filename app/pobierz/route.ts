import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

export async function GET(request: Request) {
  const filename = new URL(request.url).searchParams.get("q");

  if (!filename) {
    return new Response("Missing file name.", { status: 400 });
  }

  const attachmentsDirectory = path.join(process.cwd(), "public", "attachments");
  const attachments = await readdir(attachmentsDirectory, { withFileTypes: true });
  const attachment = attachments.find((entry) => entry.isFile() && entry.name === filename);

  if (!attachment) {
    return new Response("File not found.", { status: 404 });
  }

  const file = await readFile(path.join(attachmentsDirectory, attachment.name));
  const contentType =
    path.extname(attachment.name).toLowerCase() === ".pdf"
      ? "application/pdf"
      : "application/octet-stream";

  return new Response(file, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(attachment.name)}`,
    },
  });
}
