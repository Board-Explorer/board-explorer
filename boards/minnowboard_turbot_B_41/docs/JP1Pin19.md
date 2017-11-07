LSE pin #19 provides UART Receive / GPIO

In hardware schematics, this pin is referred to as **GPIO_UART2_RXD**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #484

## Sample sysfs access
```bash
# Export the pin
echo "484" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio484/direction
cat /sys/class/gpio/gpio484/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio484/direction
echo "1" > /gpio/gpio484/value
```
