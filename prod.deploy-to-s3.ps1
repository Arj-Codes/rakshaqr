$S3_BUCKET = "prod-rakshaqr-website-static-files"
$BUILD_DIR = "./dist"

aws s3 sync $BUILD_DIR s3://$S3_BUCKET --delete