const AWS = require("aws-sdk");
const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

exports.lambdaHandler = async (event, context) => {
    const queueUrl = process.env.QUEUE_URL;
    const messageBody = JSON.stringify(event);

    const params = {
        MessageBody: messageBody,
        QueueUrl: queueUrl,
    };

    try {
        const result = await sqs.sendMessage(params).promise();
        console.log(`Message sent to SQS: ${messageBody}`);
        return result;
    } catch (err) {
        console.log(err);
        return err;
    }
};
