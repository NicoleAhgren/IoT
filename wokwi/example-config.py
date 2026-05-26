# You may notice the config.py file imported in main.py is missing.
# Micropython does not support .env the os.getenv() command.
# Therefore you can define a .py file with your secrets and then add it to .gitignore.
# This would work exactly the same way if you were writing in CPP, 
# only using a secrets.h file with #include variable declarations.
MQTT_BROKER="your-hivemq-broker.s1.eu.hivemq.cloud"
MQTT_USERNAME="your-created-credentials-pair-username"
MQTT_PASSWORD="your-created-credentials-pair-password"