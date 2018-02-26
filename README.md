# Serverless API

A basic serverless API built for a presentation by Erin Commarato for HackCU 2018 at the University of Colorado Boulder.

## Getting Started

There are two methods to getting started with this repo.

### Familiar with Git?

Checkout this repo, install dependencies with the following:

```bash

> git clone this repo
> cd hackCU
> npm install

```

### Not familiar with Git?

Click clone or download then download the .zip file. Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```bash

> npm install

```

## Prerequisites

### Install Serverless Framework

You will need the Serverless framework to use this code.

Follow the instructions at https://serverless.com/framework/docs/providers/aws/guide/installation/ to install the framework.

#### Need an AWS account?

Create a free AWS account at https://aws.amazon.com/free/

#### Create AWS Security Keys

Follow the instructions at https://serverless.com/framework/docs/providers/aws/guide/credentials/ to create and use your AWS Security Keys.

#### Create an API Key

Rename envSAMPLE.yml to env.yml and replace the sample API key with your own.

## Deployment

To deploy this code to AWS, navigate to the project directory and

```bash

> sls deploy

```

### Deploy to S3

- Edit the ```index.html``` file under the /public subdirectory. Change the URL to the GET endpoint from the serverless deployment command above.
- Upload the file to an S3 bucket. The file should be marked as Public when you upload it.

## Demo

https://s3.amazonaws.com/catcu-web/index.html

This demo page will allow you to return results of a search from the API. Further adjustments can be made that take advantage of the other API endpoints. For example, a form can be added to add or update items. Another can be added to delete results. Of course, you want to be thoughtful about which endpoints are open to the general public!

## Additional Resources

Serverless AWS functions documentation
https://serverless.com/framework/docs/providers/aws/

AWS Getting Started
https://aws.amazon.com/getting-started/

### Recommended Tools

AWS CLI
https://aws.amazon.com/cli/

Postman
https://getpostman.com

## License

This project is licensed under the MIT License

## Acknowledgements

- Hats off to [University of Colorado Boulder](https://www.colorado.edu/) for providing a wonderful learning experience at [HackCU2018](https://hackcu.org/)
- [Serverless Framework](https://serverless.com/framework/) for the loads of excellent work they produce