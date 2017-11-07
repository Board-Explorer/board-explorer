# Connector LSE, pin #18

LSE pin #18 provides GPIO_I2S_DO

In hardware schematics, this pin is referred to as **Data Out / GPIO**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #475

## Sample sysfs access
```bash
# Export the pin
echo "475" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio475/direction
cat /sys/class/gpio/gpio475/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio475/direction
echo "1" > /gpio/gpio475/value
```
