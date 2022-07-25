/* eslint-disable func-names */
/* eslint-disable no-console */

const Alexa = require('ask-sdk-core');

const HelloHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return (request.type === 'IntentRequest'
                && request.intent.name === 'HelloIntent');
    },
    handle(handlerInput) {
        const speechOutput = "Hello ";
        return handlerInput.responseBuilder
            .speak(speechOutput)
            .getResponse();
    },
};

const HelpHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest'
            && request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(HELP_MESSAGE)
            .reprompt(HELP_REPROMPT)
            .getResponse();
    },
};

const ExitHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.reqestEnvelope.request;
        return request.type === 'IntentRequest' &&
            (request.intent.name === 'AMAZON.CancelIntent'
                || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak(STOP_MESSAGE)
            .getResponse();
    },
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.reqestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log('Session ended with reason: ${handlerInput.requestEnvelope.request.reason}');
        return handlerInput.responseBuilder.getResponse();
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log('Error handled ${error.message}');
        return handlerInput.responseBuilder
            .speak('Sorry, an error occurred.')
            .reprompt('Sorry, an error occurred.')
            .getResponse();
    },
};

const SKILL_NAME = 'Motivational ToDo List';
const HELP_MESSAGE = 'You can say what should I do, or, exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder.addRequestHandlers(
        HelloHandler,
        HelpHandler,
        ExitHandler,
        SessionEndedRequestHandler
        ).addErrorHandlers(ErrorHandler)
        .lambda();