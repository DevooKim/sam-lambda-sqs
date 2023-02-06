const AWS = require("aws-sdk");
const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

exports.lambdaHandler = async (event, context) => {
    const queueUrl = process.env.QUEUE_URL;
    const params = {
        QueueUrl: queueUrl,
        MaxNumberOfMessages: 1,
        VisibilityTimeout: 30,
    };

    try {
        const result = await sqs.receiveMessage(params).promise();
        if (!result.message) {
            console.log("No messages found in the queue");
            return;
        }

        result.Messages.map((message) => {
            console.log("received: ", message);
            const deleteParams = {
                QueueUrl: queueUrl,
                ReceiptHandle: message.ReceiptHandle,
            };

            sqs.deleteMessage(deleteParams);
        });
        return;
    } catch (error) {
        console.log("consumer error: ", error);
        return;
    }
};
