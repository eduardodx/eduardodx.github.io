---
layout: default
---

<div class="bio" markdown="1">
<img class="profile-picture " src="eduardodx.jpg">

I'm a MSc student at [I4Soft](http://i4soft.com.br){:target="_blank"}, [Universidade Federal de Goiás](https://www.ufg.br){:target="_blank"}, Brazil.
My advisor is [Celso Camilo-Junior](http://www.inf.ufg.br/~celso/){:target="_blank"} and my research is focused in Computational Intelligence and Automated Program Repair. I hold a Computer Science bachelor from the same university where I'm doing my master's research.

<small>
[Twitter](https://twitter.com/eduardodx){:target="_blank"} &nbsp;•&nbsp;
[GitHub](https://github.com/eduardodx){:target="_blank"} &nbsp;•&nbsp;
[Instagram](https://www.instagram.com/dxeduardo){:target="_blank"} &nbsp;•&nbsp;
[Last.fm](https://www.last.fm/user/eduardodx){:target="_blank"} &nbsp;•&nbsp;
[G Scholar](https://scholar.google.com.br/citations?user=s1n7GqkAAAAJ){:target="_blank"}
</small>
</div>

<div class="posts-index">
  {% for post in site.posts %}
    <div class="post-index--item">
        <span class="post-date">{{ post.date | date: "%Y.%m.%d" }}</span>
        <a href="{{ post.url }}" class="post-title">{{ post.title }}</a>
        <!-- <p class="post-excerpt">{{ post.excerpt  | strip_html }}</p> -->
        <ul class="post-tags">
            {% for tag in post.tags %}
                <li>#{{ tag }}</li>
            {% endfor %}
        </ul>
    </div>
  {% endfor %}
</div> <!-- .posts-index -->
