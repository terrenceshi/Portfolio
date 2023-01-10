# terrenceshi.com

Welp, figured I'd write some documentation while everything is still fresh on my mind. Let's do this!

If there's anything in general to work on, my phone's display of zoomed in pictures on the art page has the pictures stretched. However, I honestly have no idea how I could reproduce this issue on my computer.

## Redeploying Frontend

```
npm run deploy
```

npm run deploy is your god. Note the importance of "deploy" under "scripts" in package.json. 

```
gh-pages -b gh3 -d build
```

This command will put your build in a branch titled "gh3" (it will not overwrite the branch if the branch already exists). By default, it writes to a branch called "gh-pages". However, I have not been able to get it to work in this deployment phase.

It is possible to simply just alternate between two branches for every time you redeploy the app. While this is kind of stupid, its not a bad habit to have, as the old branch can serve as a last working good if the new build has any errors.

After your new branch is created, go to settings -> pages. You can then tell github to change the branch that builds the site. You will have to change "homepage" under package.json if the custom domain ever changes. If using a new custom domain, be sure to copy the records from the old domain or books2nooks. Be sure to also change the cname file under the public folder. 

## Index.js

Nothing really special here. However, do note that a hashrouter is literally just better than a regular browser router. I had this issue where terrenceshi.com/art or any other link would not be able to load if you went to it straight. However, with a hashrouter, terrenceshi.com/#/art will load wherever. Do note that with a hashrouter, you do need a /# after your domain name in "homepage" under package.json.

Additionally, we also use a component called ScrollToTop here so that every time you use a react link, you scroll to the top. The code in that component is copy pasted. 

## App.js

Our first huge bulky boy. App.js handles the banner, footer, and routes. 

First there is a mui theme defined which gives a dark mode color palette and sets it so that mui buttons are not in all caps.

You'll see GetWindowDimensions in like every page. It simply gives us the initial windowMode the app starts in. WindowMode starts in 0 (biggest) then goes down to mobile sizing for the largest number. I did not standardize windowMode in all the pages, but here, 3 is mobile. 

You'll also see useInView for every page. This essentially tells us if a certain div is in view. Ref gets sticked onto a div as a reference so you know which div to look out for. inView is a boolean that tells us if its in view. We use this here for the footer.

We also have a function handleResize() to be used in useEffect which will change the windowMode when the window is resized if necessary. If you really are super rusty, useEffect is the function react will run after everything gets rendered or rerendered. 

App also uses "useLocation()". useLocation() will tell us which page in the app we're in. I use "useLocation" to change the banner image whenever we go to a different page. I technically should have handled this in the slider component but whatever. The only downside of doing it this way is that the banner will be changed slightly later than it should be. 

### Slider.js

Do note that on github, slider.js's first s is lowercased, but react will get mad at you for that. Be sure that Slider.js's first s is capitalized.

The Slider is essentially a flexbox of multiple images. Here I have 4. Each image has 100% width and height so each takes up the entire screen. Every time you swap images (move to the right), every single image moves -100. Left is +100. If you go to the right most or left most image, you are able to go to nothing if you don't handle your movement well: the slider is not infinite. 

You can change the time it takes for the slider to slide by changing the transition property in slider.css.

---

In app.js, I basically have a react hook [x, setX] that modifies itself based on the location. For example, if the location is "Art" and our x does not correspond to Art's x value (-100 because it is the second page and home, the first page, has a value of 0), then we set x to be -100, moving the slider.

If you're super rusty, a react hook or useState is simply a value that will cause react to rerender itself. [x, setX]'s x is simply a variable. setX is a function that will change x's value. Whenever you use setX, any div that depends on x will be rerendered. There are issues with setting useState variables in useEffect, as you can possibly enter an infinite loop of rerendered the document, but react will throw you an error if that happens. I also honestly find it safer setting useState variables in useEffect if you have no other choice.

We then have a chain of if statements that determine the style of a certain div. This is done honestly just because there are so many options. Typically, if a div's style only has 2 choices, you can just use a ternary operator (the question mark: ?).

In the actual jsx part (the stuff that looks like html and css), everything is wrapped in a div called "loadedApp". Above is a div called "loadingApp". "loadingApp" will only show itself before all banner images are loaded. Once all banner images are loaded, we can see the actual "loadedApp". 

The banner follows CSS from the video below. I still don't fully understand but its honestly not that huge of a deal.

https://www.youtube.com/watch?v=0Zlmpbh1s6o&t=1471s

