Local: docker compose -f ./infra/docker-compose.yml --env-file .env -p rinha-de-backend up --build --remove-orphans -d

DB: docker compose -f ./infra/docker-compose-db.yml --env-file .env -p rinha-de-backend down --volumes

Cerca de ~21 mil inserts

Pode ser bem melhor ksksks