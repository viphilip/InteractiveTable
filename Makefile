# ----------- BACKEND -----------

build-backend:
	docker compose build backend

dev-backend:
	docker compose up backend

shell-backend:
	docker exec -it backend sh



# build-frontend:
# 	docker compose build frontend

# dev-frontend:
# 	docker compose up frontend

# shell-frontend:
# 	docker exec -it frontend sh

# ----------- GLOBAL -----------

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

restart:
	docker compose down
	docker compose build
	docker compose up -d
