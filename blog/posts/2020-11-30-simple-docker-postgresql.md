---
authorId: wcanavan
categories: 
  - javascript
date: '2020-11-30'
nextSlug: releasing-javascript-libraries-with-release-it
nextTitle: Releasing JavaScript Libraries with release-it
previousSlug: tailwind-ui-dropdown-ember-transitions
previousTitle: Tailwind UI Dropdowns with Ember
slug: simple-docker-postgresql
title: The Simplest Possible Docker Setup For Postgresql
---

Recently I was working through [Xiaoru Li](https://www.xiaoru.li/)’s [excellent tutorial on Next-Auth](https://dev.to/prisma/passwordless-authentication-with-next-js-prisma-and-next-auth-5g8g) and I needed a Postgresql database _quick_. My search got a lot of results that were similar, but different enough for me to lose confidence in any given solution. I spent a little time searching for a simple configuration and this is what I came up with. For those of you in a rush, copy and paste away:

```yml
version: "3.8"

services:
  postgres:
    image: postgres:13-alpine
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: prisma
      POSTGRES_PASSWORD: prisma
      POSTGRES_DB: tabata
    volumes:
      - ./data:/var/lib/postgresql/data\
```

Now, for the rest of you who aren’t even sure why this is necessary or aren’t sure why there are so many suggestions when you search for this problem, let’s dig in.

## Why Docker at all?

In my career, it has been immeasurably beneficial to make sure that the low level technologies and languages I am relying upon are “insulated” from the computer I am developing on. By insulated, I mean it is best to use Docker or a version manager (e.g. `rbenv`, `pyenv`, `nvm`, ...) rather than installing a technology directly on to your operating system.

For example, when you use an already installed language (like python on MacOS) you run the risk of breaking how your OS functions. When you install a language directly (e.g. `brew install python` on MacOS) you run the risk of packages conflicting.

Using a version manager allows you to easily reset the installation of a language if anything goes wrong. Presuming your configuration and package manifests are intact you should have an easy time getting back up and running. Using a version manager also helps you run different version of a language or database for different projects so you can easily switch between them.

Running your DB inside of docker can be thought as the ultimate version manager, it not only keeps different versions separate from each other, it keeps each version isolated in its own virtual machine.

## Docker-compose vs `docker run`

When looking for a “minimally viable” way to get Postgres running the results were fairly evenly split between suggestions using `docker run` and suggestions using `docker-compose`. `docker run` is a way of running commands inside of a docker container, if the container does not exist it will create it before running the command. `docker-compose` prompts docker to run a variety of commands (`up`, `down`, `stop`) relative to a `docker-compose.yml` configuration file. There are a lot of differences between the two methods, but syntactically you can think of the difference between them as the difference between passing all of your `eslint` options as flags in the command line and running `eslint` in conjunction with an `.eslintrc` file.

Using a `docker-compose.yml` file is the easier route, as it is the more legible of the two options.

## Exploded `docker-compose.yml`

What is the `docker-compose.yml` file doing? Let's go line by line.

```yml
version: "3.8"
```

The `docker-compose.yml` API has different versions, this is something to be keenly aware of while researching and creating your configuration. It is typically best to use the [latest version](https://docs.docker.com/compose/compose-file/). You should also check what version of Docker Engine you are running.

```yml
services:
  postgres:
```

A typical `docker-compose.yml` in a professional environment will have several services configured to work together. For our purpose we only need the one. The key for your service is arbitrary, you could name it `db` or `banana`, but for organizational purposes it makes most sense to match the key to the Docker image you are relying upon.

```yml
image: postgres:13-alpine
```

This is the image tag, the list of available options is available on [Docker Hub](https://hub.docker.com/_/postgres). `postgres` refers to the Docker image you would like to use. `13-alpine` is a tag of the image with `13` referring to the version of Postgres you would like to use and `alpine` denoting a flavor of linux that is stripped down to be as small as possible. You can always specify simply `postgres` or `postgres:latest` if size or version doesn't matter to you.

```yml
restart: always
```

What it says on the label! [Always restart](https://docs.docker.com/compose/compose-file/#restart) this container when docker engine starts.

```yml
ports:
  - "5432:5432"
```

This forwards the [Docker containers ports](https://docs.docker.com/compose/compose-file/#ports) to your machine's ports. `5432` is PostgreSQL's [default port](https://www.postgresql.org/docs/current/app-postgres.html). You should only need to change this if you have a conflicting process using the same port.

```yml
environment:
  POSTGRES_USER: prisma
  POSTGRES_PASSWORD: prisma
  POSTGRES_DB: tabata
```

While there are other [environment variables available](https://hub.docker.com/_/postgres) for your PostgreSQL container, this is all you need to get the container running. If the container and database do not yet exist `docker-compose up` will create a database with this name, user, and password.

```yml
volumes:
  - ./data:/var/lib/postgresql/data\
```

[Volumes](https://docs.docker.com/compose/compose-file/#volume-configuration-reference) allow your data to persist in-between bringing your container up and down. This tells docker where to store that persisted data and links it to the location within your container.

## You know something I don't?

If you've made it to the end and you see a way to make this configuration even leaner, please let me know!
