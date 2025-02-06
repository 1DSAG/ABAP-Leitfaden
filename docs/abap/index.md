---
layout: page
title: Moderne ABAP Entwicklung
permalink: /abap/
has_children: true
nav_order: 1
---

{: .no_toc}
# Moderne ABAP Entwicklung

1. TOC
{:toc}

## Einführung ins Thema und Inhalte des Kapitels.

Willkommen im ABAP Kapitel. Hier geht es um den Kern der modernen SAP Entwicklung - um ABAP. Dieses Kapitel ist keine Beschreibung oder Dokumentation wie ABAP-Entwicklung im Generellen durchgeführt wird, dazu gibt es gute Online Schulungen, die inzwischen sogar kostenlos angeboten werden, die SAP Dokumentation und gute Bücher dazu.

In diesem Kapitel möchten wir Empfehlungen und Hinweise aus der Praxis geben, wie ABAP in modernen Anwendungen sinnvoll angewendet wird, welche Vorteile und Möglichkeiten die Nutzung von modernem ABAP bietet und dass es sich der Umstieg und die Transformation von der klassischen ABAP-Entwicklung hin zu moderner Anwendungsentwicklung lohnt und der Invest hierin sich mittelfristig auszahlt. Wir können hierbei nicht alle Grundkenntnisse erläutern, daher werden für die folgenden Ausführungen solide Grundkenntnisse in Programmierung vorausgesetzt.
Dem Leitfaden liegen implizit die Grundlagen der [ABAP-Programmierrichtlinien](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/de-DE/abenabap_pgl.htm) der SAP zugrunde, in denen grundlegende Prinzipien genannt und erläutert werden. Detaillierte Beschreibungen einzelner Sprachelemente und Entwicklungsartefakte finden Sie in der SAP Dokumentation. 

ABAP ist die Programmiersprache im SAP Umfeld und wird von zahlreichen Entwicklern seit langem umfangreich eingesetzt. Seit den Anfängen von ABAP als Berichtsprogrammiersprache hat sich, wie generell in der IT, sehr viel getan und insbesondere in den letzten Jahren hat sich auch ABAP umfassend weiterentwickelt, insbesondere durch die Einführung von S/4HANA.  

ABAP hat den Vorteil, dass mit geringen Aufwand und ohne tiefgreifende Kenntnisse in Programmierung schnell Anforderungen umgesetzt werden können, sofern sie nicht komplexerer Natur sind. Somit kann sich die Umsetzung von Anforderungen in ABAP ohne zahlreiche Zwischenschritte an den Geschäftsanforderungen orientieren. Dieser Geschäftsprozessorientierte Einsatz von ABAP findet sich  mannigfaltig im Unternehmen und viele ABAP-Programmierer sind über den Weg von Customizing, Erstellung einfacher Reports, Debugging, Implementierung von User-Exits usw. in die ABAP-Welt eingestiegen.  
Im Jahr 2025, wo viele Unternehmen den Sprung auf S/4HANA bereits angehen oder angehen werden, sind die neuen Technologien, Methoden und Tools noch nicht in dem Umfang im Einsatz wie es beim klassischen ABAP der Fall ist. Hier steht für die ABAP-Entwicklung" eine Transformation an, die sowohl für den Entwickler als auch für das Unternehmen herausfordernd ist.  
Der Leitfaden im Generellen und dieses Kapitel in Bezug zu ABAP möchte hier Hilfestellung geben und den Weg erleichtern.
Der Weg zur Erstellung moderner Anwendungen ist kein Leichter und es ist eine Investition, deren Ertrag nicht sofort anfällt. Weshalb es sich aber lohnt diese Reise anzugehen und Reisetipps finden sie auf den folgenden Seiten. 
Dieses Kapitel teilt sich in folgende Abschnitte auf:

- [**Architektur und Design moderner ABAP Entwicklungen**](architecture_and_design.md)  
    Warum es wichtig ist und Vorteile hat ABAP Entwicklungen in Paketen zu strukturieren, die Paketfunktionalitäten zu nutzen und warum die Anwendung von Objektorientierung und gute Strukturierung der Funktionalitäten in Klassen sich auszahlt.

- [**Sauberer und moderner Code**](clean_and_modern_abap.md)  
    Was für die übergeordnete Struktur gilt, ist auch für ABAP Code gültig. Clean Code Prinzipien anzuwenden und modernen ABAP Code zu schreiben zahlt sich bereits während der Entwicklung aus.

- [**Restful Application Programming Model - RAP**](restful_abap.md)  
    Best Practices und Empfehlungen wie die Transformation in die RAP Welt gelingt.

In den Kapiteln geben wir Ihnen einen Einblick in die Technik und Methodiken mit Empfehlungen aus der Praxis wie diese umgesetzt werden können und welche Vorteile sich dadurch ergeben. Die Änderung und Ergänzung der Entwicklungsrichtlinien im Unternehmen reichen alleine nicht aus um die neue moderne ABAP-Welt in Produktion zu bringen.  
Für eine effiziente Transformation zu moderner SAP Entwicklung braucht es Rahmenbedingungen und ein Enabling der Entwicklungsteams. 
Ausführliche Empfehlungen und Hintergründe hierzu finden Sie im Kapitel [**Organisation**](/ABAP-Leitfaden/organization/index) dieses Leitfadens.


## Zielgruppe des Kapitels  
Wir sprechen in erster Linie den Personenkreis der ABAP Entwickler und in die ABAP-Entwicklung Involvierte an. Wir möchten aber auch Entscheider und Vorgesetzte von Entwicklungsteams ansprechen, da für die ABAP-Transformation Rahmenbedingungen gegeben sein müssen um auf dieser Reise erfolgreich zu sein. Und dafür möchten wir die Motivation im Unternehmen schaffen indem wir die Vorteile und Praxisempfehlungen hier aufzeigen.
