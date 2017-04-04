# Course 3 (30.03.2017)
## Topics

### Using **unpkg** and **http-server** for quick prototyping
---

When we want to create an example fast or we simply want to try out a new node package, the easiest way is to use the service called [**unpkg**](https://unpkg.com).

This site allows us to load any **npm** package inside an HTML file simply by appending the package name to the URL address.

> We're going to use the [**momentjs**](http://momentjs.com/) package in our examples.

To load the latest version of a package:
```html
<script src="https://unpkg.com/moment"></script>
```

To load a certain version it is necessary we use the same syntax as in **npm**:
```html
<script src="https://unpkg.com/moment@2.12.0"></script>
```

To load a specific file inside the package (we need to know where the file is located) we can append the path along with the filename:
```html
<script src="https://unpkg.com/moment/locale/ro.js"></script>
```

In another script tag below we can use the package we just loaded.

> Before we continue, if you're not familiar with [HTTP/S ports](https://www.howtogeek.com/233383/why-was-80-chosen-as-the-default-http-port-and-443-as-the-default-https-port/) and [Web Servers](https://en.wikipedia.org/wiki/Web_server) you might want to read up on them first.

For most cases in which we want to demo a simple site or web app we need to run a simple web server to properly server our files and paths.

One of the simplest ways to achieve this is by using [**http-server**](https://www.npmjs.com/package/http-server), an npm package that starts a basic web server for serving our projects.

> This is one of the cases in which we want to install our package  globally, so that we may access no matter our current location in the terminal. More info [here](https://www.npmjs.com/package/http-server).

To install **http-server**, simply run this command in the terminal:
```bash
npm install -g http-server
```

After we install it, running the following command will start a web server on port **8080** with the root in the current folder:
```bash
http-server
```

Running the command with ```--help``` will list the available options for **http-server**

```bash
http-server --help

usage: http-server [path] [options]
options:
  -p           Port to use [8080]
  -a           Address to use [0.0.0.0]
  -d           Show directory listings [true]
  -i           Display autoIndex [true]
  -e --ext     Default file extension if none supplied [none]
  -s --silent  Suppress log messages from output
  --cors[=headers]   Enable CORS via the "Access-Control-Allow-Origin" header
                     Optionally provide CORS headers list separated by commas
  -o [path]    Open browser window after starting the server
  -c           Cache time (max-age) in seconds [3600], e.g. -c10 for 10 seconds.
               To disable caching, use -c-1.
  -U --utc     Use UTC time format in log messages.
  -P --proxy   Fallback proxy if the request cannot be resolved. e.g.: http://someurl.com
  -S --ssl     Enable https.
  -C --cert    Path to ssl cert file (default: cert.pem).
  -K --key     Path to ssl key file (default: key.pem).
  -r --robots  Respond to /robots.txt [User-agent: *\nDisallow: /]
  -h --help    Print this list and exit.
```

By default **http-server** will run on port **8080** and address **0.0.0.0**, this means that the web server will be available on every network interface on port 8080.

```bash
http-server

Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.0.103:8080
Hit CTRL-C to stop the server
```

**127.0.0.1** is the [loopback](https://en.wikipedia.org/wiki/Loopback) address. No mather the OS, **127.0.0.1** is internally mapped to **localhost** [hostname](https://en.wikipedia.org/wiki/Hostname)

> This mapping can be found in the [**hosts file**](https://en.wikipedia.org/wiki/Hosts_(file)). On Windows this file can be found at **C:\Windows\System32\drivers\etc\hosts** and on Linux/macOS at **/etc/hosts**. To edit this file you will **ADMINISTRATOR** privileges.

We can, of course, add our own mapping to the **hosts file**, preferably at the end of the file:

```conf
# ITSchool

127.0.0.1   itschool.dev
```

This will allow us to use the address ```itschool.dev:8080``` instead of ```127.0.0.1:8080```.

By setting another option when starting **http-server** we can start our web server on the default port (80):

```bash
http-server -p 80
```

> To use port 80 on Linux/macOS you need to run the command using sudo: ```sudo http-server -p 80```.

### What is Vue.js

The easiest definition of what **Vue.js** is can be found in the [**Get Started**](https://vuejs.org/v2/guide/) session on their website.

> Vue (pronounced /vjuː/, like **view**) is a **progressive framework** for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects.

As we've learned, using **unpkg** is an easy way to load a node package into our file/project, so for the purpose of experimenting with **Vue.js** we've created and [**index.html**](index.html) with the following contents:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Playing with Vue</title>
    </head>
    <body>
        <h1>Vue Playground</h1>
    
        <script src="https://unpkg.com/vue" type="text/javascript"></script>
    </body>
</html>
```

> If we start **http-server** (with ```-p 80```) inside this project we can access our newly created page at http://itschool.dev, provided we added this hostname into our hosts file.

Once open in our browser (I'm using Chrome), we can press **Ctrl+Shift+I** or **Right Click -> Inspect** to open up **Chrome Developer Tools**. In the **Console** tab we can check if Vue.js has been properly loaded by typing ```Vue``` and hitting ```Enter```. If everything went ok we should see:

```js
function Vue$3(options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}
```

### A simple Vue.js example

Now let's create a Vue app in our index.html:

```html
...
<h1>Vue Playground</h1>

<div id="app">
    {{ message.home }}
</div>

<script src="https://unpkg.com/vue" type="text/javascript"></script>
<script>
    window.app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });
</script>
...
```

We can see that two new elements have been added to our file:
* a div with the id **app**
* a script tag with some Vue syntax

```new Vue()``` simply creates a new instance of a vue application, which needs to be bound to a certain part of our web site. That's where the **id** for our div comes in use, Vue has a several properties/options for it's constructor which tells it where to be placed, what data should it use, among other things that we'll discover along the way.

```el: '#app'``` tells our Vue application to use the div with the id **app** as its context (the place where our application code will run).

```data: {...}``` is the object in which we store the information that we want to make available for the user. In this case, we expose the ```message``` variable and use [**"Mustache" syntax**](https://vuejs.org/v2/guide/syntax.html) to render the value for the user, ```{{ message }}```.

Everything that we expose in ```data``` is available in our application instance, so if we go back to our browser console and type ```app.message``` we can see the value stored inside our variable.

> This is possible because we saved a reference of our Vue instance into ```window.app```; ```window``` can be omitted as it is the global context of the browser and is implied.

We can now also demonstrate that any binding of a Vue variable into the [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) is reactive, so changing the value in one place will reflect the change in all other places. Type the following command into the browser console and you should also see the text on the page change:

```js
app.message = 'Changed Vue message'
```

We can also edit these data values by binding them to an HTML input inside **#app**:

```html
...
{{ message }}
<input v-model="message" type="text">
...
```

```v-model``` allows us to use two-way data binding, meaning the input will be populated with the value stored in ```message``` and it will also allow us to change that value by typing a new one into the input.

> To learn more about **v-model** checkout the [documentation for it](https://vuejs.org/v2/guide/forms.html#Basic-Usage).

For displaying a list of values Vue uses another custom attribute called [**v-for**](https://vuejs.org/v2/guide/list.html#v-for).

First we create our data structure inside the ```data``` property;

```js
...
data: {
    message: 'Hello Vue!',
    list: [
        {
            id: 1,
            text: 'Item #1'
        },
        {
            id: 2,
            text: 'Item #2'
        },
        {
            id: 3,
            text: 'Item #3'
        }
    ]
}
...
```

> Keep in mind that in order to iterate through a varible (use v-for), that variable must be an array ([]);

In the above case ```list``` is an array of objects, where each object has an **id** and a **text** property. To iterate through ```list``` we would write:

```html
...
<input v-model="message" type="text">

<ul>
    <li v-for="item in list">{{ item.text }}</li>
</ul>
...
```

```item in list``` means we are using the variable ```list``` from our app and as we go through each value in the array we temporarily assing it to the variable ```item```, which we then use to display the contents of the ```text``` property inside the ```<li>```.

> If you need to catch up on **JSON**, how to use it and how to navigate through it, check out [this article](https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/).

### Vue Components

As our application gets more complex we might feel the need to reuse some parts of code. The easiest way to do this is to make sure from the beginning that we create our code reusable, that we create **components**.

```html
...
<ul>
    <list-item :item="item" v-for="item in list" :key="item.id"></list-item>
</ul>
...
<script>
    Vue.component('list-item', {
        template: '<li>{{ item.text }}</li>',
        props: [
            'item'
        ]
    });
    
    window.app = new Vue({
...
```

> [**v-bind**](https://vuejs.org/v2/api/#v-bind) also has a shorthand version ```:```

We've created a new global component (available everywhere in our page and apps) and given it the name **list-item** (the first parameter of the ```Vue.component``` function). The second parameter is actually an object containing configurations and properties for that component. ```template``` tells the component what to render on the screen (the ```<li>``` we previously used, in our case), while ```props``` is an array that describes what attributes the component can have when it is being used, these attributes also link to data that is passed down from parent to child component.

The prop ```item``` will be used to pass data from our app to the ```list-item``` component: ```:item="item" v-for="item in list"```;

> In the browser console we'll see a warning if don't set a ```key``` binding for our component iteration, so we're using the ```item.id``` for this purpose. 

> To learn more about Vue Components please consult the official [documentation](https://vuejs.org/v2/guide/components.html).

Let's also add a state for our items, a ```selected``` property that has a boolean value (true/false):

```html
...
    list: [
        {
            id: 1,
            text: 'Item #1',
            selected: false
        },
        {
            id: 2,
            text: 'Item #2',
            selected: true
        },
        {
            id: 3,
            text: 'Item #3',
            selected: false
        }
    ]
...
```

Now let's use this property inside our custom component:

```html
...
template: '<li :class="{ active: item.selected }">{{ item.text }}</li>',
...
```

We've created a **class** binding and added the class **active** to be displayed if ```item.selected``` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).

So now, our resulting HTML inside the browser will be:

```html
<ul>
    <li>Item #1</li>
    <li class="active">Item #2</li>
    <li>Item #3</li>
</ul>
```

The last thing we'll do for this course will be to add the ability to change data from inside the component and see it reflected in our parent application. For this we'll be using [**method event handlers**](https://vuejs.org/v2/guide/events.html#Method-Event-Handlers), which are really functions that allow us to control our components and data:

```html
...
    props: [
        'item'
    ],
    methods: {
        changeState: function(item) {
            item.selected = !item.selected;
        }
    }
...
```

```methods``` is an object that allows us to specify functions that can modify our data and how they modify it. We've created a simple ```changeState``` function that takes the item as a paramter and changes its value to the opposite of the current value.

Now we need to make use of this newly created function by attaching it to a DOM element and event using [**v-on**](https://vuejs.org/v2/api/#v-on), which also has the shorthand notation ```@```:

```html
...
template: '<li @click="changeState(item)" :class="{ active: item.selected }">{{ item.text }}</li>',
...
```

What we're doing is binding the ```changeState``` function to the ```click``` event on our ```<li>``` inside the ```list-item``` component template, and passing the ```item``` object as a parameter. The changes to our list items are visible inside the browser if we click on them.

We can also observe that the component changes are passed to the original object inside our **app** by displaying its contents inside the browser console ```app.list```.
