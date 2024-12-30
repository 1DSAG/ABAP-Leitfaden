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

Die Auswahl in diesem Leitfaden beschränkt sich auf die von SAP bereitgestellten(?) oder (bereits) im Lizenzumfang enthaltenen Produkte. Daneben gibt es noch viele weitere Testmanagement-Lösungen auf dem Markt, die zur Unterstützung der ABAP-Entwicklung verwendet werden können.

## Testwerkzeuge im SAP Solution Manager
Der SAP Solution Manager (https://support.sap.com/en/alm/solution-manager.html // die Seite ist auf EN...) ist ein ausgereiftes System für das Application Lifecycle Management (ALM, Link zu diesem Kapitel), das unter anderem verschiedene Testwerkzeuge enthält.

### Test-Suite
Die Test-Suite des SAP Solution Managers (https://help.sap.com/docs/SUPPORT_CONTENT/sm/3530264795.html) besteht im Wesentlichen aus dem Testplan-Management zur Vorbereitung der Tests und der App "Meine Aufgaben / Tester-Arbeitsvorrat", mit der die Anwender die vorbereiteten und freigegebenen Testfälle durchführen. Dazu stehen für den Testmanager verschiedene Funktionen zur Auswertung und Analyse zur Verfügung.

Im Testplan-Management werden Testpläne angelegt und verwaltet. Das Herzstück ist die Auswahl der Testfälle, die als solche in der Struktur der Lösungsdokumentation (--> Link zu dem Kapitel) abgelegt sind. Diese können dann in kleinere Einheiten, die sogenannten Testpakete, aufgeteilt und den passenden Testern bzw. Testergruppen zugewiesen werden. Auf diese Weise können passgenaue Testpläne, zum Beispiel für Funktionstests, Integrationstests, Regressionstests, Unit Tests (en??) oder User Acceptance Tests (wie heißt das auf deutsch?) erstellt werden.
Manuelle Testfälle werden oft in **Testdokumenten** (Microsoft Word, Microsoft Excel etc.) beschrieben, in denen die durchzuführenden Testschritte aufgeführt sind. Außerdem besteht die Möglichkeit, **URLs** zu hinterlegen, die zu Testfällen führen, welche an einem anderen Ort liegen. Der dritte Testfalltyp im Standard des SAP Solution Managers sind sogenannte **Testkonfigurationen**, die automatisierte Testfälle ansteuern, die zum Beispiel per(?) CBTA (Link zu dem Abschnitt), eCATT (ist das so?? wenn ja, dann Link zu dem Kapitel) oder mit Tricentis-Tools(?) erstellt wurden. (https://help.sap.com/docs/SAP_Solution_Manager/fbc7b5ecf5094fe0b6a2eb966160008f/df49e0555937e263e10000000a44538d.html?locale=de-DE)

Als weitere - modernere - Variante für manuelle Testfälle wurden von SAP **Test Steps** eingeführt (Link zu nähstem Abschnitt).

(Screenshot Testfälle in der SolDoc?)

Die Tester, welche die vom Testmanager bereitgestellten und freigegebenen Testfälle ausführen, bekommen diese in der App "Meine Aufgaben / Tester-Arbeitsvorrat" aufgelistet, mit allen für sie relevanten Informationen. Dort können die Testfälle abgarbeitet werden. Im Falle eines Fehlers kann dieser als sogenannter "Testdefect(???)" gemeldet werden, der dann an das jeweilige Support-Team ausgesteuert wird und - nach Behebung des Fehlers - zum erneuten Testen ansteht.

Die Analysefunktionen der Test Suite bestehen aus verschiedenen Reports, die auf vielfältige Weise die Aktivitäten der Tester aufbereiten und teils grafisch darstellen. Der Testmanager hat damit jederzeit die Übersicht über den Stand und den Fortschritt der Tests.

### Test Steps Designer (oder das volle Programm hier?)
xxx...aus FB... ST-OST Add-on
https://support.sap.com/en/alm/focused-build.html
https://support.sap.com/content/dam/support/en_us/library/ssp/alm/sap-solution-manager/focused-solutions/Focused_Build/sp15/FB_TestManagement_L2.pdf

(Grafik selber machen auf deutsch, in Anlehnung an die Darstellung von SAP --> "Quelle...in Anlehnung an..."?) [und die einzelnen Punkte kurz beschreiben](https://support.sap.com/content/dam/support/en_us/library/ssp/alm/sap-solution-manager/focused-solutions/Focused_Build/sp15/FB_TestManagement_L2.pdf)
![alt text](./img/test_suite_solman_and_fb.png)

### CBTA
xxx...Automatisierung...Standard SolMan
https://help.sap.com/docs/SUPPORT_CONTENT/sm/3530264810.html

## Testwerkzeuge in SAP Cloud ALM
Als Nachfolgeprodukt des SAP Solution Managers, dessen Mainstream-Wartungsende seitens SAP auf Ende 2027 datiert ist, wurde für das Application Lifecycle Management (ALM, Link zu diesem Kapitel bzw. hab ich oben schon) im Jahr xxx2018?xxx SAP Cloud ALM vorgestellt. Das Cloud-Produkt beinhaltet - wie schon der Solution Manager - unter anderem ein integriertes Testmanagement, das sowohl eigenständig (für manuelle Testfälle) als auch in Verbindung mit einer Testautmatisierungslösung wie Tricentis Test Automation (siehe den nächsten Abschnitt bzw. Link dort hin) eingesetzt werden kann. SAP Cloud ALM und damit auch dessen Testmanagement-Funktionen werden kontinuierlich weiterentwickelt.

--> Marco
    Automatische Prozesstests mit CloudALM? (wie) geht das ? 

## Tricentis Test Automation
--> Harald

Tricentis ist ein eigenständiges Unternehmen, das nicht zu SAP gehört, aber durch eine strategische Partnerschaft sehr gut in die SAP-Welt integriert und daher im SAP-Kontext die empfohlene Lösung zur Testautomatisierung ist (https://support.sap.com/en/alm/partners/test-automation.html) / (https://www.tricentis.com/sap).

...verschiedene Ausprägungen...Lizenzen teilweise schon dabei...
        ·	Tosca: Integration in SAP SolMan – Link zu https://documentation.tricentis.com/tosca/2310/de/content/sap_solutionmanager/concept.htm 
        ·	TTA: Integration in SAP Cloud ALM – Link zu https://support.sap.com/en/alm/partners/test-automation.html 

    §	Tool für automatische GUI-Tests über sämtliche Technologien (Webseiten, SAP GUI etc.)

(Grafik selber machen auf deutsch, welches Tricentis-Tool für welches ALM-System etc., in Anlehnung an die Darstellung von SAP --> "Quelle...in Anlehnung an..."?) und die einzelnen Punkte kurz beschreiben
![alt text](./img/tricentis_tools_uebersicht.png)

### Mögliche Einsatzszenarien für automatisierte Testfälle
#### Tägliche Smoke-Tests
--> Harald
Daily Smoke Tests in Testumgebungen...

#### Regressionstests
--> Harald
Automatisierte Testfälle können hervorragend für Regressionstests in Prä-Produktionssystemen eingesetzt werden...
was muss da beachtet werden???  
Testdaten etc.?

-----------------

Quellen:
SAP Cloud ALM forImplementation: Test Management https://support.sap.com/en/alm/sap-cloud-alm/implementation/sap-cloud-alm-implementation-expert-portal/testmanagement.html?anchorId=section_1012737862
SAP Application Lifecycle Management: Test Automation https://support.sap.com/en/alm/partners/test-automation.html (englisch, abgerufen am ...)
Tricentis: Die empfohlene Testlösungvon SAP https://www.tricentis.com/de/sap

----------------------
