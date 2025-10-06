---
title: About Me
pubDate: 2024-12-06
---
<p style="text-align: center;">
  <img
    src="/profile.jpg"
    alt="Hanjue Zhu"
    class="rounded-lg"
    style="width: 160px; margin-bottom: 1rem;"
  />
</p>

**Email**: hanjuezhu@uchicago.edu <br>
**Job**: PhD candidate in Astronomy & Astrophysics at the University of Chicago <br>
**Hobby**: Theoretical and computational astrophysics <br>

I am a computational astrophysicist by training. I develop new theories and algorithms to explore the universe. My PhD thesis, advised by Prof. Nick Gnedin (who likes to remind people he’s also a movie director), focuses on cosmic reionization. I also spend time in Madison, WI, working with Prof. Ellen Zweibel on cosmic rays.

When I’m not doing science, I’m usually building things, playing chess or Go, or keeping up my interest in competitive programming. You can find me somewhere between Chicago and Madison (on a Van Galder bus).

<style>
.research-box {
  background: #f8fafc;
  border-top: 3px solid #243a67;
  padding: 0.9rem 1.1rem;
  margin: 1.5rem 0 0 0;
  font-weight: 600;
  font-size: 1.02rem;
  color: #243a67;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.1px;
  transition: background 0.2s ease, color 0.2s ease;
}

.research-box:hover {
  background: #f1f5fa;
}

.research-box .caret {
  font-size: 1rem;
  transition: transform 0.2s ease;
}

.research-box.active .caret {
  transform: rotate(90deg);
}

.research-content {
  display: none;
  border-top: 1px solid #d5dae2;
  padding: 1rem 1.3rem;
  margin: 0;
  line-height: 1.6;
  color: #1c2a39;
  background: #ffffff;
}

.research-box.active + .research-content {
  display: block;
}
</style>

<div class="research-box" onclick="this.classList.toggle('active')">
  <span class="caret">▸</span>
  Undergrad Research Opportunities (click to expand)
</div>

<div class="research-content">
  I work with undergraduates both at <strong>UChicago</strong> (focusing on cosmic reionization and structure formation)
  and <strong>UW–Madison</strong> (focusing on plasma astrophysics and cosmic rays). I have projects that involve running simulations, developing machine learning models, and building reduced analytical models that capture the essential physics of complex astrophysical systems. For simulation work, being able to code in C++ or Fortran is required, but strong motivation and the ability to learn these languages along the way are perfectly fine. For machine learning or analytical projects, a solid background in applied mathematics and physics is important — you’ll likely enjoy these projects if you like deriving equations and understanding algorithms. Overall, my mentorship style and research are a good fit for mathematically inclined students who want to understand both the tools and the physics.

  If you’re interested in collaborating, feel free to reach out to me or to my advisor, mentioning your interest in working with me. If you're curious about my reionization work or how to get started, take a look at [**this short guide**](/intro_to_research) I compiled from email responses to prospective undergrad researchers.
</div>

 I especially encourage female students interested in computational and theoretical astrophysics to reach out and chat — coffee’s on me.

