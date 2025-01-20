---
layout: page
title: Architektur und Design moderner ABAP Entwicklungen
permalink: /abap/architecture_and_design/
parent: Moderne ABAP Entwicklung
nav_order: 1
---

{: .no_toc}
# Architektur und Design moderner ABAP Entwicklung

1. TOC
{:toc}


## Architektur und Struktur als Fundament und Rahmen einer guten SAP Anwendung 

 Strukturierung
 Trennung Backend Frontend erfordert gute Architektur
    Beispiel einer groben konzeptstruktur für die technische Anforderung zeigen?
 API 
 Neue UI / ODATA
 Paketkonzept
 Design for testability

ABAP OO - SOLID Prinzipien umsetzen
ABAP OO als Schlüssel für gute Architektur wenn Prinzipien umgesetzt werden.  vpnj der Paket zur Objektstrukturierung

## SAP Paket Konzept
Was ist es basics
Warum Pakete
ÄErklärbarkeit
Flexibilität


- Erstellung Pakete
- Strukturierung eines Pakets in Unterpakete
- Paket schnittstellen
- Verwendungserklärung
- Wie Pakete stringent umsetzen
======
 # Strukturierung des Kapitels - Was kommt wie rein ....

* - Neue UI / ODATA
* - Design for testability
* - ABAP OO - SOLID Prinzipien umsetzen
* - ABAP OO als Schlüssel für gute Architektur wenn Prinzipien umgesetzt werden.  vpnj der Paket zur Objektstrukturierung

# Architektur und Struktur als Fundament und Rahmen einer guten SAP Anwendung 

 Viele SAP ERP Systeme wurden über viele Jahre mit Eigenentwicklungen angereichert. Die Entwicklung begann zu Zeiten als es in ABAP das Paketkonzept in heutiger Ausprägung noch nicht gab. Vielen ABAP-Entwicklern ist das Konzept von Softwarepaketen, wie sie in anderen Programmiersprachen bestens bekannt sind, nicht vertraut . So finden sich in vielen ERP Systemen als Paketstruktur sehr große Pakete die z.B. nach dem Modul oder eines Entwicklungsteams orientiert sind.

Der Nutzen der Strukturierung der Software durch Pakete bei SAP Anwendungen ist im ABAP Umnfeld nicht umfänglich~ bekannt oder bewusst und wenn eine Entwicklung unter Zeitdruck erstellt werden muss, wird die Frage, wie die Anwendung strukturiert werden soll und somit wie die Pakete erstellt werden oft nicht gestellt.  
 Allerdings ist es bei der heutigen Anwendungskomplexität essentiell sich zuerst Gedanken zu machen welche Funktionen und Zuständigkeiten eine zu erstellende Anwendung haben soll, wie die Verantwortlichkeiten *geregelt* sind und wie sich das letztendlich im Anwendungsdesign widerspiegelt.  
 Daher ist die Frage nach dem Paket und der Strukturierung der Unterpakete der erste wichtige Schritt, die Basis für eine saubere und zukunftsfähige Anwendungsarchitektur zu legen. 

# Strukturierung von Software in Paketen

## Das SAP Paket Konzept und die Aufgabe von Paketen
SAP hat in ABAP wie in anderen Programmiersprachen wie JAVA üblich, auch in ABAP ein Paketkonzept implementiert, mit dem es Möglich ist, die Software auf verschiedenen Ebenen zu strukturieren. Der Vorgänger der Pakete waren übrigens die Entwicklungsklassen. Mit der Einführung des Paketkonzepts ergeben sich allerdings deutlich erweiterte Möglichkeiten der Softwarestrukturierung, die zwar nicht direkt auf die Funktionalität an sich wirken, aber spätestens bei der Wartung, Pflege und Erweiterung der Eigenentwicklung deutliche Vorteile mit sich bringen. Da es seitens SAP eine ausführliche und gut verständliche Dokumentation des Paketkonzeptes gibt, werden wir hier nicht auf das Paketkonzept im Detail eingehen, sondern Empfehlungen geben wie bei Erstellung von Eigententwicklungen, im Weiteren "Software" genannt, vorgegangen werden kann, um Pakete in ABAP sinnvoll und nutzbringend einzusetzen. 
[LINK SAP Doku Pakete]

## Grundlagen und Begriffserklärungen zum Paketkonzepts
Ein **Paket** ist in erster Linie ein Mittel um Software zu strukturieren. Mit einem Paket werden Softwareartefakte zusammengefasst, die für einen bestimmten Zweck zuständig sind. Pakete können (und sollten auch) gekapselt sein. Das bedeutet, dass ein Objekt eines Paketes ein Objekt eines anderen Pakets nicht verwenden kann bzw. von einem Objekt eines anderen Pakets nicht verwendet werden kann.
Details hierzu erfolgen im weitern Abschnitt (technische bzw. gewünschte Verwendung).

Es gibt die sogenannten **Hauptpakete**, die zur Strukturierung der zu erstellenden Softwarekompnente dienen, diese können selbst nur Unterpakete aber keine Entwicklungsobjekte enthalten. Und es gibt **Unterpakete**, die einem Hauptpaket zugeordnet sind. Die Unterpakete dienen der internen Strukturierung der Artefakte des Hauptpaketes.  
In SAP gibt es dazu noch die **Strukturpakete**, die übergeordnet zu den Hauptpaketen sind und eine größere Organisation von Hauptpaketen hin zu Applikationen (-Komponenten?) ermöglicht.  
In Sinne der Komplexitätsreduzierung wird allerdings hier nicht weiter eingegangen, sondern ist in der SAP Dokumentation beschrieben. Strukturpakete einzusetzen, kann sinnvoll sein, wenn im Unternehmen das Paketkonzept umfänmglich mit Haupt- und Unterpaketen bereits angewendet wird.  
Mit der Strukturierung von Softwareobjekten mittels Pakete ergeben sich bereits Vorteile durch verbesserte Übersichtlichkeit und Ordnung bezüglich der erstellten Artefakte. Der Vorteil von Paketen ergibt sich aber erst durch die Funktionalität von **Paketschnittstellen**.  
Eine Paketschnittstelle definiert, welche Artefakte eines Paketes (Haupt- oder Unterpaket) nach außen sichtbar sind.

Als letzten hier zu erklärendem Begriff kommt die **Verwendungserklärung**, die in einem Paket gepflegt wird.  
Verwendet ein Paket A ein Artefakt aus einem Paket B, wird in der Verwendungserklärung des Paketes A, das Paket B aufgenommen. Somit ist auf Paketebene sofort ersichtlich, welche Abhängigkeiten das Paket A besitzt. Dazu ist die Verwendungserklärung auch im Verwendungsnachweis auswertbar. Somit ist es möglich herauszufinden, welche Pakete Abhängigkeiten zu dem Paket haben. 

## Anwendung des Paketkonzepts in der Praxis

### Definition des Hauptpakets 
Für die folgenden Ausführungen beschreiben wir die Aspekte des Paketkonzepts für die Erstellung einer größeren Eigententwicklung. Auf andere Fälle wird später eingegangen. 
Am Anfang der Umsetzung einer Eigenentwicklung muss klar definiert sein, welche Funktion die Software erfüllen soll und in welchen SAP Applikationsbereich die Software betrifft. Damit kann nun der Name der Eigenentwicklung als Komponente definiert werden. Dabei müssen Vorgaben der Entwicklungsrichtlinien im Unternehmen wie Namenskonventionen und Präfixe beachtet werden.  
Die Namensgebung spielt hier eine wichtige Rolle und sollte gut bedacht werden und unter Berücksichtigung anderer Komponenten erfolgen. So sollte im Namen ersichtlich sein, um welches SAP Objekt sich handelt (z.B. Belegtyp, Formulare ...) und welche Funktion die Komponente erfüllt. Da Eigentwicklungen meistens in Bezug zu SAP Funktionen stehen, sollte der Bezug auch über den Namensbezug erkennbar sein. Meistens muss dann noch der Name sinnvoll gekürzt werden, da durch Namensräume und Präfixe die Anzahl der Zeichen begrenzt ist.  
*** [BEISPIEL NOCH EINTRAGEN !] ***
Damit steht der Name des Hauptpaketes, das nun in SAP erstellt werden kann und sowohl als Hauptpaket als auch als gekapselt eingestellt wird. Bei der Erstellung des Pakets wird nun noch die SAP Applikationskomponente zugeordnet, hierbei sollte die Selbe Komponente verwendet werden, die die zugehörige SAP Standardkomponente besitzt. Dies kann dem Paket der zugehörigen SAP Objekte die in Beziehung zur Eigenentwicklung stehen entnommen werden.

Innerhalb dieses Hauptpaketes sind nun die Unterpakete zu erstellen, die sich im Namen an das Hauptpaket orientieren, als Postfix aber die Funktion des Unterpaketes ausdrücken.

### Erstellung der Unterpakete - Unterteilung nach Funktion der enthaltenen Objekte
Die Unterteilung des Hauptpaketes in Unterpakete sollte nicht nach Objekttyp erfolgen (z.B: DDIC, Forms, Klassen), sondern nach logischer Funktion vorgegangen werden. Je nach Art der Software können folgende Unterpakete erstellt werden:  

* **.._CORE** oder **..._ENG** (für Engine) Basispaket 
  In diesem Paket werden Objekte erstellt, die von den anderen Unterpaketen verwendet werden und die zentralen Funktionen wie Geschäftsprozesslogik und gemeinsam genutzte Funktionen enthalten.  
* **.._UI** - Alle Artifakte für Anwendungsoberflächen
* **.._API** - z.B: für ODATA services oder Klassen, die von anderen Paketen verwendet werden können
* **.._DATA**- Objekte die Datenbankabfragen kapseln oder anderweitig Daten beschaffen (CDS Artefakte) 
* **.._TEST** - Objekte für Unit Tests und Testhelper wie auch Mock-Objekte
* **.._HLP**  - Unterpaket für Hilfobjekte oder Funktionen die in mehreren Unterpaketen verwendet werden.

### Szenario SAP BADI Implementierung / kleine Erweiterungen.
Die oben beschriebene Struktur ist sinnvoll für größere Entwicklungen bei denen zahlreiche Objekte erstellt werden und schafft Ordnung und Übersicht. Die gleiche Vorgehensweise in reduzierter Form macht aber auch für kleine Erweiterungen wie BAdI-Implementierungen durchaus Sinn. Hierbei erstellt man ein Hauptpaket als Entsprechung des Paketes des SAP Enhancement Spots, orientiert sich an der Namensgebung und vergibt die selbe Applikationskomponente.  
Die Unterpakete kann man hier entsprechend den Teilbereichen der einzelnen BADIs strukturieren, je nach Umfang der einzelnen BADIs des Enhancement Spots. 
Für Funktionen, die in mehreren BADIs wiederverwendet werden, können wie oben beschrieben, OBjekte in Helper und Core Unterpaketen erstellt und in den BADIs entsprechend aufgerufen werden.

Manchmal sind Entwicklungen sehr kleine Objekte wie Hilfreports, oder einzelne Klassen die mehrfach über Pakete verteilte Funktionen bereitstellen. Hierfür jeweils einzelne Hauptpakete mit Unterpaketen bereitzustellen wäre überdimensioniert. Für diesen Fall empfehlen wir die Anlage von Hauptpaketen, die Funktionsorientiert, gemeinesame Funktionen bereitstellen (z.B. xy_UTILS). DIe Unterpakete können dann weiter die einzelnen Bereiche gliedern und zentrale Funktionen werden im Core Unterpaket gesammelt.

Eine Erstellung eines recht globalen Sammlerpakets (z.B. auf Basis Modulbebene) empfehlen wir ausdrücklich nicht, da dies zu Problemen mit der Übersichtlichkeit und zu ungewünschten Abhängigkeiten führen kann. Das Risiko besteht dass irgendwann jede kleine Klasse in diesem Sammler landet und grundsätzliche architektonische Überlegungen nicht angestellt werden. 

### Paketschnittstellen
Mit den bisher genannten Ausführungen sind zwar unsere Entwicklungen besser geordnet, wir bekommen eine bessere Übersicht und durch den Zwang der Strukturierung werden automatisch architektonische Überlegungen der Entwicklung vorangestellt.  
Maßgebliche Vorteile und Verbesserung im Softwaremanagement ergeben sich aber erst durch Nutzung der Paketschnittstellen.

Ist ein Paket in sich geschlossen und die Verwendung von Objekten des Paketes durch andere Pakete ist nicht erforderlich oder gewünscht, benötigt das Paket keine Paketschnittstelle. Handelt es sich aber um ein Paket, dass Funktionalitäten nach außen propagieren soll und somit von anderen Paketen genutzt werden, werden Paketschnittstellen benötigt. In einer Schnittstelle werden die Objekte aufgenommen, die von anderen Paketen verwendet werden können. Dabei sind die Paketschnittstellen in der selben Weise hierarchisch wie die Pakete selbst. Details wie Paketschnittstellen aufgebaut und Objekte aus Unterpaketen über das Hauptpaket propagiert werden findet sich in der SAP Dokumentation.

Ein gut designtes Paket sollte ein eigenes API-Unterpaket besitzen, dass Interfaces, Klassen und Artefakte enthält, die von außen verwendet werden können. Diese Objekte und das Paket verschalt damit die Implementierung und die Komplexität der Anwendung. Mittels Paketinterface und Propagierung werden diese Artefakte nach außen sichtbar. Somit können innerhalb des Paketes jederzeit Änderungen vorgenommen werden, solange das Interface nach außen stabil bleibt. Bzw. besteht die Möglichkeit, neue Interfaces aufzunehmen, die eine neue Version darstellen.

### Verwendungserklärung
Auf Paketebene gibt es neben den Schnittstellen, die die Propagierung nach außen deklariert, noch die Verwendungserklärung. Mit dieser wird aufgelistet, welche Paketschnittstellen ein Paket verwendet. So kann in der Verwendungserklärung geprüft werden, ob die aufgelistete Verwendung und somit die Erzeugung von Abhängigkeiten von Paket X (insbesondere SAP Standard Pakete, die in Eigentwicklungen durch den Aufruf von Klassen, Funktionsbausteinen und Verwendung von DDIC-Artefakten) wirklich gewünscht und vorgesehen ist. Damit werden diese Abhängigkeiten technisch dokumentiert und sich auswertbar bzw. ablesbar.

### Paketprüfung
Eine zentrale Rolle zur sinnvollen Umsetzung des Paketkonzepts in Eigenentwicklungen ist die Paketprüfung. In den ABAP Developments Tools, kann diese direkt in den Einstellungen aktiviert werden, oder über den ATC ausgeführt werden. In der SAP GUI in SE80 ist dies über das Kontextmenue möglich.  
Bei der Paketprüfung wird angezeigt, ob Objekte eines anderen Paketes verwendet werden, die Verwendungserklärung aber noch nicht deklariert wurde. In dem Fall kann dies automatisiert durchgeführt werden, wobei die gesamte Hierarchie berücksichtigt wird. Dies ist bei den komplexen SAP-Paketen hilfreich und zeitsparend.  
Die Paketprüfung zeigt als Fehler auch die Verwendung von nicht sichtbaren Objekten aus anderen Paketen an. Dies sind Objekte die nicht mittels einer Paketschnittstelle als sichtbar deklariert wurden. Diese können zwar technisch verwendet werden und der Code ist lauffähig, allerdings besteht das Risiko, dass SAP derartige Objekte jederzeit ändern kann. Zur Verwendung von SAP Objekten in Eigententwicklung sind die Ausführungen zum Clean Core im entsprechenden Kapitel zu beachten. Die Verwendung eines SAP Objekts, welches nicht sichtbar ist, ist die schlechteste Option.
Bei Verwendung von nicht sichtbaren Objekten aus anderen eigenen Paketen ist zu prüfen ob die Verwendung sinnvoll ist. Ist dies der Fall, dann ist das Objekt in einer Paketschnittstelle aufzunehmen. Andernfalls sollte eine Funktion entweder im eigenen Paket implementiert werden oder eine sichtbare vergleichbare Funktion in einem anderen Paket gefunden werden.  
Derartige Funde können auch ein Hinweis sein, die unsichtbare Funktion in ein neues Paket zu verschieben, dass ähnliche Funktionen bereits als Hilfsfunktionen enthält, oder ein neues Paket dafür zu erstellen. 
Damit die Paketprüfung wie beschrieben funktioniert, müssen die Pakete gekapselt sein und die Systemeinstellung müssen gem. Dokumentation entsprechend vorgenommen werden.

### Paketkapselung und Paketschnittstellen von Unterpaketen innerhalb des Hauptpaketes.
Hauptpakete zu kapseln wird empfohlen damit über die Paketprüfung die Abhängigkeiten dargestellt werden können. Die Kapselung macht allerdings auch für Unterpakete Sinn. Dazu sollte pro Unterpaket eine Paketschnittstelle angelegt werden und darin die Objekte aufgenommen werden, die von anderen Unterpaketen verwendet werden. Dementsprechend wird dann auch die Verwendungserklärung gepflegt. Dies bringt einen Verwaltungsaufwand bei der Erstellung einher, bringt aber den Vorteil mit sich, dass die Abhängigkeiten der Unterpakete dokumentiert sind und hier eine gezielte Steuerung und Überwachung möglich ist. Pro Hauptpaket muss eine klare Verwendungsbeziehung definiert sein und eine gemischte Wiedervendung innerhalb der Unterpakete vermieden werden.  
Gerade bei Sammlerpaketen kann es sinnvoll sein, bei entsprechender Größe, einzelne Pakete herauszulösen und als eigenständige Komponenten bereitzustellen. Dabei ist es hilreich hier bereits klare und geordnete Verwendungsbeziehungen zu haben.

### Pakethierarchien
Mit den oben genannten Methoden und Werkzeugen kann eine gute Softwarearchitektur in SAP über die Pakete mit den Abhängigkeiten dargestellt werden. Die Überlegungen die für ein gutes Paketdesign angestellt werden müssen führen letzlich zu einer guten Anwendungsarchitektur, wenn die Designprinzipien für Sauberer Architektur beachtet werden *(VERwEIS AUF CLEAN ARCHITECTUR oder anders ....)*
Bei der Gestaltung der Pakete sollte auch immer der Blick auf die Entwicklungen paketübergreifend erfolgen und bei der Anlage neuer bzw. Erweiterung bestehender Pakete geprüft werden inwieweit die Pakete zueinander passen und zu prüfen ob Eigenentwicklungen eigener Funktionen in verschiedene Pakete getrennt werden soll. Bei komplexeren Systemlandschaften kann es sinnvoll sein, Framework Pakete zu definieren, die Basisfunktionen anbieten, dann Grundfunktionspakete, die die Geschäftslogik abbilden und optionale Add-On Pakete zu erstellen, die unterschiedliche Oberflächentechnologien oder Ausprägungen der Funktionalitäten abbilden. Dadurch entsteht eine Hierarchie von Hauptpaketen, deren Abhängigkeiten über die Paketschnittstellen gut abgebildet und dokumentiert werden können.  Wichtig ist hierbei zu achten, dass die Abhängigkeit immer nur in eine Richtung definiert sein darf. ----

Ein anderer Anwendungsfall wäre z.B. die selbe Funktionalität für verschiedene Releases bereitzustellen, wobei die Kernfunktion in einem Paket und die Differenzierungen, die sich durch das Release (ERP / S/4HANA) ergeben, in unterschiedlichen Hauptpaketen implementiert sind.

# Vorteile und Nutzen
NAch den hier beschriebenen Ausführungen wird deutlich, dass die Umsetzung des Paketkonzepts einiges an Überlegung und Aufwand bedarf. Dieser Aufwand zahlt sich aber durch zahlreiche Vorteile aus, die hier im Folgenden aufgeführt werden:

## Eindeutig deklarierte Abhängigkeiten
Wie bereits beschrieben, sind die Abhängigkeiten von SAP-Paketen bzw. zwischen eigententwickelten Paketen bei korrekter Umsetzung des Paketkonzepts klar ersichtlich. Entweder ist eine Abhängigkeit in der Verwendungserklärung aufgeführt, damit handelt es sich um bewußt definierte Abhängigkeit, oder die Abhängigkeit wird durch eine Fehlermeldung in der Paketprüfung ersichtlich im Falle von nicht sichtbaren Objekten oder bei fehlender Verwendungserklärung. Die hieraus gewonnenen Informationen könne für die Dokumentation und Beschreibung verwendet werden. Bevor ein Paket in ein System importiert wird, kann somit geprüft werden, ob im System die Voraussetzungen gegeben sind, das Paket fehlerfrei zu importieren oder ob andere Pakete benötigt werden. 

## Bessere Übersicht und Erklärbarkeit
Bei komplexeren Entwicklungen hilft die Strukturierung schneller relevante Objekte zu finden. Die Struktur kann bereits als Teil der Dokumentation betrachtet werden. Stehen Korrekturen, Erweiterungen oder Ergänzungen einer Eigenentwicklung an, helfen eine gute Paketstruktur dem Entwickler sich schneller in der Anwendung zurecht zu finden und Erweiterungen umzusetzen.  
Durch die Strukturüberlegungen ist die Software besser strukturiert und folgende Arbeiten können zielgerichteter durchgeführt werden.#TODO 

## Transportierbarkeit
Soll Software Systemübergreifend transportiert werdem, sollte das Erstellen der Transporte auf Hauptpaketebene erfolgen. Ein Hauptpaket sollte eine Funktion bereitstellen, werden alle Objekte die sich innerhalb des Hauptpakets (in Unterpaketen enthalten) befinden in einen Transport aufgenommen und entsprechend deklarierte Voraussetzungen sind im Zielsystem erfüllt, ist der Transport über Systemlinien umproblematisch und ein Try-and-Error Transport packen und importieren bis kein RC8 auftritt wird nicht erforderlich sein.

### Flexibilität
Ist eine Softwarekompente gut strukturiert, lassen sich Ergänzungen, Änderungen, Erweiterungen und Korrekturen besser durchführen als in dem Fall wenn eine Anwendung sich aus lose zusammengestellten und in einem großen ungeordneten Paket befindlichen Objekten besteht, in dem andere Objekte für andere Funktionen enthalten sind. Somit ergibt sich bei guter Strukturierung auch eine erhöhte Flexibilität. Insbesondere wenn Funktionalitäten im Laufe des Lebenszyklus wachsen und der Umfang wächst, kann es erforderlich sein, die Struktur anzupassen und ggf. Funktionalitäten in globalere Pakete auszulagern um Wiederverwendbarkeit zu erlangen oder im umgekehrten Fall, mehrere kleinere Anwendungen in ein Hauptpaket zusammenzufassen.  ...



## Testbarkeit als Designprinzip 

