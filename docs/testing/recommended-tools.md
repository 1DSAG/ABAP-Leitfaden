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
Die nachfolgend aufgeführten Testwerkzeuge sind nicht ABAP-spezifisch, sondern generell im Rahmen der (SAP)-Softwareentwicklung zu sehen. Das bedeutet auch, dass von Seiten des ABAP-Entwicklers (maskulin?) nichts beachtet werden muss, was die Tests in irgendeiner Weise, also weder positiv oder negativ, beeinflussen könnte.

Die Auswahl in diesem Leitfaden beschränkt sich auf die von SAP bereitgestellten(?) oder (schon) im Lizenzumfang enthaltenen Produkte. Daneben gibt es noch viele weitere Lösungen auf dem Markt, die für die ABAP-Entwicklung verwendet werden können.
Die nachfolgend aufgeführten Tools (Testwerkzeuge?) sind nicht ABAP-spezifisch, sondern generell im Rahmen der (SAP)-Softwareentwicklung zu sehen. Das bedeutet auch, dass von Seiten des ABAP-Entwicklers (maskulin?) nichts beachtet werden muss, was die Tests in irgendeiner Weise (weder positiv oder negativ) beeinflussen könnte.

## Testwerkzeuge im SAP Solution Manager
--> Marco

Der SAP Solution Manager (https://support.sap.com/en/alm/solution-manager.html // die Seite ist auf EN...) ist ein ausgereiftes System für das Application Lifecycle Management (ALM, Link zu diesem Kapitel), das unter anderem verschiedene Testwerkzeugen enthält.

### Test Suite
xxx...Standard SolMan
https://help.sap.com/docs/SUPPORT_CONTENT/sm/3530264795.html

### Test Steps Designer (oder das volle Programm hier?)
xxx...aus FB... ST-OST Add-on
https://support.sap.com/en/alm/focused-build.html
https://support.sap.com/content/dam/support/en_us/library/ssp/alm/sap-solution-manager/focused-solutions/Focused_Build/sp14/FB%20-%20Test%20Management%20-%20L2%20SP14.pdf

### CBTA
xxx...Automatisierung...Standard SolMan
https://help.sap.com/docs/SUPPORT_CONTENT/sm/3530264810.html

## eCATT (extended Computer Aided Test Tool) --> gehört nicht unter "Testwerkzeuge im SAP Solution Manager" !!!
xxx...
Verwendung von eCATT irgendwie referenzieren auf eigenes Kapitel?
https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/de-de/49/6d2fa0e0221ec6e10000000a42189b/frameset.htm
oder https://help.sap.com/saphelp_gbt10/helpdata/DE/20/e81c3b84e65e7be10000000a11402f/frameset.htm ???

## Testwerkzeuge in SAP Cloud ALM

Als Nachfolgeprodukt des SAP Solution Managers, dessen Mainstream-Wartungsende seitens SAP auf Ende 2027 datiert ist, wurde für das Application Lifecycle Management (ALM, Link zu diesem Kapitel bzw. hab ich oben schon) im Jahr xxx2018?xxx SAP Cloud ALM vorgestellt. Das Cloud-Produkt beinhaltet - wie schon der Solution Manager - unter anderem ein integriertes Testmanagement, das sowohl eigenständig (für manuelle Testfälle) als auch in Verbindung mit einer Testautmatisierungslösung wie Tricentis Test Automation (siehe den nächsten Abschnitt bzw. Link dort hin) eingesetzt werden kann. SAP Cloud ALM und damit auch dessen Testmanagement-Funktionen werden kontinuierlich weiterentwickelt.

--> Marco
    Automatische Prozesstests mit CloudALM? (wie) geht das ? 
Als Nachfolgeprodukt des SAP Solution Managers, dessen Mainstream-Wartungsende seitens SAP auf Ende 2027 datiert ist, wurde für das Application Lifecycle Management (ALM, link zu diesem Kapitel) im Jahr xxx2018?xxx SAP Cloud ALM vorgestellt. Das Cloud-Produkt beinhaltet - wie auch der Solution Manager - unter anderem ein integriertes Testmanagement, das sowohl eigenständig (für manuelle Testfälle) als auch in Verbindung mit einer Testautmatisierungslösung wie Tricentis Test Automation (siehe den nächsten Abschnitt) eingesetzt werden kann. SAP Cloud ALM und damit auch dessen Testmanagement-Funktionen werden kontinuierlich weiterentwickelt.

## Tricentis Test Automation
--> Harald

Tricentis ist ein eigenständiges Unternehmen, das nicht zu SAP gehört, aber durch eine strategische Partnerschaft sehr gut in die SAP-Welt integriert und daher im SAP-Kontext die empfohlene Lösung zur Testautomatisierung ist (https://support.sap.com/en/alm/partners/test-automation.html) / (https://www.tricentis.com/sap).
Tricentis ist ein eigenständiges Unternehmen, das nicht zu SAP gehört, aber durch eine (langjährige, tiefgehende?) Partnerschaft sehr gut in die SAP-Welt integriert und daher im SAP-Kontext die empfohlene Lösung zur Testautomatisierung ist (https://support.sap.com/en/alm/partners/test-automation.html).

...verschiedene Ausprägungen...Lizenzen teilweise schon dabei...
        ·	Tosca: Integration in SAP SolMan – Link zu https://documentation.tricentis.com/tosca/2310/de/content/sap_solutionmanager/concept.htm 
        ·	TTA: Integration in SAP Cloud ALM – Link zu https://support.sap.com/en/alm/partners/test-automation.html 

    §	Tool für automatische GUI-Tests über sämtliche Technologien (Webseiten, SAP GUI etc.)

(Grafik selber machen auf deutsch, welches Tricentis-Tool für welches ALM-System etc., in Anlehnung an die Darstellung von SAP --> "Quelle...in Anlehnung an..."?) und die einzelnen Punkte kurz beschreiben
![Clean Core](./img/tricentis_tools_uebersicht.png)

### Mögliche Einsatzszenarien für automatisierte Testfälle
#### Tägliche Smoke-Tests
--> Harald
Daily Smoke Tests in Testumgebungen...

#### Regressionstests
--> Harald
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

o	Cloud ALM
    §	?Automatische Prozesstests mit CloudALM? 
        ·	Geht das ? 
    §	Stand Sept 2024 laut Marco noch nicht gut nutzbar. ( freundlich formulieren ) --> ist das noch so?
o	Tricentis: https://www.tricentis.com/de/sap
    §	Hat erst mal mit ABAP-Entwicklung wenig zu tun, also da wäre nix zu beachten, aber als allgemeines Tool, um Software zu testen
    §	Tool für automatische GUI-Tests über sämtliche Technologien (Webseiten, SAP GUI etc.)



