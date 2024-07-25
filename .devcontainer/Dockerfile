# Use the official Node.js 20 image as the base
FROM node:20-bullseye

# Set the working directory
WORKDIR /workspace

# Install necessary packages
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends curl gnupg ruby-full

# Install GitHub CLI
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | gpg --dearmor -o /usr/share/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && apt-get update \
    && apt-get -y install gh

# Install global npm packages and bundler as root
RUN npm install -g npm@latest && gem install bundler

# Create a non-root user
RUN useradd -m devuser -s /bin/bash

# Set up directories for gem installation
RUN mkdir -p /home/devuser/.gem \
    && chown -R devuser:devuser /home/devuser/.gem /var/lib/gems/2.7.0 \
    && chmod -R 775 /home/devuser/.gem /var/lib/gems/2.7.0

# Switch to the non-root user
USER devuser

# Configure gem to install to user's home directory
ENV GEM_HOME=/home/devuser/.gem
ENV PATH=$GEM_HOME/bin:$PATH

# [Optional] Uncomment if you want to install more global node modules
# RUN npm install -g <your-package-list-here>
