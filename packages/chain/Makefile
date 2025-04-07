up:
	docker compose -p kombination_dev --env-file .env.chain up -d --build  > /dev/null 2>&1

down:
	docker compose -p kombination_dev stop > /dev/null 2>&1

clean:
	docker compose -p kombination_dev down --rmi local -v --remove-orphans > /dev/null 2>&1
