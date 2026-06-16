#!/bin/sh
# Locates the most recent Antigravity CLI session and triggers the Markdown parser.
GIT_ROOT=$(git rev-parse --show-toplevel)
DENO_TS_FILE="$GIT_ROOT/utils/export-agy-chat-transcript.ts"
brain_dir="${HOME}/.gemini/antigravity-cli/brain"
TIMESTAMP=$(date +%s)

if [ ! -d "${brain_dir}" ]; then
  echo "Error: Antigravity CLI brain directory not found."
  exit 1
fi

latest_convo=$(ls -td "${brain_dir}"/*/ | head -n 1)
log_file_full="${latest_convo}.system_generated/logs/transcript_full.jsonl"
log_file="${latest_convo}.system_generated/logs/transcript.jsonl"

if [ -f "${log_file}" ]; then
  echo "Extracting transcript from: ${log_file}"
  deno run --allow-read --allow-write "$DENO_TS_FILE" "${log_file}" "agy-transcript_${TIMESTAMP}.md"

  echo "Extracting full transcript from: ${log_file}"
  deno run --allow-read --allow-write "$DENO_TS_FILE" "${log_file_full}" "agy-transcript-full_${TIMESTAMP}.md"
else
  echo "No JSONL transcript found in the latest session."
  exit 1
fi