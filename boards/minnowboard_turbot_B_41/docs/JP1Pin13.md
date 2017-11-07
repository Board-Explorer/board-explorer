# Connector LSE, pin #13

LSE pin #13 provides Clock / GPIO

In hardware schematics, this pin is referred to as **GPIO_I2C_SCL (I2C #5)**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #499

## Sample sysfs access
```bash
# Export the pin
echo "499" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio499/direction
cat /sys/class/gpio/gpio499/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio499/direction
echo "1" > /gpio/gpio499/value
```
