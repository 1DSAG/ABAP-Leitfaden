---
layout: page
title: Architektur und Design moderner ABAP Entwicklungen
permalink: /abap/architecture_and_design/
parent: Moderne ABAP Entwicklung
prev_page_link: /abap/
prev_page_title: Moderne ABAP Entwicklung
next_page_link: /abap/clean_and_modern_abap/
next_page_title: Sauberer und moderner ABAP Code
nav_order: 1
---

{: .no_toc}
# Architektur und Design moderner ABAP Entwicklung

1. TOC
{:toc}

## Architektur und Struktur als Fundament und Rahmen einer guten SAP Anwendung 

 Viele SAP ERP Systeme wurden über viele Jahre mit Eigenentwicklungen angereichert. Die Entwicklung begann zu Zeiten als es in ABAP das Paketkonzept in heutiger Ausprägung noch nicht gab. Vielen ABAP-Entwicklern ist das Konzept von Softwarepaketen, wie sie in anderen Programmiersprachen bestens bekannt sind, nicht vertraut . So finden sich in vielen ERP Systemen als Paketstruktur sehr große Pakete die z.B. nach dem Modul oder eines Entwicklungsteams orientiert sind.

Der Nutzen der Strukturierung der Software durch Pakete bei SAP Anwendungen ist im ABAP Umnfeld nicht umfänglich~ bekannt oder bewusst und wenn eine Entwicklung unter Zeitdruck erstellt werden muss, wird die Frage, wie die Anwendung strukturiert werden soll und somit wie die Pakete erstellt werden oft nicht gestellt.  
 Allerdings ist es bei der heutigen Anwendungskomplexität essentiell sich zuerst Gedanken zu machen welche Funktionen und Zuständigkeiten eine zu erstellende Anwendung haben soll, wie die Verantwortlichkeiten *geregelt* sind und wie sich das letztendlich im Anwendungsdesign widerspiegelt.  
 Daher ist die Frage nach dem Paket und der Strukturierung der Unterpakete der erste wichtige Schritt, die Basis für eine saubere und zukunftsfähige Anwendungsarchitektur zu legen. 

## SAP Paket Konzept
SAP hat in ABAP wie in anderen Programmiersprachen wie JAVA üblich, auch in ABAP ein Paketkonzept implementiert, mit dem es Möglich ist, die Software auf verschiedenen Ebenen zu strukturieren. Der Vorgänger der Pakete waren übrigens die Entwicklungsklassen. Mit der Einführung des Paketkonzepts ergeben sich allerdings deutlich erweiterte Möglichkeiten der Softwarestrukturierung, die zwar nicht direkt auf die Funktionalität an sich wirken, aber spätestens bei der Wartung, Pflege und Erweiterung der Eigenentwicklung deutliche Vorteile mit sich bringen. Da es seitens SAP eine ausführliche und gut verständliche Dokumentation des Paketkonzeptes gibt, werden wir hier nicht auf das Paketkonzept im Detail eingehen, sondern Empfehlungen geben wie bei Erstellung von Eigententwicklungen, im Weiteren "Software" genannt, vorgegangen werden kann, um Pakete in ABAP sinnvoll und nutzbringend einzusetzen. 
[LINK SAP Doku Pakete]

## Grundlagen und Begriffserklärungen zum Paketkonzepts
Ein **Paket** ist in erster Linie ein Mittel um Software zu strukturieren. Mit einem Paket werden Softwareartefakte zusammengefasst, die für einen bestimmten Zweck zuständig sind. Pakete können (und sollten auch) gekapselt sein. Das bedeutet, dass ein Objekt eines Paketes ein Objekt eines anderen Pakets nicht verwenden kann bzw. von einem Objekt eines anderen Pakets nicht verwendet werden kann.
Details hierzu erfolgen im weitern Abschnitt (technische bzw. gewünschte Verwendung).

Es gibt die sogenannten **Hauptpakete**, die zur Strukturierung der zu erstellenden Softwarekompnente dienen. Und es gibt **Unterpakete**, die einem Hauptpaket zugeordnet sind. Die Unterpakete dienen der internen Strukturierung der Artefakte des Hauptpaketes.  
In SAP gibt es dazu noch die **Strukturpakete**, die übergeordnet zu den Hauptpaketen sind und eine größere Organisation von Hauptpaketen hin zu Applikationen (-Komponenten?) ermöglicht.  
In Sinne der Komplexitätsreduzierung wird allerdings hier nicht weiter eingegangen, sondern ist in der SAP Dokumentation beschrieben. Strukturpakete einzusetzen, kann sinnvoll sein, wenn im Unternehmen das Paketkonzept umfänmglich mit Haupt- und Unterpaketen bereits angewendet wird.  
Mit der Strukturierung von Softwareobjekten mittels Pakete ergeben sich bereits Vorteile durch verbesserte Übersichtlichkeit und Ordnung bezüglich der erstellten Artefakte. Der Vorteil von Paketen ergibt sich aber erst durch die Funktionalität von **Paketschnittstellen**.  
Eine Paketschnittstelle definiert, welche Artefakte eines Paketes (Haupt- oder Unterpaket) nach außen sichtbar sind.

Als letzten hier zu erklärendem Begriff kommt die **Verwendungserklärung**, die in einem Paket gepflegt wird.  
Verwendet ein Paket A ein Artefakt aus einem Paket B, wird in der Verwendungserklärung des Paketes A, das Paket B aufgenommen. Somit ist auf Paketebene sofort ersichtlich, welche Abhängigkeiten das Paket A besitzt. Dazu ist die Verwendungserklärung auch im Verwendungsnachweis auswertbar. Somit ist es möglich herauszufinden, welche Pakete Abhängigkeiten zu dem Paket haben. 

## Anwendung des Paketkonzepts in der Praxis

### Paketdefinition 
Für die folgenden Ausführungen beschreiben wir die Aspekte des Paketkonzepts für die Erstellung einer größeren Eigententwicklung. Auf andere Fälle wird später eingegangen. 
Am Anfang der Umsetzung einer Eigenentwicklung muss klar definiert sein, welche Funktion die Software erfüllen soll und in welchen SAP Applikationsbereich die Software betrifft. Damit kann nun der Name der Eigenentwicklung als Komponente definiert werden. Dabei müssen Vorgaben der Entwicklungsrichtlinien im Unternehmen wie Namenskonventionen und Präfixe beachtet werden.  
Die Namensgebung spielt hier eine wichtige Rolle und sollte gut bedacht werden und unter Berücksichtigung anderer Komponenten erfolgen. So sollte im Namen ersichtlich sein, um welches SAP Objekt sich handelt (z.B. Belegtyp, Formulare ...) und welche Funktion die Komponente erfüllt. Da Eigentwicklungen meistens in Bezug zu SAP Funktionen stehen, sollte der Bezug auch über den Namensbezug erkennbar sein. Meistens muss dann noch der Name sinnvoll gekürzt werden, da durch Namensräume und Präfixe die Anzahl der Zeichen begrenzt ist.
*** [BEISPIEL NOCH EINTRAGEN !] ***
Damit steht der Name des Hauptpaketes, das nun in SAP erstellt werden kann und sowohl als Hauptpaket als auch als gekapselt eingestellt wird. Bei der Erstellung des Pakets wird nun noch die SAP Applikationskomponente zugeordnet, hierbei sollte die Selbe Komponente verwendet werden, die die zugehörige SAP Standardkomponente besitzt. Dies kann dem Paket der zugehörigen SAP Objekte die in Beziehung zur Eigenentwicklung stehen entnommen werden.

Innerhalb dieses Hauptpaketes sind nun die Unterpakete zu erstellen, die sich im Namen an das Hauptpaket orientieren, als Postfix aber die Funktion des Unterpaketes ausdrücken.

### Erstellung der Unterpakete - Unterteilung nach Funktion
Die Unterteilung des Hauptpaketes in Unterpakete sollte nicht nach Objekttyp erfolgen (z.B: DDIC, Forms, Klassen), sondern nach logischer Funktion vorgegangen werden. So kann als Grundstruktur das Paket ..._CORE oder ..._ENG (für Engine) als Unterpaket definiert werden. In diesem Paket werden Objekte erstellt, die von den anderen Unterpaketen verwendet werden und die zentralen Funktionen wie Geschäftsprozesslogik und gemeinsam genutzte Funktionen enthalten.  
Je nach Art der Software können folgende Unterpakete erstellt werden
* .._UI - Alle Artifakte für Anwendungsoberflächen
* .._API - z.B: für ODATA services oder Klassen, die von anderen Paketen verwendet werden können
* .._DATA - Objekte die Datenbankabfragen kapseln oder anderweitig Daten beschaffen (CDS Artefakte) 
* .._TEST - Objekte für Unit Tests und Testhelper wie auch Mock-Objekte


Zuordnung Applicagtion Kompentne

Szenario SAP BADI Implementierung / kleine Erweiterung



### Vorteile und Nutzen
* Warum Pakete -

* Erklärbarkeit
* Flexibilität
* - Erstellung Pakete
* - Wie Pakete stringent umsetzen
* - Nachschauen alter Leitfaden ...

 ## Strukturierung des Kapitels - Was kommt wie rein ....
* - Paketkonzept
* - Trennung Backend Frontend erfordert gute Architektur
* - API Design / Interfaces 
* - Neue UI / ODATA
* - Design for testability

* - ABAP OO - SOLID Prinzipien umsetzen
* - ABAP OO als Schlüssel für gute Architektur wenn Prinzipien umgesetzt werden.  vpnj der Paket zur Objektstrukturierung


## Testbarkeit als Designprinzip 

