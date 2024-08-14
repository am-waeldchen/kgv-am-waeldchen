---
layout: home
---

{% assign yellow = "" | split: ',' %}
{% assign house = "" | split: ',' %}
{% assign today = site.time | date: "%s" %}

{% for mol in site.data.mol %}
  {% assign housdate =  mol.Hausmuell | date: "%s" %}
  {% assign yellowdate =  mol.Verpackung | date: "%s" %}

  <!-- Push into array -->
  {% if today <= housdate %}
    {% assign house = house | push: mol.Hausmuell %}
  {% endif %}
  {% if today <= yellowdate %}
    {% assign yellow = yellow | push: mol.Verpackung %}
  {% endif %}
{% endfor %}
<!-- {% assign one = yellow | first | date: '%A, %d.%m.%Y' %} -->

{: .note-title }
> Nächste Müllabholung
> {: .mb-lg-4 }
> **Gelber Sack**: {{ yellow | first }}
>
> **Hausmüll**: {{ house | first}}

{: .text-zeta }
Ihr könnt euch den Kalender der Abfuhrtermine auch als [pdf](https://api.abfall.io/?key=efb75cbd1f08fae1d4e47ae72a85c655&mode=export&idhousenumber=5659&wastetypes=18,48,295&timeperiod=20240101-20241231&showinactive=false&type=pdf){:target="_blank"} ansehen,
oder die [.ics Datei](https://api.abfall.io/?key=efb75cbd1f08fae1d4e47ae72a85c655&mode=export&idhousenumber=5659&wastetypes=18,48,295&timeperiod=20240101-20241231&showinactive=false&type=ics){:target="_blank"} herunterladen und in euren Kalender einbinden.

---

{% for post in site.posts %}
# {{post.title}}
{: .text-beta .text-green-200 .fw-500 }
<!-- <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: '%d.%m.%Y' }}</time> -->
{{ post.content }}
<br>
{% endfor %}
