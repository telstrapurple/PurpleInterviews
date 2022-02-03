---
title: Data
interviews: Data Analyst,Data Engineer
sortorder: 2
---

# Data Analyst

## Prerequisites

In order to complete this test, you will need:

1. Your laptop with [Power BI Desktop](https://powerbi.microsoft.com/en-us/downloads/) installed.
2. A public GitHub repo, or a Google/OneDrive where you can share your workings (E.g. Power BI files).

## Scenario

As the Data Analyst for a small fuel company, you have been given two (2) data sources.

1. [The FuelWatch RSS feed](http://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS)
2. [Discounts Excel file](/code/discount.xlsx)

## Instructions

You have been ask to create a Power BI report that combines both sources to answer questions the business may have around its competitors.

### Modelling

1. In Power BI, connect to the two (2) data sources.
2. Using Power Query, create transformations as necessary to model the source data as described below.
3. Create three (3) new dimension tables - **Brand**, **Site** and **SiteFeatures**. They should have the respective attributes below.
   - BrandID, BrandName
   - SiteID, TradingName, Location, Address, Phone, Latitude, Longitude. Please also add a computed, persisted column named **_FullAddress_** which combines Address and Location.
   - SiteFeatureID, SiteID (From the Site table) and the various site features from the delimited source column site-features.
4. Create a **Date** table automatically. Ensure that the key is numeric in the format yyyymmdd.
5. Create a single fact table called FuelPrice. It should have the columns below:
   - FuelPriceID (Identity), BrandID (From the Brand table), SiteID (From the Site table), DateID (From the Date table), Price, DateCreated (Default to current system time) and DateModified (nullable, no default).
6. Clean the data in Power BI by removing any unnecessary columns not mentioned above.

### Visualisation

1. Create visuals using the modelled data that allow the business to answer the following questions.
   - What is the average price of fuel across the region over all time?
   - On what date and where can they find the cheapest fuel after the discount has been applied? We should be able to compare the full price and the discounted price.
   - See a list of the top 10 sites with the cheapest fuel price on a given date?
   - Be able to drill-down into all the details for a the top 10 cheapest fuel stations?
   - Discover quickly which sites are open 24 hours a day?

### General

1. The business executives have also asked for a consistent theme that can be applied to the report and other reports in the future.
2. The business executives are also interested in tracking historical price changes. Can you produce a strategy for this?

### Report Considerations

While developing the report, keep the following in mind
   - The FuelWatch data is updated on a daily basis, how would your model manage this? 
   - Good use of dimensional modelling. 
   - Use of efficient DAX/M.
   - At least two different types of visuals and extra elements (like text boxes, shapes etc.)
   - A clean user friendly report that’s easy to read, visually appealing and answers the questions.


## Completion

When the solution is above is complete, create a ReadMe document describing how your model manages new data on subsequent days and then save this with the Power BI file and any other supporting templates and share with the Consultant/Talent Acquisition Specialist who contacted you from Telstra Purple.


# Data Engineer

## Prerequisites

In order to complete this test, you will need:

1. Access to a Cloud service provider environment.
   - For an Azure Subscription, you can create a [30-day free trial](https://azure.microsoft.com/en-au/free/) if you don't have an Azure subscription.
   - For an AWS Account, you can utilise [AWS free tier](https://aws.amazon.com/free/) if you don't have an AWS Account.
   - For an GCP Environment, you can utilise [GCP free tier](https://cloud.google.com/free) if you don't have an GCP Account.
2. Your laptop with the tools/IDE that you like to work with.
3. A public GitHub repo, or a Google/OneDrive where you can share your solution.

## Scenario

We are assisting a customer in building out a solution which ingests the latest fuel prices from the Fuel Watch RSS feed. This data is not in a great structure, and we would like to ingest this data into a data lake, perform some transformations and build out a data mart for use in Power BI, the customer's visualisation tool of choice.

1. Our customer would like to take an infrastructure-as-code approach to the deployment of the new resources however, the delivery of a working prototype is the highest priority.
2. All resources should be deployed in Australia.

## Instructions

Follow these instructions and deploy using whatever means you feel necessary.

### Building the Platform

First, create your resources in your Cloud service provider environment.

1. Create all resources with the following tags.
   - Department - Finance
   - Environment - Development
2. Create a new storage resource.
   - Add a container/bucket called **datalakestore**.
3. Create the following ETL resource applicable to your Cloud service provider environment.
   - Azure - Azure Data Factory
   - AWS - Glue Data Pipeline
   - GCP - Cloud Data Fusion
4. Create the following encryption resource to your Cloud service provider environment.
   - Azure - Azure Key Vault
   - AWS - Key Management Service
   - GCP - Secret Manager
5. Create a new SQL Server database called **DataMart**.
   - The database should be a PaaS version.
   - The database size should be 20GB.
   - Authentication should use contained users.

### Deployability

Ensure that your resources can be deployed in a repeatable manner and can be parameterised so that e.g. Dev/Test/Prod copies can all be deployed from the same IaaS source code.
Save your deployment code artefacts for upload with the remainder of your solution.

### Ingestion

The source data you will be using is the [FuelWatch RSS feed](http://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS) from the Western Australian Government.

1. Any passwords, keys or other secrets used in your solution (e.g. storage keys, database passwords, etc) should be saved in your deployed encryption resource and referenced from there.
2. Ingest the RSS feed into the **datalakestore** container/bucket in the storage account deployed above.
3. Import the **item** array from the RSS object, with the child fields in a tabular format, into a parquet file in the storage account with the path below.
   - datalakestore/Raw/FuelWatch/&lt;Current date as format yyyy-mm-dd&gt;.
   - The file name should be **feed.parquet**.
4. Once the file has been imported into the data lake, add another activity to the same pipeline which reads the parquet file from the data lake and writes it to the DataMart SQL database.
   - Use a temporary table in the tempstage schema called **FuelPrices**. This activity must run after the activity to import the source data.
   - The connection to the SQL PaaS database should be secured and not exposed in your pipeline code.

### Modelling

Once the temporary data has been loaded into the DataMart database, transform the data into fact and dimension tables for our user-consumed data model. All objects should be created in a new schema named **dw**.

1. Create three (3) new dimension tables - **Brand**, **Site** and **SiteFeatures**. They should have the respective attributes below.
   - BrandID (Identity, primary key), BrandName
   - SiteID (Identity, primary key), TradingName, Location, Address, Phone, Latitude, Longitude. Add a computed, persisted column named FullAddress which combines Address and Location.
   - SiteFeatureID (Identity, primary key), SiteID (From the Site table) and the various site features from the delimited source column site-features.
   - Create Clustered Indexes on the Primary Keys and Non-Clustered Indexes on any Foreign Keys.
2. Create a single fact table called **FuelPrice**. It should have the columns below:
   - FuelPriceID (Identity), BrandID (From the Brand table), SiteID (From the Site table), Price, DateCreated (Numeric and stored as yyyymmdd. Default to current date) and DateModified (Numeric and stored as yyyymmdd, nullable, no default).
3. Add a primary key to the **FuelPrice** fact table across the SiteID, BrandID and DateCreated columns 
   - Add a clustered index on the FuelPriceID column.
4. The naming convention for indexes should be `IDX_<Table Name>_<Column Name>`.
5. Create appropriate artefacts, scripts or pipelines to populate the tables above.
   - The pipeline must be able to handle intra-day changes to the prices by modifying the current days' record.
   - The pipeline must be able to handle subsequent days' prices by adding new records. 
6. Keep these artefacts handy for the technical interview.

## Completion

When the solution above is complete, save any artefacts created and share them with the Consultant/Talent Acquisition Specialist who contacted you from Telstra Purple. We should be able to define appropriate parameters and deploy your solution to our own Cloud service provider environment and be able to execute your pipelines to populate the tables.

If also possible, please keep your Cloud service provider environment available (feel free to pause or scale-down any resources to save costs) until the in-person technical interview has been conducted or as otherwise advised.
