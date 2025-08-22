---
title: "Spacecraft Thermal Control System (STCS)"
mathjax: true
layout: post
categories:
 - github
 - website
 - embedded-systems
 - aerospace
excerpt: </p><left><img src="/assets/setpoints.png" width="33%" height="33%"></left><p align="justify">The Spacecraft Thermal Control System (STCS) is a comprehensive embedded platform that simulates thermal management of spacecraft components in orbital conditions. Developed using multiple STM32 microcontrollers, FreeRTOS, and MQTT protocols, the system implements real-time thermal simulation, PID control algorithms, and multi-interface visualization. This project demonstrates advanced embedded systems programming with direct applications in aerospace technology and real-time control systems.
---

## Project Overview

The Spacecraft Thermal Control System (STCS) represents a sophisticated embedded systems project designed to address the critical thermal management challenges faced by spacecraft in the harsh environment of space. The system ensures **mission longevity, crew safety, and technological reliability** through a distributed architecture that combines real-time simulation, precise control algorithms, and comprehensive visualization capabilities.

{:.mycenter}

![Setpoints Configuration](/assets/setpoints.png){: width="45%" }
![Temperature Graph](/assets/graph.png){: width="45%" }

<style>
.mycenter {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 20px 0;
}

.mycenter img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>


## System Architecture

The STCS implements a multi-device distributed architecture with three specialized processing units, each serving a distinct function:

### 1. Thermal Simulation Library (STM32F767ZI - NUCLEO Board)
- Simulates 4 thermistor-heater pairs with environmental cycles
- Implements entropy-based data generation for realistic conditions
- Manages thermal profiles including eclipse and sun exposure periods
- Communicates via UART with other system components

### 2. Thermal Control Function (STM32F746NG - DISCO Board)
- Implements PID-based control algorithms for temperature regulation
- Dynamically adjusts heater outputs based on thermistor feedback
- Supports configurable setpoints between -20°C and 20°C
- Provides real-time data acquisition at 1-5Hz frequency

### 3. Visualization User Interface (ESP32 DevKit V1)
- Implements MQTT protocol for real-time data streaming
- Provides both web-based (Node-RED) and embedded (TouchGFX) interfaces
- Enables remote monitoring and control of thermal parameters
- Supports data visualization with configurable time ranges (1-75 seconds)

## Mathematical Foundation

The system employs PID control algorithms for temperature regulation, represented by:

$$\scriptsize{u(t) = K_p e(t) + K_i \int_0^t e(\tau)d\tau + K_d \frac{de(t)}{dt}}$$

Where:
- $$u(t)$$ represents the control output (heater power level)
- $$e(t)$$ denotes the error term (difference between setpoint and actual temperature)
- $$K_p$$, $$K_i$$, and $$K_d$$ are the proportional, integral, and derivative gains respectively

The thermal simulation incorporates environmental factors through:

$$\scriptsize{T_{actual} = T_{base} + \Delta T_{solar} + \Delta T_{eclipse} + \epsilon_{entropy}}$$

Where entropy-based variations ($$\epsilon_{entropy}$$) simulate real-space environmental uncertainties.

## Implementation Details

### Communication Protocol
The system uses custom UART-based communication with structured data framing:

## Code Implementation

```cpp
// Thermal control task implementation
void controllerTask(void *pvParameters) {
    HAL_UART_Transmit(&huart6, (uint8_t*)thermistors,
                      sizeof(Thermistor) * NUM_THERMISTORS, HAL_MAX_DELAY);
    char msg[] = "T1=64,T2=64,T3=64,T4=64 H1=64,H2=64,H3=64,H4=64\n";
    HAL_UART_Transmit(&huart7, (uint8_t*)msg, strlen(msg), HAL_MAX_DELAY);
    vTaskDelay(pdMS_TO_TICKS(ctrl_delay));
}
```

---

## Real-time Data Processing

{:.mycenter}

![title](/assets/vui.png){: width="100%" }

<style>
.mycenter {
    text-align:center;

}  

</style>

Data acquisition frequencies are configurable with:

| Parameter                        | Range      |
|----------------------------------|------------|
| TCF_Data_Aquisition_Frequency    | 1-5Hz      |
| VUI_Data_Aquisition_Frequency    | 1-5Hz      |
| VUI_Plot_Time_Range              | 1-75 sec   |

The system supports two operational modes:

- **PID Mode:** Closed-loop control with continuous adjustment
- **Manual Mode:** Direct heater control for testing purposes

---

## Implementation Details

The project was developed using:

- STM32CubeIDE for microcontroller programming
- FreeRTOS for task scheduling and management
- TouchGFX for embedded GUI development
- Node-RED for web-based dashboard
- MQTT protocol for real-time data streaming

Configuration parameters are stored in flash memory:

```c
// Setpoint constraints
Setpoint_THERM-01 = -7
Setpoint_THERM-02 = -5
Setpoint_THERM-03 = 10
Setpoint_THERM-04 = -14
```

---

## Educational Context

This project was developed as part of the **C/C++ Embedded Systems Programming** curriculum at **Politécnico de Coimbra (Oct 2024 – Aug 2025)**, focusing on:

- Real-time operating systems implementation
- Multi-device communication protocols
- Control theory applications in embedded systems
- Space environment simulation techniques

