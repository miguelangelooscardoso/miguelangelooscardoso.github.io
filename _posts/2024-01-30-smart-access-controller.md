---
title: "Smart Access Controller: Secure Environment Monitoring with Arduino"
mathjax: true
layout: post
categories:
 - arduino
 - embedded systems
 - iot
excerpt: <p align="justify">The Smart Access Controller is an integrated Arduino-based system that combines RFID authentication, keypad input, and environmental monitoring to create a versatile access control and automation solution. Using an MFRC522 RFID reader, 4x4 keypad, and DHT11 sensor, the system grants tiered access to users and administrators while monitoring and adjusting temperature, humidity, and luminosity conditions in real-time. The system features servo motors for physical actuation and relay control for lighting, making it ideal for smart home, laboratory, or restricted access environments.</p><center><img src="/assets/smart_access.png" width="75%" height="75%"></center>
---

The Smart Access Controller implements a multi-layered security system beginning with RFID authentication. Authorized users are identified through their RFID card UID (66 8B F8 04 for users, FA 4D 6C 3 for administrators), after which they must enter a secure PIN code (# for users, 1# for administrators) via the keypad interface. Three failed authentication attempts trigger a security lockdown with visual indication via RGB LED.

Once authenticated, users can navigate through an intuitive LCD menu system to monitor environmental conditions:
- Real-time temperature readings (ºC)
- Humidity levels (%)
- Luminosity values (LDR analog readings)

Administrators gain additional privileges to set threshold values for each environmental parameter. The system automatically activates response mechanisms when thresholds are exceeded:
- Servo-controlled cooling system when temperature exceeds setpoint
- Humidity control via secondary servo mechanism
- Relay-controlled lighting when luminosity drops below configured levels

The system architecture employs an Arduino Mega board with multiple integrated components:
- **MFRC522 RFID module** for secure authentication
- **4×4 matrix keypad** for PIN entry and menu navigation
- **16×2 LCD display** for user interface
- **DHT11 sensor** for temperature and humidity monitoring
- **LDR sensor** for light intensity measurement
- **Servo motors** for physical actuation
- **Relay module** for electrical control
- **RGB LED** for system status indication

The code implements state management for different operational modes (authentication, monitoring, configuration) and features debounced button inputs for reliable menu navigation. Environmental thresholds are stored in an array structure allowing for easy adjustment and expansion.

This project demonstrates how to create a comprehensive embedded system that combines security, environmental monitoring, and automation in a single package. The modular design allows for additional sensors and actuators to be integrated, making it an excellent foundation for more complex home or industrial automation systems.

{:.mycenter}

![Smart Access Controller Diagram](/assets/smart_access.png){: width="85%" }

<style>
.mycenter {
    text-align:center;
}  
</style>

[Project Repository][GitHubLink]

[GitHubLink]: https://github.com/yourusername/SmartAccessController
