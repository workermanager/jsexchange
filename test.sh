#!/bin/bash
set -xe

npx tsc
cd test
npm install ../
cd ..

go test -v