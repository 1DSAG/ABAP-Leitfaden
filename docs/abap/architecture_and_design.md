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

 Viele SAP ERP Systeme wurden über viele Jahre mit Eigenentwicklungen angereichert. Die Entwicklung begann zu Zeiten als es in ABAP das Paketkonzept in heutiger Ausprägung gar nicht gab. Viele ABAP Entwickler sind auch nur in ABAP aktiv. So finden sich in vielen ERP Systemen als Paketstruktur sehr große Pakete die z.B. nach dem Modul oder eines Entwicklungsteams orientiert sind.
   
 Vielen ABAP Entwicklern ist der Nutzen von Paketen bei SAP Anwendungen nicht bekannt oder bewusst und wenn eine Entwicklung unter Zeitdruck erstellt werden muss, ist die Frage, wie die Anwendung im Großenm strukturiert und welche Pakete erstellt werden sollen oft nicht als hochpriorisiert eingestuft.  
 Allerdings ist es bei der heutigen Anwendungskomplexität essentiell sich zuerst Gedanken zu machen welche Funktionen und Zuständigkeiten eine zu erstellende Anwendung haben soll, wie die Verantwortlichkeiten *geregelt* sind und wie sich das letztendlich im Anwendungsdesign widerspiegelt.  
 Daher ist die Frage nach dem Paket und der Strukturierung der Unterpakete der erste wichtige Schritt, die Basis für eine saubere und zukunftsfähige Anwendungsarchitektur zu legen. 

## SAP Paket Konzept
* Was ist es basics
* Warum Pakete
* ÄErklärbarkeit
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

