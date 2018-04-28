LSE pin #22 provides PWM / GPIO

In hardware schematics, this pin is referred to as **GPIO_PWM0**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #504

## Sample sysfs access
```bash
# Export the pin
echo "504" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio504/direction
cat /sys/class/gpio/gpio504/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio504/direction
echo "1" > /gpio/gpio504/value
```
