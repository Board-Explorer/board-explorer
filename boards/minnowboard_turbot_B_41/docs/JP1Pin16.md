# Connector LSE, pin #16

LSE pin #16 provides GPIO_I2S_FRM

In hardware schematics, this pin is referred to as **Frame / GPIO**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #473

## Sample sysfs access
```bash
# Export the pin
echo "473" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio473/direction
cat /sys/class/gpio/gpio473/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio473/direction
echo "1" > /gpio/gpio473/value
```
