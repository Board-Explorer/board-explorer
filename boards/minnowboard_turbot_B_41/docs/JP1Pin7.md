# Connector LSE, pin #7

LSE pin #7 provides Master In / Slave Out

In hardware schematics, this pin is referred to as **GPIO_SPI_MISO**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #477

## Sample sysfs access
```bash
# Export the pin
echo "477" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio477/direction
cat /sys/class/gpio/gpio477/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio477/direction
echo "1" > /gpio/gpio477/value
```

