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

I am interested in the fundamental physical processes that govern structure formation and evolution in the universe, especially before the completion of cosmic reionization. My goal is to develop theoretical models grounded in first principles and represent them accurately and efficiently in numerical simulations. As a computational astrophysicist, I have a strong interest in developing and introducing state-of-the-art numerical tools to advance theoretical astrophysics. 

My PhD thesis, advised by Prof. Nick Gnedin (who likes to remind people he’s also a movie director), focuses on cosmic reionization. I also spend time in Madison, WI, working with Prof. Ellen Zweibel on cosmic rays.

When I’m not doing science, I’m usually building things, playing chess or Go, or keeping up my interest in competitive programming. You can find me somewhere between Chicago and Madison (on a Van Galder bus).

<style is:global>
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
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  border-radius: 6px 6px 0 0;
}

.research-box:hover {
  background: #eef3f9;
}

.research-box .caret {
  font-size: 1rem;
  transition: transform 0.25s ease;
}

.research-box.active .caret {
  transform: rotate(90deg);
}

.research-content {
  display: none;
  border: 1px solid #d5dae2;
  border-top: none;
  border-radius: 0 0 6px 6px;
  padding: 1.2rem 1.3rem;
  margin: 0;
  line-height: 1.65;
  color: #1e293b;
  background: #ffffff;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.research-box.active + .research-content {
  display: block;
}

/* ---- DARK MODE ---- */
.dark .research-box {
  background: #2a2e36;           /* dark neutral background */
  border-top-color: #9ca3af;     /* soft gray border */
  color: #f1f5f9;                /* light neutral text */
}

.dark .research-box:hover {
  background: #383d46;           /* slightly lighter hover tone */
}

.dark .research-content {
  background: #1b1e23;           /* darker inner panel */
  color: #e5e7eb;                /* readable light-gray text */
  border: 1px solid #3b3f46;
  border-top: none;
}

/* optional shadow for subtle depth */
.research-box,
.research-content {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}
.dark .research-box,
.dark .research-content {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}
</style>

<div class="research-box" onclick="this.classList.toggle('active')">
  <span class="caret">▸</span>
  Undergrad Research Opportunities (click to expand)
</div>

<div class="research-content">
  I work with undergraduates both at <strong>UChicago</strong> and <strong>UW–Madison</strong>. 
  I have projects that involve running simulations, developing machine learning models, and building reduced analytical models that capture the essential physics of complex astrophysical systems. 
  For simulation work, being able to code in C++ or Fortran is required, but strong motivation and the ability to learn these languages along the way are perfectly fine. 
  For machine learning or analytical projects, a solid background in applied mathematics and physics is important; you’ll likely enjoy these projects if you like deriving equations and understanding algorithms. 
  Overall, my mentorship style and research are a good fit for mathematically inclined students who want to understand both the tools and the physics.
  <br><br>
  If you’re interested in collaborating, feel free to reach out to me or to my advisor, mentioning your interest in working with me. 
  If you’re curious about my reionization work and how to get started, take a look at 
  <a href="/intro_to_research"><strong>this short guide</strong></a> 
  I compiled from email responses to prospective undergraduate researchers.
</div>


 I especially encourage female students interested in computational and theoretical astrophysics to reach out and chat — coffee’s on me.

