---
title: Cloud
interviews: Azure Cloud,AWS Cloud
sortorder: 1
---

# Azure Cloud

## Prerequisites

In order to complete this test, you will need:

1. An Azure Subscription. You can create a [30-day free trial](https://azure.microsoft.com/en-au/free/) if you dont have an Azure subscription.
2. Your laptop with your tools/ IDE that you like to work with.
3. A public GitHub repo, or a Google/OneDrive where you can share your workings.

## Scenario

We're after an Azure environment for your software developers colleagues to work in. The long-term goal is that we'll be building a like-for-like environment for UAT and Production later but right now this is just for Development… Setting up for success.

The development team are after a new SQL PaaS database. They're security conscious have heard SQL PaaS in Azure can be protected so it can only be accessed on internal IP ranges on a virtual network. They're excited by this and are keen to explore this in development.

## Instructions

Using your Azure Subscription, deploy the following.

- We need a new Azure Resource Group created.
- Deploy in the new Resource Group a vNet (a /24 CIDR sized subnet) and a SQL PaaS Database.
- We want the SQL PaaS database to be connected by the vNet only and not accessible via the internet.

### Infrastructure as Code

The development team colleagues have reached out and shared their two (2) ARM Templates with you. They have not been tested, but they have invited you to use them with your deployment!

1. [SQL Database template](./code/sqldatabase.json)
2. [Virtual Network template](/code/networking.json)

## Completion

When the solution is above is complete, save any artefacts created into a source code repository (E.g. GitHub) and share this repository (or artefacts) with the Consultant/ Talent Acquisition Specialist who contacted you from Telstra Purple. If also possible, please keep your Azure Subscription running until the in-person technical interview has been conducted or as otherwise advised.

# AWS Cloud

## Prerequisites

In order to complete this test, you will need:

1. An AWS Account. You can utilise [AWS free tier](https://aws.amazon.com/free/) if you dont have an AWS Account.
2. Your laptop with your tools/ IDE that you like to work with.
3. A public GitHub repo, or a Google/OneDrive where you can share your workings.

## Scenario

We're after an AWS environment for Developers to work in. The long-term goal is that we'll be building a like-for-like environment for UAT and Production later but right now this is just for Development… Setting up for success.

The development team are after a new DynamoDB NoSQL database. The company is very security conscious it's imperative that the DynamoDB can only be accessed by a new VPC. Eventually the plan is for the VPC to connect back to on-premises but for right now the developers just want to know the DynamoDB can be accessed only by internal IP ranges.

## Instructions

Using your AWS Account, deploy the following.

- A VPC (a /24 CIDR sized VPC is fine)
- A DynamoDB table. The table name is whatever you want to call it.
- Configuration of the DynamoDB table endpoint so it can be accessed only by the VPC.

### Infrastructure as Code

The development team colleagues have reached out and shared their two (2) CloudFormation Templates with you. They have not been tested, but they have invited you to use them with your deployment!

1. [Deployment template](code/deployment.yaml)
2. [EndPoint template](code/endpoint.yaml)

## Completion

When the solution is above is complete, save any artefacts created into a source code repository (E.g. GitHub) and share this repository (or artefacts) with the Consultant/ Talent Acquisition Specialist who contacted you from Telstra Purple. If also possible, please keep your AWS Virtual Private Cloud running until the in-person technical interview has been conducted or as otherwise advised.
