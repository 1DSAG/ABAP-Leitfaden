---
layout: page
title: Grundlagen des Paketkonzepts
permalink: /abap/package_details/
parent: Architektur und Strukturierung in der ABAP Entwicklung
grand_parent: Moderne ABAP Entwicklung
nav_order: 1
---

1. TOC
{:toc}

{: .no_toc}
# Grundlagen des Paketkonzepts

Im Folgenden sind zum besseren Verständnis der im Leitfaden genannten Empfehlungen die Grundlagen hier detailliert erläutert. Wir empfehlen hierzu auch die offizielle SAP Dokumentation zu verwenden.

## Begriffserklärungen zum Paketkonzept

Ein **Paket** dient der Strukturierung von Software. In einem Paket werden Softwareartefakte zusammengefasst, die für einen bestimmten Zweck zuständig sind. Pakete können (und sollten auch) gekapselt sein. Das bedeutet, dass ein Objekt eines Paketes ein Objekt eines anderen Pakets nicht verwenden kann bzw. von einem Objekt eines anderen Pakets nicht verwendet werden kann, sofern diese nicht über eine Paketschnittstelle öffentlich gemacht werden und beim Verwender im Verwendungsnachweis deklariert werden.  
Um unsere Empfehlung für Sie umsetzbar zu machen, werden im Folgenden ein paar Grundlagen genannt, um dann den Nutzen und die Vorteile zu erläutern.

Im SAP Paketkonzept gibt es das **Hauptpaket**, welches Unterpakete, aber keine Entwicklungsobjekte enthält. Das Hauptpaket repräsentiert im Regelfall die Anwendung, die alleine lauffähig ist. Weitere Fälle werden weiter unten beschrieben.  

Ein **Unterpaket** definiert sich dadurch, dass es nicht als Hauptpaket gekennzeichnet ist und einem Hauptpaket zugeordnet ist. Die Unterpakete dienen der internen Strukturierung der Artefakte des Hauptpaketes.  
Das Hauptpaket definiert die Struktur nach außen und stellt die verschiedenen Anwendungen dar. Die Unterpakete definieren die innere Struktur einer Anwendung.  

Die **Paketschnittstellen** werden pro Paket definiert und definieren die Sichtbarkeit der in der Paketschnittstelle enthaltenen Objekten nach außen.

Als letzten hier zu erklärendem Begriff kommt die **Verwendungserklärung**, die in einem Paket gepflegt wird. In die Verwendungserklärung werden Paketschnittstellen aufgenommen, deren Objekte vom aktuellen Paket verwendet werden.  
Verwendet ein Paket A ein Artefakt aus einem Paket B, wird in der Verwendungserklärung des Paketes A, die entsprechende Paketschnittstelle B aufgenommen. Somit ist auf Paketebene sofort ersichtlich, welche Abhängigkeiten das Paket A besitzt (nämlich zu Paket B). Dazu ist die Verwendungserklärung auch im Verwendungsnachweis auswertbar. Somit ist es möglich herauszufinden, wie die Verwendungsbeziehungen gestaltet sind.

Den Hauptpaketen übergeordnet finden sich die **Strukturpakete**, die Hauptpakete auf höchster Ebene zusammenfassen. Diese machen vor allem bei grossen Softwareprojekten Sinn, bei denen es eine große Anzahl von Hauptpaketen gibt.
In Sinne der Komplexitätsreduzierung wird in diesem Leitfaden allerdings auf die Strukturpakete nicht weiter eingegangen. Details finden Sie hierzu in der SAP Dokumentation.  
Strukturpakete einzusetzen, kann sinnvoll sein, wenn im Unternehmen das Paketkonzept bereits umfänglich mit Haupt- und Unterpaketen angewendet wird und eine übergeordnete Struktur sinnvoll abbildbar ist. Strukturpakete werden von SAP selbst verwendet um eine technische gesicherte Entkopplung von Paketen sicherzustellen und dies nicht auf Hauptpaketebene definiert werden soll [SAP Dokumentation: Von Paketen zu Strukturpaketen](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/4aa197adacd5007fe10000000a42189c.html?locale=de-DE).  
Die Paketschnittstellen der Strukturpakete können keine Entwicklungsobjekte enthalten, sondern definieren die Beziehungen zu anderen Strukturpaketen. Damit kann die Deklaration und Pflege von Verwendungsbeziehungen reduziert werden und die technische Entkopplung von Applikationen (wie bei SAP_APPL und SAP_HR) sichergestellt werden.  
Im Rahmen von Cloud werden Strukturpakete als Wurzelpakete der Softwarecomponents benötigt und sind daher dort notwendig.

## Definition des Hauptpakets

In den folgenden Ausführungen beschreiben wir die Aspekte des Paketkonzepts für die Erstellung einer größeren Eigenentwicklung. Auf andere Fälle wird später eingegangen.
Am Anfang der Umsetzung einer Eigenentwicklung muss klar definiert sein, welche Funktion die Software erfüllen soll und welchen SAP Applikationsbereich die Software betrifft. Damit kann nun der Name der Eigenentwicklung als Komponente definiert werden. Dabei müssen Vorgaben der Entwicklungsrichtlinien im Unternehmen wie Namenskonventionen und Präfixe beachtet werden.
Die Namensgebung spielt hier eine wichtige Rolle und sollte gut bedacht werden, unter Berücksichtigung anderer Komponenten. So sollte im Namen ersichtlich sein, um welches SAP Objekt es sich handelt (z.B. Belegtyp, Formulare ...) und welche Funktion die Komponente erfüllt. Da Eigenwicklungen meistens in Bezug zu SAP Funktionen stehen, sollte dieser Bezug auch über den Namensbezug erkennbar sein. Meistens muss der Name noch sinnvoll gekürzt werden, da durch Namensräume und Präfixe die Anzahl der verfügbaren Zeichen begrenzt ist.  
Wenn Sie beispielsweise eine abgegrenzte und wiederverwendbare Erweiterung bzw. Eigenentwicklung im Bereich EWM umsetzen möchten, die Funktionen in der Be- und Verarbeitung von Handling Units behandelt, sollte sich sowohl der Bereich EWM, das Objekt HU, als auch die Aufgabe im Namen wiederfinden. Der Name könnte sich z.B. wie folgt zusammensetzen:  *Z_EWM_HU_PROCESSING*.  
Dieses Paket kann dann mehrere Funktionen in EWM beinhalten, die HU's betreffen.

Damit steht der Name des Hauptpaketes, das nun in SAP erstellt werden kann und sowohl als Hauptpaket als auch als gekapselt eingestellt wird. Bei der Erstellung des Pakets wird nun noch die SAP Applikationskomponente zugeordnet, hierbei sollte dieselbe Komponente verwendet werden, die auch der zugehörigen SAP Standardkomponente zugeordnet ist. Dies kann dem Paket der zugehörigen SAP Objekte, die in Beziehung zur Eigenentwicklung stehen, entnommen werden.

Innerhalb dieses Hauptpaketes sind nun die Unterpakete zu erstellen, die sich im Namen an dem Hauptpaket orientieren, als Postfix aber die Funktion des Unterpaketes ausdrücken. Ein Unterpaket zum EWM-HU Paket, welches das Verpacken betrifft, könnte z.B. wie folgt abgeleitet werden: *Z_EWM_HU_PRC_PACKING*.

## Erstellung der Unterpakete - Unterteilung nach Funktion der enthaltenen Objekte

Die Unterteilung des Hauptpaketes in Unterpakete sollte nicht nach Objekttyp erfolgen (z.B: DDIC, Forms, Klassen), sondern nach logischer Funktion. Je nach Art der Software können folgende Unterpakete erstellt werden:  

- **.._CORE** oder **..._ENG** (für Engine) Basispaket
  In diesem Paket werden Objekte erstellt, die von den anderen Unterpaketen verwendet werden und die zentralen Funktionen wie Geschäftsprozesslogik und gemeinsam genutzte Funktionen enthalten.  
- **.._UI** - Alle Artefakte für Anwendungsoberflächen.
- **.._API** oder **..IF** - z.B: für ODATA services, Klassen oder RAP-BO Interfaces, die von anderen Paketen verwendet werden können und entsprechend in der Paketschnittstelle propagiert werden.
- **.._DATA**- Objekte die Datenbankabfragen kapseln oder anderweitig Daten beschaffen (CDS Artefakte).
- **.._TEST** - Objekte für Unit Tests und Testhelper wie auch Mock-Objekte - alles was zur Testinfrastruktur zugehörig ist.
- **.._HLP**  oder **..SHARED** - Unterpaket für Hilfsobjekte oder Funktionen, die in mehreren Unterpaketen verwendet werden, z.B. Nachrichtenklassen oder Logging Funktionen.

## Einsatz von Paketen bei der Implementierung von BAdIs und bei kleinen Erweiterungen

Die oben beschriebene Struktur ist sinnvoll für größere Entwicklungen, bei denen zahlreiche Objekte erstellt werden, und schafft Ordnung und Übersicht. Die gleiche Vorgehensweise in reduzierter Form macht aber auch für kleine Erweiterungen, wie bei BAdI-Implementierungen, durchaus Sinn.
Hierbei erstellt man ein Hauptpaket als Entsprechung des Paketes des SAP Enhancement Spots, orientiert sich an der Namensgebung und vergibt dieselbe Applikationskomponente.  
Die Unterpakete kann man hier entsprechend den Teilbereichen der einzelnen BADIs strukturieren, je nach Umfang der einzelnen BADIs des Enhancement Spots.
Für Funktionen, die in mehreren BADIs wiederverwendet werden, können wie oben beschrieben Objekte in Helper und Core Unterpaketen erstellt und in den BADIs entsprechend aufgerufen werden.

Manchmal sind Entwicklungen sehr kleine Objekte wie Hilfsreports, oder einzelne Klassen die mehrfach über Pakete verteilte Funktionen bereitstellen. Hierfür jeweils eigene Hauptpakete mit Unterpaketen bereitzustellen, wäre überdimensioniert.  
Für diesen Fall empfehlen wir die Anlage von Hauptpaketen, die funktionsorientiert gemeinsame Funktionen bereitstellen (z.B. 'Bereich'**_UTILS**). Die Unterpakete können dann weiter die einzelnen Aufgabenbereiche gliedern und zentrale Funktionen werden im Core Unterpaket gesammelt.

Idealerweise werden die nach außen sichtbaren Funktionen in den Paketschnittstellen propagiert, so dass die Verwender diese Pakete im Verwendungsnachweis deklarieren können.

## Paketschnittstellen

Die oben beschriebenen Maßnahmen führen dazu, dass frühzeitig architektonische Überlegungen in der Umsetzung berücksichtigt werden müssen und sich die Struktur der Anwendung in den Paketen wiederfindet.  
Maßgebliche Vorteile und Verbesserungen im Softwaremanagement ergeben sich aber erst durch die Nutzung der Paketschnittstellen.

Ist ein Paket in sich geschlossen und die Verwendung von Objekten des Paketes durch andere Pakete ist nicht erforderlich oder gewünscht, benötigt das Paket keine Paketschnittstelle. Handelt es sich aber um ein Paket, das Funktionalitäten nach außen propagieren und somit von anderen Paketen genutzt werden soll, werden Paketschnittstellen benötigt.  
In einer Schnittstelle werden gezielt Objekte aufgenommen, die zur Verwendung durch andere Pakete bestimmt sind. Dabei folgen die Paketschnittstellen derselben hierarchischen Struktur wie die Pakete selbst. Details zum Aufbau von Paketschnittstellen und wie Objekte aus Unterpaketen über das Hauptpaket propagiert werden, findet sich in der SAP-Dokumentation.

Ein gut designtes Paket sollte ein eigenes API- oder Interface Unterpaket besitzen, das Interfaces, Klassen (insbesondere Fassadenklassen) und Artefakte enthält, die für die Verwendung von anderen Paketen freigegeben sind.  
Dieses Interfacepaket mit seinen Objekten versteckt damit gezielt die Implementierung (Information Hiding) und damit die Komplexität der Anwendung. Mittels Propagierung dieser Objekte im Paketinterface werden diese Artefakte explizit zur externen Verwendung deklariert. Somit können innerhalb des Paketes jederzeit Änderungen vorgenommen werden, solange das Interface nach außen stabil bleibt.  
Bei Inkompatiblen Änderungen am Interface werden neue Interfaces erstellt und in die Paketschnittstelle aufgenommen und als neue Version veröffentlicht.

## Verwendungserklärung

Auf Paketebene gibt es neben den Schnittstellen, die die Propagierung nach außen deklariert, noch die Verwendungserklärung. Mit dieser wird aufgelistet, welche Paketschnittstellen ein Paket verwendet. So kann in der Verwendungserklärung geprüft werden, ob die aufgelistete Verwendung und somit die Erzeugung von Abhängigkeiten von Paket xy wirklich gewünscht und vorgesehen ist. Damit werden diese Abhängigkeiten technisch dokumentiert und sind auswertbar bzw. ablesbar.  
Dies gilt bedingt für SAP-Pakete. Sofern SAP-Objekte in Paketschnittstellen deklariert wurden, können diese auch über den Paketcheck und die Vorschlagfunktion automatisiert in den Verwendungsnachweis aufgenommen werden. Allerdings sind seitens SAP die Paketschnittstellen nicht für die Kommunikation zu den Kunden bzgl. der Objektfreigabe vorgesehen.
Zumindest hilft die Verwendungserklärung hier einen Überblick über sichtbare (über die Verwendungserklärung) und unsichtbare (Fehler im Paketcheck) SAP-Objekte zu bekommen.

## Paketprüfung

Eine zentrale Rolle zur sinnvollen Umsetzung des Paketkonzepts in Eigenentwicklungen ist die Paketprüfung. Diese kann In den ABAP Development Tools, im ATC oder in SE80 ausgeführt werden.  
Für die Durchführung der Paketprüfung müssen Pakete gekapselt sein. Ebenso muss auf Systemebene die Paketprüfung gemäß Dokumentation konfiguriert sein.  
Bei der Paketprüfung können zwei Fehlersituationen auftreten, die Ihnen Aufschluss über bestehende Abhängigkeiten geben:  

- **Unsichtbares Objekt**: Wird ein Objekt aus einem anderen Paket verwendet, das nicht in einer freigegebenen Paketschnittstelle enthalten ist, meldet die Paketprüfung einen Fehler, dass das Objekt nicht sichtbar ist.
Hier gibt es verschiedene Möglichkeiten zu reagieren:
Das Objekt soll nicht verwendet werden und der Entwickler muss eine Alternative verwenden oder eine eigenes Objekt innerhalb des Paketes erstellten, dass die Funktion bereitstell.  
Falls die Verwendung gewünscht ist, muss der Paketverantwortliche des anderen Paketes kontaktiert werden, damit das Objekt in die Paketschnittstelle aufgenommen wird.

- **Fehlende Verwendungserklärung**: Wird ein Objekt eines anderen Paketes verwendet, welches sich in einer Paketschnittstelle befindet, muss diese Schnittstelle noch in der Verwendungserklärung deklariert werden um Fehler in der Paketprüfung zu vermeiden. Diese Deklaration kann automatisiert aus der Paketprüfungsmeldung durchgeführt werden, wobei die gesamte Hierarchie berücksichtigt wird. Dies ist bei den komplexen SAP-Paketen hilfreich und zeitsparend.

Der Paketverantwortliche hat die Aufgabe zu prüfen, welche Objekte seines Paketes anderen Paketen zur Verfügung gestellt werden und dementsprechend in die Paketschnittstelle aufzunehmen um Paketprüfungsfehler im verwendenden Paket zu vermeiden. Der Verwender nimmt dann diese Paketschnittstelle in die Verwendungserklärung auf und somit ist auch eine technische Auswertung der Verwendungen möglich.

## Paketkapselung und Paketschnittstellen von Unterpaketen innerhalb des Hauptpaketes

Das Kapseln der Hauptpakete dient der Dokumentation der Abhängigkeiten über die Paketprüfung. Die Kapselung ist allerdings auch für Unterpakete sinnvoll. Dazu sollte pro Unterpaket eine Paketschnittstelle angelegt werden und darin die Objekte aufgenommen werden, die von anderen Unterpaketen verwendet werden. Dementsprechend wird dann auch die Verwendungserklärung gepflegt. Dies bringt einen Verwaltungsaufwand bei der Erstellung einher, bringt aber den Vorteil mit sich, dass die Abhängigkeiten der Unterpakete dokumentiert sind und hier eine gezielte Steuerung und Überwachung möglich ist. Pro Hauptpaket muss eine klare Verwendungsbeziehung definiert sein und eine gemischte Wiederverwendung innerhalb der Unterpakete vermieden werden.  
Gerade bei Sammlerpaketen kann es sinnvoll sein, bei entsprechender Größe, einzelne Pakete herauszulösen und als eigenständige Komponenten bereitzustellen. Dabei ist es hilfreich, hier bereits klare und geordnete Verwendungsbeziehungen zu haben.

## Pakethierarchien

Mit den oben genannten Methoden und Werkzeugen kann eine gute Softwarearchitektur in SAP über die Pakete mit den Abhängigkeiten dargestellt werden. Die Überlegungen die für ein gutes Paketdesign angestellt werden müssen führen letztlich zu einer guten Anwendungsarchitektur, wenn die Designprinzipien für sauberer Architektur eingehalten werden. Hinweise zu Prinzipien moderner Softwarearchitektur finden Sie in einschlägiger Fachliteratur z.B. "Clean Architecture" von Robert C. Martin.  
Bei der Gestaltung der Pakete sollte auch immer der Blick auf die Entwicklungen paketübergreifend erfolgen und bei der Anlage neuer bzw. Erweiterung bestehender Pakete geprüft werden, inwieweit die Pakete zueinander passen und zu prüfen ob Eigenentwicklungen eigener Funktionen in verschiedene Pakete getrennt werden soll. Bei komplexen Systemlandschaften kann es sinnvoll sein, Framework Pakete zu definieren, die Basisfunktionen anbieten, dann Grundfunktionspakete, die die Geschäftslogik abbilden und optionale Add-On Pakete zu erstellen, die unterschiedliche Oberflächentechnologien oder Ausprägungen der Funktionalitäten abbilden. Dadurch entsteht eine Hierarchie von Hauptpaketen, deren Abhängigkeiten über die Paketschnittstellen gut abgebildet und dokumentiert werden können.
Wichtig ist dabei darauf zu achten, dass die Abhängigkeit immer nur in eine Richtung definiert sein darf.

Ein anderer Anwendungsfall wäre z.B. dieselbe Funktionalität für verschiedene Releases bereitzustellen, wobei die Kernfunktion in einem zentralen Paket, die Differenzierungen nach Release in unterschiedlichen Hauptpaketen implementiert sind.

