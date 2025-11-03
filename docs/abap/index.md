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

Willkommen im Kapitel Moderne ABAP Entwicklung. Hier geht es um den Kern der modernen Entwicklung von Anwendungen in SAP - um ABAP. Wir möchten Ihnen Empfehlungen und Hinweise aus der Praxis geben, wie ABAP in modernen Anwendungen sinnvoll eingesetzt wird und welche Vorteile und Möglichkeiten die Nutzung von modernem ABAP bieten.  

SAP hat schon vor vielen Jahren die [ABAP-Programmierrichtlinien](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/de-DE/abenabap_pgl.htm) herausgebracht in denen grundlegende Prinzipien genannt und erläutert werden. Deren Prinzipien gelten auch weiterhin. Der [Clean-ABAP Styleguide](https://github.com/SAP/styleguides/blob/main/clean-abap/CleanABAP.md) erweitert diese Empfehlungen um Methoden und Prinzipien moderner Applikationsentwicklung und basiert auf den allgemeinen Clean Code Ansätzen und ergänzt diese um spezifische Aspekte der ABAP- und SAP-Anwendungsentwicklung.

ABAP hat den Vorteil, dass mit geringem Aufwand und ohne tiefgreifende Kenntnisse in Programmierung schnell Anforderungen umgesetzt werden können, sofern sie nicht komplexer Natur sind. Somit kann sich die Umsetzung von Anforderungen in ABAP ohne zahlreiche Zwischenschritte an den Geschäftsanforderungen orientieren. Dieser Geschäftsprozessorientierte Einsatz von ABAP findet sich mannigfaltig im Unternehmen und viele ABAP-Programmierer sind über den Weg von Customizing, Erstellung einfacher Reports, Debugging, Implementierung von User-Exits usw. in die ABAP-Welt eingestiegen.  
Im Jahr 2025, wo viele Unternehmen den Sprung auf S/4HANA bereits angehen oder angehen werden, sind die neuen Technologien, Methoden und Tools noch nicht in dem Umfang im Einsatz wie es beim klassischen ABAP der Fall ist. Hier steht für die ABAP-Entwicklung eine Transformation an, die sowohl für die Entwickler als auch für die Unternehmen herausfordernd ist.
Der Leitfaden im Generellen und dieses Kapitel in Bezug zu ABAP möchte Ihnen Hilfestellung bei dieser Transformation geben. In diesem Kapitel geben wir Ihnen Einblicke und Empfehlungen in folgende Themenbereiche der ABAP-Entwicklung:  

- [**Architektur und Design moderner ABAP Entwicklungen**](/ABAP-Leitfaden/abap/architecture_and_design)  
    Hier erfahren Sie warum es wichtig ist und viele Vorteile bringt, ABAP Entwicklungen in Paketen zu strukturieren, die Paketfunktionalitäten zu nutzen und was Sie wissen müssen um unsere Empfehlungen umzusetzen.  

- [**Entwurf und Gestaltung moderner SAP-Anwendungen**](/ABAP-Leitfaden//abap/oo-design/)  
    Die Anwendung von Objektorientierung ist ein essentieller Faktor eine moderne, robuste und anpassungsfähige Software zu erstellen. In diesem Kapitel finden Sie unsere Empfehlungen OO gut und effizient umzusetzen und warum die Anwendung von Objektorientierung und gute Strukturierung der Funktionalitäten in Klassen einen Mehrwert bietet.

- [**Sauberer und moderner Code**](/ABAP-Leitfaden/abap/clean_and_modern_abap)  
    Neben den übergeordneten Strukturen in Form vom Paketdesigns und der Strukturierung der Anwendung in Objekten, bildet der ABAP-Code die Funktion der Anwendung her. Der Code wird einmal erstellt, im Laufe des Lebenszyklus vielmals gelesen, erweitert, geändert und überprüft. Daher zahlt sich die Investition in gut lesbaren, verständlichen und übersichtlichen Code aus. Die Anwendung der Clean Code Prinzipien und Anwendung moderner ABAP-Statements und Funktionen ist essentiell um zukunftsfähige Anwendungen zu erstellen und effizient zu betreiben.

- [**RESTful Application Programming Model - RAP**](/ABAP-Leitfaden/abap/restful_abap)  
    Mit dem RESTful Application Programming Model hat SAP nach einigen Evolutionsschritten nun ein stabiles und ausgereiftes Programmiermodell veröffentlicht, das viele Möglichkeiten bietet, viele Vorteile mit sich bringt und Entwicklern einen guten Rahmen bietet, moderne Anwendungen zu bauen.  
    Die Empfehlungen der vorigen Abschnitte gelten für alle Entwicklungen in SAP, deren Umsetzung sind aber eine gute Grundlage, um für die Anwendungsentwicklung mit RAP gerüstet zu sein.  
    Empfehlungen zu RAP und das Vorgehen bei Entwicklung von RAP Applikationen finden Sie in diesem Kapitel.

## Die Rolle der Organisation

Für eine effiziente Transformation der Organisation und der Entwickler zu moderner SAP Entwicklung ist es nicht ausreichend, sich mit den technischen Aspekten zu beschäftigen. Ein Erfolgsfaktor sind gute Rahmenbedingungen und ein Enabling der Entwicklungsteams. Hier spielt die Organisation eine tragende Rolle.

Entwicklungsvorgaben, Richtlinien, Prinzipien, Handbücher und Kontrollmechanismen sind wichtig als Vorgaben und Richtschnur. Alleine  sind diese aber nicht ausreichend, um die Techniken und Methoden moderner Softwareentwicklung im ABAP-Umfeld in den Entwicklungsalltag und somit "auf die Straße" zu bringen.  
Dafür müssen Instanzen in der Entwicklungsorganisation installiert sein, die neben der Definition dieser Vorgaben auch für die Umsetzung dieser in der täglichen Arbeit sorgen. Dies können auf höheren Ebenen Architekturboards, Review-Gremien und zentrale Stellen im Bereich der Entwicklungsorganisation sein. Auf den tieferen Ebenen sind dies verantwortliche Personen wie Lead-Developer und Architekten, die nahe an den Entwicklern und der täglichen Arbeit dran sind. Andernfalls fungieren die o.g. organisatorischen Maßnahmen als "zahnloser Tiger", die Organisationsvorgaben und die reale Arbeit weichen signifikant voneinander ab.  

Neben den Governance Aspekten, muss sich die Entwicklungsorganisation auch intensiv darum kümmern, die Entwickler aus- und weiterzubilden, Anreize zu schaffen Neues im Alltag auszuprobieren und anzuwenden und bisherige Vorgehensweisen zu überdenken und anzupassen. Das Interesse und die Motivation der Entwickler für neue Themen ist hierbei ein wichtiger Faktor dafür, dass diese Maßnahmen zu einem erfolgreichen Upskilling der Entwicklungsorganisation führt.  
Ein wichtiges Element dabei ist die Wertschätzung gegenüber Entwicklern dafür, dass Anwendungen mit neuen Technologien umgesetzt werden, auch wenn dies zu Beginn oftmals mit längerer Entwicklungszeit einhergeht oder nicht immer reibungslos funktioniert. Nur wenn es in der Organisation anerkannt und wertgeschätzt wird, dass Entwickler- oder Entwicklerteams sich weiterbilden, in neue Technologien und Methoden einarbeiten und diese Umsetzen, findet eine nachhaltige Veränderung statt und Sie werden von den Vorteilen und ergebenden positiven Effekte profitieren können. Einige der Vorteile finden Sie im Kapitel [Architektur und Strukturierung in der ABAP Entwicklung](/ABAP-Leitfaden/abap/architecture_and_design/#warum-sich-die-anwendung-es-paketkonzepts-lohnt---vorteile-und-mehrwert).

Wertvolle und ausführliche Informationen zu dem Themenkomplex Organisation und Rahmenbedingungen finden Sie im Kapitel [**Organisation**](/ABAP-Leitfaden/organization/index).

## Zielgruppe des Kapitels  

Wir sprechen in erster Linie den Personenkreis der ABAP Entwickler und in die ABAP-Entwicklung involvierte Personen an. Wir möchten aber auch Entscheider und Vorgesetzte von Entwicklungsteams ansprechen, da für die ABAP-Transformation Rahmenbedingungen gegeben sein müssen um auf dieser Reise erfolgreich zu sein. Und dafür möchten wir die Motivation im Unternehmen schaffen indem wir die Vorteile und Praxisempfehlungen hier aufzeigen.
