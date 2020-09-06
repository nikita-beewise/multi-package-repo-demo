#!/usr/bin/env bash

echo -e "\e[32m  Setting git configs..."

git config --global user.email "nikita@beewise.ag"
git config --global user.name "nikita-beewise"

if [ "$GIT_SSH_KEY_PUBLISH" != "" ]; then
  echo "Detected SSH key for git. Adding SSH config" >&1
  echo "" >&1

  if [ ! -d ~/.ssh ]; then
    mkdir -p ~/.ssh
    chmod 700 ~/.ssh
  fi

  echo $GIT_SSH_KEY_PUBLISH | base64 --decode > ~/.ssh/deploy_key
  chmod 600 ~/.ssh/deploy_key

  echo -e "Host github.com\n"\
          " IdentityFile ~/.ssh/deploy_key\n"\
          " IdentitiesOnly yes\n"\
          " UserKnownHostsFile=/dev/null\n"\
          " StrictHostKeyChecking no"\
          > ~/.ssh/config
fi

echo -e "\e[32m  Setting git remote..."

git remote add github git@github.com:nikita-beewise/multi-package-repo-demo.git

echo -e "\e[32m  Setting npm tokens"

npm set //registry.npmjs.org/:_authToken=$NPM_TOKEN
