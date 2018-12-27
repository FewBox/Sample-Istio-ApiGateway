let { ServiceBroker } = require("moleculer");
let ApiService = require("moleculer-web");

let broker = new ServiceBroker({ logger: console });

// Create a service
broker.createService({
    name: "app",
    actions: {
        version() {
            return "v0.0.1"
        },
        name(){
            return "Unsplash"
        }
    }
});

// Load API Gateway
broker.createService(ApiService);

// Start server
broker.start();