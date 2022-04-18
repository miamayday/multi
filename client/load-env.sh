#!/bin/sh

VUE_SERVER_URL=${SERVER_URL}

echo SERVER_URL = ${SERVER_URL}
echo $SERVER_URL
echo VUE_SERVER_URL = $VUE_SERVER_URL

ROOT_DIR=/usr/share/nginx/html
CONFIG_FILE=$ROOT_DIR/env-config.js
HTML_FILE=$ROOT_DIR/index.html

cat <<EOF | tee ${CONFIG_FILE}
window.VUE_SERVER_URL = '${VUE_SERVER_URL}'
EOF

sed -i '/script/a \ \ \ \ <script src="/env-config.js"></script>' $HTML_FILE
