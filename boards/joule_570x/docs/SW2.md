The power button is connected to the PMIC_PWRBTN_N signal of the module. When the button
is pressed, the PMIC_PWRBTN_N signal is pulled to ground, driving the PMIC_PWRBTN_N signal
to a low state. When the button is released, the PMIC_PWRBTN_N signal is pulled high, to +VSYS
in the module.

**Note:** The low time durations of the PMIC_PWRBTN_N signal result in various actions on the module.
Refer to the [Intel® Joule™ Module Datasheet](https://software.intel.com/en-us/articles/intel-joule-module-datasheet)
for specific information and usage for the PMIC_PWRBTN_N signal and the resulting actions.

Source: [Intel® Joule™ Hardware Guide](http://www.intel.com/content/dam/support/us/en/documents/joule-products/intel-joule-dev-kit-hardware-guide.pdf)
