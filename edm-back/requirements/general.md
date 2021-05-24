# Requiriments

## Table

- Category:

  - Id: (generated automatically, integer and incremental)
  - Name: Must not be empty. All categories must have a name. Max size 128 chars

- Device:
  - Id: (generated automatically. Integer and incremental)
  - Category: A dropdown selection you can choose from all categories available.
  - Color: Text field, with validation (letters only, max size 16)
  - partNumber: positive integer field, with validation.

## Development

- Login and authentication is not necessary.
- Web app must have a menu with two options: Category Management, Device
  Management.
- You must implement Create, Read and Delete. (Update is not necessary due to time
  constraints for this implementation)
- All fields are mandatory.
- You are free to use any layout but the APP must list all devices and categories, and also
  have screens/components that enable the user to create new categories and devices, or
  delete them.

  ### Info

  - Front End must be implemented with Angular 8 or above.
  - Backend must be implemented in NodeJS (version 10 or above).
  - [Automated tests on the backend is not mandatory but is a PLUS.]
  - Devices and Categories MUST be persisted on a MySQL database.
  - You must provide the script (SQL or any database versioning/migration script) that can
    create the database from scratch.
  - Use GIT, commit every progress you made, and share your cond on a github public
    repository.

## Deploy

- Cloud Microsoft Azure
