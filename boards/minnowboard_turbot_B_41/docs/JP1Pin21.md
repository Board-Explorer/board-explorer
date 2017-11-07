# Connector LSE, pin #21

LSE pin #21 provides GPIO / Wakeup

In hardware schematics, this pin is referred to as **GPIO_S5_0**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #338

## Sample sysfs access
```bash
# Export the pin
echo "338" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio338/direction
cat /sys/class/gpio/gpio338/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio338/direction
echo "1" > /gpio/gpio338/value
```
