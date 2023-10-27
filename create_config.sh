#!/bin/bash

# Check that environment variables have been defined
if [[ -z "${REDIS_HOST+x}" ]]; then
  # var is not defined
  echo "Error: REDIS_HOST is not defined!"
  exit 1
fi

if [[ -z "${REDIS_PORT+x}" ]]; then
  # var is not defined
  echo "Error: REDIS_PORT is not defined!"
  exit 1
fi

if [[ -z "${REDIS_PASSWORD+x}" ]]; then
  # var is not defined
  echo "Error: REDIS_PASSWORD is not defined!"
  exit 1
fi

if [[ -z "${DEPLOYMENT_URL+x}" ]]; then
  # var is not defined
  echo "Error: DEPLOYMENT_URL is not defined!"
  exit 1
fi

# Read the JSON file
json_data=$(cat "/usr/src/app/config_template.json")

# Update the JSON file with the environment variables
json_data=$(jq --arg deployment_url "https://fall23-nodebb-caffeine-q4slcgtxpa-uc.a.run.app" '.url = $deployment_url' <<< "$json_data")
json_data=$(jq --arg host "gusc1-cool-turtle-30506.upstash.io" '.redis.host = $host' <<< "$json_data")
json_data=$(jq --arg port "30506" '.redis.port = $port' <<< "$json_data")
json_data=$(jq --arg password "f9c27ba6a7734df69853c35b927d529e" '.redis.password = $password' <<< "$json_data")

# Write the updated JSON file to config.json
echo "$json_data" > "/usr/src/app/config.json"

cat /usr/src/app/config.json
