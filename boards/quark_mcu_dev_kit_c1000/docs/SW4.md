This switch is used to determine whether the signals to the Arduino header
are routed from the Intel® Quark™ processor core or the Sensor Subsystem.

| Switch | High | Low | Arduino Signal  |
|--------|------|-----|-----------------|
| SW4-1  | SPI Quark™ SE Core | SPI Sensor Subsystem | ARD_D10, ARD_D11, ARD_D12, ARD_D13 |
| SW4-2  | GPIO Quark™ SE Core | GPIO Sensor Subsystem | ARD_D2, ARD_D4, ARD_D7, ARD_D8 |
| SW4-3  | GPIO Quark™ SE Core | GPIO Sensor Subsystem | ARD_D3, ARD_D5, ARD_D6, ARD_D9 |
| SW4-4  | I2C Quark™ SE Core | I2C Sensor Subsystem | ARDUINO_A4, ARDUINO_A5 |
