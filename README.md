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

