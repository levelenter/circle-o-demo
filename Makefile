all:
ifdef PROJECT_NAME
	echo ${PROJECT_NAME}
else
	echo 'PROJECT_ID is not defined'
	exit 1
endif
ifdef ENV
	echo ${ENV}
else
	echo 'ENV is not defined'
	exit 1
endif

encrypt:
ifdef PROJECT_NAME
	echo ${PROJECT_NAME}
else
	echo 'PROJECT_ID is not defined'
	exit 1
endif
ifdef ENV
	echo ${ENV}
else
	echo 'ENV is not defined'
	exit 1
endif
	gcloud --project ${PROJECT_NAME} kms encrypt \
           --plaintext-file=.env.${ENV} \
           --ciphertext-file=./enc/.env.${ENV}.enc \
           --location=global \
           --keyring=env \
           --key=env
	gcloud --project ${PROJECT_NAME} kms encrypt \
           --plaintext-file=.npmrc \
           --ciphertext-file=./enc/.npmrc.${ENV}.enc \
           --location=global \
           --keyring=env \
           --key=env

decrypt:
ifdef PROJECT_NAME
	echo ${PROJECT_NAME}
else
	echo 'PROJECT_ID is not defined'
	exit 1
endif
ifdef ENV
	echo ${ENV}
else
	echo 'ENV is not defined'
	exit 1
endif
	gcloud --project ${PROJECT_NAME} kms decrypt \
           --ciphertext-file=./enc/.env.${ENV}.enc \
           --plaintext-file=.env.${ENV} \
           --location=global \
           --keyring=env \
           --key=env
	gcloud --project ${PROJECT_NAME} kms decrypt \
           --ciphertext-file=./enc/.npmrc.${ENV}.enc \
           --plaintext-file=.npmrc \
           --location=global \
           --keyring=env \
           --key=env
