LSE pin #12 provides RTS / GPIO

In hardware schematics, this pin is referred to as **GPIO_UART1_RTS**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #482

## Sample sysfs access
```bash
# Export the pin
echo "482" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio482/direction
cat /sys/class/gpio/gpio482/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio482/direction
echo "1" > /gpio/gpio482/value
```
