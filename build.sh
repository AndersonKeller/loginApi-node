// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit
node-waf configure build
yarn
yarn build
yarn typeorm migration:run -d dist/data-source