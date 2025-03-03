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

> Details finden Sie unter [SAP Help (CDS Simple Types)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_types.htm)

### Enumerated Types
Definieren Sie einen enumerierten Typ mit Konstanten. Sie können den Typ und die Konstanten in CDS Objekten verwenden.

__Beispiel__

Definition

```js
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

> Details finden Sie unter [SAP Help (CDS Enum Types)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enumeration_types.htm)

## Function Definitions
Aktuell bietet SAP nur die Definition einer _Scalar Function_ an. Dabei gibt es zwei verschiedene Arten von Funktionen.
* Analytical scalar function
  * Diese Art der Funktionen ist aktuell nur SAP intern definierbar. Sie können die von SAP ausgelieferten Funktionen aber nutzen.
* SQL-based scalar function
  * Sie können eigene Funktionen dieser Art definieren und implementieren. Die Verwendung ist wie bei den eingebauten SQL Funktionen (wie z.B. CONCAT()). Eine Scalar Function kann mehrere Parameter haben und hat immer einen einzigen Rückgabewert.
  * Sie benötigen drei Entwicklungsobjekte für eine Scalar Function:
    * Eine Scalar Function Definition (CDS Objekt)
    * Eine Scalar Function Implementation Reference, als Verknüpfung zwischen der Definition und der Implementierung
    * Eine [AMDP Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_methods.htm), welche die Implementierung der Scalar Function darstellt

> Details finden Sie unter [SAP Help (CDS Scalar Functions)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_scalar_functions.htm)

## Data Definitions

### DDIC-based views
> DDIC basierte Views sind ab Release 7.55 ersetzt worden durch View Entities, welche nicht mehr von DDIC Objekten abhängig sind

Ein DDIC basierter View kann für DDIC Datenbanktabellen, DDIC Views und andere CDS Views erstellt werden. Bei der Definition müssen Sie über eine Annotation ein SQL-View-Name angeben, der im ABAP Dictionary als DDIC View erzeugt wird. Bei der Aktivierung des CDS Views werden ein CDS Entity und der annotierte DDIC View erzeugt bzw. aktualisiert. Per SQL greifen Sie auf die Daten der referenzierten Objekte zu.

__Beispiel__

```abap
@AbapCatalog.sqlViewName: 'CDS_DB_VIEW'
define view ddic_based_view as select from ...
{
  field,
  ...
}
where
  field = 'ABC'
```

> Details finden Sie unter [SAP Help (CDS DDIC-Based Views)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm)

### View Entities
Mit einem CDS View Entity können Sie auf Felder einer Datenquelle (Datenbanktabellen, andere CDS Entitäten) zugreifen. Die View Entities dienen als Basis für die [ABAP Data Models](https://help.sap.com/docs/abap-cloud/abap-data-models/abap-data-models) und werden vom [ABAP RESTful Application Programming Model](/abap/restful_abap) verwendet. Sie sind also ein wichtiger Bestandteil für eine moderne ABAP Entwicklung.

__Beispiel__

```abap
view entity view_entity as select from ...
{
  field,
  ...
}
where
  field = 'ABC'
```

> Details finden Sie unter [SAP Help (CDS View Entities)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abencds_v2_views.htm)

### Projection Views
Ein Projection View basiert auf einem anderen CDS View Entity und wird für service-spezifische Anwendungsfälle genutzt. Dazu zählen:
* Transaktionale Abfragen (relevant für [ABAP RESTful Application Programming Model](/abap/restful_abap))
* Transaktionales Interface (relevant für [ABAP RESTful Application Programming Model](/abap/restful_abap))
* Analytical Abfragen

> Details finden Sie unter [SAP Help (CDS Projection Views)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm)

### Table Functions
Eine Table Function besteht aus zwei Teilen. Einem CDS Entity, welches z.B. bei den CDS View Entities oder Projection Views verwendet werden kann, und einer [AMDP Function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abenamdp_function_methods.htm), welche die Implementierung der Funktion darstellt. Das Ergebnis einer Table Function sind Datensätze. Eine AMDP Function ist nur in einer Umgebung nutzbar, deren Datenbanksystem AMDP unterstützt (z.B. SAP HANA). Mit der AMDP Function können Sie plattform-spezifische SQL-Befehle anwenden. Der Vorteil liegt darin, dass Sie spezielle Abfragen durchführen auf die Datenbank und die Ergebnisse als Datenquelle für andere CDS Entities bereitstellen können.

> Details finden Sie unter [SAP Help (CDS Table Functions)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abencds_table_functions.htm)

### Hierarchies
Mit dieser Art von CDS-View können Sie hierarchische Daten bereitstellen. Als Grundlage muss ein CDS View Entity angegeben werden, welches eine Association auf sich selbst besitzt. Diese Association beschreibt die Beziehung zum Eltern-Knoten. In der Feldliste können Sie Felder der CDS View Entity angeben und spezielle Hierarchie-Attribute, z.B. das Level des Eintrags in der Hierarchie.

> Details finden Sie unter [SAP Help (CDS Hierarchies)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abencds_f1_define_hierarchy.htm)

### Custom Entities
CDS Custom Entities gehören zu den Non-SQL-Entitäten. Sie können sie nutzen, um auf Daten zuzugreifen, auf die nicht per SQL zugegriffen werden kann. Zum Beispiel Daten in einer Datei, einem BLOB oder von einem Web-Service. Für den tatsächlichen Zugriff müssen Sie eine ABAP Klasse erstellen, welche ein bestimmtes Interface implementiert. In der Definition des CDS Custom Entity müssen Sie die Klasse per Annotation angeben. Außerdem definieren Sie dort mögliche Eingabeparameter und die resultierende Feldliste.

Die Nutzung der CDS Custom Entities ist aber eingeschränkt. Sie können sie nicht im Zusammenhang mit SELECTs verwenden, d.h. weder in einem anderen CDS View noch per ABAP-SQL. Sie können allerdings Associations darauf definieren und diese in der Feldliste anbieten. Diese Associations können dann von der RAP Query Engine verarbeitet und eine Abfrage ausgeführt werden, z.B. im Zusammenhang mit einem OData-Service.

> Details finden Sie unter [SAP Help (CDS Custom Entities)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abencds_custom_entities.htm)

### Abstract Entities
CDS Abstract Entities gehören zu den Non-SQL-Entitäten. Sie können sie als komplexe Datenstrukturen für RAP Actions, RAP Functions und RAP Business Events nutzen. In anderen CDS Views ist es nur möglich Associations auf diese Entities zu definieren. Ein Zugriff per SQL oder auf Inhalte ist aber nicht möglich.

> Details finden Sie unter [SAP Help (CDS Abstract Entities)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abencds_f1_define_abstract_entity.htm)

## tuning objects
Aktuell bietet SAP nur einen Konfigurationstyp an: Define View Entity Buffer. Damit kann eine Pufferung der Daten definiert werden (keine Pufferung, Einzelsatz, Bereiche, Vollständig). Diese Einstellung kann sich auf die Performance auswirken. Details zur Performance im Zusammenhang mit CDS finden Sie im Kapitel [Performance](/core-data-services/performance).

## Access Control
Über die Access Controls können Sie durch Angabe von Rollen, Regeln und Bedingungen definieren, welche Nutzer bzw. welcher Nutzerkreis Zugriff auf bestimmte Daten erhält. Details finden Sie im Kapitel [Berechtigungen](/core-data-services/authorizations).