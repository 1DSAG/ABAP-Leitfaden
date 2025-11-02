---
layout: page
title: Architektur und Strukturierung in der ABAP Entwicklung
permalink: /abap/architecture_and_design/
has_children: true
parent: Moderne ABAP Entwicklung
nav_order: 1
---

{: .no_toc}
# Architektur und Strukturierung in der ABAP Entwicklung

1. Toc
{:toc}

## Strukturelle Herausforderungen in SAP-Anwendungen

In vielen SAP ERP Systemen finden sich zahlreiche und umfangreiche Eigenentwicklungen die im Laufe der Lebenszeit des Systems entstanden sind und kontinuierlich erweitert wurden. Je komplexer ein System ist, desto wichtiger ist es, dass die darin enthaltenen Applikationen und Komponenten in einer wohldefinierten Struktur geordnet sind, die gängigen Softwarearchitekturprinzipien folgen.
In SAP ERP Systemen ist dies im Bereich der Eigenentwicklungen nicht immer gegeben. Dies hat unter anderem folgende Ursachen:

- **Entwicklungsklassen**  
Die Entwicklungen wurden begonnen, als das SAP-Paketkonzept noch nicht vorhanden war und dessen Vorgänger, die Entwicklungsklassen, verwendet wurden. Diese ermöglichten nur eine flache Strukturierung und somit folgte auch die Struktur sehr groben Kriterien, z.B. pro Entwicklungsteam oder Modul. Dieses Prinzip wurde nach Einführung des Paketkonzepts beibehalten und weitergeführt.

- **Wissen**  
Das Wissen über das Paketkonzept und die Anwendung von Softwarearchitekturprinzipien ist im ABAP-Umfeld oftmals nicht hinreichend vorhanden.

- **Änderung und Erweiterung an bestehender Software**
Viele Entwicklungen betreffen die Weiterentwicklung bestehender Funktionalitäten. Ein Redesign und eine damit verbundene Paketstrukturierung wird selten eingeplant und vorgenommen.

- **Zeit- und Termindruck**  
Letztlich finden die meisten Entwicklungen unter Zeitdruck statt. Die Frage, wie eine Anwendung sinnvoll in Paketen strukturiert werden kann, wird oft nicht gestellt oder vernachlässigt, da die Lieferung der Funktionalität im Vordergrund steht.  

Als Folge der sich aus den genannten Gründen ergebenden strukturellen Defizite in Eigenentwicklungen können sich folgende Probleme ergeben:

- **Mangelnde Transparenz und Verständlichkeit:**  
Sowohl die Aufgaben und deren Verantwortlichkeiten einzelner Artefakte, als auch deren Abhängigkeiten zueinander sind nicht aus der Struktur der Pakete ersichtlich.

- **Hohe Anpassungsaufwände**  
Änderungen an bestehender Software erfordern hohe Aufwände verursacht durch aufwändige Analyse, die zu ändernden Artefakte zu finden und die Änderung korrekt umzusetzen. Da die Korrektheit von Änderungen schwer vorhergesagt werden kann, entstehen hohe Test- und Fehlerkorrekturaufwände.

- **Seiteneffekte und Fehler bei Änderungen bestehender Anwendungen:**
Änderungen können zu nicht vorhersehbaren Seiteneffekten in der Produktion führen und damit zu erhöhten Entwicklungs- und Fehlerbereinigungsaufwänden.

- **Probleme bei Verteilung und Import von Änderungen**
Es kann zu Problemen bei Transporten kommen, wenn nicht alle notwendigen Objekte korrekt transportiert wurden oder nicht alle Abhängigkeiten berücksichtigt wurden (z.B. RC8).

## Architektur und Struktur als Fundament und Rahmen einer guten SAP Anwendung

Die Komplexität von Software wird oftmals unterschätzt und nur wer sich von Anfang an Gedanken über eine gute Softwarearchitektur macht und die Anwendung kontinuierlich technisch und strukturell verbessert, wird mit der oben beschriebenen Problematik weniger konfrontiert sein.  
Gute und moderne Softwareentwicklung beginnt zuallererst mit der Überlegung, welche Funktionen und Zuständigkeiten eine zu erstellende Anwendung haben soll, wie die Verantwortlichkeiten geregelt sind und wie sich dies letztendlich in der Paketstruktur widerspiegelt.  
Mit dem SAP Paketkonzept haben Sie das Werkzeug, um diese Überlegungen in sichtbare Strukturen zu überführen und damit die Grundlagen für eine saubere und zukunftsfähige Anwendungsarchitektur zu legen.

## Strukturierung von Software in Paketen

### Das SAP Paketkonzept und die Aufgabe von Paketen

Die SAP hat, wie in anderen Programmiersprachen wie z.B. Java üblich, auch in ABAP ein Paketkonzept implementiert, mit dem es Möglich ist, die Software auf verschiedenen Ebenen zu strukturieren. Vor der Verfügbarkeit des Paketkonzepts waren Entwicklungsobjekte in Entwicklungsklassen als flache Struktur organisiert.  
Durch die Anwendung des Paketkonzepts bei Eigenentwicklungen ergeben sich deutlich erweiterte Möglichkeiten der Softwarestrukturierung, die zwar vordergründig nicht direkt auf die Funktionalität an sich wirken, aber spätestens bei der Wartung, Pflege und Erweiterung der Eigenentwicklung deutliche Vorteile mit sich bringen. Da es seitens SAP eine ausführliche und gut verständliche Dokumentation des Paketkonzeptes gibt, werden wir hier nicht auf das Paketkonzept im Detail eingehen sondern einen praxisnahen Überblick und Empfehlungen geben, wie bei Erstellung von Eigenentwicklungen, im Weiteren "Software" genannt, vorgegangen werden kann, um Pakete in ABAP sinnvoll und nutzbringend einzusetzen.  
[SAP Dokumentation ABAP Workbench - Package Builder](https://help.sap.com/docs/ABAP_PLATFORM_NEW/bd833c8355f34e96a6e83096b38bf192/af40bd38652c8c42e10000009b38f8cf.html?locale=de-DE).  


{: .recommendation}
>- ***Nutzen Sie das Paketkonzept:***
>- Schalten Sie auf Ihren SAP-Systemen die Paketprüfung ein.
>- Erstellen Sie für Ihre Eigenentwicklungen Hauptpakete, die sich an architektonischen Erfordernissen (Single Responsibility) orientieren.
>- Schalten Sie pro Paket die Paketkapselung ein.
>- Gruppieren und strukturieren Sie das Paket mit Unterpaketen anhand den Zuständigkeiten und nicht nach Objekttyp.
>- Machen Sie während des Entwicklungsprozesses regelmäßig Paketchecks, um Abhängigkeiten zu erkennen.
>- Prüfen Sie bei nicht sichtbaren Objekten Alternativen (z.B. vergleichbares Objekt mit Sichtbarkeit aus anderem Paket, Eigendefintion im Paket, ...).
>- Nehmen Sie gewünschte Abhängigkeiten in die Verwendungserklärung auf.
>- Vermeiden Sie die Erstellung sehr grosser Pakete oder "Sammelpakete" die zahlreiche unabhängige Funktionen bündeln.
>- Schulen Sie Ihre Entwickler bzgl. der Paketdefinition, der Strukturierung von Software und Pflege von Paketschnittstellen und Verwendungserklärungen  

## Paketstrukturen und Hierarchien  

Wir empfehlen die Pakete nach funktionalen Aspekten zu gestalten. Eigenständige Lösungen, die auch selbstständig transportierbar sein sollen, bilden Sie über Hauptpakete ab. Die verschiedenen funktionalen Belange dieser Lösung wie z.B. Geschäftslogik, verwendbare Schnittstellen, User-Interfaces und zentrale Elemente der Lösung, die innerhalb des Hauptpaketes von den anderen Komponenten gemeinsam verwendet werden, strukturieren Sie in Unterpaketen (Entwicklungspakete). Im klassischen Umfeld ist das Hauptpaket die transportierbare Einheit.  
Im ABAP-Cloud Kontext kann dann über dieses Hauptpaket ein technisch erforderliches Strukturpaket angelegt werden, dass dann für die Softwarekomponente verwendet wird. Im Cloud Kontext wird die transportierbare Einheit durch die Softwarekomponente repräsentiert.  
Eine Strukturierung anhand von Organisations-, Verantwortungs- oder Projektstrukturen wird nicht empfohlen, da diese Attribute sich im Zeitverlauf ändern und nur bedingt von der Funktionalität abhängig sind. In einer dem Hauptpaket zugehöriger Dokumentation sind diese Attribute besser aufgehoben.  

## Kontrolle der Abhängigkeiten über Paketkapselung, Paketschnittstellen und Verwendungserklärung

Aktivieren Sie die Paketkapselung, um technische Abhängigkeiten kontrollieren zu können. Es können zwei Fehlersituationen auftreten:  

- **Unsichtbares Objekt**: Wird ein Objekt aus einem anderen Paket verwendet, das nicht in einer freigegebenen Paketschnittstelle enthalten ist, meldet die Paketprüfung einen Fehler, dass das Objekt nicht sichtbar ist.

- **Fehlender Verwendungsnachweis**: Wird ein Objekt eines anderen Paketes verwendet, welches sich in einer Paketschnittstelle befindet, muss diese Schnittstelle noch in der Verwendungserklärung deklariert werden um keine Fehler in der Paketprüfung zu erhalten.  

Mit den Fehlern aus der Paketprüfung erhalten Sie Transparenz darüber, welche Abhängigkeiten zu anderen Paketen bestehen und welche Objekte verwendet werden, die nicht zur Verwendung in fremden Paketen vorgesehen sind.  
Ist das Objekt nicht in einer Paketschnittstelle enthalten, sollte dies Objekt nicht verwendet werden und eine Alternative gesucht oder eine eigenes Objekt innerhalb des Paketes dafür erstellt werden, um den Paketfehler zu vermeiden.  
Soll ein Objekt des eigenen Paketes anderen Paketen zur Verwendung zur Verfügung gestellt werden, ist dies in einer Paketschnittstelle des Hauptpaketes zu definieren, somit definiert die Paketschnittstelle das öffentliche Interface des Hauptpaketes. Wird diese dann in die Verwendungserklärung des Verwenderpaketes aufgenommen, ist somit auch eine technische Auswertung der Verwendungen möglich.

## Maßnahmen zur Umsetzung des Paketkonzepts in der Entwicklung

### Definition und Umsetzung der Paketstrategie

Das Paketkonzept bringt den Nutzen, wenn es umfassend eingesetzt wird. Dies erfordert eine unternehmensinterne Defintion wie Pakete anzulegen sind. Es muss darauf aufbauend sichergestellt werden, dass die mit der Entwicklung betrauten Personen die Vorgaben zum PAketkonzept verstehen und umsetzen können. Daher ist es wichtig die Entwickler auch hinreichend bezüglich des umzusetzenden Paketkonzepts zu schulen und die Einhaltung und ordnungsgemäße Umsetzung zu prüfen. Insbesondere wenn externe Entwickler eingesetzt werden ist darauf zu achten, dass hier ein entsprechendes Onboarding erfolgt. Die Aufgabe der Definition der Pakete und deren Strukturierung, sowie die Einordnung in die Paketlandschaft sollte durch den Softwarearchitekt bzw. Softwareentwicklungsverantwortlichen wie z.B. den SAP Lead Developer erfolgen um eine Konsistenz über Pakete hinweg sicherzustellen.

### Vermeidung grosser / unspezifischer Sammlerpakete

Wir empfehlen die Erstellung großer Sammlerpakete (z.B. auf Basis Modulebene) nicht zu erlauben, da dies zu Problemen mit der Übersichtlichkeit und zu ungewünschten Abhängigkeiten führen kann und das Prinzip der Single Responsibility verletzt.

Das Risiko ist groß, dass Klassen und Funktionen in solchen Paketen landen, anstatt solide architektonische Überlegungen vorzunehmen, was die Anstrengungen, eine geordnete Systemarchitektur einzuhalten, konterkarieren kann.  
Es kann aber durchaus Sinn machen, kleine, wohldefinierte und Domänenspezifische Hilfspakete zu erstellen, die grundlegende und oft benötigte Hilfsfunktionen zentral bereitstellen.

## Weiterführende Fragestellungen bei der Umsetzung des Paketkonzepts

Es gibt neben den hier beschriebenen Empfehlungen zum Paketkonzept weitere Fragestellungen auf die hier nicht weiter eingegangen werden können, da eine detaillierte Behandlung den Umfang des Leitfadens übersteigen würde. Diese sollten aber in den Richtlinien und Handbüchern berücksichtigt und definiert werden. Hierbei handelt es sich um folgende Aspekte:  

- Vermeidung statischer Abhängigkeiten - verschiedene Lösungsansätze (Definition BAdIs / Aufrufe über Funktionsbausteine)
- Größe von Paketen - Architektonische Grenzen - Abgrenzung - Kosten (Clean Architecture)
- Paket Refactoring - Splitting - Kombination einzelner Pakete - Kontinuierliche Paketpflege bei Änderungen und Erweiterungen

## Vorteile und Mehrwert durch die Anwendung des Paketkonzepts

Nach den hier beschriebenen Ausführungen wird deutlich, dass die Umsetzung des Paketkonzepts einiges an Überlegung und Aufwand bedarf. Dieser Aufwand zahlt sich aber durch zahlreiche Vorteile aus, die hier im Folgenden aufgeführt werden:

### Eindeutig deklarierte Abhängigkeiten

Wie bereits beschrieben, sind die Abhängigkeiten von SAP-Paketen bzw. zwischen eigenentwickelten Paketen bei korrekter Umsetzung des Paketkonzepts klar ersichtlich. Entweder ist eine Abhängigkeit in der Verwendungserklärung aufgeführt, damit handelt es sich um bewusst definierte Abhängigkeit, oder die Abhängigkeit wird durch eine Fehlermeldung in der Paketprüfung ersichtlich, im Falle von nicht sichtbaren Objekten oder bei fehlender Verwendungserklärung. Die hieraus gewonnenen Informationen können für die Dokumentation und Beschreibung verwendet werden. Bevor ein Paket in ein System importiert wird, kann somit geprüft werden, ob im System die Voraussetzungen gegeben sind, das Paket fehlerfrei zu importieren, oder ob andere Pakete benötigt werden.

### Bessere Übersicht und Erklärbarkeit

Bei komplexeren Entwicklungen hilft die Strukturierung schneller relevante Objekte zu finden. Die Struktur kann bereits als Teil der Dokumentation betrachtet werden. Stehen Korrekturen, Erweiterungen oder Ergänzungen einer Eigenentwicklung an, helfen eine gute Paketstruktur dem Entwickler sich leichter in der Anwendung zurechtzufinden und Erweiterungen schneller umzusetzen.  

Soll Software systemübergreifend transportiert werdem, empfehlen wir das Erstellen der Transporte auf Hauptpaketebene. Das Hauptpaket repräsentiert eine in sich funktionierende Geschäftsfunktion oder eine Erweiterung einer Standardfunktion bzw. eines abgegrenzten Bereiches.  
Werden alle Objekte eines Hauptpaketes (strukturiert in Unterpaketen) in einen Transport aufgenommen und sind die deklarierten Voraussetzungen/Abhängigkeiten im Zielsystem erfüllt, ist der Transport über Systemlinien hinweg transportier- und importierbar. Importfehler (RC8) sollten dann i.d.R. nicht mehr auftreten.

### Flexibilität

Ist eine Softwarekomponente gut strukturiert, lassen sich Ergänzungen, Änderungen, Erweiterungen und Korrekturen besser durchführen als in dem Fall, wenn eine Anwendung sich aus lose zusammengestellten und in einem großen ungeordneten Paket befindlichen Objekten besteht, in dem andere Objekte für andere Funktionen enthalten sind. Somit ergibt sich bei guter Strukturierung auch eine erhöhte Flexibilität. Insbesondere wenn Funktionalitäten im Laufe des Lebenszyklus wachsen und der Umfang wächst, kann es erforderlich sein, die Struktur anzupassen und ggf. Funktionalitäten in zentrale bzw. allgemein verfügbare Pakete auszulagern um eine Wiederverwendbarkeit hierfür zu erlangen oder im umgekehrten Fall, mehrere kleinere Anwendungen in ein Hauptpaket zusammenzufassen.

### Zukunftsfähigkeit

Die Erstellung von Software in gut strukturierten Paketen beinhaltet neben den offensichtlichen Vorteilen auch weitere Vorteile, die nicht sofort wirksam werden, im Rahmen des Softwarelebenszyklus aber durchaus relevant werden können.  
Sind die Eigenentwicklungen im System bereits in Paketen geordnet, sind schon wichtige Voraussetzungen erfüllt, um moderne Versionsverwaltungssysteme wie abapGit oder gCTS zu nutzen, die Pakete bedingen. Somit sind dann Transporte mittels Git-basierter Methoden in andere System über oder gar in die Cloud möglich s. Kapitel [Versionsverwaltung](/ABAP-Leitfaden/application-lifecycle-management/version-management/).  
Wurde das Paketkonzept mit Erklärung der Verwendungsbeziehungen im Unternehmen bereits eingeübt und ist somit bereits eine Awareness bzgl. nutzbarer Objekte gegeben, sind gute Voraussetzungen geschaffen, die Konzepte in ABAP Cloud mit den Softwarekomponenten zu verstehen und anzuwenden.

## Das Paketkonzept in ABAP Cloud - Softwarekomponenten

Im Kontext von ABAP Cloud, ist das hier beschriebene Paketkonzept nicht mehr 1:1 anwendbar, da Paketschnittstellen in der Cloud nicht mehr unterstützt werden.  
Mit der Einführung des ABAP Environments für die Entwicklung auf der Cloud und mit ABAP Cloud bekommt die schon lange vorhandene, aber in der Regel nicht für die Strukturierung benutzte Eigenschaft "Softwarekomponente" (SWC) eine tragende Bedeutung in der Strukturierung von ABAP-Software. Die Softwarekomponente wird bei Entwicklung mit ABAP Cloud ein zentraler Bestandteil der Softwarestruktur und ergänzt das Paketkonzept.
Die Pakete unterhalb der Softwarekomponente dienen zur Strukturierung der verschiedenen Bestandteile einer Anwendung.
Die Paketschnittstellen entfallen hierbei, da die Verwendungsbeziehungen nicht mehr auf der Ebene der Pakete gepflegt werden. Die Prinzipien sind aber vergleichbar. Bei den Softwarekomponenten wird die Verwendung über die Release Contracts (C1) gesteuert. Damit sind Objekte in Softwarekomponenten systemweit verwendbar sofern diese mit einem Release Contract versehen sind.  
Soll die Verwendung nur durch Objekte definierter Softwarekomponenten erfolgen, kann dies in sog. Softwarekomponentenbeziehungen (SWC) erfolgen. Die hier deklarierten Softwarekomponenten erhalten die Erlaubnis alle Objekte der SWC zu verwenden. Eine Einschränkung auf spezifische Objekte der eigenen SWC ist nicht möglich. Detaillierte Informationen finden Sie in der [SAP Dokumentation zu SWC](https://help.sap.com/docs/abap-cloud/abap-development-tools-user-guide/software-component?locale=en-US)  

Auch wenn sich einige Elemente des Paketkonzepts in der Cloud nicht mehr wiederfinden, ist die Umsetzung und Anwendung der oben beschriebenen Konzepte dennoch in aktuellen On-Premise und private Cloud SAP Systemen sinnvoll, das es Entwicklungen strukturiert, Abhängigkeiten und Sichtbarkeiten deklariert und damit hilft, gut strukturierte Anwendungen zu erstellen.  

## Von der Architektur zum Design

Nachdem mit den hier genannten Ausführungen die Voraussetzung für eine gute Architektur geschaffen wurden, die sich in der Paketstruktur wiederfindet, muss nun anschließend in den einzelnen Unterpaketen die Anwendungsarchitektur in konkreter Form von Klassen definiert/designed werden. Die Ausführungen hierzu finden Sie im Abschnitt: [Entwurf und Gestaltung moderner SAP-Anwendungen](/ABAP-Leitfaden//abap/oo-design/).
