# terrenceshi.com

Welp, figured I'd write some documentation while everything is still fresh on my mind. Let's do this!

If there's anything in general to work on, my phone's display of zoomed in pictures on the art page has the pictures stretched. However, I honestly have no idea how I could reproduce this issue on my computer.

# Table of contents
1. [Redeploying Frontend](#redeploying_frontend)

2. [Index.js](#index)

3. [App.js](#app)

    3.1. [Slider.js](#slider)

## 1. Redeploying Frontend <a name="redeploying_frontend"></a>

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

## 2. Index.js <a name="index"></a>

Nothing really special here. However, do note that a hashrouter is literally just better than a regular browser router. I had this issue where terrenceshi.com/art or any other link would not be able to load if you went to it straight. However, with a hashrouter, terrenceshi.com/#/art will load wherever. Do note that with a hashrouter, you do need a /# after your domain name in "homepage" under package.json.

Additionally, we also use a component called ScrollToTop here so that every time you use a react link, you scroll to the top. The code in that component is copy pasted. 

## 3. App.js <a name="app"></a>

Our first huge bulky boy. App.js handles the banner, footer, and routes. 

First there is a mui theme defined which gives a dark mode color palette and sets it so that mui buttons are not in all caps.

You'll see GetWindowDimensions in like every page. It simply gives us the initial windowMode the app starts in. WindowMode starts in 0 (biggest) then goes down to mobile sizing for the largest number. I did not standardize windowMode in all the pages, but here, 3 is mobile. 

You'll also see useInView for every page. This essentially tells us if a certain div is in view. Ref gets sticked onto a div as a reference so you know which div to look out for. inView is a boolean that tells us if its in view. We use this here for the footer.

We also have a function handleResize() to be used in useEffect which will change the windowMode when the window is resized if necessary. If you really are super rusty, useEffect is the function react will run after everything gets rendered or rerendered. 

App also uses "useLocation()". useLocation() will tell us which page in the app we're in. I use "useLocation" to change the banner image whenever we go to a different page. I technically should have handled this in the slider component but whatever. The only downside of doing it this way is that the banner will be changed slightly later than it should be. 

---

### 3.1. Slider.js <a name="slider"></a>

Do note that on github, slider.js's first s is lowercased, but react will get mad at you for that. Be sure that Slider.js's first s is capitalized.

The Slider is essentially a flexbox of multiple images. Here I have 4. Each image has 100% width and height so each takes up the entire screen. Every time you swap images (move to the right), every single image moves -100. Left is +100. If you go to the right most or left most image, you are able to go to nothing if you don't handle your movement well: the slider is not infinite. 

You can change the time it takes for the slider to slide by changing the transition property in slider.css.

---

In app.js, I basically have a react hook [x, setX] that modifies itself based on the location. For example, if the location is "Art" and our x does not correspond to Art's x value (-100 because it is the second page and home, the first page, has a value of 0), then we set x to be -100, moving the slider.

If you're super rusty, a react hook or useState is simply a value that will cause react to rerender itself. [x, setX]'s x is simply a variable. setX is a function that will change x's value. Whenever you use setX, any div that depends on x will be rerendered. There are issues with setting useState variables in useEffect, as you can possibly enter an infinite loop of rerendered the document, but react will throw you an error if that happens. I also honestly find it safer setting useState variables in useEffect if you have no other choice.

We then have a chain of if statements that determine the style of a certain div. This is done honestly just because there are so many options. Typically, if a div's style only has 2 choices, you can just use a ternary operator (the question mark: ?).

In the actual jsx part (the stuff that looks like html and css), everything is wrapped in a div called "loadedApp". Above is a div called "loadingApp". "loadingApp" will only show itself before all banner images are loaded (it is some mui skeletons resembling the "hi i'm terrence" text). Once all banner images are loaded, we can see the actual "loadedApp". 

The banner follows CSS from the video below. I still don't fully understand but its honestly not that huge of a deal.

https://www.youtube.com/watch?v=0Zlmpbh1s6o&t=1471s

---

### Navbar.js

Copy pasted component from before with improvements.

A mui app bar is more or less just a shape to hold a bunch of buttons that take you to your links. This design has a burger icon with a menu for when you're mobile and a bunch of buttons otherwise. 

It takes an array for your pages and generates menu items or mui buttons (depending on mobile). This is why there is actually a "/Home" page and not just "/". 

The improvement from before is that the mui button has "component = link" and handles where to go. Thus, no lag on clicking these buttons and swapping pages.

---

Standard react routes. Note that it includes /CS/Compression and /CS/Authorship in addition to the nav pages.

Then there's the footer. The footer contains

```
href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
```

This lets us use classNames for our icons. We also have some css copy pasted which does in our animation.

## Home.js

Oh god, home.js gave me so many headaches.

Start with windowsizing stuff. We also have some css styling variables that update based on windowMode. We also made bioBox's width a useState variable because we were going crazy, but that is not necessary. 

We have one useInView() thingie (even though we would like two) because some bugs pop up if we do so (the elements go into some crazy trance where they can't tell if they're view or not, forcing you to have to scroll past the element for the animation to play, which is unacceptable for mobile, as the skills row becomes a column and is too long). Threshold value changes based on if you're mobile.

We also have a useState for whether profile picture is loaded. If not, we have some mui skeleton show up. I expect this will like never happen because profile picture is not a big image.

We use similar CSS as in app's banner to ensure that the home page component is full width and height of the window. Then, there's a flexbox for my bio and profile picture; then another flexbox for the circle bars. 

---

### Circlebar.js

Circlebar.js encompasses the whole paper card with the text and everything. We downloaded the circlebar from 'react-circular-progressbar' because custom circlebars had visual imperfections. We also use inView to make the circlebar's bar go up percentages. 

---

Home.js's window sizing basically has some preset widths that work for various window sizes (obviously these widths are never bigger than the window size). Once you go mobile, the flexboxes display items in a column way instead of a row way. Note that setting bioBox's  (div containing all bio stuff) width stuff to maxWidth instead of width literally fixes a crazy bug where mobile view looks terrible (bioBox for some reason stays at ~600 pixels even in mobile view's 300 pixel layout).

## Art.js

Art.js became way more complicated than it had to be because of loading stuff. If I had to do this again, maybe I'd try to do it in a smart way where react will automate stuff for me, because now, updating images will be hard. I expect I will have to shift every image down whenever I add a new one, unless I have three new entries. 

Start with some window dimension stuff.

The loading is kind of scuffed because I honestly am not fully sure of the best ways to pass data between components. We have a bunch of loading boolean variables and functions to set them as true. They probably could have been useStates but I was scared of react rerendering too much. 

We have 12 art images on this page. Each art image gets a loading boolean variable and sets it to true with the function. Once all 12 loading variables are true, we set useState variable allLoaded as true. allLoaded stops setting the last 2 rows of pictures's display to none and also sets it so that the first 2 rows show images instead of mui skeletons. 

We have 4 useInView sets for each row (3 images per row). In addition, we also have a "first" useState variable for each useInView set (eg: first1, firs2, first3, first4). Basically, this sets it so that image rows cannot reappear after appearing when scrolling up, as that looks bad. 

Of course, there is a thing in the useInView library that lets you set it so that the appear stuff only happens once, however, doing it this way lets me reset the first variables if you scroll all the way to the top (handled in useEffect). You will see that I use this system for basically every page.

Then for JSX, you basically just have a bunch of rows. WindowMode determines some margin stuff. More stuff is handled in ArtBox.js.

---

### Adding New Images

Man, adding new images will be a huge hassle.

You can either add a new row (I still have some unused older art) or remove your least favorite image in this collection and replace it with the new image.

Option 2 is probably more likely, as 4 rows feels good. If going down this route, you'll have to shift every image down one, changing what image belongs to what row. Additionally, for the image you replaced, you can probably just replace title, description, and image array with new ones and move it to the top. You will have to copy paste some ternary operation with MUI skeleton if the old image was in the last two rows (super likely) so that the image can be a mui skeleton before everything gets loaded.

Option 1, you'll have to create a new useInView (one for the row), a new "first" (one for the row), and load variables for each image. Most likely what's going to happen is that you want your one new image at the top and your two unused art assets around the back. You will have to shift the order of everything again and can add the new row to the end.

---

### ArtBox.js

Artbox.js handles its own loading, as when you click on the image, only then are the alternative images in the "slider" / "carousel" are loaded. 

The image array maps into a bunch of image divs (every image div except the currently selected one has display: none). Every time one of these images loads, numLoaded is incremented. Once numLoaded is the same as the length of the image array, useState variable imagesLoaded is set to true. 

There are some open, setOpen, onOpen functions copy pasted from mui's dialog example. The functions only really seem to play with the variables and the variable seems to get plugged into the dialog component for mui to work with. 

You have leftArrow and rightArrow functions that are called when the left and right arrow buttons are clicked. These just update which image gets displayed by updating useState variable "current". 

Then we have some style variables that get updated by windowMode. As the window gets smaller, the image description disappears and the image title + arrow buttons get displayed below the image (changing stack direction). 

The JSX starts with an image, which is the image you see in Art.js's page. Onload, the image sets the load variable from Art.js as true using a given function. 

Everything in dialog only shows when you click on the image. You have the mapped images described earlier next to either loading div or loaded div. Loading div is a bunch of mui skeletons while loaded div is the actual stuff. While it looks like the description and everything is loaded, the component is actually waiting for all other images in the carousel to load. We are guaranteed that the first image is loaded from Art.js's work. 

There are a lot of stacks here because stacks are basically flexboxes and are easier to control in terms of attributes such as direction and justifyContent since all of those aren't put into style (more options). There are also some iconButtons, as that is how you have icons that are buttons in MUI. 

---

## CS.js

CS.js was okay I guess. Very standard page. 

Start with regular windowResizing and useInView stuff. I had the useInView stuff reverse numbered as if I add new articles, the newer stuff would be higher numbered and on top of the other articles. 

We also set text values and style values based on windowMode (ie: as the window gets smaller, we go from detailed descriptions to 1-2 sentences).

In terms of JSX, we just have our articles piled on one another. Margins change based on windowMode. As window size gets smaller, the article image goes away.

---

### Article.js

Honestly, I wrote Article.js with a lot of inexperience. I didn't know you could literally, during jsx, just add javascript to render what you wanted based off a boolean. IE:

```
{boolean ? <div to render if true> : <div to render if false>}
```

We have a few functions that return components based off of whether our link was external or not (ie: to books2nooks.ml or to another page on the website), as you can't really use a react link for an external site. We had to do this for the "read more" part and the image, as both link you to the article. 

We also have style variables that get updated based off of windowMode. For some reason, I initialize some of these variables outside of the main function. It doesn't really matter, but I don't know where is best. 

Then for JSX, we just have a mui paper with a flexbox with the title on top and "read more" on bottom.

---

## Authorship.js and Compression.js

Both these pages got more complicated than I expected them to, but that's mainly just because of standard stuff.

Both just have window sizing, useInView, and css stuff before JSX.

Authorship JSX is just text and images on top of each other. There are some flex boxes with multiple images that go from row to column when mobile. Margins and stuff change with windowMode.

Compression JSX has more flexbox stuff (MUI stack), as we have like grids with 3x2 images (6 total) and 5x1 images (5 total). Each image is also in a stack with subtitles and such. This was all done, as our original images were not dark mode friendly. These flexboxes also become column when mobile.

## Music.js

Music.js probably is the most complicated page. I did base my code off of a youtube video. I don't remember which one, but that's fine, as I'm sure all react music player images are similar enough, and I actually understand what these files do.

Start with standard window resizing stuff.

We have an array for the actual song sources and another for their names. That probably wasn't the smartest way to do it (maybe an array of dictionaries could be better), but that's fine.

We have a bunch of useState variables for isPlaying, currentSong, songName, songDuration, currentTime, maxDuration, volume, and mute. We use a react useRef() function to refer to the audio element. 

Under useEffect(), we do a few things.

* Set audio element to mute if mute variable is true.

* Get audio element's max duration of song (simply called audioElem.current.duration). If the value isn't NaN (there is no audio), convert the duration to 0:00 format and setMaxDuration to this value. This is the length of the song that appears to the right of the timeline. 

* If isPlaying variable is true, play audio. Otherwise, pause it. (this code is definitely from YouTube so I guess playing with useState variables in useEffect is perfectly fine).

* Perform first variable stuff for useInView purposes.

We then define a few functions that run the music player:

* OnPlaying: Get the current song's duration and setCurrentTime to the timestamp calculated after converting song duration to 0:00 format. I believe that the difference between songDuration and currentTime is that songDuration is the variable that can be altered if the user clicks on different parts of the timeline, while currentTime is simply the time that shows on the player (that appears on the left of the timeline).

* onEnd: set "playing" to false once we're done with the song.

* There is then a function for every song that goes through whenever you play each song. Each one sets the song name and song source to the corresponding track, sets currentTime to 0, and sets playing to true. If I had to do it again, I'd probably map the song array, give each one an index, then this index gets passed into the function, thus making it so we only have to deal with one function here. 

* click: sets playing to true. I'm sure this function goes through when you press the play button.

* back and forward functions: functions for when you press the skip button. We first get the index of the current song playing, then set the index += 1 or -= 1. There are ternary operators that handle for when you go backwards and are at index 0.

Then just some useInView stuff.

First, we have the player element in JSX. Doesn't matter where it is, as its position is fixed.

Then there is the audio element. This literally is all the audio. 

We then have a stack which contains every track.

---

### Adding a new track

Definitely more work than it should be.

Add your new track and track name to the corresponding arrays at the top.

Create a new useInView and first variable for your track element. 

Create a new click function for your song. 

Copy paste a track element to the bottom of the stack in the JSX section.

---

### Player.js

The controller of the music page.

Has a few controller functions:

* handleTimeChange: changes where you are in the song if the user moves the slider in the timeline

* handleVolumeChange: changes the volume if the user moves the slider in the volume

* handleMuteChange: turns on / off mute

Some CSS stuff with windowMode.

JSX is a bunch of stacks around, as really everything here is in a flexbox, with the exception of like the song title.

Probably could've use mui iconButtons instead of just the icons I used but whatever.

A few icons are determined by ternary operators (play or pause icon depending on whether you're playing or mute icon dpeending on whether you're muted).

With the window becoming smaller, the sliders become smaller and eventually with mobile, we ditch the volume slider, as honetsly that's not a huge deal (spotify does the same).

---

### Track.js

Honestly fairly simple.

We have a flexbox of icons and text. 

We have one CSS thing on hover that really makes it nice. Maybe I could try adding transition: 0.5s or something to make it smoother.

---

Annnnnnd that should be everything. This website was a lot of work, but I came out of it learning so much about React. While I understood the importance of planning out my design, I think I should plan out the structure of my react app better by having more item maps off of arrays and such. Part of the game is actually making it easier to update your code when you have new entries.

Anyways, it's 3am and I finally finished the last part of this website for now. It's 1/10/23 and I've spent almost a month working on this. Here's to making more efficient and beautiful websites in the future!