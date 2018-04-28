LSE pin #9 provides Master Out / Slave In

In hardware schematics, this pin is referred to as **GPIO_SPI_MOSI**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #478

## Sample sysfs access
```bash
# Export the pin
echo "478" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio478/direction
cat /sys/class/gpio/gpio478/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio478/direction
echo "1" > /gpio/gpio478/value
```
