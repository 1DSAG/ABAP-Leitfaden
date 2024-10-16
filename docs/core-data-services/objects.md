---
layout: page
title: Core Data Services - Objekte
permalink: /core-data-services/objects
parent: Core Data Services
next_page_title: Core Data Services - Erweiterbarkeit
nav_order: 30
---

{: .no_toc}
# Core Data Services - Objekte

1. TOC
{:toc}

## Type Definitions

### Simple Types
Hiermit definieren Sie elementare Datentypen, welche Sie in CDS Objekten oder in ABAP verwenden können.

__Beispiel__

```abap
define type myDate : abap.dats
```

{% include note.html content="Details finden Sie unter [SAP Help (CDS Simple Types)](https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/abencds_simple_types.htm)" %}

### Enumerated Types
Definieren Sie einen enumerierten Typ mit Konstanten. Sie können den Typ und die Konstanten in CDS Objekten verwenden.

__Beispiel__

Definition

```abap
define type Weekdays : abap.int1 enum
{
    Monday = initial;
    Tuesday = 1;
    Wednesday = 2;
    Thursday = 3;
    Friday = 4;
    Saturday = 5;
    Sunday = 6;
}
```

Verwendung

```abap
define ... as select from ...
{
    ...
}
where
  weekday = Weekdays.#Friday
```

> Details finden Sie unter [SAP Help (CDS Enum Types)](https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/abencds_enumeration_types.htm)

## Function Definitions
Aktuell bietet SAP nur die Definition einer _Scalar Function_ an. Dabei gibt es zwei verschiedene Arten von Funktionen.
* Analytical scalar function
  * Diese Art der Funktionen ist aktuell nur SAP intern definierbar. Sie können die von SAP ausgelieferten Funktionen aber nutzen.
* SQL-based scalar function
  * Sie können eigene Funktionen dieser Art definieren und implementieren. Die Verwendung ist wie bei den eingebauten SQL Funktionen (wie z.B. CONCAT()). Eine Scalar Function kann mehrere Parameter haben und hat immer einen einzigen Rückgabewert.
  * Sie benötigen drei Entwicklungsobjekte für eine Scalar Function:
    * Eine Scalar Function Definition (CDS Objekt)
    * Eine Scalar Function Implementation Reference, als Verknüpfung zwischen der Definition und der Implementierung
    * Eine AMDP Function, welche die Implementierung der Scalar Function darstellt

> Details finden Sie unter [SAP Help (CDS Scalar Functions)](https://help.sap.com/doc/abapdocu_cp_index_htm/CLOUD/en-US/abencds_scalar_functions.htm)

## Data Definitions

### DDIC-based views

### View Entities

### Projection Views

### Table Functions

### Hierarchies

### Custom Entities

### Abstract Entities

## tuning objects
Aktuell bietet SAP nur einen Konfigurationstyp an: Define View Entity Buffer. Damit kann eine Pufferung der Daten definiert werden (keine Pufferung, Einzelsatz, Bereiche, Vollständig). Diese Einstellung kann sich auf die Performance auswirken. Details zur Performance im Zusammenhang mit CDS finden Sie im Kapitel [Performance](/core-data-services/performance).

## Access Control
Über die Access Controls können Sie durch Angabe von Rollen, Regeln und Bedingungen definieren, welche Nutzer bzw. welcher Nutzerkreis Zugriff auf bestimmte Daten erhält. Details finden Sie im Kapitel [Berechtigungen](/core-data-services/authorizations).