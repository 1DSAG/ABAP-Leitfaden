---
layout: page
title: Open Source
permalink: /open-source/
next_page_link: /open-source/using-open-source/
next_page_title: Einsatz von Open Source
has_children: true
nav_order: 5
---

{: .no_toc}
# Open Source

1. TOC
{:toc}

## Einleitung

Open Source ist immer noch ein Thema, bei dem ein ABAP-Entwickler leicht anecken kann und gegebenenfalls für den Einsatz argumentieren muss. Während in anderen Programmiersprachen der Einsatz von Open-Source-Bestandteilen in eigenen Entwicklungsprojekten gelebte Praxis ist, stößt man in der ABAP-Entwicklung noch immer auf einige Widerstände. Möchte man sogar Teile seiner proprietären Software der Community als Open-Source-Projekt bereitstellen, wird es noch schwieriger. Die Argumente dagegen können auch fundiert sein. ABAP hat es durch einige seiner Alleinstellungsmerkmale schwerer an dieser Stelle Fuß zu fassen. In diesem Kapitel sollen daher die möglichen Betrachtungswinkel erläutert und die Chancen und Risiken ausgearbeitet werden.

Was ist überhaupt Open Source? Entgegen der Meinung einiger ist SAP ERP und SAP S/4HANA nicht "open source", nur weil ich als ABAP-Entwickler den Standard-Quellcode der SAP lesen kann. Open-Source-Software (OSS) ist Software, welche unter einer Open-Source-Lizenz bereitgestellt wird. Diese ermöglicht je nach Lizenzbedingungen zum Beispiel eine kostenfreie Nutzung oder Modifikation und Weiterverbreitung des bereitgestellten Codings. Außerdem ist der Quellcode einsehbar. Binäre Builds sind damit reproduzierbar und auditierbar, ohne Coding durchlaufen zu müssen. Dies steht im ABAP-Kontext im Gegensatz zu Transportdateien oder SPAM-Packages, bei denen erst nach dem Import klar wird, was eigentlich enthalten war.

> Open Source im SAP Entwicklerumfeld? Passt das zusammen? 

> Ja, Open Source im SAP Entwicklungsumfeld und noch besser im SAP Umfeld ist kein Widerspruch. SAP nutzt auch Open Source, stellt Open Source Produkte zur Verfügung (z.B. SapMachine)  und unterstützt die Open Source Community (siehe auch SAP Open Source Landing-Page).

> In diesem Kapitel wollen wir Tipps für die Nutzung von Open Source in der SAP Entwicklung geben und auch Empfehlungen wie man sich dem Thema SAP und Open Source annähern kann, falls man Open Source bisher noch nicht nutzt. Zum Abschluss möchten wir einige Open Source Projekte vorstellen, welche wir aus dem ABAP Development Arbeitskreis für sinnvoll erachten und die bei der ABAP Entwicklung „das Leben leichter“ machen.

## Motivation aus Unternehmenssicht

- ....Warum sollte ich mich als Unternehmen / Entscheidungsträger überhaupt hiermit auf hoher Flugebene auseinandersetzen, hat bisher auch ohne geklappt?
- ...Ausbaustufen / Use Cases: von Nutzung OSS in Entwicklungstooling ohne Deployment auf Produktivsystem, Nutzung im Produktivsystem, Contribution zu OSS, bis hin zu Bereitstellung von eigenen Komponenten als Open Source
