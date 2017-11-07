# Connector LSE, pin #5

LSE pin #5 provides SPI Chip Select 1

In hardware schematics, this pin is referred to as **GPIO_SPI_CS#**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #476

## Sample sysfs access
```bash
# Export the pin
echo "476" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio476/direction
cat /sys/class/gpio/gpio476/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio476/direction
echo "1" > /gpio/gpio476/value
```
