#!/bin/bash

if [ -z "$1" ]
  then exit -1;
fi

TAG=$1;
REGISTRY_URL='607425910686.dkr.ecr.eu-central-1.amazonaws.com';

echo 'BUILDING landing page image';
echo '======================================================';

npm run build-version;
IMAGE_NAME='acroplia-landing:'$TAG;
docker build -t $IMAGE_NAME .;
ret=$?
if [ $ret -eq 0 ] ; then
    docker tag $IMAGE_NAME $REGISTRY_URL/$IMAGE_NAME;
    docker push $REGISTRY_URL/$IMAGE_NAME;

    echo '';
    echo 'done';
else
    return $ret
fi