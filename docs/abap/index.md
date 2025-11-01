---
layout: page
title: Moderne ABAP Entwicklung
permalink: /abap/
has_children: true
nav_order: 4
---

{: .no_toc}
# Moderne ABAP Entwicklung

1. TOC
{:toc}

## Einführung ins Thema und Inhalte des Kapitels

Willkommen im Kapitel Moderne ABAP Entwicklung. Hier geht es um den Kern der modernen Entwicklung von Anwendungen in SAP - um ABAP. In diesem Kapitel möchten wir Empfehlungen und Hinweise aus der Praxis geben, wie ABAP in modernen Anwendungen sinnvoll angewendet wird, welche Vorteile und Möglichkeiten die Nutzung von modernem ABAP bietet und dass es sich der Umstieg und die Transformation von der klassischen ABAP-Entwicklung hin zu moderner Anwendungsentwicklung lohnt und der Invest hierin sich mittelfristig auszahlt. Wir können hierbei nicht alle Grundkenntnisse erläutern, daher werden für die folgenden Ausführungen solide Grundkenntnisse in Programmierung vorausgesetzt.
SAP hat schon vor vielen Jahren die [ABAP-Programmierrichtlinien](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/de-DE/abenabap_pgl.htm) herausgebracht in denen grundlegende Prinzipien genannt und erläutert werden. Deren Prinzipien gelten auch weiterhin. Mit der Veröffentlichung des [Clean-ABAP Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md) wurden diese Empfehlungen um Methoden moderner Applikationsentwicklung auf Basis Von Clean Code ergänzt und maßgeblich erweitert.

Dieses Kapitel ist keine Beschreibung oder Dokumentation wie ABAP-Entwicklung im Generellen durchgeführt wird, dazu gibt es gute Online Schulungen, die inzwischen sogar kostenlos angeboten werden, die SAP Dokumentation und gute Bücher dazu.  
Detaillierte Beschreibungen einzelner Sprachelemente und Entwicklungsartefakte finden Sie in der SAP Dokumentation. In diesem Dokument werden aber einzelne Beispiele zur Veranschaulichung detaillierter erläutert.

ABAP hat den Vorteil, dass mit geringen Aufwand und ohne tiefgreifende Kenntnisse in Programmierung schnell Anforderungen umgesetzt werden können, sofern sie nicht komplexerer Natur sind. Somit kann sich die Umsetzung von Anforderungen in ABAP ohne zahlreiche Zwischenschritte an den Geschäftsanforderungen orientieren. Dieser Geschäftsprozessorientierte Einsatz von ABAP findet sich mannigfaltig im Unternehmen und viele ABAP-Programmierer sind über den Weg von Customizing, Erstellung einfacher Reports, Debugging, Implementierung von User-Exits usw. in die ABAP-Welt eingestiegen.  
Im Jahr 2025, wo viele Unternehmen den Sprung auf S/4HANA bereits angehen oder angehen werden, sind die neuen Technologien, Methoden und Tools noch nicht in dem Umfang im Einsatz wie es beim klassischen ABAP der Fall ist. Hier steht für die ABAP-Entwicklung eine Transformation an, die sowohl für die Entwickler als auch für die Unternehmen herausfordernd ist.
Der Leitfaden im Generellen und dieses Kapitel in Bezug zu ABAP möchte Ihnen Hilfestellung bei dieser Transformation geben. Im Kontext der ABAP-Entwicklung gibt es mehrere Themenbereiche, die in diesem Kapitel in folgenden Kapiteln beleuchtet werden:

- [**Architektur und Design moderner ABAP Entwicklungen**](/ABAP-Leitfaden/abap/architecture_and_design)  
    Hier erfahren Sie warum es wichtig ist und viele Vorteile bringt, ABAP Entwicklungen in Paketen zu strukturieren, die Paketfunktionalitäten zu nutzen und was Sie wissen müssen um unsere Empfehlungen umzusetzen.  

- [**Design und Erstellung von ABAP Entwicklungen mit ABAP OO**](/ABAP-Leitfaden/abap/software_design_of_object_structur)  
    Die Anwendung von Objektorientierung ist ein essentieller Faktor eine moderne, robuste und Anpassungsfähige Software zu erstellen. In diesem Kapitel finden Sie unsere Empfehlungen OO gut und effizient umzusetzen und warum die Anwendung von Objektorientierung und gute Strukturierung der Funktionalitäten in Klassen sich auszahlt.

- [**Sauberer und moderner Code**](/ABAP-Leitfaden/abap/clean_and_modern_abap)  
    Neben den übergeordneten Strukturen in Form vom Paketdesigns und der Strukturierung der Anwendung in Objekten, bildet der ABAP-Code die Funktion der Anwendung her. Der Code wird einmal erstellt, im Laufe des Lebenszyklus vielmals gelesen, erweitert, geändert und überprüft. Daher zahlt sich die Investition in gut lesbaren, verständlichen und übersichtlichen Code aus. Die Anwendung der Clean Code Prinzipien und Anwendung moderner ABAP-Statements und Funktionen ist essentiell um zukunftsfähige Anwendungen zu erstellen und effizient zu betreiben.

- [**RESTful Application Programming Model - RAP**](/ABAP-Leitfaden/abap/restful_abap)  
    Mit dem RESTful Application Programming Model hat SAP nach einigen Evolutionsschritten nun ein stabiles und ausgereiftes Programmiermodell veröffentlicht, das viele Möglichkeiten bietet, viele Vorteile mit sich bringt und Entwicklern einen guten Rahmen bietet, moderne Anwendungen zu bauen.  
    Die Empfehlungen der vorigen Abschnitte gelten für alle Entwicklungen in SAP, deren Umsetzung sind aber eine gute Grundlage, um für die Anwendungsentwicklung mit RAP gerüstet zu sein.  
    Empfehlungen zu RAP und das Vorgehen bei Entwicklung von RAP Applikationen finden Sie in diesem Kapitel.

## Die Rolle der Organisation

Wie Sie an den folgenden Ausführungen sehen werden, ist es unabdingbar für moderne und flexible Softwareanwendungen, neben einem guten Paketdesign auch ein gutes Design der einzelnen Softwarekomponenten unter Anwendung moderner Softwareentwicklungsmethodiken einzufordern und umzusetzen.  
Die Objektorientierung ist ein grosses und komplexes Thema, dass sich nicht kurzfristig erschliessen lässt, sondern einiges an Erfahrung benötigt um gute objektorientierte Software zu erstellen.  
Für eine effiziente Transformation der Organisation und der Entwickler zu moderner SAP Entwicklung braucht es Rahmenbedingungen und ein Enabling der Entwicklungsteams.  
Entwicklungsvorgaben, Richtlinien, Prinzipien, Handbücher und Kontrollmechanismen alleine sind nicht ausreichend, um die Techniken und Methoden moderner Softwareentwicklung im ABAP-Umfeld in den Entwicklungsalltag und somit "auf die Straße" zu bringen.  
Es wichtig, dass die Entwicklungsorganisation sich intensiv darum kümmert, die Entwickler gut aus- und weiterzubilden, Anreize zu schaffen neues Auszuprobieren und auch anzuwenden. Dafür müssen Rahmenbedingungen geschaffen werden und manche Vorgehensweisen überdacht werden.  
Ein Upskilling und die Motivation der Entwickler ist ein unabdingbarer Erfolgsfaktor.  Dafür braucht es Rahmenbedingungen die im Unternehmen und in der täglichen Arbeit der Entwickler gegeben sein müssen.  
Und es muss Instanzen geben, die diese Aspekte definieren, verantworten und auch für die Umsetzung in der täglichen Arbeit sorgen. Andernfalls fungieren die o.g. organisatorischen Maßnahmen als "zahnloser Tiger", die Organisationsvorgaben und die reale Arbeit weichen signifikant voneinander ab.

Ein wichtiges Element dabei ist auch die Wertschätzung Entwicklern gegenüber dafür, dass Anwendungen mit neuer Technologie umgesetzt werden, auch wenn dies zu Beginn oftmals mit längerer Entwicklungszeit einhergeht oder nicht immer reibungslos klappt. Nur wenn es in der Organisation anerkannt und wertgeschätzt wird, dass Entwickler- oder Entwicklerteams sich weiterbilden, sich in neue Technologien und Methoden einarbeiten und diese Umsetzen, findet eine nachhaltige Veränderung statt und es kann ein Mehrwert von den neuen Technologien entstehen.

Wertvolle und ausführliche Informationen zu dem Themenkomplex Organisation und Rahmenbedingungen finden Sie im Kapitel [**Organisation**](/ABAP-Leitfaden/organization/index).

## Zielgruppe des Kapitels  

Wir sprechen in erster Linie den Personenkreis der ABAP Entwickler und in die ABAP-Entwicklung Involvierte an. Wir möchten aber auch Entscheider und Vorgesetzte von Entwicklungsteams ansprechen, da für die ABAP-Transformation Rahmenbedingungen gegeben sein müssen um auf dieser Reise erfolgreich zu sein. Und dafür möchten wir die Motivation im Unternehmen schaffen indem wir die Vorteile und Praxisempfehlungen hier aufzeigen.
