# Course 1 (16.03.2017)
## Topics

### Technologies and tools used
---
1. HTML5 ([Guide](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5))
2. CSS3 / LESS ([CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3), [LESS](http://lesscss.org/))
3. JavaScript ES6+ ([ES6](http://es6-features.org))
4. NodeJS ([Tutorials](https://nodeschool.io))
5. Git ([Guide](http://rogerdudler.github.io/git-guide/))
7. Docker ([Guide](https://docs.docker.com/engine/userguide/))
8. Visual Studio Code ([Why?](https://code.visualstudio.com/docs/editor/whyvscode))


### Setting up the work environment
---
<table>
    <thead>
        <tr>
            <th></th>
            <th>Windows</th>
            <th>Linux</th>
            <th>macOS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Git</th>
            <td>
                <ol>
                    <li>Download <a href="https://git-scm.com/">Git</a></li>
                    <li>On the <strong>Select Components</strong> section of the installation choose at least the last 3 options</li>
                    <li>On the next window select <strong>Use Git from the Windows Command Prompt</strong></li>
                    <li>Then select <strong>Checkout as-is, commit Unix-style line endings</strong></li>
                    <li><strong>Use MinTTY (the default terminal of MSYS2)</strong> will ensure we can use bash in Windows</li>
                    <li>On the <strong>Configuring extra options</strong> screen check all options (for <strong>Git Credential Manager</strong> you must have .NET 4.5.1 or later
installed)</li>
                    <li>When the installation is finished check <strong>Launch Git Bash</strong> to verify that everything was installed fine</li>
                </ol>
            </td>
            <td>
                <p>Install Git from your distro package manager (aptitude, yum, pacman, etc.)</p>
                <p>Ex: For <strong>Ubuntu</strong> run:</p>
                <code>sudo apt-get install git</code>
            </td>
            <td>
                <p>A version of Git is already installed in your OS</p>
            </td>
        </tr>
        <tr>
            <th>NodeJS</th>
            <td>
                <ol>
                    <li>Go to <a href="https://nodejs.org">nodejs.org</a> and download the <strong>latest current version (7.7.X+)</strong></li>
                    <li>Leave the default location for the installation folder</li>
                    <li>On the <strong>Custom Setup</strong> screen make sure everything is added for install</li>
                    <li>Wait for the installation to finish and open up a new Git Bash window</li>
                    <li>In the Git Bash type <code>node -v && npm -v</code>. It should print out your versions of Node and npm (Node package manager)</li>
                </ol>
            </td>
            <td>
                <p>Install NodeJS through your distro package manager</p>
                <p>Ex: For <strong>Ubuntu</strong> open a terminal an run the following commands:</p>
                <code>curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -</code><br/>
                <code>sudo apt-get install -y nodejs</code>
            </td>
            <td>
                <ol>
                    <li>Go to <a href="https://nodejs.org">nodejs.org</a> and download the <strong>latest current version (7.7.X+)</strong></li>
                    <li>Wait for the installation to finish and open up a new terminal</li>
                    <li>In the terminal type <code>node -v && npm -v</code>. It should print out your versions of Node and npm (Node package manager)</li>
                </ol>
            </td>
        </tr>
        <tr>
            <th>Docker</th>
            <td>
                <p>For Windows 10 Pro:</p>
                <ol>
                    <li>Make sure you have <a href="http://www.memuplay.com/blog/index.php/2016/01/27/enable-hardware-virtualization/">hardware virtualization enabled from BIOS</a></li>
                    <li>Press the <strong>Get Docker</strong> download button from <a href="https://store.docker.com/editions/community/docker-ce-desktop-windows?tab=description">Docker CE</a></li>
                    <li>At first start Docker will ask you to enable Hyper-V (a built in virtual machine on Windows 10), to complete this step you must restart</li>
                    <li>After starting Docker <strong>right click</strong> on the whale icon in the <strong>System Tray</strong> and click <strong>Settings</strong></li>
                    <li>Go to <strong>Shared Drives</strong> and check <strong>C</strong> then click Apply, if it asks for a password type in your Windows login password</li>
                    <li>Go to <strong>Advanced</strong> and drag <strong>CPU</strong> to <strong>1</strong> and <strong>Memory</strong> to <strong>1024 MB</strong>, press Apply</li>
                </ol>
                <p>For Windows 8.1 and older:</p>
                <ol>
                    <li>Go to <a href="https://www.docker.com/products/docker-toolbox">Docker Toolbox</a> and download it</li>
                    <li>Follow <a href="https://docs.docker.com/toolbox/toolbox_install_windows/">these</a> steps to install and verify Docker Toolbox</li>
                </ol>
                <p>If your machine does not have a x64 CPU you will not be able to run Docker.</p>
            </td>
            <td>
                <p>You can find installation instructions for most popular Linux distros <a href="https://www.docker.com/community-edition">here</a> or in the <strong>Get Docker</strong> dropdown on the site</p>
                <p>Ex: Installing <strong><a href="https://store.docker.com/editions/community/docker-ce-server-ubuntu">Docker for Ubuntu</a></strong></p>
            </td>
            <td>
                <p>You can easily download <strong>Docker for Mac</strong> from <a href="https://store.docker.com/editions/community/docker-ce-desktop-mac?tab=description">Docker CE</a></p>
                <p>For version of Mac lower than <strong>Yosemite 10.10.3</strong> use <a href="https://www.docker.com/products/docker-toolbox">Docker Toolbox</a></p>
            </td>
        </tr>
        <tr>
            <th>Visual Studio Code</th>
            <td colspan="3" align="center">
                <p>Download and install from https://code.visualstudio.com/</p>
            </td>
        </tr>
    </tbody>
</table>

### Recommended Visual Studio Code Extensions
---

* [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
* [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
* [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
* [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
* [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)
* [Document This](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)
* [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [File Peek](https://marketplace.visualstudio.com/items?itemName=abierbaum.vscode-file-peek)
* [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
* [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
* [Image Preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
* [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)
* [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [Simple Icon Theme](https://marketplace.visualstudio.com/items?itemName=LaurentTreguier.vscode-simple-icons)
* [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
* [Theme - TinaciousDesign](https://marketplace.visualstudio.com/items?itemName=tinaciousdesign.theme-tinaciousdesign)
* [Vue Components](https://marketplace.visualstudio.com/items?itemName=seanwash.vue)
