# New Rebbix Web Site

## Installation

1. Clone repository

  ```bash
  git clone git@github.com:rebbix/rebbix.github.io.git
  cd rebbix.com
  ```

2. Sync dependencies versions (this may require [installing specific ruby version](#ruby-installation))

  ```bash
  bin/sync-versions
  ```
3. Run

  ```bash
  bin/server
  ```

## Ruby Installation

1. Make sure that you already have [rbenv](https://github.com/rbenv/rbenv) and [ruby-build](https://github.com/rbenv/ruby-build). If not - follow the [installation steps](#installing-rbenv)
2. Run Ruby installation command:

  ```bash
  rbenv install "$(cat .ruby-version)" && \
    gem install bundler && \
    bundle install
  ```

## Installing rbenv

### Through Homebrew (preferred)

1. Update packages list

  ```bash
  brew Update
  ```

2. Install rbenv

  ```bash
  brew install rbenv
  ```

3. Install ruby-build

  ```bash
  brew install ruby-build
  ```

### Through git

1. [Install rbenv](https://github.com/rbenv/rbenv#basic-github-checkout)
2. [Install ruby-build](https://github.com/rbenv/ruby-build#installing-as-an-rbenv-plugin-recommended)
