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

Herzlich Willkommen beim neuen "ABAP-Leitfaden" der DSAG. Vor Ihnen befindet sich ein umfangreiches Dokument zum Thema Anwendungsentwicklung in SAP.  
Bei diesem aktuellen ABAP-Leitfaden 2025 handelt es sich um die dritte Auflage. Der Leitfaden ist zuvor 2012 und 2016 erschienen. Seither hat sich im Bereich der SAP-Entwicklung sehr viel getan:  

* Die Einführung der ABAP Development Tools (ADT)
* HANA  
* S/4HANA  
* CDS für die Datenmodellierung  
* das Restful Application Programming Model (RAP)  
* und die rasante Weiterentwicklung der Programmiersprache ABAP hin zu ABAP-Cloud
um hier die offensichtlichsten Punkte zu nennen.  

Da sich somit auch die Entwicklung in SAP seit der Veröffentlichung der letzten Version maßgeblich verändert hat, wurde es erforderlich, einen aktualisierten Leitfaden zur Verfügung zu stellen, der diese Neuerungen berücksichtigt.  
Im Jahr 2024 hat sich auf den Aufruf der DSAG wieder ein neues Team von Experten im SAP-Umfeld zusammengefunden um eine neue und aktuelle Version eines SAP-Entwicklungsleitfadens bereitzustellen, der sowohl Verantwortlichen in Unternehmen, als auch Entwicklern und Beratern Orientierung, Hinweise und Tipps aus der Praxis zu geben und helfen, bewährte und neue Technologien für die Anwendungsentwicklung erfolgreich und zielgerichtet einzusetzen.

Die Software der SAP zeichnet sich als Standardsoftware durch ein hohes Maß an Flexibilität und Erweiterbarkeit aus. In nahezu allen Unternehmen, die SAP-Software einsetzen, finden sich kundenspezifische Anpassungen und Erweiterungen. Die SAP-Software unterliegt damit sowohl auf Hersteller- als auch auf Kundenseite der kontinuierlichen Anpassung und Erweiterung durch sich ändernde Kundenbedürfnisse.
Das hohe Maß an Flexibilität und Erweiterbarkeit von SAP-Software bringt Vor- und Nachteile mit sich:

* Die Software kann optimal an kundenspezifische Anforderungen angepasst und damit die Wertschöpfung durch den Einsatz deutlich gesteigert werden.  
* Zeitgleich birgt die Erweiterbarkeit das Risiko kundenspezifischer Entwicklungen, die komplex, aufwendig wartbar und fehleranfällig sind.

Die Anwendungsentwicklung in SAP ist deutlich komplexer geworden und während früher der Großteil der Entwicklung in ABAP und GUI-basierten Tools erfolgte, ist es heute erforderlich, verschiedene Technologien und Tools einzusetzen und zu beherrschen.

Es gibt zahlreiche Dokumentationen und mittlerweile sind auch zahlreiche Schulungsangebote in der Form von Learning Journeys frei zu den verschiedenen Themen verfügbar. Dennoch ist es nicht einfach, sich im Dschungel der Tools und Techniken zurechtzufinden.


## Aufbau und Zielgruppe

Wie das Dokument aufgebaut ist und wie Sie diesen Leitfaden effektiv nutzen können, erfahren Sie in diesem Abschnitt.  
Da die Erfolgsfaktoren der Transformation zu moderner ABAP-Entwicklung nicht in erster Linie in technischen Themen liegen, sondern durch die Rahmenbedingungen geschaffen werden, erhalten Sie Erläuterungen und Empfehlungen bezüglich der **Entwicklungsorganisation**.
Anschließend erhalten Sie einen Überblick über die Konzepte von **"Clean Core"** und Empfehlungen zur Vorgehensweise. Das Verständnis des Clean Core Konzept ist wichtig damit Sie Ihre Strategien definieren können und auch das Verständnis gegeben ist, wie die neuen Entwicklungsmethodiken den Clean-Core Ansatz technisch umsetzen.
Damit haben Sie bereits einen guten Überblick über die Rahmenbedingungen. Die technisch orientierten Themen  

* **Core Data Services**
* **ABAP**
* **ABAP Unit Test**  
* **User Interfaces und**
* **Formulare**

geben Ihnen Erläuterungen, Empfehlungen und Details zu den technischen Aspekten und Technologien moderner SAP Entwicklung.
Am Anfang dieser Kapitel finden Sie einleitende Informationen und einen Überblick über das Thema. Dieser Teil ist vor allem für Manager und Entscheider im Unternehmen gedacht, die sich einen Überblick über den Bereich machen wollen.  
Je Tiefer Sie in das Kapitel einsteigen, desto detailiertere Informationen erhalten Sie zu den Themen. Diese Abschnitte sind vor allem für Architekten und Entwickler geeignet, die einen tieferen Einblick in das Thema erhalten wollen.  

Im weiteren Teil finden Sie dann Abschnitte zu den Themen **Open Source** mit wichtigen Ausführungen warum Open Source auch im ABAP-Bereich wichtig ist, Ausführungen zu ALM, bei denen Sie auch Erläuterungen zu modernen Methoden der **Versionsverwaltung** finden. Abschließend finden Sie noch Ausführungen zu den Themen **Sicherheit** und **Integration**, die bei Entwicklung von SAP Software heute wichtiger denn je sind.
Und natürlich dürfen auch Hinweise zur künstlichen Intelligenz hier nicht fehlen.

## Positionierung

Von der SAP und einer ganzen Reihe von Fachverlagen existieren bereits sehr gute Publikationen zur Anwendungsentwicklung und Erweiterung der SAP-Plattform. Im Verlauf dieses Leitfadens weisen wir auf aus unserer Sicht lesenswerte Literatur hin.

Der Mehrwert dieses Dokuments liegt in der Zusammenfassung bewährter Vorgehensweisen, Praxistipps und erprobter Regelwerke aus den Anwenderunternehmen. Diese Guideline soll Ihnen als Anwender, Entwickler, Entwicklungs-, Projekt- oder IT-Leiter Anregungen und Hilfestellung geben, um „das Rad nicht immer wieder neu erfinden zu müssen“ und auf die Erfahrungen anderer aufbauen zu können. Dabei erheben die in dieser Guideline vorgestellten Empfehlungen nicht den Anspruch auf Vollständigkeit oder absolute Gültigkeit, sondern stellen eine Auswahl von Praxistipps dar. 

Als Autorenteam haben wir uns darum bemüht, im Spannungsfeld zwischen Überblickswissen und Detailtiefe den richtigen Mix zu finden. Daher verweisen wir an entsprechenden Stellen auf weiterführende Quellen, um bereits ausführlich diskutierte Themen nicht redundant wiederzugeben.  

## Motivation

Manche der neueren Technologien und Tools sind in der Breite noch nicht vollumfänglich im Einsatz, obwohl diese schon seit Jahren zur Verfügung stehen. Daher ist es dem Autorenteam auch ein Anliegen, anhand von Vorteilen und Möglichkeiten darzustellen, warum es sich lohnt in die neueren und neuen Methoden zu investieren und neue Wege einzuschlagen. Denn müssen für den Einsatz dieser Methoden auch die Rahmenbedingungen im SAP-Entwicklungsumfeld angepasst oder sogar verändert werden. Um die Hemmschwelle abzubauen soll dieser Leitfaden auch den Einstieg erleichtern. Daher behandelt dieser Leitfaden vorrangig die Themen aus einem etwas höheren Blickwinkel, zu Dokumentationen oder weiteren Dokumenten, die Details erläutern wird nach Möglichkeit verwiesen.

Dieser Leitfaden dient nicht als Dokumentation und ist auch keine detaillierte Anleitung zu einzelnen Themen. Mit diesem Leitfaden möchten wir auf Basis von Praxiserfahrungen und gesammeltem Wissen der Autoren den Einstieg in neue Techniken erleichtern, eine Bewertung des Stands der SAP-Entwicklung im Unternehmen ermöglichen und Handlungsfelder aufzeigen, wie eine effiziente und gute SAP-Entwicklung ermöglicht wird.

## Feedback

Dieser Leitfaden wird neben der druckbaren Version auch als digitale Ausgabe als Git-Repository im Internet zur Verfügung stehen:  
[DSAG ABAP-Leitfaden Git-Pages](https://1dsag.github.io/ABAP-Leitfaden/) und [DSAG ABAP Leitfaden Git-Repository](https://github.com/1DSAG/ABAP-Leitfaden). Sie haben damit auch die Möglichkeit sich zu beteiligen und über Git-issues sowohl Feedback als auch Korrekturen und Ergänzungen in den Leitfaden einzubringen. Dieses Dokument lebt von der Community und vom Feedback der Leser. Die DSAG und das Autorenteam freut sich über jede Rückmeldung zum ABAP-Leitfaden und ist sehr interessiert ob und wie Ihnen der Leitfaden geholfen hat.  

## Disclaimer

Das Dokument entsteht aus dem gesammelten Wissen der DSAG Mitglieder in den verschiedenen Bereichen und wird durch die Community weiterentwickelt. Es kann daher zu Abweichungen zum Standardvorgehen oder Best-Practices von SAP kommen, wenn in einem Unternehmen andere Erfahrungen gemacht wurden.  