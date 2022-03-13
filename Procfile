web: node . --server
worker: pkg install yarn && npm i typescript -g && yarn && tsc -p ./node_modules/@adiwajshing/baileys/ && npm install && npm install pm2 && pm2 start index.js && pm2 save && pm2 logs
