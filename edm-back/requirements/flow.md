# Code Flow

## Backend Flow

Message flow in the backend, an idea of ​​how the layers communicate, some of the SOLID standard was used.

::: mermaid
graph LR;
A[Main] --> B[Modules]
B[Modules] --> C[Presentation];
C[Presentation] --> D[Domain];
D[Domain] --> E[Data];
E[Data] --> F[Infra]
:::
