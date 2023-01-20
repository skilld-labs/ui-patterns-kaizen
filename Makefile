.PHONY: up down log exec exec0 restart xdebug install

COMPOSE_PROJECT_NAME = ui-patterns-kaizen
CUID := $(shell id -u)
CGID := $(shell id -g)
CURDIR := $(shell pwd)

all: | exec

up:
	docker-compose pull
	docker-compose up -d
	docker-compose exec -u $(CUID):$(CGID) php composer i -o
	make restart

install:
	docker-compose exec -u 0:0 php chmod +w web/sites/default && rm -rf web/sites/default/settings.php web/sites/default/files
	docker-compose exec -u $(CUID):$(CGID) php php web/core/scripts/drupal install standard
	make info

down:
	docker-compose down -v

log:
	docker-compose logs -f --tail=20

exec:
	docker-compose exec -u $(CUID):$(CGID) php ash

exec0:
	docker-compose exec -u 0:0 php ash

info:
	$(info Containers info:)
	$(eval CONTAINERS = $(shell docker-compose ps -q php))
	$(foreach CONTAINER, $(CONTAINERS),$(info http://$(shell printf '%-19s \n'  $(shell docker inspect --format='{{(index .NetworkSettings.Networks "$(COMPOSE_PROJECT_NAME)_front").IPAddress}}:{{index .Config.Labels "traefik.port"}} {{range $$p, $$conf := .NetworkSettings.Ports}}{{$$p}}{{end}} {{.Name}}' $(CONTAINER) | rev | sed "s/pct\//,pct:/g" | sed "s/,//" | rev | awk '{ print $0}')) ))
	@echo "$(RESULT)"

restart:
	docker-compose exec -u 0:0 php curl -X PUT --data-binary @/var/lib/unit/conf.json  --unix-socket /run/control.unit.sock http://localhost/config
	docker-compose exec -u 0:0 php curl --unix-socket /run/control.unit.sock http://localhost/control/applications/drupal/restart

xdebug:
	docker-compose exec -u 0:0 php ash -c "sed 's/^\;zend/enx/;s/^zend/dix/;s/^enx/zend/;s/^dix/\;zend/' -i /etc/php81/conf.d/50_xdebug.ini"
	make restart
