---
layout: page
title: Softwaretest mit ABAP Unit 
permalink: /testing/
has_children: true
nav_order: 5
---

{: .no_toc}
# Softwaretest mit ABAP Unit

1. TOC
{:toc}


## Inhalt des Kapitels

Wenn Software entwickelt wird, muss diese während der Entwicklung und vor der Inbetriebnahme ausgiebig getestet werden. Zum Testen von Software gibt es zahlreiche und vielfältige Methoden und Techniken. Testen ist aufwändig und wenn Software nicht sorgfältig und umfassend getestet wird, kann dies im besten Fall zu kleinen Störungen bis hin zu massiven Auswirkungen auf den Produktivsystem eines Systems führen. Dies führt mitunter zu hohen Kosten im Betrieb und der Weiterentwicklung von SAP-Systemen.  

Effizientes und Effektives Testen muss im Softwareentwicklungsprozess so früh wie möglich erfolgen um Fehler und Probleme so früh wie möglich erkennen zu können. Mit ABAP-Unit werden Tests in die frühe Phase der Softwareentwicklung integriert.
In diesem Kapitel gehen wir darauf ein warum der Einsatz von ABAP Unit erforderlich und gewinnbringend ist, welche Herausforderungen sich ergeben und welche Rahmenbedingungen gegeben sein müssen um ABAP UNIT Tests effektiv einzusetzen.

Ergänzend finden Sie noch ein paar Hinweise zu weiteren Testtools und Methoden, diese werden aber nur kurz angesprochen.  

>
**Begriffsabgrenzung Unit Test**  
Unter Unit Tests werden oft verschiedene Definitionen von Tests verstanden. Wenn wir hier von Unit Tests schreiben, handelt es sich um programmierte Tests mit dem ABAP-UNIT Framework, die automatisiert ausgeführt werden können.  
Die manuelle Ausführen einzelner Code Einheiten z.B. mittels SE37 / SE24 / Reports ist kein Testen, sondern das Ausprobieren von Funktionalitäten.  
{: .important}

## Zielgruppe

In diesem Kapitel möchten wir einerseits den Entscheidern und Verantwortlichen Empfehlungen und Hinweise geben, warum ABAP-Unit Tests für die heutige Form der modernen ABAP Programmierung sehr wichtig ist und welchen Nutzen Sie für dieses Investment erhalten können.  
Dieser Leitfaden dient aber auch Entwicklern und Entwicklungsverantwortlichen oder vgl. Rollen dazu, ABAP-UNIT Testing sinnvoll einzusetzen, oder falls es noch nicht umfangreich im Einsatz ist, den Einstieg zu erleichtern.  
Vielleicht hilft dieser Leitfaden auch dabei sowohl Entwickler als auch Entscheider zu motivieren, ABAP-UNIT Tests umfangreich im Entwicklungsprozess einzusetzen und die Rahmenbedingungen dafür zu schaffen.

## Motivation

Ein wichtiger Faktor in SAP-Projekten ist die zur Verfügung stehende Zeit. Und meistens herrscht hoher Zeitdruck wenn um die Erstellung von SAP-Anwendungen und Anpassungen geht. Die Erstellung von ABAP Unit Tests und die dazu erforderlichen softwaretechnischen Maßnahmen benötigen Zeit und Wissen. Hier entsteht ein Spannungsfeld da dies auf den ersten Blick Zielkonflikte aufwirft.

> {: .Zitat }
> Der Mitbegründer des agilen Manifests und Buchautor mehrerer Bücher zur Softwareentwicklung, Robert C. Martin sagte:  
> **"The only way to go fast is, to go well."**

Warum soll man Aufwand und Zeit in die Erstellung von Unit Tests investieren ?  
In ABAP Unit erfahrene Entwickler wissen dass die Erstellung von Software, die mit ABAP-UNIT Tests abgedeckt ist, neben der höheren Qualität auch Effizienz- und Geschwindigkeitsvorteile mit sich bringen.  
Wir möchten zu Beginn des Kapitels Ihnen die Vorteile aufzeigen und gehen im Weiteren auf die ABAP UNIT Test Technik und die erforderlichen Maßnahmen und Vorgehensweisen ein.

**Vorteile die sich durch den Einsatz von Unit Tests ergeben:**

- Die Erstellung von Software, die mit Unit Tests unterlegt ist, beinhaltet, bedingt durch die erforderliche Massnahmen zur Testbarkeit, eine klare Struktur, die objektorientierten Designprinzipien folgt.
- Software, die ABAP-Unit Tests enthält hat aufgrund der architektonischen Erfordernisse wie Separation of Concerns eine bessere Struktur und Trennung der Belange (Fachliche Logik und technisches Coding). Damit ist die Software flexibler und besser anpassbar.
- Die Entwicklung enthält ein Sicherheitsnetz, dass von Entwicklern genutzt werden kann wenn Software weiterentwickelt wird.
- Fehler werden bereits während der Entwicklung auf dem Entwicklungssystem erkannt, dies spart Aufand in Integrations- und Anwendertest.
- Durch due erforderliche Erstellung der Testfälle und programmatische Testdatenerstellung, werden Unklarheiten in der Anforderungsspezifikation in einer frühen Phase der Entwicklung festgestellt.
- eine Testabdeckung durch Unit Test ermöglicht die ständige Verbesserung und das Refaktoring der Software was ein Aufbau von technischen Schulden vermeidet.
-Wissensverteilung in Team. Durch Unit Tests werden Funktionalitäten dokumentiert, was es anderen Teammitgliedern einfacher macht, sich mit dem Coding vertraut zu machen und ihn anzupassen, da Unit Tests programmierte Spezifikation des Verhaltens darstellen und dazu auch ausführbar sind.
- Sobald eine in der Produktion befindliche Anwendung erweitert oder angepasst werden muss, sind die Vorteile von ABAP-UNIT Tests feststellbar, da bereits während der Entwicklung über die Tests getestet werden kann und Fehler zum frühesten Zeitpunkt erkannt werden können und durch die Tests bereits Testdaten und technische Spezifikationen vorliegen, welches die Änderung/Erweiterung des Codes vereinfacht.

Die o.g. Punkte führen im Ergebnis dazu, dass der Testaufwand der Anwendung durch die Fachabteilung deutlich reduziert wird. Anpassungen und Erweiterungen der Anwendungen werden durch die Implementierung von Unit Tests deutlich vereinfacht und vor allem sicherer, da neue Fehler bereits durch die bestehenden Unit Tests während der Entwicklung der entdeckt werden und somit in den Anwendertests auf dem Testsystem auftreten. Dies sind vor allem Fehler in der Struktur oder Flüchtigkeitsfehler die unvermeidlich sind.  

Neben den generellen Vorteilen die sich positiv auf den Aufwand und die Organisation auswirken, bringt der Einsatz von Unit Tests aber auch Vorteile für den Entwickler, der zuerst Aufwand und Energie in die Erstellung von Unit Tests stecken muss und ggf. auch deswegen gegen Widerstände ankämpfen muss.

**Vorteile für den Entwickler:**

- Durch die Notwendigkeit Testdaten zu programmieren, erhält der Entwickler gute Einblicke in die zu verarbeitenden Daten und bekommt damit auch verwertbare Informationen über die zu erstellende Anwendung die helfen, die Anforderungen besser zu verstehen und damit besser umzusetzen.
- Um Tests zu implementieren muss von Grund auf eine gute Struktur erstellt werden. Dies verhindert die Erstellung von Code der verschiedene Belange vermischt und spätere Anpassungen erschwert.
- Sobald die ersten Tests geschrieben sind, können auf dem Entwicklungssystem die Komponenten der Anwendung ausgeführt und debugged werden und damit auch wertvolle Hinweise über das Laufzeitverhalten frühzeitig ermittelt werden und Fehlannahmen vermieden werden, die sonst aufwändig behoben werden müssten.
- Der initiale Mehraufwand wird durch spätere Effizienzgewinne ausgeglichen. Verbunden damit, dass der Entwickler über UNIT TEST abgesicherte Software bessere Qualität liefert, schneller funktionierende Software auf den Testsystemen zur Verfügung gestellt werden kann und weniger Fehler in späteren Testphasen auftreten, verringert sich der Gesamtaufwand, es gibt weniger Testzyklen und dies steigert letztlich die Zufriedenheit sowohl auf Entwicklungs- als auch auf Anwenderseite.

## Herausforderungen und Rahmenbedingungen

### Herausforderungen beim Einsatz von ABAP-UNIT  

#### Mangelndes Wissen und Qualifikation

Auch im Jahr 2025 bleibt die Herausforderung für Unternehmen bestehen, dass ein signifikanter Anteil der ABAP-Entwickler nicht das Wissen und Erfahrung verfügt, um effizient automatisierte Tests mit ABAP Unit zu erstellen. Denn dies erfordert einerseits hinreichende Kenntnisse in moderner Objektorientierter Programmierung, Trennung der Belange, guter Strukturierung der Software in testbare Einheiten und letztlich Kenntnisse der UNIT-Test Methodiken. Dies kann u.a. in der Ausbildungen begründet sein und ergibt sich auch daraus, dass die Anwendungsentwicklung auch gute Geschäftsprozesskenntnisse erfordert und daher bei vielen ABAP-Entwicklern die Kenntnistiefe im Bereich der Programmierung sehr gut in Bezug auf prozedurale Techniken und Umsetzungen von Reports und klassischen Anwendungen. Im Bereich des modernen ABAP mit Techniken und Methoden, die in anderen Programmiersprachen lange Standard sind, aber durchaus noch ausbaubar.  

#### Zeitdruck und Definition of Done

In SAP-Projekten besteht oftmals hoher Zeit- und Erfolgsdruck. Die Zeit für die Umsetzung der Anforderungen ist für Entwickler knapp bemessen und es wird erwartet dass frühzeitig testbare Versionen der Anwendung bereitgestellt werden.
Die Definition wann ein Artefakt geliefert wurde, besteht meistens daraus, dass die geforderte Funktionalität erfolgreich im Anwendertest abgenommen werden kann. Die Lieferung von Unit-Tests finden sich idealerweise in Handbüchern und Entwicklungsrichtlinien, ist aber nicht Teil der Abnahme oder das Fehlen dessen wird akzeptiert, da die Funktionalität auch ohne Unit Tests produktiv gesetzt werden kann. Die dadurch entstandenen technischen Schulden sind nicht offensichtlich und werden bewusst oder unbewusst in Kauf genommen.

#### Erfahrungsdefizit als Umsetzungshürde

> {: .Zitat }
> "Ohne Tests keine Tests"

Techniken und Methoden, die ein Entwickler nicht beherrscht, nicht regelmässig anwendet und auch nicht zwingend anwenden muss, werden unter Zeitdruck nicht zum Einsatz kommen. Unter derartigen Rahmenbedingungen wird der flächendeckende Einsatz von Unit Tests sich sehr schwierig umsetzen lassen. Die oben genannten Vorteile lassen sich nicht erreichen und die sich daraus ergebenden Nachteile oft de-facto Standard in SAP-Entwicklungsprojekten sind. Dies sind u.a. hohe Testaufwände, Fehler im Produktivsystem, schwierige und aufwändige Anpassungen der Software, Seiteneffekte nach Änderung usw.

### Die Rolle des Managements

Damit sich ABAP-Unit Tests in der Anwendungsentwicklung durchsetzen und effektiv eingesetzt werden kann, ist ein Umdenken bei Entscheidern und Verantwortlichen für den Betrieb von SAP-Software nötig.  
Kenntnisse und Wissen zu ABAP-UNIT muss sich zu einem geforderten und geprüften Skill von ABAP-Entwicklern etablieren. Die Erstellung von ABAP-UNIT Tests muss in die Definition of Done und den Lieferumfang von Software aufgenommen werden und nicht als optionales To-Do betrachtet werden.

### Die Rolle der Entwicklungsorganisation

Der Einsatz von ABAP-Unit muss einerseits in den Entwicklungsrichtlinien und Handbüchern definiert und vorgeschrieben werden um eine Verbindlichkeit zu erzeugen. Wie oben beschrieben, wird die Formale Definition allein den flächendeckenden Einsatz von Unit Tests nicht hervorbringen.  
Um dies zu erreichen müssen neben formalen Voraussetzungen auch Rahmenbedingungen geschaffen werden, die sowohl die oben beschriebenen Herausforderungen als auch die Herausforderungen im moderen ABAP-Entwicklungsumfeld aufgreifen und die Entwicklungsteams befähigen, ABAP-UNIT Tests in den Entwickleralltag zu integrieren.  
Eine ausführliche Beschreibung der nötigen Rahmenbedingungen und in der Praxis bewährte Vorgehensweisen finden Sie im Kapitel  
**[Organisation: Teamorganisation](https://1dsag.github.io/ABAP-Leitfaden/organization/#teamorganisation-und-teamzusammensetzung)**

## Die Rolle des DSAG ABAP-Leitfadens für die Umsetzung Ihrer Test Strategie

ABAP-UNIT erfordert die Berücksichtigung zahlreicher Aspekte von Seiten der Entwicklungsorganisation, der Verantwortlichen Personen und der Entwickler. Um ABAP-UNIT sinnvoll und effektiv anwenden und einsetzen zu können, erfordert es auf Seiten der Entwickler ein gutes Wissen über Softwareentwicklung und moderne Programmierung in ABAP und das Beherrschen von Objektorientierung.  
Auf Seiten der Organisation müssen sowohl im Entwicklungsprozess als auch in den Rahmenbedingungen Voraussetzungen geschaffen werden, die die Erstellung von Unit-Tests unterstützen und fördern. Da Dieser Leitfaden alle diese Aspekte behandelt und auch auf technischer Seite Wissen vermittelt, kann Ihnen dieser Leitfaden helfen, die Maßnahmen in Ihrem Unternehmen abzuleiten und den Entwicklern eine Motivation und Einstiegshilfe sein, in die Welt der ABAP-Unit Tests einzutauchen.

Im Folgenden Abschnitt werden die technischen Grundlagen zu ABAP Unit Tests erläutert, Test- und Entwicklungstechniken vorgestellt und auch auf fortgeschrittene Techniken eingegangen, so dass mit den Ausführungen ein gutes Verständnis geschaffen und so die Grundlage gelegt werden kann, dass Unit Tests Teil des Softwareentwicklungsprozess werden.

