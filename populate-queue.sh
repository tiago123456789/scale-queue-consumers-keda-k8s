#!/bin/bash

QueueURL=$1
REGION=$2
PROFILE=$3

for x in {1..210000}
do
aws sqs send-message \
  --message-body="Test Message ${x}" \
  --queue-url=$QueueURL \
  --region=$REGION \
  --profile=$PROFILE

done