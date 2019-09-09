#!/bin/sh

curl https://gist.githubusercontent.com/JounQin/f038d5329a480d65cab636b470ec0a2a/raw/e5194461526578e057f8e1085206cb2b78b1ee05/instrumenter.js \
  -o node_modules/istanbul-lib-instrument/dist/instrumenter.js
echo 'instrumenter patched successfully'
