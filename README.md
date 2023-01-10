Welp, figured I'd write some documentation while everything is still fresh on my mind. Let's do this!

## Redeploying Frontend

### npm run deploy

npm run deploy is your god. Note the importance of "deploy" under "scripts" in package.json. 

### "gh-pages -b gh3 -d build"

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

Speaking of the slider,