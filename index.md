---
layout: page
title: Anfal's Blog
type: Blog
relimage: assets/img/personal.jpeg
keywords: Anfal's Blog, Blog, Personal Blog
---

<h1 class="page-title">
    <span class="page-title__text">
        My Thoughts
    </span>
</h1>

<div>
    {% assign postsCategory = site.posts | group_by_exp:"post", "post.categories"  %}
    {% for category in postsCategory %}
        <ul class="list-posts">
            {% for post in category.items %}
                {% assign title = post.title | split: '[' %}
                <li class="post-teaser">
                    <a href="{{ post.url | prepend: site.url }}">
                        <span class="post-teaser__title">
                            {{ title[0] }} {% if title[1] %} <strong>[{{ title[1] | remove: "]" }}]</strong> {% endif %}
                        </span>
                        <span class="post-teaser__date">{{ post.date | date: "%d %B %Y" }}</span>
                    </a>
                </li>
            {% endfor %}
        </ul>
    {% endfor %}
</div>