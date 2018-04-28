LSE pin #23 provides GPIO / Wakeup

In hardware schematics, this pin is referred to as **GPIO_S5_1**.

When configured as a GPIO pin, this pin is available in the Linux 
kernel with GPIO pin #339

## Sample sysfs access
```bash
# Export the pin
echo "339" > /sys/class/gpio/export
# GET the value
echo "in" > /sys/class/gpio/gpio339/direction
cat /sys/class/gpio/gpio339/value
# SET the value to 1
echo "out" > /sys/class/gpio/gpio339/direction
echo "1" > /gpio/gpio339/value
```
