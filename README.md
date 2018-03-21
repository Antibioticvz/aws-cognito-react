
### Config cluster cli 

```
ecs-cli configure --cluster test --region us-east-1 --config-name test

# Create cluster and cloud formation
ecs-cli up --cluster gr --keypair gramm  --capability-iam --size 1 --port 443 --instance-type c4.large -f
# or
ecs-cli up --cluster gr --keypair gramm  --capability-iam --size 1 --port 443 --instance-type t2.micro -f

# Compose
ecs-cli compose --verbose --project-name mygr --file ecs.yml up --create-log-groups --cluster mygr

```

### Run Docker

```
# Start docker Dev
./run.sh

# Build docker prod and push to s3
cd api/cognito
./build.sh

# Docker test ready prod build
docker run --rm -p 3000:3000 CONTAINER_NAME

```
> Frontend
http://localhost:3000

> Graphiql
http://localhost:5000/graphiql