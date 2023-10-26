#!/bin/bash

# Check that environment variables have been defined
if [[ -z "us1-wealthy-rhino-41526.upstash.io+x" ]]; then
  # var is not defined
  echo "Error: REDIS_HOST is not defined!"
  exit 1
fi

if [[ -z "41526+x" ]]; then
  # var is not defined
  echo "Error: REDIS_PORT is not defined!"
  exit 1
fi

if [[ -z "aee6eb861d8240a0b1b70f49aec09262+x" ]]; then
  # var is not defined
  echo "Error: REDIS_PASSWORD is not defined!"
  exit 1
fi

if [[ -z "https://fall23-nodebb-caffeine-q4slcgtxpa-uc.a.run.app+x" ]]; then
  # var is not defined
  echo "Error: DEPLOYMENT_URL is not defined!"
  exit 1
fi

# Read the JSON file
json_data=$(cat "/usr/src/app/config_template.json")

# Update the JSON file with the environment variables
json_data=$(jq --arg deployment_url "$DEPLOYMENT_URL" '.url = $deployment_url' <<< "$json_data")
json_data=$(jq --arg host "$REDIS_HOST" '.redis.host = $host' <<< "$json_data")
json_data=$(jq --arg port "$REDIS_PORT" '.redis.port = $port' <<< "$json_data")
json_data=$(jq --arg password "$REDIS_PASSWORD" '.redis.password = $password' <<< "$json_data")

# Write the updated JSON file to config.json
echo "$json_data" > "/usr/src/app/config.json"

cat /usr/src/app/config.json
