# === GLOBAL ===
up:            ## Build + launch all containers (detached)
	@docker compose up -d --build

down:          ## Stop and remove containers
	@docker compose down

logs:          ## Follow logs of all services
	@docker compose logs -f

restart:       ## Rebuild & relaunch
	@docker compose down
	@docker compose up -d --build

# === Shortcuts ===
bash-backend:  ## Shell into backend container
	@docker exec -it backend sh

bash-frontend: ## Shell into frontend container
	@docker exec -it frontend sh

bash-mongo:    ## Shell into MongoDB container
	@docker exec -it mongodb bash
