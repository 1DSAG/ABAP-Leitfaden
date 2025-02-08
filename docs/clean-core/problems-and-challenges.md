---
layout: page
title: Problemfelder und Herausforderungen
permalink: /clean-core/problems-and-challenges/
parent: Clean Core
nav_order: 3
---

{: .no_toc}
# Problemfelder und Herausforderungen

1. TOC
{:toc}


Für etablierte Brownfield-Kunden oder SAP-AddOn Hersteller (Partner), die auf Legacy-Technologien basieren, ist die konsequente Umsetzung eines Clean Core in der Public Cloud ohne ein Redesign der Prozesse nicht realisierbar. 

## Kundencode

Der Großteil des über Jahrzehnte gewachsenen Kundencodes muss überarbeitet werden. Grund dafür ist, das bestehende Entwicklung häufig auf nicht freigegebenen APIs oder Entwicklungskomponenten aus dem SAP-Standard basiert. Dabei sollten Sie im ersten Schritt analysieren, ob sie ihr System Cloud-Ready machen wollen. Dabei sollten sie auch prüfen, welche Lösungen vielleicht bereits veraltete Technologien verwenden, wie zum Beispiel BOPF, die Variantenkonfiguration oder den klassischen Report.


Neben den Kundenerweiterungen im SAP Standard, gibt es in jedem SAP-System die Thematik der Custom SAP Applications, das sind Eigenentwicklungen, welche neben den SAP Standard parallel laufen. Die Ablösung solcher Anwendungen Bedarf eigener Großprojekte und muss weiterhin von Prozessexperten betreut werden. 

 
Die Dissonanz zwischen der Sichtweise von SAP zum Clean Core und den lang-jährigen Kundenstamm ist die Anwendung der Clean Core Prinzipien/Konzepte. 


Die Standardtransaktionen, Standard BAdis und Standard Fiori Apps reichen oftmals nicht mehr aus, um die Geschäftsprozessanforderungen abzudecken. Die klassischen Erweiterungen / RICEFW Objekte haben Mehrwerte geschaffen, welche erst in S/4 HANA - dem Clean Core – wiedergefunden werden müssen. Um die neuen Technologien, beispielsweise SAP Build, vor allem auf der BTP zu benutzen, erfordert es an Investitionen in Organisation, Technologien und Prozessen.
 
## Technologien

Von der Verhandlung der Lizenzen, Aufbau der Infrastruktur, Schulung der SAP Basis und Schulung der Entwickler der neuen Technologien bis zum Einkauf von Consulting Services, Betrachtung und Bewertung der Alternativen muss alles in der Evaluierung der Entwicklungslandschaft definiert werden.

Vor allem alternative Technologien, welche mit vorhandenen ABAP-Entwicklern benutzbar sind, werden gebraucht, da existierende Kundenerweiterungen/ RICEFW Objekte weiterhin gepflegt werden müssen.
 
## Organisation
Der klassische Berater und Entwickler entwickelt sich durch die neuen Technologien zu einem Vollzeit-Entwickler mit breiten Entwicklungskenntnissen, hier ist massives Change-Management angesagt. Mehr dazu erfahren Sie im Kapitel [Organisation](/organization). 

Durch die No-Code und Low-Code Optionen, vor allem bei SAP Build, aber auch Key-User Extensibility können nicht-Entwickler in Fusion Teams mitarbeiten. Das erfordert auch eine moderne Arbeitsweise, welche agiler Natur sein sollte.
 
## (Geschäfts-)Prozesse
 
Organisatorische Prozesse können bspw. im Reporting enorm verschlankt werden. Wenn Standard CDS Views, und Standard APIs genommen werden, dann ziehen die Berechtigungsprüfung in der CDS View. So kann man Datenpools anbieten und die Fachbereichs Kollegen können ohne die IT Reporting betreiben. Ein mögliches Problem: Das bringt die Gefahr das un-performante CDS Views (Stichwort: Compatibility-Views) die Systemlast enorm beeinträchtigen.

Standardprozesse werden von der SAP unterstützt und Standard Fiori Apps kann man recht simpel im UI anpassen. Kunden mit langer SAP Historie haben oftmals Geschäftsprozessanforderungen, welche weit über die Standard Apps hinaus gehen. Auch ein mögliches Thema sind die SAP Gateway-basierten Apps: wenn die Standard Fiori App erstmal auf den SAP Gateway aufgebaut wird und dann nach einem Systemupgrade diese App auf das RAP-Model im Backend umzieht, so ist die Eigenentwicklung erstmal nachzubauen im neuen RAP-Modell.

## Add-Ons

Clean Core hat weiterhin Auswirkungen auf Add-Ons, die im ABAP System eingesetzt werden können. Damit ein Partner zukünftig die Clean Core Strategie Ihrer Kunden unterstützen kann, hat SAP die Bedingungen, eine Zertifizierung von Add-Ons zu erhalten, geändert. Somit ist es nicht mehr möglich eine Zertifizierung eines Add-Ons zu erhalten, wenn die Implementierung der Erweitung nicht den Vorgaben von Clean Core (erstellt in ABAP Cloud oder der BTP) entspricht. Eine Ausnahme hiervon ist nur innerhalb eines SAP S/4HANA Cloud, private edition Add-Ons bis Q3/25 möglich.

Bei Add-Ons ohne SAP Zertifizierung in SAP S/4HANA (on premise) oder SAP S/4HANA Cloud, private edition empfehlen wir daher, rechtzeitig mit dem Add-On Partner zu prüfen, ob dieser sein Produkt nach Clean Core entwickelt hat, bzw. dass rechtzeitig ein kompatibles Add-On für einen bevorstehenden Upgrade geliefert werden.