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

In diesem Abschnitt finden Sie Erläuterungen und Hinweise zu erweiterten Testtechniken und Frameworks, die im Rahmen von ABAP Unit zur Verfügung gestellt werden. Jede der hier beschriebenen Techniken hat spezifische Einsatzzwecke und bietet Vor- und Nachteile. Bevor diese Techniken eingesetzt werden, müssen die Grundlagen von Unit Tests gut beherrscht werden. Der Einsatz der erweiterten Techniken muss gut gegenüber Standard Unit Test Techniken abgewogen werden.

### Test-Double-Frameworks

Sie können Test-Double-Frameworks (TDF) verwenden, um Aufrufe von Methoden, Funktionsbausteinen oder Datenbankabfragen (SELECT) auf Ihre Bedürfnisse anzupassen. Generell funktionieren die TDFs so, dass Sie das Objekt definieren, deren Funktion Sie manipulieren möchten und dann festlegen, bei welchen Eingabeparametern welche Ergebnisse zu liefern sind. 

Wenn Sie ein Test-Double-Framework einsetzen müssen, spricht das bereits dafür, dass die Architektur nicht für Unit Tests optimiert wurde. Test-Double-Frameworks sollten erst dann eingesetzt werden, wenn es zu aufwändig oder zu risikoreich ist, die vorhandene Architektur zu ändern.

Ein Grund für die Vermeidung der TDFs ist die umständliche Verwendung. Sie benötigen ein umfangreiches Setup, das bei Änderung oder Erweiterung der Unit Tests ebenfalls angepasst werden muss. 

#### Test-Double-Framework für ABAP Datenbankzugriffe/ CDS Views/ AMDP

SAP stellt Ihnen verschiedenen Frameworks zur Seite um Abhängigkeiten von verschiedenen Datenbankartefakten zu lösen. Diese Frameworks basieren auf Techniken womit die echten Daten in den Tabellen durch vorkonfigurierte MOCK Daten ersetzt werden können.

Ziel ist es hierbei eine stabile wiederholbare Umgebung aufzubauen in der sich Tests beliebig oft wiederholen lassen ohne dass Belege neu erstellt werden müssen.

Eine Übersicht der vorhandenen Möglichkeiten finden Sie in der [SAP-Hilfe](https://help.sap.com/docs/abap-cloud/abap-development-tools-user-guide/managing-database-dependencies-with-ABAP-Unit).


Die Herausforderung liegt in der Identifizierung der Tabellen/ Views und dem Befüllen der Mock-Datenbank. 
Planen Sie hierfür Zeit in der Entwicklung ein. Schaffen Sie eine Infrastruktur, die es Ihnen für viele Tests ermöglicht auf die Mock Datenbank zuzugreifen. Auf diese Weise profitieren auch andere Geschäftsbereiche von den Daten.

#### Test-Double-Framework für Funktionsbausteine

Analog zu anderen Mocking Frameworks ermöglich Ihnen das Test-Double-Framework für Funktionsbausteine die Aufrufe an konfigurierbare Doubles umzuleiten (Klasse CL_FUNCTION_TEST_ENVIRONMENT). 
Sie sind somit in der Lage für den Unit Test zu bestimmen, wie sich der Funktionsbaustein verhalten soll. Sie sind also nicht auf die Parameter angewiesen, die der Funktionsbaustein ermitteln würde. Somit ist es z.B. einfach möglich die möglichen Feherfälle zu provozieren und den Business Code auf korrekte Behandlung derer zu prüfen.  


#### Test-Double-Framewortk für Klassen

Für Klassen stellt SAP ebenfalls ein Test-Double-Framework (Klasse CL_ABAP_TESTDOUBLE) zur Verfügung. Methodenaufrufe von Klassen, die nicht durch anderen Techniken ersetzt werden können, können Sie mit dem Test-Double-Framework steuern. Genau wie bei Funktionsbausteinen können Sie vorgeben, welche Ergebnisse bei welchen Eingabeparametern zurückgeliefert werden sollen. 

### Test-Seams

Ein Test-Seam ist ein Code-Fragment, dass bei der Ausführung von Unit Tests anstelle eines produktiven Codes ausgeführt wird. Die Verwendung von Test-Seams bedingt - im Gegensatz zu Test-Double-Frameworks - die Änderung von produktivem Code. Der im Unit Test zu ersetzende Code wird im produktiven Code von den Schlüsselwörtern TEST-SEAM und END-TEST-SEAM eingeschlossen. Während der Ausführung der Unit Tests können Sie mit dem Block TEST-INJECTION und END-TEST-INJECTION definieren, was dort anstelle des produktiven Codes passieren soll. 

Test-Seams eignen sich zum Beispiel, um Benutzerabfragen oder Aufrufe in Remote-Systemen zu umgehen. 

Die Technik der Test-Seams ist **keine** bevorzugte Technik für Unit Tests. Sie sollte nur Temporär eingesetzt werden.
Test-Seams ersetzen nicht eine sauber gestaltete Softwarearchitektur, die Testbarkeit als Merkmal besitzt. Testseams können gut eingesetzt werden, wenn in bestehende Software oder Legacy Software Unit Tests integriert werden sollen und ein Mocken von Bestandteilen oder Funktionen erforderlich ist. Die Änderung ist minimal und kann deswegen relativ risikolos eingesetzt werden. Mittelfristig sollte die Software jedoch modernisiert und Testseams beseitigt werden.  
Siehe [Clean ABAP Test Seams](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md#use-test-seams-as-temporary-workaround)

### SAP Komponenten wie BAPIs & Funktionsbausteine in Unit Test

Sollten Sie in Ihren Komponenten- oder Integrationstests darauf angewiesen sein, dass ein Funktionsbaustein oder eine Klasse von SAP einen Schritt ausführt, der Teil Ihres Tests sein soll, ist es meist nötig, wiederholbare und stabile Testdaten in den relevanten Tabellen zu haben. siehe [Mocking von Datenbanktabellen](Testdatenverwaltung in ECATT-Containern). 



### Open Source Frameworks für Unit Testing

=> kurze Nennung von ein paar Frameworks und Einsatzzwecke

### VALUE-Anweisung für Mockdaten automatisch generieren

tbd 

Erzeugen von VALUE-Anweisungen aus aktuellen Daten während des Debuggens

-> ADT: Standard
-> SAPGUI: [Debugger Data View Extension]https://github.com/objective-partner/abap_debugger_data_view_extension

Erzeugen in ADT aus der Data-Preview für ausgewählte Zeilen und Spalten
https://community.sap.com/t5/application-development-and-automation-blog-posts/abap-unit-tests-generate-a-value-statement-for-the-contents-of-an-internal/ba-p/13543137


### Mockdaten aus DB-Tabelle erstellen in ADT

tbd ???

### Testdatenverwaltung in ECATT-Containern

Die Erzeugung von und Verwaltung von vielen verschiedenen Testdaten zu vielen verschiedenen Objekten ist umständlich und aufwändig. Das Tool ECATT (Extended Computer Aided Test Tool, Transaktion SECATT) bietet Ihnen komfortablere Möglichkeiten zur Verwaltung dieser Daten. In den ECATT-Containern können Daten strukturiert verwaltet werden. Sie können auf diese Daten manuell zugreifen oder auch per Programm. 
Unter Verwendung der ECATT-Container können Sie Testfälle manuell pflegen und einsehen. Wenn ein neuer Testfall hinzukommt, reicht es also eventuell, weitere Werte in die entsprechenden Container einzufügen.

tbd: Achtung: bei Systemkopie sind die Daten verloren! Daten Sichern!

#### Manuelle Verwaltung

Mit Transaktion SECATT können Sie die ECATT-Container definieren, einsehen und ändern.

#### Programmatischer Zugriff 

Zur Erstellung stabiler Testdaten können ECATT-Testdaten-Container verwendet werden. 

Zugriff auf die Ecatt Test Daten: 
 
 ```ABAP 
 DATA(lo_tdc_api) = cl_apl_ecatt_tdc_api=>get_instance( 
   i_testdatacontainer         = get_tdc_name( )
   i_testdatacontainer_version = get_tdc_version( ) ).
```

Diese Testdaten aus den ECATT-Containern können dann in die mock Datenbank eingefügt werden. 

```ABAP
sql_environment = cl_osql_test_environment=>create( change_dependencies( tables_to_be_mocked ) ).```

!Achtung!
      " For reference 2024 the insert from tdc was ~12 seconds / 5 times slower than the manual insert.
      data tdc_data_description type if_osql_test_environment=>tty_double_tdc_info.
      sql_environment->insert_from_tdc( tdc_data_description ).

Schneller: 
  sql_environment->insert_test_data 



Noch offen und ggf, hier erwähnen
Open Source projekte für Unit Testing
verschiedene DB Mockiung techniken - Vorteile nachteile FM Mocking etc.


