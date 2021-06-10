#!/bin/bash

DOCKER_BE = spotiapp-web

OS := $(shell uname)

ifeq ($(OS),Linux)
	UID = $(shell id -u)
else
	UID = 1000
endif

help: ## Show this help message
	@echo 'usage: make [target]'
	@echo
	@echo 'targets:'
	@egrep '^(.+)\:\ ##\ (.+)' ${MAKEFILE_LIST} | column -t -c 2 -s ':#'

run: ## Start the containers
	docker-compose up -d

stop: ## Stop the containers
	docker-compose stop

restart: ## Restart the containers
	$(MAKE) stop && $(MAKE) run

build: ## Rebuilds all the containers
	docker-compose stop && docker-compose build && $(MAKE) run

ssh-be-root: ## ssh's into the be container
	docker exec -it --user 0 ${DOCKER_BE} bash

ssh-be: ## ssh's into the be container
	docker exec -it --user ${UID} ${DOCKER_BE} bash
