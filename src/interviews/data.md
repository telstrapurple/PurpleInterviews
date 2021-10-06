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
2. Create three (3) new dimension tables - **Brand**, **Site** and **SiteFeatures**. They should have the respective attributes below.
   - BrandID , BrandName
   - SiteID , TradingName, Location, Address, Phone, Latitude, Longitude. Please also add a computed, persisted column named **_FullAddress_** which combines Address and Location.
   - SiteFeatureID , SiteID (From the Site table) and the various site features from the delimited source column site-features.
3. Create a single fact table called FuelPrice. It should have the columns below:
   - FuelPriceID (Identity), BrandID (From the Branch table), SiteID (From the Site table), DateID (Numeric and stored as yyyymmdd), Price, DateCreated (Default to current system time) and DateModified (nullable, no default).
4. Clean the data in Power BI by removing any uncesscary columns not mentioned above.

### Visualisation

1. Create visuals using the modelled data that allow the business to answer the following questions.
   - What is the average price of fuel across the region?
   - When and where can they find the cheapest fuel after the discount applied? We should be able to compare the actual price and discounted price.
   - See a list of the top 10 sites with the cheapest fuel price?
   - Be able to drill-down into all the details for a the top 10 cheapest fuel stations?
   - Discover quickly which sites are open 24 hours a day?

### General

1. The business executives have also asked for a consistent theme can be applied to the report and other reports in the future.
2. The business executives is also interested in tracking historical price changes. Can you produce a strategy for this?

### Report Considerations

While developing the report, keep the following in mind
   - A connection that allows new Fuel Prices to be refreshed each day.
   - Good use of modelling. 
   - Use of efficient DAX.
   - At least two different types of visuals and extra elements(like text boxes, shapes etc.)
   - A clean user friendly report that’s easy to read, visually appealing and answers the questions.


## Completion

When the solution is above is complete, save the PowerBI file and any supporting templates and share with the Consultant/ Talent Acquisition Specialist who contacted you from Telstra Purple.


# Data Engineer

## Prerequisites

Please build the platform on the cloud environment as nominated by the Consultant/ Talent Acquisition Specialist who has invited you to complete this test.

To complete this test, you will need:

1. Access to a Cloud service provider environment.
   - For an Azure Subscription, you can create a [30-day free trial](https://azure.microsoft.com/en-au/free/) if you don't have an Azure subscription.
   - For an AWS Account, you can utilise [AWS free tier](https://aws.amazon.com/free/) if you don't have an AWS Account.
   - For an GCP Environment, you can utilise [GCP free tier](https://cloud.google.com/free) if you don't have an GCP Account.
2. Your laptop with your tools/ IDE that you like to work with.
3. A public GitHub repo, or a Google/OneDrive where you can share your workings.

## Scenario

We are assisting a customer in building out a solution which ingests the latest fuel prices from the Fuel Watch RSS feed. This data is not in a great structure, and we would like to ingest this data into a data lake, perform some transformations and build out a data mart for use in Power BI, the customers visualisation tool of choice.

1. Our customer would like to take an infrastructure-as-code approach to the deployment of the new resources however, the delivery of a working prototype is the highest priority.
2. All resources should be deployed in Australia.

## Instructions

Follow these instructions and deploy using whatever means you feel necessary.

### Building the Platform

First, create your resources in your Cloud service provider environment.

1. Create all resources with the following tags.
   - Department - Finance
   - Environment - Development
2. Create a new storage resource with the hierarchical namespace enabled.
   - Add a container/bucket called **datalakestore**.
3. Create the following ETL resource applicable to your Cloud service provider environment.
   - Azure - Azure Data Factory
   - AWS - Glue Data Pipeline
   - GCP - Cloud Data Fusion
4. Create the following encryption resource to your Cloud service provider environment.
   - Azure - Azure Key Vault
   - AWS - Key Management Service
   - GCP - Secret Manager
5. Create a new SQL PaaS database called **DataMart**.
   - The database size should be 20GB.

### Ingestion

The source data you will be using is the [FuelWatch RSS feed](http://www.fuelwatch.wa.gov.au/fuelwatch/fuelWatchRSS) from the Western Australian Government.

1. Copy the storage resource key/secrets for the storage and save it in the deployed encryption resource.
   - Use the name **dataLakeStorageAccountKey** or similar as the secret name.
2. Ingest the RSS feed into the into the **datalakestore** in the storage account deployed above.
   - **_Hint:_** You can use the HTTP linked service and an XML file type as the dataset type.
3. Import the item array with all related fields into a parquet file in the storage account with the path below.
   - datalakestore/Raw/FuelWatch/<Current date as format yyyy-mm-dd>.
   - The file name should be **feed.parquet**.
4. Once the file has been imported into the data lake, add another activity to the same pipeline which reads the parquet file from the data lake and writes it to the DataMart SQL database.
   - Use a temporary table in the tempstage schema called **FuelPrices**. This activity must run after the activity to import the source data.
   - The connection to the SQL PaaS database should ideally make use of the identity from the ETL pipeline resource or the secrets from the encryption resource.

### Modelling

Once the temporary data has been loaded into the data mart, transform the data into fact and dimension tables for our user-consumed data model. All objects should be created in a new schema named **dw**.

1. Create three (3) new dimension tables - **Brand**, **Site** and **SiteFeatures**. They should have the respective attributes below.
   - BrandID (Identity, clustered primary key), BrandName
   - SiteID (Identity, clustered primary key), TradingName, Location, Address, Phone, Latitude, Longitude. Add a computed, persisted column named FullAddress which combines Address and Location.
   - SiteFeatureID (Identity, clustered primary key), SiteID (From the Site table) and the various site features from the delimited source column site-features.
2. Create a single fact table called **FuelPrice**. It should have the columns below:
   - FuelPriceID (Identity), BrandID (From the Branch table), SiteID (From the Site table), DateID (Numeric and stored as yyyymmdd), Price, DateCreated (Default to current system time) and DateModified (nullable, no default).
3. Add a primary key across the SiteID, BrandID and DateID columns and a clustered index on the DateID column.
   - The naming convention for the index should be `IDX_<Table Name>_<Column Name>`.
4. Create appropriate artefacts, scripts or pipelines to populate the tables above.
   - Keep these artefacts handy for the technical interview.

## Completion

When the solution above is complete, save any artefacts created and share them with the Consultant/Talent Acquisition Specialist who contacted you from Telstra Purple. If also possible, please keep your Cloud service provider environment running until the in-person technical interview has been conducted or as otherwise advised.
