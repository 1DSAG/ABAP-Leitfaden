---
layout: page
title: Architektur und Strukturierung in der ABAP Entwicklung
permalink: /abap/architecture_and_design/
parent: Moderne ABAP Entwicklung
nav_order: 2
---

{: .no_toc}

# Architektur und Strukturierung in der ABAP Entwicklung

1. TOC
{:toc}

## Architektur und Struktur als Fundament und Rahmen einer guten SAP Anwendung  

In vielen SAP ERP Systemen finden sich zahlreiche und umfangreiche Eigenentwicklungen die im Laufe der Lebenszeit des Systems entstanden und erweitert wurden. Je komplexer ein System, desto wichtiger ist eine gute Strukturierung der einzelnen Komponenten und Applikationen.
In SAP Systemen ist eine gute und übersichtliche Strukturierung, die gängigen Softwarearchitekturprinzipien folgt nicht immer gegeben. Dies hat unter Anderem folgende Gründe:

- Die Entwicklungen wurden begonnen als das SAP-Paketkonzept noch nicht vorhanden war und daher flache und grob strukturierte Entwicklungsklassen verwendet wurden (z.B. pro Entwicklungsteam oder Modul). Dieses Prinzip wurde nach Einführung des Paketkonzepts beibehalten.
- Das Wissen über das Paketkonzept und Anwendung von Softwarearchitekturprinzipien ist im ABAP-Umfeld bis heute nicht hinreichend bekannt
- Es besteht hoher Zeit- und Termindruck. Die Frage, wie eine Anwendung sinnvoll in Paketen strukturiert werden kann wird aus Zeitgründen dann nicht gestellt oder vernachlässigt.
- Viele Entwicklungen betreffen die Weiterentwicklung bestehender Funktionalitäten - ein Redesign und eine damit verbundene Paketstrukturierung wird selten eingeplant.  

Als Folge dieser Rahmenbedingungen können sich folgende Probleme ergeben:

- Änderungen an bestehender Software erfordern hohe Aufwände versusacht durch aufwändige Analyse um zu ändernden Artefakte zu finden und die Änderung umzusetzen
- Unklare Verantwortlichkeiten einzelner Artefakte.
- Abhängigkeiten zwischen Objekten und Anwendungen sind nicht ersichtlich
- Änderungen führen zu nicht vorhersehbaren Seiteneffekten und damit zu erhöhten Entwicklungs- und Fehlerbereinigungsaufwänden.
- Es kann zu Problemen bei Transporten kommen, wenn nicht alle notwendigen Objekte korrekt transportiert wurden.
- Hohe Aufwände bei Fehlersuche und -Korrektur.
- Redundanzen von Funktionen und Code

Software wird in der Komplexität sehr gern unterschätzt und nur wer von Anfang an sich Gedanken über eine gute Softwarearchitektur gemacht hat und die Anwendung laufend technisch und strukturell auf dem aktuellen Stand hält, wird mit der oben beschriebenen Problematik weniger konfrontiert sein.  
Daher ist es essentiell sich zuallererst Gedanken zu machen, welche Funktionen und Zuständigkeiten eine zu erstellende Anwendung haben soll, wie die Verantwortlichkeiten *geregelt* sind und wie sich dies letztendlich in der Paketstruktur widerspiegelt.  
Mit dem SAP Paketkonzept haben Sie das Werkzeug um die Grundlagen für eine saubere und zukunftsfähige Anwendungsarchitektur zu legen.  

## Strukturierung von Software in Paketen

### Vorbemerkung zum Paketkonzept

Die ABAP Entwicklung ist stark im Wandel, insbesondere der Weg der SAP in die Cloud wird auch die ABAP Entwicklung mit deren Tools und Methoden in naher Zukunft weiterhin maßgeblich beeinflussen.  
In den folgenden Abschnitten wird auf die Anwendung des Paketkonzepts eingegangen, welches auf On-Premise Systemen ab [ab SAP Web Application Server 6.2 bzw. deren Erweiterung ab Netweaver 7.3 EHP1] eingesetzt werden kann.  
Im Kontext von ABAP Cloud, ist das hier beschriebene Konzept nicht mehr 1:1 anwendbar, da Paketschnittstellen in der Cloud nicht mehr unterstützt werden.  
Das Prinzip der Trennung von Komponenten und der Definition von Abhängigkeitsbeziehungen zwischen Paketen wird in ABAP Cloud über Softwarecomponents und Softwarerelations behandelt. Die Pakete darunter dienen nur zur Strukturierung der Anwendungen.  
Des Weiteren können einzelne Objekte für die Verwendung aus anderen Softwarekomponenten über die Release Status freigegeben werden.

Die Umsetzung und Anwendung des hier beschriebenen Konzepte ist in allen Versionen von SAP ERP sinnvoll, das es Entwicklungen strukturiert, Abhängigkeiten und Sichtbarkeit deklariert und damit hilft gute Anwendungen zu erstellen.  
Des Weiteren bereitet es sowohl die Entwickler, als auch die Entwicklerorganisation auf die Entwicklung in der Cloud vor, da bezüglich der Strukturierung von Software dann nicht mehr die allgemeinen Prinzipien erlernt werden müssen, sondern die bestehenden Konzepte nur noch auf die neuen Strukturartefakte übertragen werden.

### Das SAP Paketkonzept und die Aufgabe von Paketen

SAP hat, wie in anderen Programmiersprachen wie z.B. JAVA üblich, auch in ABAP ein Paketkonzept implementiert, mit dem es Möglich ist, die Software auf verschiedenen Ebenen zu strukturieren. Vor der Verfügbarkeit des Paketkonzepts waren Entwicklungsobjekte in Entwicklungsklassen als flache Struktur organisiert.  
Mit der Einführung des Paketkonzepts ergeben sich deutlich erweiterte Möglichkeiten der Softwarestrukturierung, die zwar nicht direkt auf die Funktionalität an sich wirken, aber spätestens bei der Wartung, Pflege und Erweiterung der Eigenentwicklung deutliche Vorteile mit sich bringen. Da es seitens SAP eine ausführliche und gut verständliche Dokumentation des Paketkonzeptes gibt, werden wir hier nicht auf das Paketkonzept im Detail eingehen, einen praxisnahen Überblick und Empfehlungen geben, wie bei Erstellung von Eigenentwicklungen, im Weiteren "Software" genannt, vorgegangen werden kann, um Pakete in ABAP sinnvoll und nutzbringend einzusetzen.
[SAP Dokumentation ABAP Workbench - Package Builde](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/af40bd38652c8c42e10000009b38f8cf.html?locale=de-DE)

>**Empfehlungen**  
- ***Nutzen Sie das Paketkonzept:***
- Schalten Sie auf ihren SAP-Systemen die Paketprüfung ein.
- Erstellen Sie für Ihre Eigenentwicklungen Hauptpakete die sich an architektonischen Erfordernissen (Single Responsibility) orientieren.
- Schalten Sie pro Paket die Paketkapselung ein.
- Gruppieren und Strukturieren Sie das Paket mit Unterpaketen anhand den Zuständigkeiten und nicht nach Objekttyp
- Machen Sie während des Entwicklungsprozesses regelmässig Paketchecks um Abhängigkeiten zu erkennen  
- Prüfen Sie bei nicht sichtbaren Objekten Alternativen (z.B. vergleichbares Objekt mit Sichtbarkeit aus anderem Paket, Eigendefintion im Paket ...)
- Nehmen Sie gewünschte Abhängigkeiten in den Verwendungsnachweis auf.
- Vermeiden Sie die Erstellung sehr grosser Pakete oder "Sammelpakete" die zahlreiche unabhängige Funktionen bündeln.
{: .highlight}

### Grundlagen und Begriffserklärungen zum Paketkonzepts

Ein **Paket** ist in erster Linie ein Mittel um Software zu strukturieren. In einem Paket werden Softwareartefakte zusammengefasst, die für einen bestimmten Zweck zuständig sind. Pakete können (und sollten auch) gekapselt sein. Das bedeutet, dass ein Objekt eines Paketes ein Objekt eines anderen Pakets nicht verwenden kann bzw. von einem Objekt eines anderen Pakets nicht verwendet werden kann, sofern diese nicht über eine Paketschnittstelle öffentlich gemacht werden und beim Verwender im Verwendungsnachweis deklariert werden.  
Um unsere Empfehlung für Sie umsetzbar zu machen werden im Folgenden ein paar Grundlagen genannt um dann den  Nutzen und die Vorteilen zu erläutern.

Im SAP Paketkonzept gibt es die sogenannten **Hauptpakete**, die zur Strukturierung der zu erstellenden Softwarekomponente dienen, diese können selbst nur Unterpakete aber keine Entwicklungsobjekte enthalten.  
Darunter es gibt **Unterpakete**, die einem Hauptpaket zugeordnet sind. Die Unterpakete dienen der internen Strukturierung der Artefakte des Hauptpaketes.  
Den Hauptpaketen übergeordnet finden sich die **Strukturpakete**, die Hauptpakete auf höchster Ebene zusammenfassen. Die Paketschnittstellen der Strukturpakete können keine Entwicklungsobjekte enthalten sondern definieren die Beziehungen zu anderen Strukturpaketen. Damit kann die Deklaration und Pflege von Verwendungsbeziehungen reduziert werden und die technische Entkopplung von Applikationen (z.B: SAP_APPL und SAP_HR) sichergestellt werden.
In Sinne der Komplexitätsreduzierung wird in diesem Leitfaden allerdings auf die Strukturpakete nicht weiter eingegangen. Details finden Sie hierzu in der SAP Dokumentation. Strukturpakete einzusetzen, kann sinnvoll sein, wenn im Unternehmen das Paketkonzept bereits umfänglich mit Haupt- und Unterpaketen angewendet wird und eine übergeordnete Struktur sinnvoll abbildbar ist bzw. eine technisch stärke Entkopplung von Paketen gewünscht ist und dies nicht auf Hauptpaketebene definiert werden soll.  
Im Rahmen von Cloud werden Strukturpakete allerdings als Wurzelpakete der Softwarecomponents benötigt (s.o.).

Mit der Strukturierung von Softwareobjekten mittels Paketen ergeben sich bereits Vorteile durch verbesserte Übersichtlichkeit und Ordnung bezüglich der erstellten Artefakte. Der Vorteil von Paketen ergibt sich aber erst durch die Verwendung von **Paketschnittstellen** und deren konsistenten Pflege.  
Eine Paketschnittstelle definiert, welche Artefakte eines Paketes (Haupt- oder Unterpaket) nach außen sichtbar sind.  

Als letzten hier zu erklärendem Begriff kommt die **Verwendungserklärung**, die in einem Paket gepflegt wird.  
Verwendet ein Paket A ein Artefakt aus einem Paket B, wird in der Verwendungserklärung des Paketes A, das Paket B aufgenommen. Somit ist auf Paketebene sofort ersichtlich, welche Abhängigkeiten das Paket A besitzt (nämlich zu Paket B). Dazu ist die Verwendungserklärung auch im Verwendungsnachweis auswertbar. Somit ist es möglich herauszufinden, welche Pakete Abhängigkeiten zu dem Paket haben.

### Anwendung des Paketkonzepts in der Praxis

#### Definition des Hauptpakets

In den folgenden Ausführungen beschreiben wir die Aspekte des Paketkonzepts für die Erstellung einer größeren Eigenentwicklung. Auf andere Fälle wird später eingegangen.
Am Anfang der Umsetzung einer Eigenentwicklung muss klar definiert sein, welche Funktion die Software erfüllen soll und in welchen SAP Applikationsbereich die Software betrifft. Damit kann nun der Name der Eigenentwicklung als Komponente definiert werden. Dabei müssen Vorgaben der Entwicklungsrichtlinien im Unternehmen wie Namenskonventionen und Präfixe beachtet werden.
Die Namensgebung spielt hier eine wichtige Rolle und sollte gut bedacht werden und unter Berücksichtigung anderer Komponenten erfolgen. So sollte im Namen ersichtlich sein, um welches SAP Objekt es sich handelt (z.B. Belegtyp, Formulare ...) und welche Funktion die Komponente erfüllt. Da Eigenwicklungen meistens in Bezug zu SAP Funktionen stehen, sollte der Bezug auch über den Namensbezug erkennbar sein. Meistens muss dann noch der Name sinnvoll gekürzt werden, da durch Namensräume und Präfixe die Anzahl der Zeichen begrenzt ist.  #
Wenn Sie beispielsweise eine eine abgegrenzte und wiederverwendbare Erweiterung bzw. Eigenentwicklung im Bereich EWM umsetzen möchten die Funktionen in der Be- und Verarbeitung von Handling Units behandelt, sollte sich sowohl der Bereich EWM, das Objekt HU als auch die Aufgabe im Namen wiederfinden. Der Name könnte sich dann wie folgt zusammensetzen:  *Z_EWM_HU_PROCESSING*.  
Dieses Paket kann dann mehrere Funktionen in EWM die HU's betreffen beinhalten.

Damit steht der Name des Hauptpaketes, das nun in SAP erstellt werden kann und sowohl als Hauptpaket als auch als gekapselt eingestellt wird. Bei der Erstellung des Pakets wird nun noch die SAP Applikationskomponente zugeordnet, hierbei sollte die Selbe Komponente verwendet werden, die auch der zugehörigen SAP Standardkomponente zugeordnet ist. Dies kann dem Paket der zugehörigen SAP Objekte, die in Beziehung zur Eigenentwicklung stehen, entnommen werden.

Innerhalb dieses Hauptpaketes sind nun die Unterpakete zu erstellen, die sich im Namen an das Hauptpaket orientieren, als Postfix aber die Funktion des Unterpaketes ausdrücken. Ein Unterpaket zum EWM-HU Paket, dass das Verpacken betrifft könnte dann wie folgt abgeleitet werden: *Z_EWM_HU_PRC_PACKING*.

#### Erstellung der Unterpakete - Unterteilung nach Funktion der enthaltenen Objekte

Die Unterteilung des Hauptpaketes in Unterpakete sollte nicht nach Objekttyp erfolgen (z.B: DDIC, Forms, Klassen), sondern nach logischer Funktion vorgegangen werden. Je nach Art der Software können folgende Unterpakete erstellt werden:  

- **.._CORE** oder **..._ENG** (für Engine) Basispaket
  In diesem Paket werden Objekte erstellt, die von den anderen Unterpaketen verwendet werden und die zentralen Funktionen wie Geschäftsprozesslogik und gemeinsam genutzte Funktionen enthalten.  
- **.._UI** - Alle Artefakte für Anwendungsoberflächen
- **.._API** oder **..IF** - z.B: für ODATA services, Klassen oder RAP-BO Interfaces, die von anderen Paketen verwendet werden können und entsprechend in der Paketschnittstelle propagiert werden.
- **.._DATA**- Objekte die Datenbankabfragen kapseln oder anderweitig Daten beschaffen (CDS Artefakte)
- **.._TEST** - Objekte für Unit Tests und Testhelper wie auch Mock-Objekte - alles was zur Testinfrastruktur zugehörig ist.
- **.._HLP**  oder **..SHARED** - Unterpaket für Hilsobjekte oder Funktionen die in mehreren Unterpaketen verwendet werden, z.B. Nachrichtenklassen oder Logging Funktionen

#### Einsatz von Paketen bei der Implementierung von BAdIs und bei kleinen Erweiterungen

Die oben beschriebene Struktur ist sinnvoll für größere Entwicklungen bei denen zahlreiche Objekte erstellt werden und schafft Ordnung und Übersicht. Die gleiche Vorgehensweise in reduzierter Form macht aber auch für kleine Erweiterungen wie bei BAdI-Implementierungen durchaus Sinn.
Hierbei erstellt man ein Hauptpaket als Entsprechung des Paketes des SAP Enhancement Spots, orientiert sich an der Namensgebung und vergibt die selbe Applikationskomponente.  
Die Unterpakete kann man hier entsprechend den Teilbereichen der einzelnen BADIs strukturieren, je nach Umfang der einzelnen BADIs des Enhancement Spots.
Für Funktionen, die in mehreren BADIs wiederverwendet werden, können wie oben beschrieben, Objekte in Helper und Core Unterpaketen erstellt und in den BADIs entsprechend aufgerufen werden.

Manchmal sind Entwicklungen sehr kleine Objekte wie Hilfsreports, oder einzelne Klassen die mehrfach über Pakete verteilte Funktionen bereitstellen. Hierfür jeweils einzelne Hauptpakete mit Unterpaketen bereitzustellen wäre überdimensioniert.  
Für diesen Fall empfehlen wir die Anlage von Hauptpaketen, die Funktionsorientiert, gemeinsame Funktionen bereitstellen (z.B. 'Bereich'**_UTILS**). DIe Unterpakete können dann weiter die einzelnen Bereiche gliedern und zentrale Funktionen werden im Core Unterpaket gesammelt.

Wir empfehlen die Erstellung großer Sammlerpakete (z.B. auf Basis Modulebene) nicht zu erlauben, da dies zu Problemen mit der Übersichtlichkeit und zu ungewünschten Abhängigkeiten führen kann und das Prinzip der Single Responsibility verletzt. Das Risiko, dass Klassen und Funktionen in solchen Paketen landen anstatt solide architektonische Überlegungen vorzunehmen, ist groß was die Anstrengungen eine geordnete Systemarchitektur einzuhalten konterkarieren kann.  
Es kann aber durchaus Sinn machen, kleine, wohldefinierte und Domänenspezifische Hilfspakete zu erstellen, die grundlegende und oft benötigte Hilfsfunktionen bereitstellen. Idealerweise werden die nach aussen sichtbaren Funktionen in den Paketschnittstellen propagiert, so dass die Verwender diese Pakete im Verwendungsnachweis deklarieren können.

#### Paketschnittstellen

Mit den bisher genannten Ausführungen sind zwar unsere Entwicklungen besser geordnet, wir bekommen eine bessere Übersicht und durch den Zwang der Strukturierung werden automatisch architektonische Überlegungen der Entwicklung vorangestellt.  
Maßgebliche Vorteile und Verbesserung im Softwaremanagement ergeben sich aber erst durch Nutzung der Paketschnittstellen.

Ist ein Paket in sich geschlossen und die Verwendung von Objekten des Paketes durch andere Pakete ist nicht erforderlich oder gewünscht, benötigt das Paket keine Paketschnittstelle. Handelt es sich aber um ein Paket, dass Funktionalitäten nach außen propagieren soll und somit von anderen Paketen genutzt werden, werden Paketschnittstellen benötigt. In einer Schnittstelle werden die Objekte aufgenommen, die von anderen Paketen verwendet werden können. Dabei sind die Paketschnittstellen in der selben Weise hierarchisch wie die Pakete selbst. Details wie Paketschnittstellen aufgebaut und Objekte aus Unterpaketen über das Hauptpaket propagiert werden findet sich in der SAP Dokumentation.

Ein gut designtes Paket sollte ein eigenes API- oder Interface Unterpaket besitzen, dass Interfaces, Klassen und Artefakte enthält, die von außen verwendet werden können. Diese Objekte und das Paket verschalt damit die Implementierung und die Komplexität der Anwendung. Mittels Paketinterface und Propagierung werden diese Artefakte nach außen sichtbar. Somit können innerhalb des Paketes jederzeit Änderungen vorgenommen werden, solange das Interface nach außen stabil bleibt. Bzw. besteht die Möglichkeit, neue Interfaces aufzunehmen, die eine neue Version darstellen.

#### Verwendungserklärung

Auf Paketebene gibt es neben den Schnittstellen, die die Propagierung nach außen deklariert, noch die Verwendungserklärung. Mit dieser wird aufgelistet, welche Paketschnittstellen ein Paket verwendet. So kann in der Verwendungserklärung geprüft werden, ob die aufgelistete Verwendung und somit die Erzeugung von Abhängigkeiten von Paket xy wirklich gewünscht und vorgesehen ist. Damit werden diese Abhängigkeiten technisch dokumentiert und sich auswertbar bzw. ablesbar.  
Dies gilt bedingt für SAP-Pakete. Sofern SAP Objekte in Paketschnittstellen deklariert wurden, können diese auch über den Paketcheck und die Vorschlagfunktion automatisiert in den Verwendungsnachweis aufgenommen werden. Allerdings sind seitens SAP, die Paketschnittstellen nicht für die Kommunikation zu den Kunden bezgl. Objektfreigabe vorgesehen und nicht vollständig gepflegt [*PRÜFEN SAP.TF ob so formulierbar?*].  
Zumindest hilft die Verwendungserklärung hier einen Überblick über sichtbare (über die Verwendungserklärung) und unsichtbare (Fehler im Paketcheck) SAP-Objekte zu bekommen.

#### Paketprüfung

Eine zentrale Rolle zur sinnvollen Umsetzung des Paketkonzepts in Eigenentwicklungen ist die Paketprüfung. In den ABAP Developments Tools, kann diese direkt in den Einstellungen aktiviert werden, oder über den ATC ausgeführt werden. In der SAP GUI in SE80 ist dies über das Kontextmenue möglich.  
Bei der Paketprüfung wird angezeigt, ob Objekte eines anderen Paketes verwendet werden, die Verwendungserklärung aber noch nicht deklariert wurde. In dem Fall kann dies automatisiert durchgeführt werden, wobei die gesamte Hierarchie berücksichtigt wird. Dies ist bei den komplexen SAP-Paketen hilfreich und zeitsparend.  
Die Paketprüfung zeigt als Fehler auch die Verwendung von nicht sichtbaren Objekten aus anderen Paketen an. Dies sind Objekte die nicht mittels einer Paketschnittstelle als sichtbar deklariert wurden. Diese können zwar technisch verwendet werden und der Code ist lauffähig, allerdings besteht das Risiko, dass SAP derartige Objekte jederzeit ändern kann. Zur Verwendung von SAP Objekten in Eigenentwicklung sind die Ausführungen zum Clean Core im entsprechenden Kapitel zu beachten. Die Verwendung eines SAP Objekts, welches nicht sichtbar ist, ist die schlechteste Option.
Bei Verwendung von nicht sichtbaren Objekten aus anderen eigenen Paketen ist zu prüfen ob die Verwendung sinnvoll ist. Ist dies der Fall, dann ist das Objekt in einer Paketschnittstelle aufzunehmen. Andernfalls sollte eine Funktion entweder im eigenen Paket implementiert werden oder eine sichtbare vergleichbare Funktion in einem anderen Paket gefunden werden.  
Derartige Funde können auch ein Hinweis sein, die unsichtbare Funktion in ein neues Paket zu verschieben, dass ähnliche Funktionen bereits als Hilfsfunktionen enthält, oder ein neues Paket dafür zu erstellen.  
Damit die Paketprüfung wie beschrieben funktioniert, müssen die Pakete gekapselt sein und die Systemeinstellung müssen gem. Dokumentation entsprechend vorgenommen werden.

### Paketkapselung und Paketschnittstellen von Unterpaketen innerhalb des Hauptpaketes

Das Kapseln der Hauptpakete dient der Dokumentation der Abhängigkeiten über die Paketprüfung. Die Kapselung macht allerdings auch für Unterpakete Sinn. Dazu sollte pro Unterpaket eine Paketschnittstelle angelegt werden und darin die Objekte aufgenommen werden, die von anderen Unterpaketen verwendet werden. Dementsprechend wird dann auch die Verwendungserklärung gepflegt. Dies bringt einen Verwaltungsaufwand bei der Erstellung einher, bringt aber den Vorteil mit sich, dass die Abhängigkeiten der Unterpakete dokumentiert sind und hier eine gezielte Steuerung und Überwachung möglich ist. Pro Hauptpaket muss eine klare Verwendungsbeziehung definiert sein und eine gemischte Wiederverwendung innerhalb der Unterpakete vermieden werden.  
Gerade bei Sammlerpaketen kann es sinnvoll sein, bei entsprechender Größe, einzelne Pakete herauszulösen und als eigenständige Komponenten bereitzustellen. Dabei ist es hilfreich hier bereits klare und geordnete Verwendungsbeziehungen zu haben.

### Pakethierarchien

Mit den oben genannten Methoden und Werkzeugen kann eine gute Softwarearchitektur in SAP über die Pakete mit den Abhängigkeiten dargestellt werden. Die Überlegungen die für ein gutes Paketdesign angestellt werden müssen führen letztlich zu einer guten Anwendungsarchitektur, wenn die Designprinzipien für sauberer Architektur eingehalten werden *(VERwEIS AUF CLEAN ARCHITECTUR oder anders ....)*
Bei der Gestaltung der Pakete sollte auch immer der Blick auf die Entwicklungen paketübergreifend erfolgen und bei der Anlage neuer bzw. Erweiterung bestehender Pakete geprüft werden, inwieweit die Pakete zueinander passen und zu prüfen ob Eigenentwicklungen eigener Funktionen in verschiedene Pakete getrennt werden soll. Bei komplexeren Systemlandschaften kann es sinnvoll sein, Framework Pakete zu definieren, die Basisfunktionen anbieten, dann Grundfunktionspakete, die die Geschäftslogik abbilden und optionale Add-On Pakete zu erstellen, die unterschiedliche Oberflächentechnologien oder Ausprägungen der Funktionalitäten abbilden. Dadurch entsteht eine Hierarchie von Hauptpaketen, deren Abhängigkeiten über die Paketschnittstellen gut abgebildet und dokumentiert werden können.  Wichtig ist hierbei zu achten, dass die Abhängigkeit immer nur in eine Richtung definiert sein darf.

Ein anderer Anwendungsfall wäre z.B. die selbe Funktionalität für verschiedene Releases bereitzustellen, wobei die Kernfunktion in einem Paket und die Differenzierungen, die sich durch das Release (ERP / S/4HANA) ergeben, in unterschiedlichen Hauptpaketen implementiert sind.

## Vorteile und Nutzen durch Nutzung des Paketkonzeptes

NAch den hier beschriebenen Ausführungen wird deutlich, dass die Umsetzung des Paketkonzepts einiges an Überlegung und Aufwand bedarf. Dieser Aufwand zahlt sich aber durch zahlreiche Vorteile aus, die hier im Folgenden aufgeführt werden:

### Eindeutig deklarierte Abhängigkeiten

Wie bereits beschrieben, sind die Abhängigkeiten von SAP-Paketen bzw. zwischen eigenentwickelten Paketen bei korrekter Umsetzung des Paketkonzepts klar ersichtlich. Entweder ist eine Abhängigkeit in der Verwendungserklärung aufgeführt, damit handelt es sich um bewusst definierte Abhängigkeit, oder die Abhängigkeit wird durch eine Fehlermeldung in der Paketprüfung ersichtlich im Falle von nicht sichtbaren Objekten oder bei fehlender Verwendungserklärung. Die hieraus gewonnenen Informationen könne für die Dokumentation und Beschreibung verwendet werden. Bevor ein Paket in ein System importiert wird, kann somit geprüft werden, ob im System die Voraussetzungen gegeben sind, das Paket fehlerfrei zu importieren oder ob andere Pakete benötigt werden.

### Bessere Übersicht und Erklärbarkeit

Bei komplexeren Entwicklungen hilft die Strukturierung schneller relevante Objekte zu finden. Die Struktur kann bereits als Teil der Dokumentation betrachtet werden. Stehen Korrekturen, Erweiterungen oder Ergänzungen einer Eigenentwicklung an, helfen eine gute Paketstruktur dem Entwickler sich schneller in der Anwendung zurecht zu finden und Erweiterungen umzusetzen.  
Durch die Strukturüberlegungen ist die Software besser strukturiert und folgende Arbeiten können zielgerichteter durchgeführt werden.#TODO

### Transportierbarkeit

Soll Software Systemübergreifend transportiert werdem, sollte das Erstellen der Transporte auf Hauptpaketebene erfolgen. Ein Hauptpaket sollte eine Funktion bereitstellen, werden alle Objekte die sich innerhalb des Hauptpakets (in Unterpaketen enthalten) befinden in einen Transport aufgenommen und entsprechend deklarierte Voraussetzungen sind im Zielsystem erfüllt, ist der Transport über Systemlinien unproblematisch und ein Try-and-Error Transport packen und importieren bis kein RC8 auftritt wird nicht erforderlich sein.

### Flexibilität

Ist eine Softwarekomponente gut strukturiert, lassen sich Ergänzungen, Änderungen, Erweiterungen und Korrekturen besser durchführen als in dem Fall wenn eine Anwendung sich aus lose zusammengestellten und in einem großen ungeordneten Paket befindlichen Objekten besteht, in dem andere Objekte für andere Funktionen enthalten sind. Somit ergibt sich bei guter Strukturierung auch eine erhöhte Flexibilität. Insbesondere wenn Funktionalitäten im Laufe des Lebenszyklus wachsen und der Umfang wächst, kann es erforderlich sein, die Struktur anzupassen und ggf. Funktionalitäten in globalere Pakete auszulagern um Wiederverwendbarkeit zu erlangen oder im umgekehrten Fall, mehrere kleinere Anwendungen in ein Hauptpaket zusammenzufassen.  ...

## Weitere Aspekte

Wir haben hier grundlegende Aspekte der Nutzung des Paketkonzepts beschrieben, die ihnen helfen sollen, die Vorteile gut strukturierter Pakete zu erkennen, aber auch sehr konkret Hilfestellung gegeben, wie ein Paketkonzept praxisorientiert umgesetzt werden kann.  
Dies ist nur der Anfang und es gibt einige Aspekte auf die in dieser Version nicht eingegangen werden kann, da dies den Umfang des Leitfadens übersteigen würde. Folgende Aspekte sind relevant und sollten im Unternehmen definiert und in den Handbüchern beschrieben werden:

- Vermeidung statischer Abhängigkeiten - verschiedene Lösungsansätze (Definition BAdIs / Aufrufe über Funktionsbausteine)
- Größe von Paketen - Architektonische Grenzen - Abgrenzung - Kosten (Clean Architecture)
- Paket Refactoring - Splitting - Kombination einzelner Pakete - Kontinuierliche Paketpflege bei Änderungen und Erweiterungen
- Gründe für die Umsetzung des Paketkonzepts auch in einfachen Systemlandschaften mit einem Entwicklungssystem

Wenn Sie Interesse an diesen Themen haben, erstellen Sie Issues in unserem Github oder melden Sie sich an die DSAG, damit dies bei der Überarbeitung des Leitfadens berücksichtigt werden kann.

## Von der Architektur zum Design

Nachdem mit den hier genannten Ausführungen die Voraussetzung für eine gute Architektur geschaffen wurden, die sich in der Paketstruktur wiederfindet, muss nun anschließend in den einzelnen Unterpaketen die Anwendungsarchitektur in konkreter Form von Klassen definiert/designed werden. Die Ausführungen hierzu finden Sie im folgenden Abschnitt:
 [Design von ABAP Anwendungen mit OO](/ABAP-Leitfaden/abap/oo-design#design-und-erstellung-von-abap-entwicklungen-mit-abap-oo).
