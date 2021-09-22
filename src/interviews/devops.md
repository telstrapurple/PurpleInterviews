---
title: DevOps
interviews: Automation Specialist
sortorder: 4
---

# Automation Specialist

## Prerequisites

In order to complete this test, you will need:

1. A GitHub account and public repo.
   - If you're more comfortable with Azure DevOps you may use this for the pipeline development.
2. An Azure Subscription. You can create a [30-day free trial](https://azure.microsoft.com/en-au/free/) if you dont have an Azure subscription.
3. Your laptop with your tools/ IDE that you like to work with.

## Scenario

We're after an Azure environment for your software developers colleagues to work in. The long-term goal is that we'll be building a like-for-like environment for UAT and Production later but right now this is just for Development… Setting up for success.

The development team are after a new SQL PaaS database that must be connectected to a virtual network using a Service Endpoint. The operations team expect this to be deployed using automation pipelines that are also idempotent and well-governed.

## Instructions

While the business is interested in making use of Terraform and Bicep, they are currently only making use of PowerShell, Azure CLI and Azure Resource Manager Templates. It's expected the pipelines built by you would use the some methodology unless you can provide suitable documentation highlighting the benefits of another technology.

The development team colleagues have shared their two (2) ARM Templates with you. They have not been tested, but they have used them for their sandbox environment.

1. [SQL Database template](./code/sqldatabase.json)
2. [Virtual Network template](/code/networking.json)

### Requirements

As the automation specialist, we need:

- A pipeline that builds and deploys the **Development** environment only.
- The **UAT** and **Production** environments would be built later though using the same build artefact.
- The pipeline must use variables and have no plain text secrets.
- If it doesn't exist, the pipeline must create the Azure Resource Group.
- Each environment would use the same single vNet (a /24 CIDR sized subnet).

In addition to the pipeline, the operations team wish for their to be a branch policy that prevents pushes directly to the **main** branch.

## Completion

When the solution is above is complete, save any artefacts created into a source code repository (E.g. GitHub) and share this repository (or artefacts) with the Consultant/ Talent Acquisition Specialist who contacted you from Telstra Purple. If also possible, please keep your Azure Subscription running until the in-person technical interview has been conducted or as otherwise advised.
