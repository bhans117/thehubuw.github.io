#!/bin/bash
aws s3 sync build s3://cantor-turing
# cd into backend dir
cd backend
shep deploy --env production
cd ../
