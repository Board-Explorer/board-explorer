# Connector LSE, pin #20

LSE pin #20 provides Data In / GPIO

In hardware schematics, this pin is referred to as **GPIO_I2S_DI**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #474

## Sample sysfs access
```bash
# Export the pin
echo "474" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio474/direction
cat /sys/class/gpio/gpio474/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio474/direction
echo "1" > /gpio/gpio474/value
```
