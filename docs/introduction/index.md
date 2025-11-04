---
layout: page
title: Einleitung
permalink: /introduction/
nav_order: 0
---

{: .no_toc}
# Einleitung

1. TOC
{:toc}

## Der neue DSAG ABAP-Leitfaden

Herzlich Willkommen beim neuen "ABAP-Leitfaden" der DSAG. Vor Ihnen befindet sich ein umfangreiches Dokument zum Thema Anwendungsentwicklung in SAP.

Die Business Suite der SAP zeichnet sich als Standardsoftware durch ein hohes Maß an Flexibilität und Erweiterbarkeit aus. In nahezu allen Unternehmen, die SAP-Software einsetzen, finden sich kundenspezifische Anpassungen und Erweiterungen. Die SAP-Software unterliegt damit sowohl auf Hersteller- als auch auf Kundenseite der kontinuierlichen Anpassung und Erweiterung durch sich ändernde Kundenbedürfnisse.
Das hohe Maß an Flexibilität und Erweiterbarkeit von SAP-Software bringt Vor- und Nachteile mit sich:

* Die Software kann optimal an kundenspezifische Anforderungen angepasst und damit die Wertschöpfung durch den Einsatz deutlich gesteigert werden.  
* Zeitgleich birgt die Erweiterbarkeit das Risiko kundenspezifischer Entwicklungen, die komplex, aufwendig wartbar und fehleranfällig sind.

Die früheren Versionen des ABAP Leitfadens sind 2012 und 2016 erschienen. Die Anwendungsentwicklung in SAP hat sich seither maßgeblich verändert und ist deutlich komplexer geworden. Während früher der Großteil der Entwicklung in ABAP und GUI-basierten Tools erfolgte, ist es heute erforderlich, verschiedene Technologien und Tools einzusetzen und zu beherrschen. So haben seither u.a. folgende bedeutende und große Neuerungen Einzug in die Anwendungsentwicklung mit SAP Einzug gehalten:  

* Die Einführung der ABAP Development Tools (ADT)
* HANA Datenbank
* S/4HANA Business Suite
* CDS für die Datenmodellierung
* das Restful Application Programming Model (RAP)  
* und die rasante Weiterentwicklung der Programmiersprache ABAP hin zu ABAP-Cloud

um hier die wichtigsten Neuerungen zu nennen.  
Somit wurde in der SAP Community der Ruf laut einen aktualisierten Leitfaden zur Verfügung zu stellen, der die Neuerungen in der SAP Entwicklung berücksichtigt.  
Im Jahr 2024 hat sich auf den Aufruf der DSAG wieder ein Team von Experten im SAP-Umfeld zusammengefunden um eine neue Version des ABAP-Leitfadens zu erstellen, der sowohl Verantwortlichen in Unternehmen, als auch Entwicklern und Beratern Orientierung, Hinweise und Tipps aus der Praxis gibt und dabei unterstützt, bewährte und neue Technologien für die Anwendungsentwicklung erfolgreich und zielgerichtet einzusetzen.

## Aufbau und Inhalte des Leitfadens
  
Die Erfolgsfaktoren der Transformation zu moderner ABAP-Entwicklung finden sich nicht zuallererst in den technischen Themen, sondern werden durch die Rahmenbedingungen geschaffen die ein Entwicklungsteam vorfindet. Zu Beginn des Leitfadens erhalten Sie Erläuterungen und Empfehlungen bezüglich der **Entwicklungsorganisation** die Ihnen Orientierung geben wie Rahmenbedingungen für moderne Anwendungsentwicklung in SAP geschaffen werden können.  
Anschließend erhalten Sie einen Überblick über die Konzepte von **"Clean Core"** und Empfehlungen zur Vorgehensweise. Das Verständnis des Clean Core Konzept ist wichtig damit Sie Ihre Strategien definieren können und auch das Verständnis gegeben ist, wie die neuen Entwicklungsmethodiken den Clean-Core Ansatz in die Umsetzung bringen. Damit haben Sie bereits einen guten Überblick über die Rahmenbedingungen.  

Die Themen 

* **Core Data Services**
* **ABAP**
* **ABAP Unit Test**  
* **User Interfaces und**
* **Formulare**

geben Ihnen Erläuterungen, Empfehlungen und Details zu den technikorientierten Aspekten und Technologien moderner SAP Entwicklung.  
Am Anfang der Kapitel finden Sie jeweils einleitende Informationen und einen Überblick über das Thema. Dieser Teil ist vor allem für Manager und Entscheider im Unternehmen gedacht, die sich einen Überblick über den Bereich verschaffen möchten.  
Je tiefer Sie in das Kapitel einsteigen, desto detailliertere Informationen erhalten Sie zu den einzelnen Themen. Diese Abschnitte sind vor allem für Architekten, Entwickler und technisch Interessierte geeignet, die einen detaillierteren Einblick in das Thema erhalten wollen.  

Im weiteren Teil finden Sie dann Abschnitte zu den Themen **Open Source** mit wichtigen Ausführungen warum Open Source auch im ABAP-Bereich wichtig ist, Ausführungen zu Application Lifecycle Management (ALM), bei denen Sie auch Erläuterungen zu modernen Methoden der **Versionsverwaltung** finden.  
Abschließend finden Sie noch Ausführungen zu den Themen **Sicherheit** und **Integration**, die bei Entwicklung von SAP Software heute wichtiger denn je sind.
Und natürlich dürfen auch Hinweise zur künstlichen Intelligenz hier nicht fehlen.

## Positionierung

Von der SAP gibt es zahlreiche Dokumentationen zu Anwendungsentwicklung und Erweiterung der SAP-Plattform. Fachverlage haben hierzu auch sehr gute Publikationen veröffentlicht. Des Weiteren gibt es mittlerweile zahlreiche, frei verfügbare Learning Journeys zu den verschiedenen Themen. Dennoch ist es nicht einfach, sich im Dschungel der Tools und Techniken zurechtzufinden.  
Der Mehrwert dieses Dokuments liegt in der Zusammenfassung bewährter Vorgehensweisen, Praxistipps und erprobter Regelwerke aus den Anwenderunternehmen. Daher behandelt dieser Leitfaden die Themen vorrangig aus einem etwas höheren Blickwinkel.

Diese Guideline soll Ihnen als Anwender, Entwickler, Entwicklungs-, Projekt- oder IT-Leiter Anregungen und Hilfestellung geben, um „das Rad nicht immer wieder neu erfinden zu müssen“ und auf die Erfahrungen Anderer aufbauen zu können. Dabei erheben die in dieser Guideline vorgestellten Empfehlungen nicht den Anspruch auf Vollständigkeit oder absolute Gültigkeit, sondern stellen eine Auswahl von Praxistipps dar.

Als Autorenteam haben wir uns darum bemüht, im Spannungsfeld zwischen Überblickswissen und Detailtiefe den richtigen Mix zu finden. Daher verweisen wir an entsprechenden Stellen auf weiterführende Quellen oder lesenswerte Literatur, um bereits ausführlich diskutierte Themen nicht redundant wiederzugeben.  

## Motivation

Manche der neueren Technologien und Tools sind in der Breite noch nicht vollumfänglich im Einsatz, obwohl diese schon seit Jahren zur Verfügung stehen. Dem Autorenteam ist es daher ein Anliegen, anhand von Vorteilen und Möglichkeiten darzustellen, warum es sich lohnt, in die neuen Methoden zu investieren und neue Wege in der Anwendungsentwicklung einzuschlagen.  
Dieser Leitfaden soll Ihnen eine Bewertung des Stands der SAP-Entwicklung im Unternehmen ermöglichen und Handlungsfelder aufzeigen, wie Sie eine effiziente und gute SAP-Entwicklung im Unternehmen erreichen können.  
Dazu müssen die Rahmenbedingungen im SAP-Entwicklungsumfeld angepasst oder sogar verändert werden. Der ABAP-Leitfaden soll Sie dabei unterstützen, Hemmschwellen abzubauen, den Einstieg in die Themen zu erleichtern und motivieren, die im Leitfaden beschriebenen Themen aktiv zu fordern und zu fördern.

## Feedback

Dieser Leitfaden wird neben der druckbaren Version auch als digitale Ausgabe als Git-Repository im Internet zur Verfügung stehen:  
[DSAG ABAP-Leitfaden Git-Pages](https://1dsag.github.io/ABAP-Leitfaden/) und [DSAG ABAP Leitfaden Git-Repository](https://github.com/1DSAG/ABAP-Leitfaden).  
Sie haben damit auch die Möglichkeit sich zu beteiligen und über Git-issues sowohl Feedback als auch Korrekturen und Ergänzungen in den Leitfaden einzubringen. Dieses Dokument lebt von der Community und vom Feedback der Leser. Die DSAG und das Autorenteam freut sich über jede Rückmeldung zum ABAP-Leitfaden und ist sehr interessiert ob und wie Ihnen der Leitfaden geholfen hat und wo Sie weitere Vertiefung wünschen.  

## Disclaimer

Das Dokument entsteht aus dem gesammelten Wissen der DSAG Mitglieder in den verschiedenen Bereichen und wird durch die Community weiterentwickelt. Es kann daher zu Abweichungen zum Standardvorgehen oder Best-Practices von SAP kommen, wenn in einem Unternehmen andere Erfahrungen gemacht wurden.
