---
title: How working on a Bot for a +18 Discord server made me a better developer.
description: The lessons I learned working as a Discord Bot Developer for a +18 Server.
layout: blog
date: 04-07-2024
published: true
thumbnail: /proud-work.webp
---

### Setting the stage

Alright, let me explain.

**Yes, I join servers that do +18 content, in this case specific is a VRChat +18 Server.**

There's mostly only one person important to this history, my coworker in the Bot system and server owner, Max.

When I joined the server I noticed that the server had a custom Bot that did a bunch of management and other things, to help the owner to manage the (at the time) 5000+ members. Things like banning, giving warnings, keeping track of XP, and some very specific stuff for the server.

Being the nerd I am, I said to the owner if they ever needed help with programming, me (at the time only really knowing React + Express from a year long bootcamp) could help if anything needed.

To my surprise the owner got in contact with me almost immediately to talk about a big re-write he wanted to do to his Bot.

My work consisted of:

- Rewriting the Bot from scratch, the current implementation was done with pure JS and crashed all the time.
- Setup a Database system to store the info, at the moment the Bot stored all it's data in JSON.
- Setup an integration with the VRChat system.
- Help Max learn better practices of programming, things like typescript and safe programming and Github, which he didn't know until then.
- Possibly setup an API and a Dashboard for the Staff to do all the custom things they wanted to do.

Me having absolutely no experience in the programming world and being a beginner in the area, we sat down and started talking. Immediately I learned my first lesson:

### Not everyone writes code the same as you, or have the same priorities as you.

So, sorry to expose Max, [I have done it before](https://www.reddit.com/r/programminghorror/comments/1blweat/friend_fixed_the_typescript_error_in_the_code/), and now I will do it again.

In Max's defense he became a very good programmer ever since, but... In the beginning his lack of knowledge of how to actually do programming "the right way" was more than I thought.

To keep it short, Max used no versioning software, relying purely on commented code to have old versions of his code, and he had no real modern Javascript knowledge. His work on the previous Bot was more like I want to make it work, and I made it work with duct-tape and dreams.

For me this was a shock because I was too used to always having linters, formatters, and strict testing rules ever since my bootcamp. As well as using Git since day one.

As he showed the me the code of the old Bot it was so convoluted with absolutely no sense of structure, order, programming patterns, safety. A mix of "then" and async in the same line, and barely no try and catches.

We both agreed that it would be easier to re-write the Bot from scratch. And I took some time to try to teach him some things he was lacking, things like modern Javascript stuff, classes, async programming, Git, and eventually Typescript.

But we had many discussions, specially with the fact Max was very frustrated with the linter i put on the project and the formatter that forced him to program in a completely different way that he was used to.

In many instances we had to go back to fix ESLint being an absolute ass or something on Prettier making the code "look ugly" in Max's eyes.

In hindsight, after all this headache in the beginning, here's two things I learned:

- To take time to train the inexperienced people in the team, they will be frustrated and being nice and available to answer their questions no matter how stupid they are will always make production better.
- Don't use Airbnb ESLint.

After initial frustrations Max learned to overcome his struggles with things like strict typing and error handling, eventually even knowing why they are important. I'm so glad that he had the patience to deal with me trying my best to teach him, while absolute shamming his old code.

### Stop re-inventing the wheel.

Let's go back a bit, while I was teaching Max, I was working on the API Backend that would provide information to the bot. While the Discord Bot world has usually Databases coupled with the Bot in the same project, we needed to expand to eventually use a Dashboard and other things in the future. So I decided that making a dedicated backend was better.

Of course, being the Javascript Developer that I am, I tried to invent my own backend service build on top Express. But after learning that Express by itself sucks with Typescript and struggling really hard to do manual validation with Javascript Decorators i decided to drop the idea and go with NestJS instead.

**GOD BLESS BATTERIES INCLUDED SOLUTIONS**

While on my bootcamp, for the sake of learning we did everything pretty much from scratch. But when going to NestJS and seeing that you could do most stuff by simply putting a decorator and calling it a day was liberating. I was already familiar with the MSC (Model-Service-Controller) structure that NestJS used, so it was really easy to adapt to it.

In the meantime [Theo launched his video on building a modern stack application](https://www.youtube.com/watch?v=PKy2lYEnhgs). I watched and immediately said: I NEED TO USE PRISMA ON THIS PROJECT.

With Prisma in the project I eliminated things I hated, dealing with Database Modeling, Migrations, and Sequelize.

Nowadays I feel way more comfortable dealing with Databases but back then the 2 days teaching us Raw SQL in the bootcamp did not prepare me for the modeling the Database that Max wanted.

Which ended being almost 20 tables with a lot of complicated relationships and specific stuff, since we had to keep track of Staff related data, Discord data, VRChat data, Tickets data and more.

If Prisma didn't exist back then I wouldn't be able to do 20% of what I did in the time I did it.

So, using the right tool for the job is more of a balance of what you know, what you feel it's easier to use, and the need of the project.

### Organize your thoughts and your project, it will help you.

After deciding what I was going to use to make this project, now it's time to plan what is priority. Since I could not just implement all the estimated 100+ endpoints, DTOs for those endpoints and then create a client with all the same things again in both the Bot and the frontend. (Thank god I didn't need to do the ladder manually, explained later).

I never organized a project before, both for mine and for Max's sake, we needed to write down everything that needed to be done and any input I needed during programming, be it bugs, changes or extra sudden requests.

I didn't go far to implement SCRUM (ew), but I finally sat down, to actually learn what Github was good for.

Issues, PRs, and Commits, were all things I didn't pay much mind to while programming. Issues where never a thing since no one does Issues for their individual projects, PRs were just a way for me to conveniently merge my branches, and commits were just "did a thing, lol".

Oh boy, how much I had to learn.

If I was to work in this mostly by myself, I had the job of automating most part of the menial work if possible, automatic deploying, checking for code errors, build failures before merge and code formatting.

I could guarantee that most of this would done by my part on my local machine, but I had no way to be sure that Max wouldn't push some breaking change to main and ask me to fix it later. (He had the habit in the beginning of having his VSCode root outside the project which disabled ESLint, Prettier and the LSP, and program like that.)

So I went to the trouble of learning how to and setting up a CI/CD pipeline for the first time in my life.

As well as learning how to use Issues and PRs properly, doing code reviews, opening issues and talking about them in Github, linking to certain issues, commenting code, all things that are the basics for Open Source development.

Another thing I adopted early on was semantic commits, so I could eventually (Didn't know how then) generate changelogs, so I could have an overview of what I did, this includes checking commit messages with commit-lint. (Because I again couldn't be sure Max would follow all the practices I was adopting)

Now came to the point I needed to do my planning, so again Github had the solution (It's almost like people before me faced the same problems!).

Github Projects are really cool, they are deeply linked with your Organization, and can be very flexible to both the developer and the person doing the overview. It's so useful to just have what you would have in things like Jira/Trello right there on Github. And with a click turn whatever thing is into an Issue and when you do a commit writing: "fixes #5" and Github automatically closes the issue for you and moves it to the Done column. It feels like magic.

Now with everything ready I noticed I had a pretty solid project with a pretty smooth workflow.

### If you face a problem early on, someone probably already have a solution it.

We already found that out with the whole Github Projects thing, people have a solution for it because it is something everyone face very early on.

So about the dilemma of DTOs and sharing code between the frontend and backend with type safety, I know now it is still an ongoing debate and the whole reason why GraphQL is a thing.

Back then I could not just move my stack to use T3 and TRPC because I was too dumb. So I thought if I could only get a way to generate a client for my frontend so I could import it and use without needing to re-write all the DTOs by myself would already get me 80% there.

Lucky me the guys on [OpenAPI Generator](https://openapi-generator.tech) already had a solution for this.

I only needed to document my API properly and I would have a client for free.

A little more work in the direction of making the API better and get a free client, this was the way to go.

I learned swagger (And by extension OpenAPI) and how to generate a client and publish it to another repository on the CI so we could import it and use on both the Bot and the webclient.

After this I had to learn how to setup hard linking with npm packages and how npm packages really work since I needed the Bot to build the API Client with it on "npm i".

I could probably have learned how to publish npm packages and do that instead, but that was too much to handle after almost 9 hours struggling with debugging CI.

### Dark times, and keeping motivation while working on.

After all this setup, I was working on and off the project on my free time for almost 6 months.

But suddenly something happen that shook me deeply. My grandpa which I was very close to died, and I was really frustrated because I was still jobless, not graduated in University and poor. And I wanted to show to him, myself being successful before he passed out, because he always worried about me.

This project I had with Max was per my pride very well done, but was no way a job. Max being a recent graduated student payed me 100USD a month on average to work on the project, which for me as a Brazilian was enough to pay for emergencies and help my parents at home.

Me and Max had a verbal agreement. I would work how I think it is best, for as long as I wanted to and I would let him just pay me what he thinks it was worth, so no one got wronged. We were just friends trying to do something cool together mostly.

But I was still frustrated, I was applying for jobs for almost 2 years at this point, getting only silence due the Brazilian market being supersaturated. No one would give me the opportunity since I was still a Junior Developer, and if I wasn't getting a “real” job, I wouldn't graduate from being a Junior.

So per sheer will, since then, the development of my code has been guilt driven. I still feel the pain of losing my grandpa and I still feel locked in this small town, with everyone around me saying I am an excellent developer, but I still live in dad's office. Getting payed less than 4 dollars an hour to write an Angular App as my main job. While having all the baggage of knowing all the things most recruiters keep posting in Linkedin they want, with no opportunity to show any of it, all while still being considered a junior developer.

But, let the ramblings of a sadden developer tire you no longer. If I ever get to a better place in my life I want the state of my mental to be a sign that, even if you're facing shitty situations, and you're in bottom low of motivation, **KEEP TYPING**. All you get being somber and depressed is wasted time. If I drown in my sadness, I will drown struggling.

No matter how my mental state has been, I always tried to not have it affect the quality of my work. I could have half assed any time, take a day off with the excuse of feeling bad to stay in bed all day looking at the ceiling, but I always tried to keep it in check.

I will give this as a personal advice, if you feel like nothing is meaningful and you're facing the struggles of being a modern junior dev, **KEEP TYPING**, it eventually will get better.

Recently I have been hanging out more with the programming community (Thanks to Theo for being wholesome, and for Primeagen for roasting me on stream), trying to get more and more motivation. 

### I am very much proud of the work I did on that +18 Discord Bot.

I have still more to say, about the absolutely shit storm that is the VRChat integration. How its developers keep ignoring their high skilled communities in favor of making their own solutions to problems that were already solved long ago. How I learned to scrape a WebAPI by exploring it. But with the objective of making this post not as long, I will leave as it is for now.

I learned so much, so many practices that made me more confident as a developer. With this project I went from someone only capable of doing React SPAs to someone I can proudly call fullstack, even if still a Junior.

And I'm still learning more and more everyday, recently I've been working with Golang and trying to work with VR related stuff for the web. And I hope to have updates for these things again in the blog in the future.
