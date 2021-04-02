FROM public.ecr.aws/lambda/nodejs:12

COPY app.js server.js serverless.js package*.json ./
RUN npm install

# TODO: how to handler server.js with this default lambda docker image? just override entrypoint?
CMD [ "serverless.handler" ]
