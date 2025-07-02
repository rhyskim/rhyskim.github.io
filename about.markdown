---
layout: page
title: Devlog
permalink: /
---

<div id="toc">
  <h2>목차</h2>
  <!-- toc.js가 동적으로 이 아래를 채움 -->
</div>

---

## ↧ 자료구조 {#data-structure}
스택, 큐, 해시, 트리, 힙, 그래프 등 컴퓨터 내부의 데이터 표현 방식과 그 구조들에 대한 정리

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "자료구조" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
    {% endif %}
  {% endfor %}
</ul>

---

## ⊆ 데이터베이스 {#database}
관계형 DB, SQL 문법, 정규화, 트랜잭션, 인덱싱, 쿼리 최적화 등의 DB 이론

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "데이터베이스" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
    {% endif %}
  {% endfor %}
</ul>

---

## ↯ 운영체제 {#os}
프로세스, 스레드, 메모리 관리, 스케줄링, 동기화(뮤텍스, 세마포어) 등 운영체제 핵심 개념

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "운영체제" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
    {% endif %}
  {% endfor %}
</ul>

---

## § 알고리즘 {#algorithm}
정렬, 탐색, DP, 백트래킹, 분할 정복, 그래프 알고리즘(DFS/BFS/다익스트라 등) 등 알고리즘 정리

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "알고리즘" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
    {% endif %}
  {% endfor %}
</ul>

---

## ?! Problem Solving {#ps}
백준, 프로그래머스, LeetCode 등에서 푼 문제 풀이와 핵심 아이디어 정리

<ul>
  {% for post in site.posts %}
    {% if post.categories contains "ProblemSolving" or post.categories contains "Problem Solving" %}
      <li><a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})</li>
    {% endif %}
  {% endfor %}
</ul>

---
