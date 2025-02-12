---
title: Your average programmer standards are low
description: It's impressive how people just seddle with "it just works"...
layout: blog
date: 11-02-2025
published: true
---

## The standards are low, lower than you think.

Most older programmers will look at some of the things I will say here and will just nod and say: "Yep, that's it, that's how it does.", but I have had the same talk and warnings to so many new programmers that I'm just writing it down at this point.

## Your average code base was build with toothpics and glue.

In my first three years of code what I learned from the get go is that the idea of planning and system design is something that never is beginning of most commercial systems up and running nowadays. On your average not multi-billion dollar company it was probably a person that "knew programming" and another person with a idea that started the code, or some poor contract worker asked to do a MVP and then everything snowballed from that.

You will find if you have any sort of competence working for small companies that 80% of your work will be building on top of stupid decisions took times ago from someone that probably started the project from a bootcamp mentality.

What differentiates a newer programmer from a experienced one is knowing the solution to problems that you may cause before writing them.

The act of running a MVP as experienced programmer is balancing "I just need this work." with the idea that any shortcuts you take will come to bite you later.

> I know that I need to handle the errors here, but for me to do that will make me need to make a error component and think about styling, so let me just wrap this on a try catch and console.log the error. I can deal with that later.

But for someone that probably just came from a bootcamp they are too busy making it work to worry about things like "project structure" and "error handling". They will just use whatever they find to make the project work, this is not a issue of incompetence, it's just a lack of experience.

Usually the concepts don't come from management with "I need a functional component that can be reusable and can handle X and Y.", they usually are "I saw this table on this app, we need one like that to show our data.". So the simple thought of a beginner programmer is "Okay, how I make a table like that with our data." and they spend all their time on that task, no matter what shortcuts needed. When usually talks like: "We need a table here, or is this gonna be used somewhere else? Is a table the best way to show this data? Does the API that use does backend pagination? Can I cache this data or does it need to be refreshed often?" won't go through their head.

And such technical thoughts are things that will only ever go through the head of the programmer, the non-technical boss will probably not understand and think about them.

Usually on big companies there's a planning with your tech lead that will discuss the technical roadblocks of something, that person usually has the foresight of such things from experience and will be the bridge connecting the newer devs to their non-technical bosses.

But sadly on small companies that's not a thing.

## The pigeon manager.

What happens in most cases in companies that are transition from startups to actual companies is that they need a middle man to manage teams of developers and be the bridge between the non-technical and the technical.

The problem comes when these companies won't invest money into a actual tech lead, so they instead hire a "scrum manager" or "team leader", another non-technical person that their entire job is plan the workflow of the technical team.

What happens is what I started to call "pigeon managers" where anything further than a simple question needs to be "spoken and scheduled with the boss" where being non-technical and usually from management position they will B-Line into processes and management tools for the sake of just justifying their position.

This is where the dreaded "scrum master" stories come from, where some incopetent manager will ask something stupid or counter productive to be done by the technical team while the technical team tells them it can't be done or shouldn't be done.

> We understand how much that refactor is important for the application health, but unless you can fit it on less than 8 story points we can't focus on it, the clients need the new features now.

This management issue is not 100% fault of the boss either, many programmers fall into the introvert umbrella and they end up not being good communicators, so bosses that have more to do than just care about code need a "translator".

This is a issue when the manager starts to think because they are in charge of a technical team, they have the final say on technical things when they themselves have no technical knowledge instead of trusting the technical team on their opnions and finding a middle ground with high-up demands.

So you will hear often that some things can't be done or shouldn't be worked on since they don't fit on a neat Jira ticket, or whenever they are so open ended and complex that they can't be summarized in neat story points or work hours.

This is a issue that is only fixed with understanding how to communicate scope and priorities, on both sides, programmers need to know how to give ideas that are more measured and how to break down big complex problems in bite sided things. Maybe that refactor doesn't need to be done all at once, maybe it could be done in a side branch and you can ask your manager for dedicated time on your sprint for a while to peddle at it. And managers need to actually understand somethings can't really be measured in such precision, and circumventing all the system just invalidates the fact that the system exist. If a process exists because it just needs to exist and solves nothing, it doesn't need to exist.

## Programmers are replaceable mentality.

Many of short term high gain bosses will think that programmers are easily replaceble and a rotative resource to be used.

I see this as a sign of companies that want to make money but have no intention of making it big.

Good programmers are either, nurtured or expensive.

If you have "the guy" that has been in the company since the start and knows the in and out of everything in the system and you suddenly sends him out cuz he's becoming expensive and you hire 3 devs for the same amount thinking you're gonna produce faster, well, you couldn't be more away from the truth.

This whole situation is at a all time high post COVID and now even with AI. Bosses that don't know how it is like to work "in the threnches" will just think that more developers equal more production which means that more cheap developers equal more gain and larger margins.

Good developers that can hit the ground running most times are either unavailable because other companies actually value them, or are really expensive. So what happens is that bosses will aim for only hiring juniors and bootcamp devs for real cheap, and keep firing and re-hiring anytime they become too expensive.

That means eventually someone that ACTUALLY understand how everything works will disappear, and when a system becomes too big and too unmanageble **it will break**. And if your company is build all around that system you will go broke/bankrupt. This is what happened to the first company I worked to.

If your company is build around a software piece your developers are your most important resource, but for the developer reading this, you should always know, if your company shows signs that it rotate it's developers often your boss probably thinks that nine pregnant women can give birth to one baby in a month.
