LSE pin #15 provides Data / GPIO

In hardware schematics, this pin is referred to as **GPIO_I2C_SDA (I2C #5)**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #498

## Sample sysfs access
```bash
# Export the pin
echo "498" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio498/direction
cat /sys/class/gpio/gpio498/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio498/direction
echo "1" > /gpio/gpio498/value
```
