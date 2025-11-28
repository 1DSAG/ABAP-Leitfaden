---
layout: page
title: Weitere Testwerkzeuge
permalink: /testing/recommended-tools/
parent: Softwaretest mit ABAP Unit
nav_order: 4
---

{: .no_toc}
# Empfehlungen für Testwerkzeuge

1. TOC
{:toc}

Ergänzend zu den Ausführungen zu ABAP Unit möchten wir Ihnen noch weitere Testwerkzeuge aufzeigen, die im Kontext von Testing in SAP eingesetzt werden können. Diese dienen zur Unterstützung des Testens der Applikationen im Geschäftsprozess Kontext. Diese Werkzeuge sind nicht ABAP-spezifisch, sondern generell im Rahmen der (SAP)-Softwareentwicklung zu sehen.  
Dies bedeutet, dass von Seiten der ABAP-Entwicklung keine besonderen Vorkehrungen bezgl. der Tools vorgenommen werden müssen.  
Allerdings ist ABAP Unit als Grundlage und Testunterstützung ist Voraussetzung, um grundlegende Fehler in der Entwicklungsphase zu vermeiden, zu entdecken und eine angemessene Softwarequalität sicherzustellen. Ist ABAP Unit umfangreich im Einsatz, können Sie sich beim Testen der Anwendungen mit den hier genannten Tools auf Fehler konzentrieren, die sich aus der Integration und das Zusammenspiel der Anwendungen ergeben. Die Tests werden nicht mehr durch Fehler in tieferen Softwareschichten unterbrochen und somit wird die Anzahl der Testzyklen und damit der Testaufwand signifikant reduziert.

Die Auswahl in diesem Leitfaden beschränkt sich auf die von SAP präferierten und teilweise schon im Lizenzumfang enthaltenen Produkte. Daneben gibt es noch viele weitere Testmanagement-Lösungen auf dem Markt, die zur Unterstützung der ABAP-Entwicklung verwendet werden können.

## Testwerkzeuge im SAP Solution Manager
Der [SAP Solution Manager](https://support.sap.com/en/alm/solution-manager.html) ist ein ausgereiftes und bewährtes System für das [Application Lifecycle Management](/ABAP-Leitfaden/application-lifecycle-management), das unter anderem verschiedene Testwerkzeuge enthält.

### Test-Suite
Die [Test-Suite des SAP Solution Managers](https://help.sap.com/docs/SUPPORT_CONTENT/sm/3530264795.html?mt=de-DE) besteht im Wesentlichen aus dem Testplan-Management zur Vorbereitung der Tests und einer Tester-App, mit der die Anwender, d.h. die Tester, die vorbereiteten und freigegebenen Testfälle durchführen. Weiterhin stehen für den Testmanager verschiedene Funktionen zur Auswertung und Analyse zur Verfügung.

Im Testplan-Management werden Testpläne angelegt und verwaltet. Das Herzstück ist die Auswahl der Testfälle, die als solche in der Struktur der [Lösungsdokumentation](https://help.sap.com/docs/SAP_Solution_Manager/c3c5ec585ee248228ddb6c3f08073ea9/2cb3e75e134249a2bd091a40fe2f6d61.html?mt=de-DE) (engl. Solution Documentation, kurz "SolDoc") abgelegt sind. Diese können dann in kleinere Einheiten, die sogenannten Testpakete, aufgeteilt und den entsprechenden Testern bzw. Testergruppen zugewiesen werden. Auf diese Weise können passgenaue Testpläne, zum Beispiel für Funktionstests, Integrationstests, Regressionstests, Komponententests (engl. "Unit Tests") oder Akzeptanz- bzw. Abnahmetests (eng. "User Acceptance Tests") erstellt werden.

![Darstellung: Testmanagement im SAP Solution Manager](./img/darstellung_solman_testmanagement_neu.png)

Schematische Darstellung: Testplan mit Testpaketen und Testfällen aus der SolDoc (Quelle: eigene Darstellung)
{: .img-caption}

Manuelle Testfälle werden oft in **Testdokumenten** (mit Microsoft Word, Microsoft Excel etc.) beschrieben, in denen die durchzuführenden Testschritte detailliert aufgeführt sind. Außerdem besteht die Möglichkeit, **URLs** zu hinterlegen, die zu Testfällen führen, welche an einem anderen Ort liegen. Der dritte Testfalltyp im Standard des SAP Solution Managers sind sogenannte **Testkonfigurationen**, die automatisierte Testfälle ansteuern, die zum Beispiel mittels [CBTA (komponentenbasierte Testautomatisierung)](#Komponentenbasierte-Testautomatisierung), eCATT (extended Computer Aided Test Tool) oder mit [Tricentis Test Automation](#Tricentis-Test-Automation) erstellt wurden (siehe dazu das [Kapitel zu den Testfällen im SAP Help Portal](https://help.sap.com/docs/SAP_Solution_Manager/fbc7b5ecf5094fe0b6a2eb966160008f/df49e0555937e263e10000000a44538d.html?locale=de-DE)). 
Als weitere Variante für manuelle Testfälle wurden von SAP [Testschritte (engl. "Test Steps")](#Testschritt-Designer) eingeführt, die allerdings nur nach Installation des Add-on "Focused Build" zur Verfügung stehen.

Die Tester, welche die vom Testmanager bereitgestellten und freigegebenen Testfälle ausführen, bekommen diese in der App "Meine Aufgaben / Tester-Arbeitsvorrat" aufgelistet, mit allen für sie relevanten Informationen. Dort können die Testfälle abgearbeitet werden. Im Falle eines Fehlers kann dieser als sogenannter Testfallfehler (engl. "Test defect") gemeldet werden, der dann an das jeweilige Support-Team ausgesteuert wird und - nach Behebung des Fehlers - zum erneuten Testen ansteht.

Die Analysefunktionen der Test Suite bestehen aus verschiedenen Reports, die auf vielfältige Weise die Aktivitäten der Tester aufbereiten und teils grafisch darstellen. Der Testmanager hat damit jederzeit die Übersicht über den Stand und den Fortschritt der Tests.

### Testschritt-Designer
Aus dem Solution Manager Add-on ["Focused Build"](https://support.sap.com/en/alm/focused-build.html) (Softwarekomponente ST-OST), das von SAP in erster Linie für die agile Softwareentwicklung konzipiert wurde und seit dem Jahr 2020 kostenlos zur Verfügung gestellt wird, ist beim Testmanagement speziell der [Testschritt-Designer](https://help.sap.com/docs/Focused_Build_Focused_Insights/53cb8e90c8504f31bb44d4f0029b4b98/84bc67026ded45e58c7f29296a5d3f35.html?mt=de-DE) hervorzuheben, der auch in Kombination mit dokumentenbasierten Testfällen verwendet kann, so dass sich in einem Testpaket gleichzeitig sowohl klassische Testdokumente als auch Testschritte befinden können. Testschritte sind eine moderne, elegante Möglichkeit, um manuelle Testfälle abzubilden, die im Gegensatz zu herkömmlichen Testdokumenten allerdings etwas mehr an Vorarbeit bei der Erstellung verlangen. Andererseits können aus gut dokumentierten Prozessen mit detaillierten Prozessschritten durch wenige Klicks Testschritt-Designer-Testfälle generiert werden. 

Mit Focused Build wird eine weitere Tester-App namens "Meine Testausführungen" ausgeliefert, die für Testschritt-Designer-Testfälle optimiert und sehr einfach zu bedienen ist. Diese App beschränkt sich auf die für den Tester absolut notwendigen Funktionen. Sie kann auch für rein dokumentenbasierte Testfälle oder für Testpakete mit gemischten Testfällen verwendet werden und macht die Testfallausführung sehr angenehm.
Die "klassische" App "Meine Aufgaben / Tester-Arbeitsvorrat" ist etwas mächtiger, dafür allerdings auch schwieriger zu handhaben. Sie kann ebenso für beide Testfalltypen genutzt werden, wobei beim Aufruf eines Testschritt-Designer-Testfalls in "Meine Testausführungen" abgesprungen wird, was anfangs eventuell verwirrend sein kann.

![Darstellung: Möglichkeiten der SAP Solution Manager Test Suite und der Ergänzung aus Focused Build](./img/solman_test_suite_focused_build.png)

Möglichkeiten der SAP Solution Manager Test Suite (unten) und der Ergänzung aus Focused Build (oben) [(Quelle: SAP)](https://support.sap.com/content/dam/support/en_us/library/ssp/alm/sap-solution-manager/focused-solutions/Focused_Build/sp15/FB_TestManagement_L2.pdf)
{: .img-caption}

{: .note }
> Sofern Ihre Anwender ein SAP Fiori-Launchpad als Einstiegspunkt in die SAP-Welt nutzen, betten Sie die Kachel “Meine Testausführungen” als iFrame ein, auf der die Anzahl der offenen Testpakete dargestellt wird, die dem jeweiligen Nutzer zugeordnet sind.

### Komponentenbasierte Testautomatisierung
Die [komponentenbasierte Testautomatisierung](https://help.sap.com/docs/SAP_Solution_Manager/fbc7b5ecf5094fe0b6a2eb966160008f/00e90f0489994e76ad5999a63bbf4f30.html?locale=de-DE) (Component-Based Test Automation, kurz CBTA) ist das Bordwerkzeug des SAP Solution Managers zur Automatisierung von Testfällen und im Standardlieferumfang enthalten.

Mit CBTA können Testfälle für unterschiedliche Technologien wie etwa SAP GUI, SAP CRM Web Client, Web Dynpro ABAP, Business Server Pages (BSP), SAP UI5/FIORI und viele mehr automatisiert werden.
Die Erstellung erfolgt mittels eines Testrecorders, der ein Testskript mit den auszuführenden Schritten generiert. Die einzelnen modularen Komponenten (das "C" in CBTA), die bei der Aufzeichnung eines Testskripts erzeugt werden, können wiederverwendet und als [zusammengesetzte Testskripte](https://help.sap.com/docs/SAP_Solution_Manager/fbc7b5ecf5094fe0b6a2eb966160008f/77f3f335ba9c4f0b8ec79924991d7748.html?locale=de-DE) für Ende-zu-Ende-Tests verwendet werden.

Die Testskripte werden in sogenannte Testkonfigurationen gepackt und können darüber in der Lösungsdokumentation - neben manuellen Testfällen und URLs - abgelegt werden.

{: .note }
> Mit dem Wartungsende des SAP Solution Managers rückt auch das Ende von CBTA näher. Daher ist es ratsam zu überlegen, ob eine zukunftsfähige Drittanbieter-Lösung wie Tricentis Test Automation (siehe unten) zur Testautomatiserung vielleicht jetzt schon die bessere Alternative ist.

## Testwerkzeuge in SAP Cloud ALM
Als Nachfolgeprodukt des SAP Solution Managers, dessen Mainstream-Wartungsende seitens SAP auf Ende 2027 datiert ist, wurde [SAP Cloud ALM](https://support.sap.com/en/alm/sap-cloud-alm.html) für die Umsetzung des [Application Lifecycle Management](/ABAP-Leitfaden/application-lifecycle-management) entwickelt. Das Cloud-Produkt beinhaltet - wie schon der Solution Manager - unter anderem ein integriertes Testmanagement, das sowohl eigenständig (für manuelle Testfälle) als auch in Verbindung mit einer Testautomatisierungslösung wie [Tricentis Test Automation](#Tricentis-Test-Automation) eingesetzt werden kann. SAP Cloud ALM und damit auch dessen Testmanagement-Funktionen werden von SAP kontinuierlich weiterentwickelt.

Ähnlich wie im SAP Solution Manager gliedert sich das [Testmangement in SAP Cloud ALM](https://support.sap.com/en/alm/sap-cloud-alm/implementation/sap-cloud-alm-implementation-expert-portal/testmanagement.html?anchorId=section_1012737862
) in eine App für die **Testvorbereitung** von manuellen und automatisierten Testfällen, eine App für die Verwaltung von **Testplänen**, eine für die **Testausführung**, eine Analytics-App für die **Testausführungsanalyse** sowie eine zur Übersicht über Testfallfehler, hier **Defects** genannt.

Eine (Stand: Mai 2025) in SAP Cloud ALM noch fehlende Funktion, die von vielen Anwendern im Solution Manager intensiv genutzt wird, ist die Gruppierung von Testfällen innerhalb eines Testplans in Testpakete, mit der Möglichkeit zur passgenauen Zuordnung von Testergruppen inklusive Wiederverwendung, wie im Abschnitt [Test-Suite](#Test-Suite) dargestellt.

SAP liefert eine große Anzahl an Standardprozessen inklusive Prozessablauf-Diagrammen und der zugehörigen Testaktivitäten aus, die sehr leicht in SAP Cloud ALM verwendet und bei Bedarf angepasst werden können, ähnlich wie beim [Testschritt-Designer](#Testschritt-Designer) aus dem Focused Build-Paket.

Ein Testautomatisierungswerkzeug für S/4HANA Cloud Public Edition ist in SAP S/4HANA Cloud integriert und unterstützt das automatisierte Testen von Standard- und kundenspezifischen Geschäftsprozessen. Es sind über 300 vorgefertigte Testskripte vorhanden, die auf SAP Best Practices basieren. Diese Skripte decken Standardgeschäftsprozesse ab und können direkt ausgeführt werden.
 
Für umfangreichere Szenarien können Testwerkzeuge von Drittanbietern über die von SAP bereitgestellten APIs der [SAP Cloud ALM Test Automation API](https://api.sap.com/api/CALM_TEST_AUTOMATION/overview) integriert werden. Dies ermöglicht Flexibilität bei der Verwaltung komplexer Testumgebungen.

![Darstellung: Testen mit SAP Cloud ALM](./img/sap_test_automation_api.jpg)

Testen mit SAP Cloud ALM (Quelle: SAP)
{: .img-caption}

## Tricentis Test Automation
Tricentis ist ein eigenständiges Unternehmen, das nicht zu SAP gehört, aber [durch eine strategische Partnerschaft sehr gut in die SAP-Welt integriert](https://support.sap.com/en/alm/partners/test-automation.html) und daher im SAP-Kontext die empfohlene Lösung zur Testautomatisierung ist.

Eine Schnittstelle zwischen dem SAP Solution Manager und Tricentis Tosca existiert schon seit 2017. Im Jahr 2020 wurde die strategische Partnerschaft zwischen SAP und Tricentis weiter vertieft. Seitdem ist die Automatisierungsfunktionalität von Tricentis Tosca im SAP Solution Manager und inzwischen auch in SAP Cloud ALM integriert. Alle SAP Kunden mit einem SAP Enterprise Support Vertrag sind berechtigt, Tricentis Test Automation für SAP ("TTA for SAP") als Laufzeitlizenz zu nutzen. Darüber hinaus wird die Plattform von Tricentis über den SAP-Vertrieb im Rahmen der [SAP Solution Extensions](https://www.sap.com/products/solution-extensions.html) verkauft.

[TTA for SAP](https://support.sap.com/en/alm/partners/test-automation.html) ist eine Untermenge von Tricentis Tosca. Es verwendet die gleichen Konzepte für automatisierte Testfälle wie Tosca selbst, ist aber auf SAP-Anwendungen beschränkt. Weiterhin gibt es Funktionalitäten aus Tosca, die in "TTA for SAP" nicht vorhanden sind, wie z.B. die Testfallentwurfsfunktionen oder das Anforderungs- und Problem-Management.

TTA for SAP ist für die [Verwendung mit der Test Suite des SAP Solution Managers](https://support-hub.tricentis.com/open?id=manual&lang=en&path=%2Ftosca%2F2510%2Fen%2Fcontent%2Fsap_solutionmanager%2Fconcept.htm&product=tosca&sessionRotationTrigger=true&type=product_manual&version=2025.1) gedacht. Dabei dient die Test Suite als Testmanagement-Tool (für Tests, Planung, Reporting und mehr) und TTA als Automatisierungs-Tool. Dazu wird in der Test Suite eine Testkonfiguration angelegt, die als Hülle für den automatischen Test dient. Der automatische Testfall kann direkt aus der Test Suite aufgerufen werden. Nach Ablauf des Testfalls wird der Status dann wieder an die Test Suite zurückgemeldet. Dies gilt analog für das Zusammenspiel des Solution Managers mit dem eigenständigen Automatisierungs-Tool Tricentis Tosca. Dieses wird von SAP als "SAP Enterprise Continuous Testing by Tricentis" (ECT) angeboten.
 
Auch für SAP Cloud ALM gibt es eine integrierte Lösung zur Testautomatisierung. "[Tricentis Test Automation für SAP mit SAP-Cloud-ALM-Integration](https://help.sap.com/docs/cloud-alm/tricentis-test-automation-for-sap/overview?locale=de-de)" ist ein gemeinsames cloudbasiertes Angebot von SAP und Tricentis. Es kombiniert die Application-Lifecycle-Management-Fähigkeiten von SAP Cloud ALM mit den Testautomatisierungsfunktionen von Tricentis. So werden automatisierte, funktionale und durchgängige Softwaretests für alle browserbasierten SAP-Produkte und -Anwendungen ermöglicht. Tricentis liefert dazu auch Möglichkeiten zur Testorchestrierung, Ausführungsüberwachung und zum Testreporting. Um diese Funktionalität zu verwenden muss ein Tricentis-Tenant eingerichtet und mit SAP Cloud ALM verbunden werden. Allerdings gibt es wie bei TTA Einschränkungen bzgl. Usern und Speicher. Für die volle Funktionalität muss auch hier ein eigenständiges Tricentis-Tool erworben werden, die "[SAP Test Automation by Tricentis](https://www.sap.com/germany/products/technology-platform/test-automation.html)".
 
SAP Cloud ALM bietet mit der "[SAP Cloud ALM Test Automation API](https://api.sap.com/api/CALM_TEST_AUTOMATION/overview)" eine Schnittstelle zu Drittanbieter-Werkzeugen. Über diese Schnittstelle kann neben Produkten anderer Anbieter auch das umfassende Tricentis-Testautomatisierungstool "SAP Test Automation by Tricentis" angeschlossen werden. Damit sind integrierte Tests mit SAP-Anwendungen und Drittanbieter-Anwendungen möglich. Auch dieses Produkt von Tricentis kann über den SAP-Vertrieb erworben werden.

![Darstellung: Integration der SAP ALM-Tools mit den Test Automatisierungs-Tools von Tricentis](./img/tricentis_test_automation_uebersicht.jpg)

Integration der SAP ALM-Tools mit den Test Automatisierungs-Tools von Tricentis (Quelle: SAP)
{: .img-caption}