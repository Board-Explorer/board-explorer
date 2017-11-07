LSE pin #8 provides UART Receive

In hardware schematics, this pin is referred to as **GPIO_UART1_RXD**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #480

## Sample sysfs access
```bash
# Export the pin
echo "480" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio480/direction
cat /sys/class/gpio/gpio480/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio480/direction
echo "1" > /gpio/gpio480/value
```
