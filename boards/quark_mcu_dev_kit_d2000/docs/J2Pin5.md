
{{readable}} supports the following functions:

|                  | Mode 0       | Mode 1       | Mode 2       |
|:-----------------|:-------------|:-------------|:-------------|
| QMSI Function Id | QM_PMUX_FN_0 | QM_PMUX_FN_1 | QM_PMUX_FN_2 |
| Function         | {{#function}}{{.}} | {{/function}}

When referencing this pin in QMSI, it is available as **{{name.2}}**.

For example:

```c
/* Configure {{readable}} to {{function.0}} */
qm_pmux_select({{name.2}}, QM_PMUX_FN_0);
```
