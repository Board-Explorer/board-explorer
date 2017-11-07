LSE pin #24 provides PWM / GPIO

In hardware schematics, this pin is referred to as **GPIO_PWM1**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #505

## Sample sysfs access
```bash
# Export the pin
echo "505" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio505/direction
cat /sys/class/gpio/gpio505/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio505/direction
echo "1" > /gpio/gpio505/value
```
