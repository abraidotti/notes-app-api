npx aws-api-gateway-cli-test \
--username='alessandro@kintyre.co' \
--password='Notesapp666!' \
--user-pool-id='us-east-1_uO69HeGzu' \
--app-client-id='1edv5eqv4tqlce7pkkqtp3he1f' \
--cognito-region='us-east-1' \
--identity-pool-id='us-east-1:b556a029-0746-4b19-86a1-439951ae4f75' \
--invoke-url='https://avkf7y3a3b.execute-api.us-east-1.amazonaws.com/prod' \
--api-gateway-region='us-east-1' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"hello world","attachment":"hello.jpg"}'