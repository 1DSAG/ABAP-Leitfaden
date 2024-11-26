---
layout: page
title: Empfehlungen für Testwerkzeuge
permalink: /testing/recommended-tools/
parent: Testen
prev_page_link: /testing/other-test-tools/
prev_page_title: Andere Test Tools
nav_order: 3
---

{: .no_toc}
# Empfehlungen für Testwerkzeuge

1. TOC
{:toc}

Die nachfolgend aufgeführten Tools (Testwerkzeuge?) sind nicht ABAP-spezifisch, sondern generell im Rahmen der (SAP)-Softwareentwicklung zu sehen. Das bedeutet auch, dass von Seiten des ABAP-Entwicklers (maskulin?) nichts beachtet werden muss, was die Tests in irgendeiner Weise (weder positiv oder negativ) beeinflussen könnte.

## SAP Cloud ALM

Als Nachfolgeprodukt des SAP Solution Managers, dessen Mainstream-Wartungsende seitens SAP auf Ende 2027 datiert ist, wurde für das Application Lifecycle Management (ALM, link zu diesem Kapitel) im Jahr xxx2018?xxx SAP Cloud ALM vorgestellt. Das Cloud-Produkt beinhaltet - wie auch der Solution Manager - unter anderem ein integriertes Testmanagement, das sowohl eigenständig (für manuelle Testfälle) als auch in Verbindung mit einer Testautmatisierungslösung wie Tricentis Test Automation (siehe den nächsten Abschnitt) eingesetzt werden kann. SAP Cloud ALM und damit auch dessen Testmanagement-Funktionen werden kontinuierlich weiterentwickelt.

## Tricentis Test Automation

Tricentis ist ein eigenständiges Unternehmen, das nicht zu SAP gehört, aber durch eine (langjährige, tiefgehende?) Partnerschaft sehr gut in die SAP-Welt integriert und daher im SAP-Kontext die empfohlene Lösung zur Testautomatisierung ist (https://support.sap.com/en/alm/partners/test-automation.html).

...verschiedene Ausprägungen...Lizenzen teilweise schon dabei...
        ·	Tosca: Integration in SAP SolMan – Link zu https://documentation.tricentis.com/tosca/2310/de/content/sap_solutionmanager/concept.htm 
        ·	TTA: Integration in SAP Cloud ALM – Link zu https://support.sap.com/en/alm/partners/test-automation.html 

(Grafik, welches Tricentis-Tool für welches ALM-System etc.?)

(sollen wir auf 4 Ebenen gehen?)
### Mögliche Einsatzszenarien
#### Tägliche Smoke-Tests
Daily Smoke Tests in Testumgebungen...

#### Regressionstests
Automatisierte Testfälle können hervorragend für Regressionstests in Prä-Produktionssystemen eingesetzt werden...
was muss da beachtet werden???  
Testdaten etc.?

-----------------

Quellen:
SAP Cloud ALM forImplementation: Test Management https://support.sap.com/en/alm/sap-cloud-alm/implementation/sap-cloud-alm-implementation-expert-portal/testmanagement.html?anchorId=section_1012737862
SAP Application Lifecycle Management: Test Automation https://support.sap.com/en/alm/partners/test-automation.html (englisch, abgerufen am ...)
Tricentis: Die empfohlene Testlösungvon SAP https://www.tricentis.com/de/sap

----------------------
/// Stichpunkte aus der Word-Datei ///

o	Cloud ALM
    §	?Automatische Prozesstests mit CloudALM? 
        ·	Geht das ? 
    §	Stand Sept 2024 laut Marco noch nicht gut nutzbar. ( freundlich formulieren ) --> ist das noch so?
o	Tricentis: https://www.tricentis.com/de/sap
    §	Hat erst mal mit ABAP-Entwicklung wenig zu tun, also da wäre nix zu beachten, aber als allgemeines Tool, um Software zu testen
    §	Tool für automatische GUI-Tests über sämtliche Technologien (Webseiten, SAP GUI etc.)



