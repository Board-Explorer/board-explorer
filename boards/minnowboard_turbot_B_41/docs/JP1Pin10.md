LSE pin #10 provides CTS / GPIO

In hardware schematics, this pin is referred to as **GPIO_UART1_CTS**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #483

## Sample sysfs access
```bash
# Export the pin
echo "483" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio483/direction
cat /sys/class/gpio/gpio483/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio483/direction
echo "1" > /gpio/gpio483/value
```
