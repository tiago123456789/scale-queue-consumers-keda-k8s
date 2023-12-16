require('dotenv').config()

const { Consumer } = require('sqs-consumer');
const { SQSClient } = require('@aws-sdk/client-sqs');

const sleep = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

const app = Consumer.create({
    queueUrl: process.env.QUEUE_URL,
    sqs: new SQSClient({
        region: process.env.QUEUE_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    }),
    handleMessage: async (message) => {
        await sleep(10)
        console.log(message.Body)
    }
});

app.start();
console.log("Start consuming...")