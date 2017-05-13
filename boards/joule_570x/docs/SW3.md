The DNX boot button is connected to the UART_2_TXD signal of the module. When the button is
pressed, the UART_2_TXD signal is pulled high through a 100Ω resistor to +VDD1 (1.8 volts).
When the button is released, the UART_2_TXD signal is left floating, but relies on a 20kΩ internal
pull-down within the module SoC to insure a low-level signal.

The DNX boot button is used to initiate a BIOS programming cycle when pressed and held during
a power-up cycle. At the rising edge of the module’s PMIC_PWRGOOD signal (for example during
a power-up cycle), the UART_2_TXD is sampled by the module SoC. If the UART_2_TXD is
sampled as a high signal, then the SoC initiates a BIOS update from the USB Type-C port.
Similarly, if the UART_2_TXD signal is sampled as a low signal (for example DNX boot button
released) on the rising edge of PMIC_PWRGOOD, then a BIOS update is not initiated and the boot
process continues normally.

Source: [Intel® Joule™ Hardware Guide](http://www.intel.com/content/dam/support/us/en/documents/joule-products/intel-joule-dev-kit-hardware-guide.pdf)
