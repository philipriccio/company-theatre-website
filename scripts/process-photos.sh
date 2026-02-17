#!/bin/bash
# Process production photos for website galleries
# Resizes to 1600px max width, optimizes for web

set -e

DEST="/Users/mildred/.openclaw/workspace/projects/company-theatre-website/public/images/galleries"
SRC="/Users/mildred/Downloads/production-photos/extracted"

process_gallery() {
    local name=$1
    local src_pattern=$2
    local prefix=$3
    
    echo "Processing $name..."
    mkdir -p "$DEST/$name"
    
    count=1
    find "$SRC/$src_pattern" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) ! -iname "*poster*" ! -iname "*POSTER*" | sort | while read -r file; do
        outfile=$(printf "%s/%s/%s-%02d.jpg" "$DEST" "$name" "$prefix" "$count")
        echo "  $count: $(basename "$file") -> $(basename "$outfile")"
        magick "$file" -resize "1600x1600>" -quality 85 -strip "$outfile"
        ((count++))
    done
    
    echo "Done with $name"
}

# Process each show
process_gallery "festen" "festen-photos/FESTEN" "festen"
process_gallery "the-test" "the-test-photos/THE TEST/THE TEST - PHOTOS" "test"
process_gallery "john" "john-photos/JOHN*" "john"
process_gallery "whistle" "whistle-in-the-dark-photos" "whistle"

echo ""
echo "All galleries processed!"
echo "Jerusalem (417 photos) skipped - needs curation first"
