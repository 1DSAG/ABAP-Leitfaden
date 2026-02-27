---
layout: page
title: Adobe Document Services  
permalink: /forms/adobe-document-services/
parent: Formulare
nav_order: 3
---

{: .no_toc}
# Adobe Document Services  

1. TOC
{:toc}

Adobe Document Services – auch kurz „ADS“ genannt – wird von SAP Interactive Forms als auch SAP S/4HANA Forms benötigt, um die gewünschten Datei- oder Druckformate zu erzeugen (Rendering). Mit anderen Worten handelt es sich hierbei um die Services, welche die Dokumente zur Laufzeit erzeugen und generieren. 

Die erzeugten Dateiformate sind PDF oder PDF/A. Das Format PDF/A stellt hierbei eine Variante des PDF dar, welche verwendet wird um Langzeitarchivierung sicherzustellen. Damit können Dokumente, unabhängig von der verwendeten Software, immer wieder reproduziert werden, da alle relevanten Informationen in der Datei eingebettet sind.  

Die folgenden wichtigsten Druckformate können von den ADS erzeugt werden:
- PCL
- ZPL
- PostScript

Abhängig von der ADS Version werden auch die Druckersprachen z.B. IPL, DPL oder TPCL unterstützt.

Bei den Adobe Document Services muss zwischen zwei Versionen unterschieden werden. Einer lokalen on-premise Version „lokalem ADS“ und einer Cloud Version „SAP Forms Service by Adobe (Cloud-ADS)“.

## ADS On-Premise

- SAP Wartung und Support auf  
    - SAP NetWeaver Application Server Java bis 2027 (erweiterte Wartung bis 2030)  
    - SAP S/4HANA Java bis 2030
- Die Nachfolgelösung wird auf SAP HANA Extended Application Services Advanced Model (XSA) laufen und ist für Q1 2027 mit dem S/4HANA 2025 FPS03 geplant.
- Für Druck-Formulare lizenzkostenfrei

{: .note }
> [Blog zur Maintenance Strategie von SAP](https://community.sap.com/t5/technology-blogs-by-sap/maintenance-strategy-adobe-forms-on-premise/ba-p/13627957)

## SAP Forms Service by Adobe (Cloud-ADS)

- Läuft als Service auf der SAP BTP (Cloud Foundry Environment)
- Bereitstellung und Wartung durch SAP

{: .note }
> Zusätzliche Informationen unter Hinweis 2219598  

Ob die Adobe Document Services in Ihrem System eingerichtet und angebunden sind, können Sie mit dem Testprogramm FP_TEST_00 (Form Processing – Zentrales Testprogramm) schnell und zuverlässig testen.

Weitere Testprogramme sind:

- FP_TEST_01 Form Processing – Zentrales Testprogramm mit Archivierung
- FP_TEST_02 Form Processing – Testprogramm für verschiedene Datentypen