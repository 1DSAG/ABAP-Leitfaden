---
layout: page
title: Problemfelder und Herausforderungen
permalink: /clean-core/problems-and-challenges/
parent: Clean Core
prev_page_link: /clean-core/why-clean-core/
prev_page_title: Warum Clean Core
next_page_link: /clean-core/architectural-concepts/
next_page_title: Architekturkonzepte
nav_order: 3
---

{: .no_toc}
# Problemfelder und Herausforderungen

1. TOC
{:toc}


* Clean Core im S/4HANA Kontext in Verbindung mit “legacy” Technologie ``(z.B. embedded TM -> BOPF -> FPM (Jens) / Variantenkonfiguration (Beispiel Timo?) )``
* Die alten Herrausvorderungen bestehen bleiben – z.b. WhiteSpots im Standard Coding.
* Verweis auf Kapitel Organisation
    * Auswirkung auf die Organisation / Entwicklerskills
    * Regeln für Clean Core, Governanace, Clean Code, Skill-set der ABAP Entwickler

Neben den Kundenerweiterungen im SAP Standard, gibt es in jedem SAP-System die Thematik der Custom SAP Applications, das sind Eigenentwicklungen, welche neben den SAP Standard parallel laufen. Die Ablösung solcher Applikationen Bedarf eigene Großprojekte und muss weiterhin von Prozessexperten betreut werden. 
 
Die Dissonanz zwischen der Sichtweise von SAP zum Clean Core und den lang-jährigen Kundenstamm ist die Anwendung der Clean Core Prinzipien / Konzept. 

Die Standardtransaktionen, Standard BAdis und Standard Fiori Apps reichen oftmals nicht mehr aus, um die Geschäftsprozessanforderungen abzudecken. Die klassischen Erweiterungen / RICEFW Objekte haben Mehrwerte geschaffen, welche erst in S/4 HANA - dem Clean Core – wiedergefunden werden müssen. Um die neuen Technologien, bspw. SAP Build, vor allem auf der BTP zu benutzen, erfordert es an Investitionen in Organisation, Technologien und Prozessen.
 
### Technologien

* Von der Verhandlung der Lizenzen, Aufbau der Infrastruktur, Schulung der SAP Basis und Schulung der Entwickler der neuen Technologien bis zum Einkauf von Consulting Services, Betrachtung und Bewertung der Alternativen muss alles in der Evaluierung der Entwicklungslandschaft definiert werden.
* Vor allem alternative Technologien, welche mit vorhandenen ABAP-Entwicklern benutzbar sind, werden gebraucht, da existierende Kundenerweiterungen/ RICEFW Objekte weiterhin gepflegt werden müssen.
 
### Organisation

``(Verweis auf Kapitel Organisation)``

* Der klassische Berater und Entwickler entwickelt sich durch die neuen Technologien zu einem Vollzeit-Entwickler. Hier ist massives Change-Management angesagt. Mehr dazu im Kapitel Organisation.
* Durch die No- und Low-Code Optionen, vor allem bei SAP Build, aber auch Key-User Extensibility können nicht-ITler in Fusion Teams mitarbeiten. Das erfordert auch eine moderne Arbeitsweise, welche agiler Natur sein sollte.
 
### (Geschäfts-)Prozesse
 
* Organisatorische Prozesse können bspw. im Reporting enorm verschlankt werden. Wenn Standard CDS Views, und Standard APIs genommen werden, dann ziehen die Berechtigungsprüfung in der CDS View. So kann man Datenpools anbieten und die Fachbereichs Kollegen können ohne die IT Reporting betreiben. Ein mögliches Problem: Das bringt die Gefahr das un-performante CDS Views (Stichwort: Compatibility-Views) die Systemlast enorm beeinträchtigen.
* Standardprozesse werden von der SAP unterstützt und Standard Fiori Apps kann man recht simpel im UI anpassen. Kunden mit langer SAP Historie haben oftmals Geschäftsprozessanforderungen, welche weit über die Standard Apps hinaus gehen. Auch ein mögliches Thema sind die SAP Gateway-basierten Apps: wenn die Standard Fiori App erstmal auf den SAP Gateway aufgebaut wird und dann nach einem Systemupgrade diese App auf das RAP-Model im Backend umzieht, so ist die Eigenentwicklung erstmal nachzubauen im neuen RAP-Modell.

### Add-Ons
``(Marcus)``
* In Bezug auf Zertifizierung und ABAP Cloud