# Connector LSE, pin #17

LSE pin #17 provides UART Transmit / GPIO

In hardware schematics, this pin is referred to as **GPIO_UART2_TXD**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #485

## Sample sysfs access
```bash
# Export the pin
echo "485" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio485/direction
cat /sys/class/gpio/gpio485/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio485/direction
echo "1" > /gpio/gpio485/value
```
