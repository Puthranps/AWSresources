[ :ref:`aws <cli:aws>` ]

.. _cli:aws iot-data:


********
iot-data
********



===========
Description
===========

 

AWS IoT-Data enables secure, bi-directional communication between Internet-connected things (such as sensors, actuators, embedded devices, or smart appliances) and the AWS cloud. It implements a broker for applications and things to publish messages over HTTP (Publish) and retrieve, update, and delete thing shadows. A thing shadow is a persistent representation of your things and their state in the AWS cloud.



.. note::

    The default endpoint data.iot.[region].amazonaws.com is intended for testing purposes only. For production code it is strongly recommended to use the custom endpoint for your account  (retrievable via the iot describe-endpoint command) to ensure best availability and reachability of the service.




==================
Available Commands
==================


.. toctree::
  :maxdepth: 1
  :titlesonly:

  delete-thing-shadow
  get-thing-shadow
  publish
  update-thing-shadow
