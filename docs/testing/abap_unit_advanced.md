---
layout: page
title: ABAP Unit - erweiterte Techniken
permalink: /testing/abap_unit_advanced/
parent: Softwaretest mit ABAP Unit
nav_order: 3
---

{: .no_toc}
# ABAP Unit: erweiterte Techniken

1. TOC
{:toc}

## Erweiterte Testtechniken mit ABAP Unit  

In diesem Abschnitt finden Sie Erläuterungen und Hinweise zu erweiterten Testtechniken und Frameworks, die im Rahmen von ABAP Unit zur Verfügung gestellt werden. Jede der hier beschriebenen Techniken haben spezifische Einsatzzwecke und bieten Vor- und Nachteile. Bevor diese Techniken eingesetzt werden, müssen die Grundlagen von Unit Tests gut beherrscht werden und der Einsatz der erweiterten Techniken gut gegenüber Standard Unit Test Techniken abgewogen werden.

### Test-Double-Framework für ABAP Datenbankzugriffe / CDS Views / AMDP

SAP stellt Ihnen verschiedenen Frameworks zur Seite um Abhängigkeiten von verschiedenen Datenbankartefakten zu lösen. Diese Frameworks basieren auf Techniken womit die echten Daten in den Tabellen durch vorkonfigurierte MOCK Daten ersetzt werden können.

Ziel ist es hierbei eine stabile wiederholbare Umgebung aufzubaue in der sich Test beliebig oft wiederholen lassen ohne das Belege neu erstellt werden müssen.

Eine Übersich der vorhandenen Möglichkeiten finden Sie bei der [SAP-Hilfe](https://help.sap.com/docs/abap-cloud/abap-development-tools-user-guide/managing-database-dependencies-with-ABAP-Unit).


Die Herausforderung liegt nun in der Identifizierung der Tabellen / Views und dem Befüllen der Mock-Datenbank. 
Planen Sie hierfür Zeit in der Entwicklung ein eine Infrastruktur zu schaffen, die es Ihnen für viele Tests ermöglicht von der Mock Datenbank für einen Geschäftsbereich zu profitieren.

### Test-Double-Framework für Funktionsbausteine

Analog zu anderen Mocking Frameworks ermöglich Ihnen das Test-Double-Framework für Funktionsbausteine die Aufrufe an konfigurierbare Doubles um zu leiten. 
Sie sind somit in der Lage für den unit tests zu bestimmen wie sich der Funktionsbaustein verhalten soll, ohne auf die korrtekten Parameterübrgaben angewiesen zu sein. Somit ist es z.B. einfach möglich die möglichen Feherfälle zu provozieren und den Bunsiness Code auf korrekrte behandlung derer zu prüfen.  

### Test-Seams

Die Technik der Test-Seams ist **keine** bevorzugte Technik für Unit Tests. Sie sollten nur Temporär eingesetzt werden oder
Test-Seams ersetzen nicht eine sauber gestaltete Softwarearchitektur, die Testbarkeit als Merkmal besitzt. Testseams können aber eingesetzt werden, wenn in bestehende Software oder Legacy Software Unit Tests integriert werden sollen und ein Mocken von Bestandteilen oder Funktionen erforderlich ist. Mittelfristig solle die Software dann modernisiert und die Testseams beseitigt werden.  
Siehe [Clean ABAP Test Seams](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#use-test-seams-as-temporary-workaround)

### SAP Komponenten wie BAPIs & Funktionsbausteine in Unit Test
Sollten sie in Ihren Komponenten oder Integrationstests darauf angewiesen sein, dass ein BAPI, ein Funktionsbaustein oder auch eine Klasse von SAP einen Schritt ausführt der Teil Ihres Tests sein soll, ist es meist nötig, wiederholbare und stabile Testdaten in den relevanten Tabellen zu haben. siehe [Mocking von Datenbanktabellen](Testdatenverwaltung in ECATT-Containern).

In allen anderen Fällen ist es ratsam die ??? hier hörts auf ?

### Mockdaten aus DB-Tabelle erstellen in ADT

tbd

### Testdatenverwaltung in ECATT-Containern

Zur Erstellung stabiler Testdaten können ECATT-Testdaten-Container verwendet werden. 

Zugriff auf die Ecatt Test Daten: 
 
 ```ABAP 
 data(lo_tdc_api) = cl_apl_ecatt_tdc_api=>get_instance( i_testdatacontainer         = get_tdc_name( )
                                                         i_testdatacontainer_version = get_tdc_version( )  ).
```

Diese Testdaten aus den ECATT-Containern können dann in die mock Datenbank eingefügt werden. 

 sql_environment = cl_osql_test_environment=>create( change_dependencies( tables_to_be_mocked ) ).

!Achtung!
      " For reference 2024 the insert from tdc was ~12 seconds / 5 times slower than the manual insert.
      data tdc_data_description type if_osql_test_environment=>tty_double_tdc_info.
      sql_environment->insert_from_tdc( tdc_data_description ).

Schneller: 
  sql_environment->insert_test_data 



Noch offen und ggf, hier erwähnen
Open Source projekte für Unit Testing
verschiedene DB Mockiung techniken - Vorteile nachteile FM Mocking etc.


