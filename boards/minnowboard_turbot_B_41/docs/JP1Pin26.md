LSE pin #26 provides I2S MCLK / GPIO

In hardware schematics, this pin is referred to as **I2SMCLK_GPIO**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #509

## Sample sysfs access
```bash
# Export the pin
echo "509" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio509/direction
cat /sys/class/gpio/gpio509/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio509/direction
echo "1" > /gpio/gpio509/value
```
