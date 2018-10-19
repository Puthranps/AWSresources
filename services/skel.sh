#!/bin/bash
while read -r line ||  [[ -n "$line" ]]; do
  aws "$line" x &> "${line}.rough"

  sed -i -e '1,8d' "${line}.rough"
  sed -i -r 's/[ ]+/\n/g' "${line}.rough"
  sed -i -r 's/[\|]//g' "${line}.rough"
  sed -i '/^$/d' "${line}.rough"

  if [ ! -d "$line" ]; then
    mkdir "$line"
  fi

  while read -r command || [[ -n "$command" ]]; do
    arrIN=(${command//-/ })

    if [ ! -d "${line}/${arrIN[0]}" ]; then
      mkdir "${line}/${arrIN[0]}"
    fi
    aws "$line" "$command" --generate-cli-skeleton input &> "${line}/${arrIN[0]}/${command}.json"
    link "${line}/${arrIN[0]}/${command}.json" "${line}/${command}"

  done < "${line}.rough"

  echo "done with $line"
  rm "${line}.rough"
  rm -r "${line}/help"
done < "$1"
