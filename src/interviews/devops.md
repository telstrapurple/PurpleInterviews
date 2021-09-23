---
title: DevOps
interviews: Automation Specialist
sortorder: 4
---

# Automation Specialist

## Prerequisites

Please build the platform on the cloud environment as nomimated by the Consultant/ Talent Acquisition Specialist who has invited you to complete this test.

In order to complete this test, you will need:

1. A GitHub account with access to GitHub Actions and public repo.
   - If you're more comfortable with Azure DevOps you may use this for the pipeline development.
2. Access to an Cloud service provider environment.
   - For an Azure Subscription, you can create a [30-day free trial](https://azure.microsoft.com/en-au/free/) if you dont have an Azure subscription.
   - For an AWS Account, you can utilise [AWS free tier](https://aws.amazon.com/free/) if you dont have an AWS Account.
3. Your laptop with your tools/ IDE that you like to work with.

## Scenario

We're after an environment for your software developers colleagues to work in. The long-term goal is that we'll be building a like-for-like environment for UAT and Production later but right now this is just for Development… Setting up for success.

The development team are after a new SQL PaaS database that must be connectected to a virtual network using a secure endpoint. The operations team expect this to be deployed using automation pipelines that are also idempotent and well-governed.

## Instructions

While the business is interested in making use of Terraform, they are currently only making use of PowerShell, CLI and Cloud specific templates (I.e. Aazure Resource Manager or CloudFormation templates). It's expected the pipelines built by you would use the some methodology unless you can provide suitable documentation highlighting the benefits of another technology.

The development team colleagues have shared their templates with you. They have not been tested, but they have used them for their sandbox environment.

- For Azure:
  1.  [SQL Database template](./code/sqldatabase.json)
  2.  [Virtual Network template](/code/networking.json)
- For AWS:
  1.  [SQL RDS instance](./code/rds-cf-template.json)

### Requirements

As the automation specialist, we need:

- A pipeline that builds and deploys the **Development** environment only.
- The **UAT** and **Production** environments would be built later though using the same build artefact.
- The pipeline must use variables and have no plain text secrets.
- If it doesn't exist, the pipeline must create the supporting environment.
- Each environment would use the same virtual network.

In addition to the pipeline, the operations team wish for their to be a branch policy that prevents pushes directly to the **main** branch.

## Completion

When the solution is above is complete, save any artefacts created into a source code repository (E.g. GitHub) and share this repository (or artefacts) with the Consultant/ Talent Acquisition Specialist who contacted you from Telstra Purple. If also possible, please keep your Cloud service provider environment running until the in-person technical interview has been conducted or as otherwise advised.
