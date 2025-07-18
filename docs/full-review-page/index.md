---
layout: page
title: Komplette Version
permalink: /full-version/
nav_order: 16
has_toc: false
---

{% assign all_pages = site.pages | where_exp: "item", "item.parent == nil" | sort: "nav_order" %}
{% for main_page in all_pages %}
    {% if main_page.title != "Komplette Version" and main_page.title %}
        {{ main_page.content }}

        {% assign sub_pages = site.pages | where: "parent", main_page.title | sort: "nav_order" %}
        {% if sub_pages.size > 0 %}
            {% for sub_page in sub_pages %}
              {{ sub_page.content }}
            {% endfor %}
        {% endif %}  
    {% endif %}
{% endfor %}