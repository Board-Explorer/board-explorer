LSE pin #11 provides SPI Clock

In hardware schematics, this pin is referred to as **GPIO_SPI_CLK**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #479

## Sample sysfs access
```bash
# Export the pin
echo "479" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio479/direction
cat /sys/class/gpio/gpio479/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio479/direction
echo "1" > /gpio/gpio479/value
```
