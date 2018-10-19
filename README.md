# AWSresources
Collection of useful AWS-related things

## Instances in instances/options.json

- **cores**: Number of vCores
- **ecu**: EC2 Compute Unit
- **mem**: RAM memory amount
- **munit**: RAM memory unit
- **cost**: Hourly rate
- **stype**: HDD | SSD | EBS
- **snum**: Gigs of storage

Find a list of all ec2 instances in json

Comparison of ec2 instances

## AWS JSON Skeleton for command in services/*

Find complete list of AWS CLI JSON skeletons for every Amazon Web Service command subcommand

Structure:

|-services (folder)
|
¯¯|-command (folder, e.g.: ec2)
  |
  ¯¯|-subcommand1 (file, .json format)
    |
    |-prefix (folder)
    |
    ¯¯|-subcommand.json (file)

  |--skel.sh (very hacky bash script used)
