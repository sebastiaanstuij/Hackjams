# Getting started with Angular 2

[HackJam Angular 2](hackjam.hackages.io)


The goal of this third HackJam will  be to learn more about:
- Routing, Navigation
- Redux
- If you make it far you will learn ngrx


You can find the [repo on Github](https://github.com/hackages/hackjam.angular.git)

Clone it: `git clone https://github.com/hackages/hackjam.angular.git`

`cd routing-redux-ngrx`and run `npm start`

!oops

Just focus on the `app.template.html` and learn more about property binding!

This application doesn't work :(

## Important: Fix the app before implementing new feature

## TODO: Features to implement in part 3
- Add routing 
    The goal is to turn the filter in routing. When you click on Category, you should navigate 
    that url. For example: when you click on `web`, your url should match `localhost:port/web`
    and this will also filter the books.

    NB: you can find more information here: https://angular.io/docs/ts/latest/guide/router.html  
    
    Warning: If you have any issues with `Observable` then you should definitely call us...

    
- Add Redux to manage the state of the application
    - You will need 2 reducers:
        - book reducer to manage the books
        - category reducer to manager the categories
        - You will need to define you own action but technically you will need one action per reducer... This is just a hint!! 

- Introducing RXJS/NGRX
    - If you reach this point, we want to hear from you



