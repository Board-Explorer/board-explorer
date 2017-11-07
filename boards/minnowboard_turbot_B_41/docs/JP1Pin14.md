# Connector LSE, pin #14

LSE pin #14 provides Clock / GPIO

In hardware schematics, this pin is referred to as **GPIO_I2S_CLK**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #472

## Sample sysfs access
```bash
# Export the pin
echo "472" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio472/direction
cat /sys/class/gpio/gpio472/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio472/direction
echo "1" > /gpio/gpio472/value
```
