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

### Grundlagen und Begriffserklärungen zum Paketkonzepts
Ein **Paket** ist in erster Linie ein Mittel um Software zu strukturieren. Mit dem Paket werden Softwareartefakte zusammengefasst, die für einen bestimmten Zweck zuständig sind. Pakete können (und sollten auch) gekapselt sein. Das bedeutet, dass ein Objekt in einem Paket ein Objekt in einem anderen Paket nicht verwenden kann bzw. von einem Objekt in einem anderen Paket nicht verwendet werden kann.
Ein paar Ausnahmen und Details erfolgen im weitern Abschnitt hierzu (technische bzw. gewünschte Verwendung).
Es gibt die sogenannten **Hauptpakete**, die zur Strukturierung der zu erstellenden Softwarekompnente dienen. Und es gibt **Unterpakete**, die einem Hauptpaket zugeordnet sind. Die Unterpakete dienen der internen Strukturierung der Artefakte des Hauptpaketes.     
In SAP gibt es dazu noch die **Strukturpakete**, die übergeordnet zu den Hauptpaketen sind und eine größere Organisation von Hauptpaketen hin zu Applikationen (-Komponenten?) ermöglicht. In Sinne der Komplexitätsreduzierung wird allerdings hier nicht weiter eingegangen sondern ist in der SAP Dokumentation beschrieben. Strukturpakete einzusetzen, kann sinnvoll sein, wenn im Unternehmen das Paketkonzept umfänmglich mit Haupt- und Unterpaketen bereits angewendet wird.  
Mit der strukturierung von Softwareobjekten mittels Artefakten ergeben sich bereits Vorteile durch verbesserte Übersichtlichkeit, der Vorteil von Paketen ergibt sich aber erst durch die Funktionalität von **Paketschnittstellen**. Eine Paketschnittstelle definiert, welche Artefakte eines Paketes (Haupt- oder Unterpaket) für andere Pakete sichtbar sind. 
Als letzten hier zu erklärendem Begriff kommt die **Verwendungserklärung**, die in einem Paket gepflegt wird. Verwendet ein Paket A ein Artefakt aus einem Paket B, wird in der Verwendungserklärung des Paketes A, das Paket B aufgenommen. Somit ist auf Paketebene sofort ersichtlich, welche Abhängigkeiten das Paket A besitzt. Dazu ist die Verwendungserklärung auch im Verwendungsnachweis auswertbar, womit es möglich ist, herauszufinden, welche Pakete eine Paketschnittstelle eines Paketes verwenden. 

### 

* Warum Pakete -

* Erklärbarkeit
* Flexibilität
* - Erstellung Pakete
* - Strukturierung eines Pakets in Unterpakete
* - Paket schnittstellen
* - Verwendungserklärung
* - Wie Pakete stringent umsetzen
*   Nachschauen alter Leitfaden ...

 ## Strukturierung des Kapitels - Was kommt wie rein ....
* - Paketkonzept
* - Trennung Backend Frontend erfordert gute Architektur
* - API Design / Interfaces 
* - Neue UI / ODATA
* - Design for testability

* - ABAP OO - SOLID Prinzipien umsetzen
* - ABAP OO als Schlüssel für gute Architektur wenn Prinzipien umgesetzt werden.  vpnj der Paket zur Objektstrukturierung


## Testbarkeit als Designprinzip 

