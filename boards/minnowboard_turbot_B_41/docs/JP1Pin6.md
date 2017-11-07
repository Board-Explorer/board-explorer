LSE pin #6 provides UART Transmit

In hardware schematics, this pin is referred to as **GPIO_UART1_TXD**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #481

## Sample sysfs access
```bash
# Export the pin
echo "481" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio481/direction
cat /sys/class/gpio/gpio481/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio481/direction
echo "1" > /gpio/gpio481/value
```
