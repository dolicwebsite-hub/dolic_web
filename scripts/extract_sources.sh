#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/Dolic_Dev/content"

mkdir -p "$OUT"

textutil -convert txt "$ROOT/Dolic Brand Guideline v1.docx" -output "$OUT/brand-guideline.txt"
textutil -convert txt "$ROOT/data/BÁO GIÁ MÁY DOLIC.docx" -output "$OUT/bao-gia.txt"

echo "Extracted docx -> txt into $OUT"
