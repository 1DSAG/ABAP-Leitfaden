---
layout: page
title: Moderne ABAP Entwicklung
permalink: /abap/
next_page_link: /abap/architecture_and_design/
next_page_title: Architektur und Design moderner ABAP Entwicklung
has_children: true
nav_order: 3
---

{: .no_toc}
# Moderne ABAP Entwicklung

1. TOC
{:toc}

## Einführung ins Thema, Struktur und Inhalte des Kapitels.

Willkommen im ABAP Kapitel. Hier geht es um den Kern der modernen SAP Entwicklung - um ABAP. Dieses Kapitel ist keine Beschreibung oder Dokumentation wie ABAP-Entwicklung im Generellen durchgeführt wird, dazu gibt es gute Online Schulungen, die inzwischen sogar kostenlos angeboten werden, die SAP Dokumentation und gute Bücher dazu.

In diesem Kapitel möchten wir Empfehlungen und Hinweise aus der Praxis geben, wie ABAP in modernen Anwendungen sinnvoll angewendet wird, welche Vorteile und Möglichkeiten die Nutzung von modernem ABAP bietet und dass es sich lohnt von der klassischen Weise ABAP zu nutzen, umzusteigen auf moderne Entwicklungsmethodiken. Wir können hierbei nicht alle Grundkenntnisse erläutern, daher werden für die folgenden Ausführungen solide Grundkenntnisse in Programmierung vorausgesetzt.

ABAP ist die Programmiersprache im SAP Umfeld und wird von zahlreichen Entwicklern seit langem umfangreich eingesetzt. Seit den Anfängen von ABAP als Berichtsprogrammiersprache hat sich, wie generell in der IT, sehr viel getan und insbesondere in den letztn 15 Jahren (Stand 2024) hat sich auch ABAP umfassend weiterentwickelt.  
ABAP hat den Vorteil, dass mit geringen Aufwand und ohne tiefgreifende Kenntnisse in Programmierung schnell Anforderungen umgesetzt werden können, sofern sie nicht komplexerer Natur sind. Somit kann sich die Umsetzung von Anforderungen in ABAP ohne zahlreiche Zwischenschritte an den Geschäftsandorderungen orientieren. Dieser Geschäftsprozessorientierte Einsatz von ABAP findet sich  mannigfaltig im Unternehmen und viele ABAP-Programmierer sind über den Weg von Customizing, Erstellung einfacher Reports, Debugging, Implementierung von User-Exits usw. in die ABAP-Welt eingestiegen.  
Im Jahr 2025, wo viele Unternehmen den Sprung auf S/4HANA bereits angehen oder angehen werden, sind die neuen Technologien, Methoden und Tools noch nicht in dem Umfang im Einsatz wie es beim klassichen ABAP der Fall ist. Hier steht für die ABAP-Entwicklung" eine Transformation an, die sowohl für den Entwickler als auch für das Unternehmen herausfordernd ist.  
Der Leitfaden im Generellen und dieses Kapitel in Bezug zu ABAP möchte hier Hilfestellung geben und den Weg erleichtern.
Der Weg zur Erstellung moderner Anwendungen ist kein Leichter und es ist eine Investition, deren Ertrag nicht sofort anfällt. Weshalb es sich aber lohnt diese Reise anzugehen und Reisetipps finden sie auf den folgenden Seiten. 
Dieses Kapitel teilt sich in folgend Abschnitte auf:

- [**Architektur und Design moderner ABAP Entwicklungen**](architecture_and_design.md)  
    Warum es wichtig ist und Vorteile hat ABAP Entwicklungen in Paketen zu strukturieren, die Paketfunktionalitäten zu nutzen und warum die Anwendung von Objektorientierung und gute Strukturierung der Funktionalitäten in Klassen sich auszahlt.

- [**Sauberer und moderner Code**](clean_and_modern_abap.md)  
    Was für die übergeordnete Struktur gilt, ist auch für ABAP Code gültig. Clean Code Prinzipien anzuwenden und modernen ABAP Code zu schreiben zahlt sich bereits während der Entwicklung aus.

- [**Restful Application Programming Model - RAP**](restful_abap.md)  
    Best Practices und Empfehlungen wie die Transformation in die RAP Welt gelingt.

- [**Rahmenbedingungen und Enabling moderne ABAP Entwicklung im Unternehmen und in den Teams**](enabling_modern_development.md)  
    Für eine effiziente Transformation zu moderner SAP Entwicklung braucht es entsprechende Rahmenbedingungen. Wir geben Empfehlungen aus der Praxis was benötigt wird.

**Zielgruppe des Kapitels**  
Wir sprechen in erster Linie den Personenkreis der ABAP Entwickler und in die ABAP-Entwicklung Involvierte an. Wir möchten aber auch Entscheider und Vorgesetzte von Entwicklungsteams ansprechen, da für die ABAP-Transformation Rahmenbedingungen gegeben sein müssen um auf dieser Reise erfolgreich zu sein. Und dafür möchten wir die Motivation im Unternehmen schaffen indem wir die Vorteile und Praxisempfehlungen hier aufzeigen.
[ERSTER ENTWURF - muss noch etwas gekürzt und optimiert werden.]

